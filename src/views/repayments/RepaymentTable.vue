<template>
  <CCardBody>
    <CDataTable
      :items="covers"
      :fields="fields"
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
      table-filter
      cleaner
    >
    <template #status="{item}">
       <td v-if="item.status">
        <CBadge :color="getBadge(item.status)" style="padding: 8px">
          Successful
        </CBadge>
       </td>
      <td v-else>
        <CBadge :color="getBadge(item.status)" style="padding: 8px">
          Failed
        </CBadge>
      </td>
    </template>
    <template #Action>
      <td>
        <CButton color="primary">Action</CButton>
      </td>
    </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
// import axios from 'axios'
// import url from '@/main'

const fields = [
  'plan',
  'duration',
  'provider',
  'amount',
  'users',
  {key:'date', label: 'Payment Date'},
  {key:'status'},
  'Action'
]
const covers = [
  {date:'2012-01-30', duration:'30', plan:'Paddy Basic Month', provider: 'Paystack', amount: '150,000', users: '2', status: true},
  {date:'2012-01-30', duration:'20', plan:'Paddy Basic Month', provider: 'Paystack', amount: '150,000', users: '2', status: true},
  {date:'2012-01-30', duration:'30', plan:'Paddy Basic Month', provider: 'Paystack', amount: '150,000', users: '2', status: true},
  {date:'2012-01-30', duration:'20', plan:'Paddy Basic Month', provider: 'Paystack', amount: '150,000', users: '2', status: true},
  {date:'2012-01-30', duration:'25', plan:'Paddy Basic Month', provider: 'Paystack', amount: '150,000', users: '2', status: false},  
]
export default {
  data () {
    return {
      fields,
      details: [],
      collapseDuration: 0,
      customersData: {},
      covers: covers
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case true: return 'success'
        case false: return 'danger'
      }
    }
  },
  // beforeCreate(){
  //   this.$store.state.loading = true;
  //   axios.get(`${url}/users/allUsers`)
  //   .then(res=>{
  //     this.customersData = res.data
  //     this.$store.state.loading = false
  //   })
  // }
}
</script>