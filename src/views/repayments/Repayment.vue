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
  }
}
</script>

<style>

</style>