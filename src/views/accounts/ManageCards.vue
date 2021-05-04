<template>
  <div>
    <CCard>
      <CCardHeader>
         <h1>Manage Cards</h1>
      </CCardHeader>
      <CardsTable />
    </CCard> 
  </div> 
</template>

<script>
import CardsTable from './CardsTable'
export default {
  components:{
    CardsTable
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