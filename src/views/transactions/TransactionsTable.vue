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
    </CDataTable>
  </CCardBody>
</template>

<script>
// import axios from 'axios'
// import url from '@/main'

const fields = [
  {key:'date', label: 'Date of Claim'},
  { key: 'name', _style:'min-width:30%', label: 'Name' },
  'plan',
  'amount',
  'reference',
  {key:'provider', label:'Insurance Provider'}
]
const covers = [
  {date:'2012-01-30', name:'Aderigbe Adetola', plan:'Basic plan', provider: 'Paddysaver', amount: '150,000', reference: '5998295785f5b7'},
  {date:'2012-01-30', name:'Aderigbe Adetola', plan:'Basic plan', provider: 'AIICO', amount: '10,000', reference: '5998295785f5b7'},
  {date:'2012-01-30', name:'Aderigbe Adetola', plan:'Standard plan', provider: 'Paddysaver', amount: '150,000', reference: '5998295785f5b7'},
  {date:'2012-01-30', name:'Aderigbe Adetola', plan:'Basic plan', provider: 'AIICO', amount: '120,000', reference: '5998295785f5b7'},
  {date:'2012-01-30', name:'Aderigbe Adetola', plan:'Standard plan', provider: 'Paddysaver', amount: '150,000', reference: '5998295785f5b7'},
  
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