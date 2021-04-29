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
    <template #action>
      <td class="py-2">
        <CButton size="sm" color="info" class="ml-3">
          Renew
        </CButton>
      </td>
    </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
// import axios from 'axios'
// import url from '@/main'

const fields = [
  { key: 'name', _style:'min-width:30%' },
  { key: 'plan', label: 'Plan', _style:'min-width:20%;' },
  { key: 'type', _style:'min-width:20%;' },
  'amount',
  'status',
  {key:'start', label: 'Start Date'},
  {key: 'end', label: 'End Date'},
  {key:'days_left', label: 'Days Left'},
  {key: 'action', _style:'min-width:10%;', label: 'Action'}
  
]
const covers = [
  {name:'Aderigbe Adetola', plan:'Basic plan', type:'Vehicle Insurance', amount: '150,000', status: false, start:'2019-02-14', end: '2019-02-14', days_left: 23},
  {name:'Aderigbe Adetola', plan:'Basic plan', type:'Vehicle Insurance', amount: '150,000', status: true, start:'2019-02-14', end: '2019-02-14', days_left: 2},
  {name:'Aderigbe Adetola', plan:'Standard plan', type:'Vehicle Insurance', amount: '150,000', status: true, start:'2019-02-14', end: '2019-02-14', days_left: 23},
  {name:'Aderigbe Adetola', plan:'Basic plan', type:'Vehicle Insurance', amount: '150,000', status: false, start:'2019-02-14', end: '2019-02-14', days_left: 20},
  {name:'Aderigbe Adetola', plan:'Basic plan', type:'Vehicle Insurance', amount: '150,000', status: true, start:'2019-02-14', end: '2019-02-14', days_left: 15},
  {name:'Aderigbe Adetola', plan:'Standard plan', type:'Vehicle Insurance', amount: '150,000', status: true, start:'2019-02-14', end: '2019-02-14', days_left: 3},
  {name:'Aderigbe Adetola', plan:'Basic plan', type:'Vehicle Insurance', amount: '150,000', status: true, start:'2019-02-14', end: '2019-02-14', days_left: 12},
  {name:'Aderigbe Adetola', plan:'Standard plan', type:'Vehicle Insurance', amount: '150,000', status: true, start:'2019-02-14', end: '2019-02-14', days_left: 10},
  {name:'Aderigbe Adetola', plan:'Basic plan', type:'Vehicle Insurance', amount: '150,000', status: false, start:'2019-02-14', end: '2019-02-14', days_left: 23},
  {name:'Aderigbe Adetola', plan:'Basic plan', type:'Vehicle Insurance', amount: '150,000', status: true, start:'2019-02-14', end: '2019-02-14', days_left: 25},
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
  filters:{
    formateDate(str){
      var date = new Date(str);
      var day = date.getDate();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var dateStr = year+"/"+month+"/"+day;
      return dateStr
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