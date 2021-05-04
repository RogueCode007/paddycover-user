<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CAlert
        v-if="$store.state.status == 'error'"
        color="danger"
        closeButton
      >
        Invalid Login Credentials
      </CAlert>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    placeholder="Email"
                    autocomplete="username email"
                    v-model='user.email'
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model='user.password'
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton :disabled="disabled" color="success" class="px-4" @click.prevent="login">
                        <CSpinner color="secondary" size="sm" v-if="$store.state.status == 'loading'"/> Login
                      </CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="white"
              text-color=""
              class="text-center py-5"
              body-wrapper
            >
              <CCardBody style="width: 100%">
                <img :src="Logo" alt="brand-logo">
                <p class="mt-3" style="font-size: 1.5em">Pay as you go Insurance</p>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import Logo from '@/assets/images/logo.svg'
import Phone from '@/assets/images/phone-half.svg'
export default {
  name: 'Login',
  data(){
    return {
      Logo: Logo,
      Phone: Phone,
      disabled: false,
      user:{email: '',password: ''}
    }
  },
  methods:{
    login(){
      this.disabled = true
      const {email, password} = this.user
      this.$router.push('/')
      // this.$store.dispatch('authRequest', {email, password})
      // .finally(()=>{
      //   this.disabled = false
      // })
      // .then(()=>{
      //   this.$router.push('/')
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
    }
  }
}
</script>
