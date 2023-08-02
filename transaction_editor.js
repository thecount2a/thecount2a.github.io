const TransactionEditor = {
  props: ['transaction_data', 'accounts', 'categories'],
  emits: ['onModify'],
  computed: { console: () => console },
  setup (props, ctx) {
	  const accounts = toRef(props, 'accounts')
	  const filteredAccounts = ref([]);
	  filteredAccounts.value = accounts.value

	  const categories = toRef(props, 'categories')
	  const filteredCategories = ref([]);
	  filteredCategories.value = categories.value
	  let timeout = null;
	  let tinytimeout = null;

	  return {
		  accounts,
		  filteredAccounts,
		  categories,
		  filteredCategories,

		  filterAccountsFn (val, update) {
			  if (val === '') {
				  update(() => { filteredAccounts.value = accounts.value })
				  return
			  }
			  update(() => {
				  const needle = val.toLowerCase()
				  filteredAccounts.value = accounts.value.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
			  })
		  },
		  filterCategoriesFn (val, update) {
			  if (val === '') {
				  update(() => { filteredCategories.value = categories.value })
				  return
			  }
			  update(() => {
				  const needle = val.toLowerCase()
				  filteredCategories.value = categories.value.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
			  })
		  },
		  delayedOnModify () {
			  if (timeout !== null)
			  {
				  clearTimeout(timeout);
			  }
			  timeout = setTimeout( () => this.$emit('onModify'), 3000 );
		  },
		  tinyDelayedOnModify () {
			  if (tinytimeout !== null)
			  {
				  clearTimeout(tinytimeout);
			  }
			  tinytimeout = setTimeout( () => { 
				  if (timeout !== null)
				  {
					  clearTimeout(timeout);
					  timeout = null;
				  }
				  this.$emit('onModify')
			  }, 50 );
		  }
	  }
  },
  template: `
    <q-select input-debounce="0" map-options use-input @update:model-value="tinyDelayedOnModify();" @filter="filterAccountsFn" outlined emit-value v-model="transaction_data.account" :options="filteredAccounts" label="Account"></q-select>
    <q-input outlined v-model="transaction_data.date" @update:model-value="tinyDelayedOnModify();" mask="####-##-##">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="transaction_data.date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-input v-model="transaction_data.description" @update:model-value="delayedOnModify()" @blur="tinyDelayedOnModify();" label="Description/Payee" outlined></q-input>
			
    <q-input v-model="transaction_data.amount" type="number" @update:model-value="delayedOnModify()" @blur="tinyDelayedOnModify();" label="Amount($)" outlined></q-input>
    <q-input v-model="transaction_data.comment" @update:model-value="delayedOnModify()" @blur="tinyDelayedOnModify();" label="Comment" outlined></q-input>
    <q-select input-debounce="0" map-options use-input @update:model-value="tinyDelayedOnModify();" @filter="filterCategoriesFn" outlined emit-value v-model="transaction_data.category" :options="filteredCategories" label="Category"></q-select>
  `
}
