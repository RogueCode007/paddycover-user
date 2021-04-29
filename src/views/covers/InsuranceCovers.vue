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
  }
}
</script>

<style>

</style>