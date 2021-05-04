<template>
  <div>
    <CCard>
      <CCardHeader>
         <h1>Dependents</h1>
         <CButton color='success'>
           <CIcon name="cil-user-plus"></CIcon> Add dependent
         </CButton>
      </CCardHeader>
      <DependentsTable />
    </CCard> 
  </div> 
</template>

<script>
import DependentsTable from './DependentsTable'
export default {
  components:{
    DependentsTable
  },
  beforeCreate(){
    if(this.$store.state.sidebarShow == true){
      this.$store.commit('toggleSidebarMobile');
    }
  },
}
</script>

<style>

</style>