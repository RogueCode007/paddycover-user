<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="12" lg="8">
            <div class="col-12 mb-5 p-4 d-flex justify-content-between" style="background-color: #DAEEE4; border-radius: 10px;">
              <div class="">
                  <p class="text-dark font-weight-bold mb-0"
                  style="font-size: 2em">Welcome Daniel</p>
                  <p class="font--18 text--primary"
                  style="font-size: 1.2em">Pay as you go insurance you control.</p>
              </div>
              <img :src="paddycover" class="img-fluid img"  style="" alt="">
            </div>
            <div class="card-box">
              <router-link to="" style=" min-height: 150px; background: linear-gradient(98.06deg, #14801B 1.36%, #00A859 92.41%); text-decoration: none"
              class="p-3 rounded text-white card item">
                <h2>Health insurance</h2>
                <p style="font-size: 1.2em">Pay as you go insurance you control</p>
              </router-link>
              <router-link to="" style="min-height: 150px; background: linear-gradient(98.06deg, #14801B 1.36%, #00A859 92.41%); text-decoration: none"
              class="p-3 rounded text-white card item">
                <h2>Vehicle insurance</h2>
                <p style="font-size: 1.2em">Pay as you go insurance you control</p>
              </router-link>
              <router-link to="" style=" min-height: 150px; background: linear-gradient(98.06deg, #14801B 1.36%, #00A859 92.41%); text-decoration: none"
              class="p-3 rounded text-white card item">
                <h2>Home insurance</h2>
                <p style="font-size: 1.2em">Pay as you go insurance you control</p>
              </router-link>
              
            </div>
          </CCol>
          <CCol sm="12" lg="4">
            <div>
              <h3>Recent Transactions</h3>
              <div style="padding: 10px" class="border rounded mb-2">
                <p style="font-size: 1.1em; font-weight: bold">Annual membership renewal</p>
                <p>15-02-2020</p>
              </div>
              <div style="padding: 10px" class="border rounded">
                <p style="font-size: 1em; font-weight: bold">Annual membership renewal</p>
                <p>15-02-2020</p>
              </div>
              <router-link to='/transactions' class="text-center d-block mt-2" style="font-size: 1.1em;">View all Transactions</router-link>
            </div>
          </CCol>
        </CRow>
        
      </CCardBody>
      
    </CCard>
  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'
import paddycover from '@/assets/images/paddycover.svg'
export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand
  },
  data () {
    return {
      paddycover: paddycover,
      
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
<style scoped>
.img{
  width: 120px
}
@media only screen and (min-width: 1024px){
  /* .item{
    display: inline-bock;
    width: 30%;
    margin: 1.667%
  } */
  .img{
    width: 150px
  }
}

</style>

