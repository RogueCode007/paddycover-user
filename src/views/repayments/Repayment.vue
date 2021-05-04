<template>
  <div>
    <CCard>
      <CCardHeader>
         <h1>Repayments</h1>
      </CCardHeader>
      <RepaymentTable />
    </CCard> 
  </div> 
</template>

<script>
import RepaymentTable from './RepaymentTable'
export default {
  components:{
    RepaymentTable
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