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
  { key: 'name', _style:'min-width:30%', label: 'Name' },
  { key: 'email', label: 'Email', _style:'min-width:20%;' },
  { key: 'phone', _style:'min-width:20%;', label: 'Phone' },
]
const covers = [
  {name:'Aderigbe Adetola', email:'aderigbe@gmail.com', phone:'08033452224'},
  {name:'Aderigbe Adetola', email:'aderigbe@gmail.com', phone:'08033452224'},
  {name:'Aderigbe Adetola', email:'aderigbe@gmail.com', phone:'08033452224'},
  
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