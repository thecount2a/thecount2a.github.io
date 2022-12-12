function processEmails() {
  var tableName = "Incoming_Transaction_Emails";
  var serverUrl = "https://mygristurl.org";
  var docId = "xxxxxxxxxxxx";
  var gristApiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  
  // Find timezone here: https://developers.google.com/google-ads/api/reference/data/codes-formats#timezone-ids
  var timeZoneString = "America/New_York";
  
  
  var label = GmailApp.getUserLabelByName("sendToGrist");
  var threads = label.getThreads();

  for (var i = threads.length - 1; i >= 0; i--) {
    //Process them in the order received
    var msgs = threads[i].getMessages();
    var records = [];
    var formattedDate = null;

    for (var j = msgs.length - 1; j >= 0; j--)
    {
      var content  = msgs[j].getRawContent();

      formattedDate = Utilities.formatDate(msgs[j].getDate(), timeZoneString, "yyyy-MM-dd")
      var data = {date: formattedDate, subject: msgs[j].getSubject(), contents: content, email_from: msgs[j].getFrom()};
      records.push({fields: data});
    }
      
    if (records.length > 0)
    {
      var options = {
        headers: {
          'Authorization': 'Bearer ' + gristApiKey
        },
        'method' : 'post',
        'contentType': 'application/json',
        payload: JSON.stringify({records: records})
      };
      var response = UrlFetchApp.fetch(serverUrl+'/api/docs/'+docId+'/tables/'+tableName+'/records', options);
      var respJson = JSON.parse(response);

      if (respJson.records.length == records.length)
      {
        threads[i].removeLabel(label).refresh();
        console.log("Removed label from one email thread: "+threads[i].getFirstMessageSubject());
      }
      else
      {
        console.log("Failed to get IDs for all new records so not removing label from email thread with subject: \""+threads[i].getFirstMessageSubject() + "\" with one of the thread messages sent on " + formattedDate);
      }
    }

  }
}
