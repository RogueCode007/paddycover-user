<template>
 <div>
    <CCard>
      <CCardHeader>
         <h1>Subscriptions</h1>
      </CCardHeader>
      <InsuranceCoversTable />
    </CCard> 
  </div> 
</template>

<script>
import InsuranceCoversTable from './InsuranceCoversTable'
export default {
  components:{
    InsuranceCoversTable
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