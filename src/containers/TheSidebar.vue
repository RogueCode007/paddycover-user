<template>
  <CSidebar
    :minimize="minimize"
    unfoldable
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
    style="background-color: white"
  >
    <CSidebarBrand  to="/" style="background-color: white; padding-top: 10px">
      <img :src="Logo" alt="paddycover-logo" :height="100">
    </CSidebarBrand>
    <!-- <CRenderFunction flat :contentToRender="sidebarItems"/> -->
    <div class="sidebar sidebar-show">
      <ul class="sidebar-nav">
        <li class="nav-title">Nav Title</li>
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard">
            <img :src="Layout" alt="Dashboard" class="mb-1 mr-3 img-fluid" width="24">Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/insurance-covers">
            <img :src="Account" alt="Insurance Covers" class="mb-1 mr-3 img-fluid" width="24">Insurance Covers
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/dependents">
            <img :src="Companion" alt="Insurance Dependents" class="mb-1 mr-3 img-fluid" width="24">Dependents
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/claims">
            <img :src="claim" alt="Insurance Claims" class="mb-1 mr-3 img-fluid" width="24">Insurance Claims
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/transactions">
            <img :src="transaction" alt="Transaction History" class="mb-1 mr-3 img-fluid" width="24">Transaction History
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/repayments">
            <img :src="card" alt="Repayments" class="mb-1 mr-3 img-fluid" width="24">Repayments
          </router-link>
        </li>
        <li class="nav-item">
          <div class="nav-link" @click="collapse = !collapse">
            <img :src="admin" alt="My Account" class="mb-1 mr-3 img-fluid" width="24">
            <span style="font-size: 1.15em">My Account</span>
            <div class="float-right">
              <span v-if="!collapse"><font-awesome-icon icon="angle-left" /></span>
              <span v-if="collapse"><font-awesome-icon icon="angle-down" /></span>
            </div>
            
          </div>
          <transition name="collapse-box">
            <div v-show="collapse" >
              <transition></transition>
              <router-link to="/accounts" class="d-block px-5 py-2" >Update Profile</router-link>
              <router-link to="/accounts/manage-cards" class="d-block px-5 py-2">Manage Cards</router-link>
              <router-link to="/accounts/change-password" class="d-block px-5 py-2">Change Password</router-link>
            </div>
          </transition>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/theme/colors">
            <img :src="logout" alt="Logout" class="mb-1 mr-3 img-fluid" width="24">Logout
          </router-link>
        </li>
      </ul>
    </div>
    <!-- <CSidebarMinimizer
      class="c-d-md-down-none"
      @click.native="$store.commit('toggle', 'sidebarMinimize')"
    /> -->
  </CSidebar>
</template>

<script>
import SidebarItems from './SidebarItems'
import Logo from '@/assets/images/logo.svg'
import Layout from '@/assets/images/layout.svg'
import Account from '@/assets/images/account-icon.svg'
import Companion from '@/assets/images/companionship.svg'
import claim from '@/assets/images/insurance-claim.svg'
import transaction from '@/assets/images/transaction-icon.svg'
import card from '@/assets/images/credit-card.svg'
import admin from '@/assets/images/admin.svg'
import logout from '@/assets/images/power-button.svg'
export default {
  name: 'TheSidebar',
  extends: SidebarItems,
  data(){
    return {
      Logo: Logo,
      Layout: Layout,
      Account: Account,
      Companion: Companion,
      claim: claim,
      transaction: transaction,
      card: card,
      admin: admin,
      logout: logout,
      collapse: false
    }
  },
  computed: {
    show () {
      return this.$store.state.sidebarShow
    },
    minimize () {
      return this.$store.state.sidebarMinimize
    }
  }
}
</script>
<style scoped>
.sidebar{
  background-color: white
}
.sidebar-nav{
  padding: 0; 
}
.nav-item{
  padding-top: 7px;
  color: #002c4e;
}
.nav-item a{
  color: #002c4e;
  font-size: 1.15em
}
.nav-item:hover{
  background-color: #E9F3FE;
  /* border-left: 3px solid #002C4E */
}
.router-link-exact-active{
  border-left: 3px solid #002C4E;
  background-color: #E9F3FE;
}
.nav-link{
  cursor: pointer
}
.collapse-box-enter-active, .collapse-box-leave-active{
  transition: opacity .5s
}
.collapse-box-enter, .collapse-box-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

