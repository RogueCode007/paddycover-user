<template>
  <div>
    <CCard>
      <CCardHeader>
         <h1>Update Profile</h1>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12" lg="6">
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Current Password"
                  placeholder="Enter your current Password"
                />
              </CCol>
              <CCol sm="12">
                <CInput
                  label="New Password"
                  placeholder="Enter your new Password"
                />
              </CCol>
            </CRow>
            <CRow class="mt-2">
              <CCol sm="12" lg='8'>
                <CButton type="submit" color="success" style="width:100%"><CIcon name="cil-check-circle"/> Submit</CButton>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style>

</style>