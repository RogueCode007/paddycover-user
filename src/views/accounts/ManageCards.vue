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
  }
}
</script>

<style>

</style>