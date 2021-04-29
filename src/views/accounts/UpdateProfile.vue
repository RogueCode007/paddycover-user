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
              <CCol sm="6">
                <CInput
                  label="First Name"
                  placeholder="Enter your name"
                />
              </CCol>
              <CCol sm="6">
                <CInput
                  label="Last Name"
                  placeholder="Enter your name"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="6">
                <CInput
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                />
              </CCol>
              <CCol sm="6">
                <CInput
                  label="Phone"
                  type="numeric"
                  placeholder="Enter your phone"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="6">
                <CSelect
                  label="Select gender"
                  :options="['Male', 'Female']"
                />
              </CCol>
              <CCol sm="6">
                <CSelect
                  label="Select state"
                  :options="states"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CTextarea
                label="Address"
                rows="4"
              />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
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
      states : [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
      ],
    }
  }
}
</script>

<style>

</style>