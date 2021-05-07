<template>
  <div class="bg-white py-4 px-2">
    <div class="bg-white d-md-flex border rounded">
      <div class="box-1 pt-5 pr-3 pl-3 w-100" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
        <h2 class="text-dark">Pay as you go <span class="text-green">insurance you control</span></h2>
        <p class="text-purple">Pay per Day, Week or Month</p>
        <img :src="phone" alt="phone-image">
      </div>
      <div class="box-2 mt-4 p-3 w-100 mt-md-0">
        <h4 class="text-center mb-5">Sign Up</h4>
        <div>
          <div class="d-md-flex">
            <div class="mt-3 w-100 mr-md-3">
              <label class="text-center text-dark d-block text-md-left">First Name</label>
              <input type="text" class="w-100" required>
            </div>
            <div class="mt-3 w-100">
              <label class="text-center text-dark d-block text-md-left">Last Name</label>
              <input type="text" class="w-100" required>
            </div>
          </div>
          <div class="mt-3">
            <label class="text-center text-dark d-block text-md-left">Email address</label>
            <input type="email" class="w-100" required>
          </div>
          <div class="d-md-flex">
            <div class="mt-3 w-100 mr-md-3">
              <label class="text-center text-dark d-block text-md-left">Password</label>
              <input type="password" class="w-100" required>
            </div>
            <div class="mt-3 w-100">
              <label class="text-center text-dark d-block text-md-left">Confirm Password</label>
              <input type="password" class="w-100" required>
            </div>
          </div>
          <div class="mt-4">
            <button class="bg-success text-white">Submit</button>
            <p class="mt-3 text-center text-dark">Already have an account ? <span><router-link to="/app/login">Sign in</router-link></span></p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>dfnejfnejfvnjenhfiwenhfuihjweifj</p>
      <p>dfnejfnejfvnjenhfiwenhfuihjweifj</p>
      <p>dfnejfnejfvnjenhfiwenhfuihjweifj</p>
      <p>dfnejfnejfvnjenhfiwenhfuihjweifj</p>
      <p>dfnejfnejfvnjenhfiwenhfuihjweifj</p>
      <p>dfnejfnejfvnjenhfiwenhfuihjweifj</p>
    </div>
  </div>
</template>

<script>
import phone from '@/assets/images/phone-half.svg'
import image from "@/assets/images/banner-vector.png"
export default {
  data(){
    return {
      phone: phone,
      image: image
    }
  }

}
</script>

<style scoped>
h2{
  font-weight: bold;
  font-size: 2.5em;
  
}
h2 span{
  color: #219653
}
.box-1 p{
  font-size: 1.3em;
  color: #3E4095
}
h4{
  color: #3E4095;
  font-size: 2.3em;
  
}
label{
  font-size: 1.2em
}
input {
  border: 1px solid #EEEEEE99;
  background: #EEEEEE99;
  border-radius: 15px;
  outline:none;
  padding: 5px 3px 
}
input:focus{
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%)
}
button{
  display: block;
  width: 80%;
  margin: 0 auto;
  border: none;
  border-radius: 15px;
  padding: 8px 0px;
  outline: none
}
.box-2 p{
  font-size: 1.1em
}
</style>