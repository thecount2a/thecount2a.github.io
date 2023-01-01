const datebuf = 60*60*24*5;
const datePartsRegex = /[\-\/\Wa-zA-Z]/;

const importFiles = async function(fileList) {
	const csvs = [];
	for (let i = 0, numFiles = fileList.length; i < numFiles; i++) {
		const file = fileList[i];
		const promise = new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (e) => { resolve(e.target.result);};
			reader.onerror = (e) => { reject(e); };
			reader.readAsText(file);
		});
		const fileContents = await promise;

		let csv = null;
		let fileName = file.name;

		if (file.name.toLowerCase().includes("ofx") || file.name.toLowerCase().includes("qfx"))
		{
			let csvobj = await window.generateTableFromOfx(fileContents, false);
			const recordlist = [];
			csv = [];
			let acctnum = null;
			for (let r in csvobj.records)
			{
				if (acctnum === null || csvobj.records[r][0] != acctnum)
				{
					csv.unshift(csvobj.keys);
					if (acctnum !== null)
					{
						csvs.push({csv, fileName});
						csv = [];
					}
				}
				csv.push(csvobj.records[r]);
				acctnum = csvobj.records[r][0];
			}
		}
		else
		{
			var result = Papa.parse(fileContents);
			for (let r = 1; r < result.data.length; r++)
			{
				if (result.data[r].length < result.data[0].length && result.data[r].length > 1)
				{
					const numColsToFill = result.data[0].length - result.data[r].length;
					for (let j = 0; j < numColsToFill; j++)
					{
						result.data[r].push("");
					}
				}
			}
			csv = result.data;
		}
		csvs.push({csv, fileName});
	}
	return csvs;
};

const scanCsvColumns = function(postings, existing, csv) {
	let amountColumns = [];
	const dateColumns = [];
	const descriptionColumns = [];
	// Scan all columns for most likely types, based on regexes
	for (let i = 0; i < csv[0].length; i++)
	{
		const colTypes = scanColumn(csv, i);
		if (colTypes.length > 0)
		{
			for (let j = 0; j < colTypes.length; j++)
			{
				if (colTypes[j].indexOf("date-") >= 0)
				{
					dateColumns.push({value: dateColumns.length, dateType: colTypes[j].substring(5), label: csv[0][i] + " ["+i.toString()+"]", index: i});
				}
				else if (colTypes[j] == "amount")
				{
					amountColumns.push({value: amountColumns.length, label: csv[0][i] + " ["+i.toString()+"]", indexes: [i]});
				}
				else if (colTypes[j] == "description")
				{
					descriptionColumns.push({value: descriptionColumns.length, label: csv[0][i] + " ["+i.toString()+"]", index: i});
				}
			}
		}
	}
	// Also check for weird credit/debit column pairings
	const newAmountCols = [];
	for (let i = 0; i < amountColumns.length; i++)
	{
		for (let j = i + 1; j < amountColumns.length; j++)
		{
			const result = scanColumnForCreditDebit(csv, amountColumns[i].indexes[0], amountColumns[j].indexes[0]);
			if (result)
			{
				newAmountCols.push({value: amountColumns.length + newAmountCols.length, label: csv[0][amountColumns[i].indexes[0]] + "," + csv[0][amountColumns[j].indexes[0]] + " ["+amountColumns[i].indexes[0].toString()+", "+amountColumns[j].indexes[0].toString()+"] - Credit/Debit pair", indexes: [amountColumns[i].indexes[0], amountColumns[j].indexes[0]]});
			}
		}
	}
	amountColumns = amountColumns.concat(newAmountCols);
	return {amountColumns, dateColumns, descriptionColumns};
};


const resolveDate = function(row, descriptor, thisDateYear) {
	const dateParts = row[descriptor.index].split(datePartsRegex);
	const first = Number(dateParts[0]);
	const second = Number(dateParts[1]);
	const third = Number(dateParts[2]);
	let dateObj = null;
	if (descriptor.dateType == "YMD")
	{
		dateObj = new Date(getReasonableYear(first, thisDateYear), second - 1, third);
	}
	else if (descriptor.dateType == "MDY")
	{
		dateObj = new Date(getReasonableYear(third, thisDateYear), first - 1, second);
	}
	else if (descriptor.dateType == "DMY")
	{
		dateObj = new Date(getReasonableYear(third, thisDateYear), second - 1, first);
	}
	return dateObj;
};

const resolveAmount = function(row, descriptor) {
	const resolved = [];
	if (descriptor.indexes.length == 2)
	{
		if (row[descriptor.indexes[0]])
		{
			if (!row[descriptor.indexes[0]])
			{
				return [];
			}
			const amt = parseFloat(row[descriptor.indexes[0]].replace(/[^0-9.\-]/g, ''));
			resolved.push(amt);
			resolved.push(amt);
			resolved.push(-amt);
			resolved.push(-amt);
		}
		else if (row[descriptor.indexes[1]])
		{
			if (!row[descriptor.indexes[1]])
			{
				return [];
			}
			const amt = -parseFloat(row[descriptor.indexes[1]].replace(/[^0-9.\-]/g, ''));
			resolved.push(amt);
			resolved.push(-amt);
			resolved.push(amt);
			resolved.push(-amt);
		}
	}
	else
	{
		if (!row[descriptor.indexes[0]])
		{
			return [];
		}
		const amt = parseFloat(row[descriptor.indexes[0]].replace(/[^0-9.\-]/g, ''));
		resolved.push(amt);
		resolved.push(-amt);
	}
	return resolved;
};

const analyzeRowToMatchAmountDate = function(postings, existing, csv, uniqueAccounts, scan, rowNum, matches, accountMatches, thisDateYear) {
	for (let i in uniqueAccounts)
	{
		let accountMatch = false;

		for (let j in scan.amountColumns)
		{
			for (let k in scan.dateColumns)
			{
				const resolvedDate = resolveDate(csv[rowNum], scan.dateColumns[k], thisDateYear);
				const timeperiods = Math.floor(resolvedDate.getTime() / 1000 / datebuf);
				const resolvedAmounts = resolveAmount(csv[rowNum], scan.amountColumns[j]);
				for (let l in resolvedAmounts)
				{
					const matchesKey = i.toString()+"-"+j.toString()+"-"+k.toString()+"-"+l.toString();
					const lookupKey = genTransactionLookupKey(i, resolvedAmounts[l], timeperiods);
					if (lookupKey in existing)
					{
						matches[matchesKey] = (matches[matchesKey] + 1) || 1;
						accountMatch = true;
					}
				}
			}
		}
		if (accountMatch)
		{
			accountMatches[i.toString()] = (accountMatches[i.toString()] + 1) || 1;
		}
	}
};

const doAutoClassifyTxn = function(row, autoClassify, accountIdToName = null)
{
	let anythingMatched = false;
	for (let rule in autoClassify.id)
	{
		if (autoClassify.description_match[rule] || autoClassify.amount_match[rule])
		{
			let match = true;
			if (autoClassify.description_match[rule] && row.description.toLowerCase().indexOf(autoClassify.description_match[rule].toLowerCase()) < 0 && autoClassify.description_match[rule].toLowerCase().indexOf(row.description.toLowerCase()) < 0)
			{
				match = false;
			}
			if (autoClassify.primary_account[rule] && autoClassify.primary_account[rule] != row.account)
			{
				match = false;
			}
			if (autoClassify.amount_match[rule] && Math.abs(autoClassify.amount_match[rule] - row.amount) > 0.0000001)
			{
				match = false;
			}
			if (match)
			{
				row.category = autoClassify.category_account[rule];
				if (accountIdToName)
				{
					row.categoryAccountName = accountIdToName[autoClassify.category_account[rule]];
				}
				if (autoClassify.comment[rule])
				{
					row.comment = autoClassify.comment[rule];
				}
				anythingMatched = true;
				break;
			}
		}
	}
	return anythingMatched;
};

const doAutoClassify = function(output, autoClassify, accountIdToName)
{
	let unknown_expense_account = null;
	let unknown_income_account = null;

	for (let a in accountIdToName)
	{
		if (accountIdToName[a].toLowerCase().indexOf("expenses:") == 0 && accountIdToName[a].toLowerCase().indexOf("unknown") >= 0)
		{
			unknown_expense_account = parseInt(a);
		}
		else if (accountIdToName[a].toLowerCase().indexOf("income:") == 0 && accountIdToName[a].toLowerCase().indexOf("unknown") >= 0)
		{
			unknown_income_account = parseInt(a);
		}
	}

	if (unknown_expense_account !== null)
	{
		for (let t in output)
		{
			const anythingMatched = doAutoClassifyTxn(output[t], autoClassify, accountIdToName);
			if (!anythingMatched)
			{
				output[t].category = unknown_expense_account;
				output[t].categoryAccountName = accountIdToName[unknown_expense_account];
				if (output[t].amount > -0.00000001 && unknown_income_account !== null)
				{
					output[t].category = unknown_income_account;
					output[t].categoryAccountName = accountIdToName[unknown_income_account];
				}
			}
		}
	}
};

const matchPostings = function(postings, lookups, dataSet, thisDateYear, accountIdToName) {
	const csv = dataSet.csv;
	const newTransactions = [];
	for (var i = 1; i < csv.length; i++)
	{
		if (csv[i].length >= csv[0].length)
		{
			const resolvedDate = resolveDate(csv[i], dataSet.dateColumns[dataSet.dateColumn], thisDateYear);
			const timeperiods = Math.floor(resolvedDate.getTime() / 1000 / datebuf);
			const resolvedAmounts = resolveAmount(csv[i], dataSet.amountColumns[dataSet.amountColumn]);
			const refKey = genTransactionLookupKey(dataSet.account, resolvedAmounts[dataSet.amountType], timeperiods);
			const refKeyMinus = genTransactionLookupKey(dataSet.account, resolvedAmounts[dataSet.amountType], timeperiods-1);
			const refKeyPlus = genTransactionLookupKey(dataSet.account, resolvedAmounts[dataSet.amountType], timeperiods+1);
			if (lookups.existing[refKey])
			{
				lookups.existing[refKey] = lookups.existing[refKey] - 1;
			}
			else if (lookups.existing[refKeyMinus])
			{
				console.log("Did minus fuzzy date match");
				lookups.existing[refKeyMinus] = lookups.existing[refKeyMinus] - 1;
			}
			else if (lookups.existing[refKeyPlus])
			{
				console.log("Did plus fuzzy date match");
				lookups.existing[refKeyPlus] = lookups.existing[refKeyPlus] - 1;
			}
			else
			{
				const formattedDate = new Date(resolvedDate.getTime() - (resolvedDate.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
				newTransactions.push({account: dataSet.account, accountName: accountIdToName[dataSet.account], amount: resolvedAmounts[dataSet.amountType], date: formattedDate, description: csv[i][dataSet.descriptionColumns[dataSet.descriptionColumn].index], category: null, categoryAccountName: null, comment: ""});
			}
		}
	}
	return newTransactions;
};

const analyzeDataToMatchColumns = function(postings, lookups, csv, scan, thisDateYear) {
	const bestMatch = {account: null, accountMatchRatio: null, amountColumn: null, dateColumn: null, descriptionColumn: null};
	const matches = {};
	const accountMatches = {};
	const uniqueAccounts = {};
	const existing = lookups.existing;
	const ref = lookups.ref;
	for (let i in postings.account)
	{
		uniqueAccounts[postings.account[i].toString()] = 1;
	}
	for (var i = 1; i < csv.length; i++)
	{
		if (csv[i].length >= csv[0].length)
		{
			analyzeRowToMatchAmountDate(postings, existing, csv, uniqueAccounts, scan, i, matches, accountMatches, thisDateYear);
		}
	}
	const sortable = [];
	const zeroPad = (num, places) => String(num).padStart(places, '0')
	for (let i in accountMatches)
	{
		sortable.push(zeroPad(accountMatches[i], 6) + '-' + i);
	}
	sortable.sort();
	if (sortable.length > 0)
	{
		const ratio = parseInt(sortable[sortable.length-1].split('-')[0]) / (csv.length-1);
		bestMatch.account = parseInt(sortable[sortable.length-1].split('-')[1])
		bestMatch.accountMatchRatio = ratio;

		let bestMatchTally = null;
		let bestMatchParts = [null, null, null, null];
		for (let i in matches)
		{
			const parts = i.split('-');
			if (parseInt(parts[0]) == bestMatch.account && ((bestMatchTally === null) || (matches[i] > bestMatchTally)))
			{
				bestMatchTally = matches[i];
				bestMatchParts = parts;
			}
		}
		bestMatch.amountColumn = parseInt(bestMatchParts[1]);
		bestMatch.dateColumn = parseInt(bestMatchParts[2]);
		bestMatch.amountType = parseInt(bestMatchParts[3]);

		/* Match description column */
		descriptionVotes = {};
		for (var i = 1; i < csv.length; i++)
		{
			if (csv[i].length >= csv[0].length)
			{
				const resolvedDate = resolveDate(csv[i], scan.dateColumns[bestMatch.dateColumn], thisDateYear);
				const timeperiods = Math.floor(resolvedDate.getTime() / 1000 / datebuf);
				const resolvedAmounts = resolveAmount(csv[i], scan.amountColumns[bestMatch.amountColumn]);
				const refKey = genTransactionLookupKey(bestMatch.account, resolvedAmounts[bestMatch.amountType], timeperiods);
				if (ref[refKey])
				{
					for (var d in scan.descriptionColumns)
					{
						if (postings.transaction_description[ref[refKey]].toLowerCase().indexOf(csv[i][scan.descriptionColumns[d].index].toLowerCase()) >= 0 || csv[i][scan.descriptionColumns[d].index].toLowerCase().indexOf(postings.transaction_description[ref[refKey]].toLowerCase()) >= 0)
						{
							descriptionVotes[d] = (descriptionVotes[d] + 1) || 1;
						}
					}
				}
			}
		}
		let bestDescriptionScore = null;
		let bestDescription = null;
		for (let v in descriptionVotes)
		{
			if (bestDescription === null || descriptionVotes[v] > bestDescriptionScore)
			{
				bestDescriptionScore = descriptionVotes[v];
				bestDescription = v;
			}
		}
		if (bestDescription !== null)
		{
			bestMatch.descriptionColumn = parseInt(bestDescription);
		}
	}

	return bestMatch;
};

const scanColumnForCreditDebit = function(csv, col1, col2) {
	let nonBlank = 0;
	for (let i = 1; i < csv.length; i++)
	{
		// If both columns are non-blank, this can't be credit/debit
		if (csv[i][col1] && csv[i][col2])
		{
			return false;
		}
		else if (csv[i][col1])
		{
			nonBlank++;
		}
		else if (csv[i][col2])
		{
			nonBlank++;
		}
	}
	// If more than 80% of the rows are blank for both of these columns, this doesn't seem to be like an amount
	if (nonBlank > (csv.length-1) * 0.8)
	{
		return true;
	}
	else
	{
		return false;
	}
};

const getReasonableYear = function(num, thisYear) {
	if (num > 1900)
	{
		return num;
	}
	// Since we only process recentish data, anything more than 5 years in the future is probably meant to be earlier in the century
	if ((num + 2000) > thisYear + 5)
	{
		return 1900 + num;
	}
	else
	{
		return 2000 + num;
	}
};
const scanColumn = function(csv, col) {
	let voteAmountNoDot = 0;
	let voteAmount = 0;
	let voteDate = 0;
	let voteDescription = 0;
	let amountRegex = /^(\W|_)*?[0-9]+(\.[0-9]+)?(\W|_)*?$/;
	let dateRegex = /^[0-9]+[\-\/][0-9]+[\-\/][0-9]+[\Wa-zA-Z]?/;
	let descriptionRegex = /[^0-9\$]/;
	let badDMYdateFormat = 0;
	let badYMDdateFormat = 0;
	let badMDYdateFormat = 0;
	let nonBlank = 0;
	for (let i = 1; i < csv.length; i++)
	{
		const field = csv[i][col];
		if (field)
		{
			nonBlank++;
			if (dateRegex.test(field))
			{
				voteDate++;
				const dateParts = field.split(datePartsRegex);
				const first = Number(dateParts[0]);
				const second = Number(dateParts[1]);
				const third = Number(dateParts[2]);
				// DMY
				if (!(first > 0 && first <= 31 && second > 0 && second <= 12))
				{
					badDMYdateFormat++;
				}
				// YMD
				if (!(third > 0 && third <= 31 && second > 0 && second <= 12))
				{
					badYMDdateFormat++;
				}
				// MDY
				if (!(second > 0 && second <= 31 && first > 0 && first <= 12))
				{
					badMDYdateFormat++;
				}
			}
			else if (amountRegex.test(field))
			{
				voteAmount++;
				if (field.indexOf(".") < 0)
				{
					voteAmountNoDot++;
				}
			}
			else
			{
				voteDescription++;
			}
		}
	}
	if (voteAmount >= voteAmountNoDot && voteAmount > 0.8 * nonBlank)
	{
		return ['amount'];
	}
	else if (voteDate && (badDMYdateFormat == 0 || badYMDdateFormat == 0 || badMDYdateFormat == 0) && voteDate > 0.8 * Math.max(1, csv.length-2))
	{
		const validFormats = [];
		if (badDMYdateFormat == 0)
		{
			validFormats.push('date-DMY');
		}
		if (badYMDdateFormat == 0)
		{
			validFormats.push('date-YMD');
		}
		if (badMDYdateFormat == 0)
		{
			validFormats.push('date-MDY');
		}
		return validFormats;
	}
	else if (voteDescription > 0.5 * nonBlank)
	{
		return ['description'];
	}
	return [];
};
const genAccounts = function(accounts) {
	const account_mapping = {};
	for (let i = 0; i < accounts.id.length; i++)
	{
		account_mapping[accounts.id[i]] = accounts.name;
	}
	return account_mapping;
};
const genTransactionLookupKey = function(account, amount, timeperiods) {
	let amt = amount.toFixed(2);
	/* We never want any possiblity of "-0.00" */
	if (amount < 0.005 && amount > -0.005)
	{
		amt = "0.00";
	}
	return k = account.toString() + "-" + timeperiods.toString() + "-" + amt;
};
const genExistingTransactionLookup = function(postings) {

	const existing = {};
	const ref = {};
	for (let i = 0; i < postings.id.length; i++) {
		if (postings.transaction_date[i].length && postings.transaction_date[i].length > 1 && postings.transaction_date[i][0] == "d")
		{
			const timeperiods = Math.floor(postings.transaction_date[i][1] / datebuf);
			const k = postings.account[i].toString() + "-" + timeperiods.toString() + "-" + postings.amount[i].toFixed(2);
			existing[k] = (existing[k] + 1) || 1;
			ref[k] = i;
		}
	}
	return {existing, ref};
};

const getTextNodes = function(parent){
	var all = [];
	for (parent = parent.firstChild; parent; parent = parent.nextSibling) {
		if (['SCRIPT','STYLE'].indexOf(parent.tagName) >= 0) continue;
		if (parent.nodeType === Node.TEXT_NODE) all.push(parent);
		else all = all.concat(getTextNodes(parent));
	}
	return all;
}

const getElementByXpath = function (doc, path) {
  return document.evaluate(path, doc , null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

const getElementsByXpath = function(doc, path) {
	var results = [];
	var xpathResult = document.evaluate(
		path,
		doc,
		null,
		XPathResult.ORDERED_NODE_ITERATOR_TYPE,
		null
	);
	var node;
	while ((node = xpathResult.iterateNext()) != null) {
		results.push(node);
	}
	return results;
}

const getXPath = function (node) {
    var comp, comps = [];
    var parent = null;
    var xpath = '';
    var getPos = function(node)
    {
        var position = 1, curNode;
        if (node.nodeType == Node.ATTRIBUTE_NODE)
        {
            return null;
        }
        for (curNode = node.previousSibling; curNode; curNode = curNode.previousSibling)
        {
            if (curNode.nodeName == node.nodeName)
            {
                ++position;
            }
        }
        return position;
     }

    if (node instanceof Document)
    {
        return '/';
    }

    for (; node && !(node instanceof Document); node = node.nodeType == Node.ATTRIBUTE_NODE ? node.ownerElement : node.parentNode)
    {
        comp = comps[comps.length] = {};
        switch (node.nodeType)
        {
            case Node.TEXT_NODE:
                comp.name = 'text()';
                break;
            case Node.ATTRIBUTE_NODE:
                comp.name = '@' + node.nodeName;
                break;
            case Node.PROCESSING_INSTRUCTION_NODE:
                comp.name = 'processing-instruction()';
                break;
            case Node.COMMENT_NODE:
                comp.name = 'comment()';
                break;
            case Node.ELEMENT_NODE:
                comp.name = node.nodeName;
                break;
        }
        comp.position = getPos(node);
    }

    for (var i = comps.length - 1; i >= 0; i--)
    {
        comp = comps[i];
        xpath += '/' + comp.name;
        if (comp.position != null)
        {
            xpath += '[' + comp.position + ']';
        }
    }

    return xpath;
}

const getPathBetweenNodes = function(doc, markerElement, targetElement) {
    var targetXpath = getXPath(targetElement);
    var markerXpath = getXPath(markerElement);
    if (markerXpath == targetXpath)
    {
        return ".";
    }
    var markerPieces = markerXpath.split('/');
    var targetPieces = targetXpath.split('/');
    var commonRoot = '';
    var i = 0;
    for (i = 0; i < markerPieces.length && i < targetPieces.length; i++)
    {
        if (markerPieces[i] == targetPieces[i])
        {
            commonRoot = commonRoot.concat(markerPieces[i]).concat('/');
        }
        else
        {
            break;
        }
    }
    // Cut off last slash
    commonRoot = commonRoot.slice(0, -1);
    var commonRootElement = getElementByXpath(doc, commonRoot);
    if (commonRootElement)
    {
        if (i == markerPieces.length || i == targetPieces.length)
        {
            // This branch is if a marker is an actual parent or child of the target
            var pathBetween = '';
            for (var j = 0; j < (markerPieces.length - i); j++)
            {
                pathBetween = pathBetween.concat("../");
            }
            for (var j = i; j < targetPieces.length; j++)
            {
                pathBetween = pathBetween.concat(targetPieces[j]).concat("/");
            }
            // Return our resolved path, minus the trailing slash
            return pathBetween.slice(0, -1);
        }
        else
        {
            // This branch is if a marker is not an actual parent or child of the target which means we can step along 
            //    the siblings of a part of the DOM to keep the final path as relative as possible
            var commonRootMarkerChild = getElementByXpath(doc, commonRoot + '/' + markerPieces[i]);
            var commonRootTargetChild = getElementByXpath(doc, commonRoot + '/' + targetPieces[i]);
            if (commonRootMarkerChild && commonRootTargetChild)
            {
                var children = commonRootElement.childNodes;
                var found = false;
                var numFound = 0;
                var pathBetween = '';
                for (var j = 0; j < (markerPieces.length - i - 1); j++)
                {
                    pathBetween = pathBetween.concat("../");
                }
                // Scan forward
                for (var j = 0; j < children.length; j++)
                {
                    // If we come across the target but we haven't seen the marker yet, break, we will scan backwards instead
                    if (children[j] == commonRootTargetChild && !found)
                    {
                        break;
                    }
                    if (children[j] == commonRootMarkerChild && !found)
                    {
                        found = true;
                    }
                    else if (found && children[j].nodeType == commonRootTargetChild.nodeType 
                                   && children[j].nodeName == commonRootTargetChild.nodeName)
                    {
                        numFound += 1;
                    }
                    // If we come across the target and we have seen the marker, great, let's stop
                    if (children[j] == commonRootTargetChild)
                    {
                        pathBetween = pathBetween.concat("following-sibling::").concat(children[j].nodeName).concat("["+numFound.toString()+"]/");
                        break;
                    }
                }
                if (!found)
                {
                    // Scan backwards
                    for (var j = children.length - 1; j >= 0; j--)
                    {
                        // If we come across the target but we haven't seen the marker yet, break
                        if (children[j] == commonRootTargetChild && !found)
                        {
                            break;
                        }
                        if (children[j] == commonRootMarkerChild && !found)
                        {
                            found = true;
                        }
                        else if (found && children[j].nodeType == commonRootTargetChild.nodeType 
                                       && children[j].nodeName == commonRootTargetChild.nodeName)
                        {
                            numFound += 1;
                        }
                        // If we come across the target and we have seen the marker, great, let's stop
                        if (children[j] == commonRootTargetChild)
                        {
                            pathBetween = pathBetween.concat("preceding-sibling::").concat(children[j].nodeName).concat("["+numFound.toString()+"]/");
                            break;
                        }
                    }
                }
                if (found)
                {
                    for (var j = i+1; j < targetPieces.length; j++)
                    {
                        pathBetween = pathBetween.concat(targetPieces[j]).concat("/");
                    }
                    // Return our resolved path, minus the trailing slash
                    return pathBetween.slice(0, -1);
                }
                else
                {
                    return -1;
                }
            }
            else
            {
                return -2;
            }
        }
    }
    else
    {
        return -2;
    }
}

const quoteXpath = function(val) {
    let pieces = val.split('\'');
    if (pieces.length > 1)
    {
        let retval = 'concat(';
        for (let i = 0; i < pieces.length; i++)
        {
            if (pieces[i])
            {
                retval = retval + '\'' + pieces[i] + '\',';
                if (i != pieces.length - 1)
                {
                    retval = retval + '"\'",';
                }
            }
        }
        retval = retval.substring(0, retval.length - 1);
        retval = retval + ')';
        return retval;
    }
    else
    {
        return '\''+val+'\'';
    }
};

