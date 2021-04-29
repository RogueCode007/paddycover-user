<template>
  <div>
    <CCard>
      <CCardHeader>
         <h1>Transactions</h1>
         <CButton color='success'>
           <CIcon name="cil-user-plus"></CIcon> Download Report
         </CButton>
      </CCardHeader>
      <TransactionsTable />
    </CCard> 
  </div> 
</template>

<script>
import TransactionsTable from './TransactionsTable'
export default {
  components:{
    TransactionsTable
  }
}
</script>

<style>

</style>