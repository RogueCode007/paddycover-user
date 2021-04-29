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
    <template #action="{item}">
      <td class="py-2">
        <CDropdown 
          toggler-text="Action" 
          class="m-2"
          color="success"
          variant="outline"
        >
          <CDropdownItem @click="showDefaultModal(item)">Make Default</CDropdownItem>
          <CDropdownItem @click="showDeleteModal(item)">Delete</CDropdownItem>
        </CDropdown>
      </td>
    </template>
    </CDataTable>
    <CModal
      title="Change default card"
      color="success"
      :show.sync="defaultModal"
    >
      Make this card your default?
      <template #footer>
        <CButton @click="defaultModal = false" color="success">Proceed</CButton>
        <CButton @click="defaultModal = false" color="danger">Cancel</CButton>
      </template>
    </CModal>
    <CModal
      title="Delete card"
      color="danger"
      :show.sync="deleteModal"
    >
      Are you sure you want to delete this card?
      <template #footer>
        <CButton @click="deleteModal = false" color="danger">Yes delete</CButton>
      </template>
    </CModal>
  </CCardBody>
</template>

<script>
// import axios from 'axios'
// import url from '@/main'

const fields = [
  'name',
  {key:'expirydate', label: 'Expiry Date'},
  'bank',
  {key:'date', label: 'Date Added'},
  'action'
]
const covers = [
  {expirydate:'03/21',date:'2012-01-30', name:'Aderigbe Adetola', bank:'Access bank'},
  {expirydate:'03/21',date:'2012-01-30', name:'Aderigbe Adetola', bank:'Gtb bank'},
  
]
export default {
  data () {
    return {
      fields,
      details: [],
      collapseDuration: 0,
      customersData: {},
      covers: covers,
      defaultModal : false,
      deleteModal : false
    }
  },
  methods: {
   showDefaultModal(val){
     this.defaultModal = true
   },
   showDeleteModal(val){
     this.deleteModal = true
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