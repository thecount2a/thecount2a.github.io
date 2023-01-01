const TransactionEditor = {
  props: ['transaction_data', 'accounts', 'categories'],
  //emits: [''],
  setup (props) {
	  const accounts = toRef(props, 'accounts')
	  const filteredAccounts = ref([]);
	  filteredAccounts.value = accounts.value

	  const categories = toRef(props, 'categories')
	  const filteredCategories = ref([]);
	  filteredCategories.value = categories.value

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
		  }
	  }
  },
  template: `
    <q-select input-debounce="0" map-options use-input @filter="filterAccountsFn" outlined emit-value v-model="transaction_data.account" :options="filteredAccounts" label="Account"></q-select>
    <q-input outlined v-model="transaction_data.date" mask="####-##-##">
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

    <q-input v-model="transaction_data.description" label="Description/Payee" outlined></q-input>
    <q-input v-model="transaction_data.amount" type="number" label="Amount($)" outlined></q-input>
    <q-input v-model="transaction_data.comment" label="Comment" outlined></q-input>
    <q-select input-debounce="0" map-options use-input @filter="filterCategoriesFn" outlined emit-value v-model="transaction_data.category" :options="filteredCategories" label="Category"></q-select>
  `
}
