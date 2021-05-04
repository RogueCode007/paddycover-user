<template>
  <div>
    <CCard>
      <CCardHeader>
         <h1>Claims</h1>
         <CButton color='success'>
           <CIcon name="cil-user-plus"></CIcon> Make Claim
         </CButton>
      </CCardHeader>
      <ClaimsTable />
    </CCard> 
  </div> 
</template>

<script>
import ClaimsTable from './ClaimsTable'
export default {
  components:{
    ClaimsTable
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