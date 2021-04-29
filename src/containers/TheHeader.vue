<template>
  <CHeader with-subheader class="py-2 rounded-bottom" style="background: linear-gradient(98.06deg, #14801B 1.36%, #00A859 92.41%)">
    <div class=" rounded ml-3 ml-3 mt-2 d-lg-none border d-flex align-items-center px-2 " 
      style="height:35px; cursor:pointer"
      @click="$store.commit('toggleSidebarMobile')">
      <font-awesome-icon icon="align-left" class="text-white"/>
      <span class="mb-0 ml-2 text-white">Menu</span>
    </div>
    <div class=" rounded ml-3 mt-2 d-md-down-none border d-flex align-items-center px-2 " 
      style="height:35px; cursor:pointer"
      @click="$store.commit('toggleSidebarDesktop')">
      <font-awesome-icon icon="align-left" class="text-white"/>
      <span class="mb-0 ml-2 text-white">Menu</span>
    </div>
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard" class="text-white">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/users" exact class="text-white">
          Users
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink class="text-white">
          Settings
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav>
      <CHeaderNavItem class="px-3 c-d-legacy-none">
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>

    <!-- <CSubheader class="px-3" style="background: linear-gradient(98.06deg, #14801B 1.36%, #00A859 92.41%)">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader> -->
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import TheHeaderDropdownNotif from './TheHeaderDropdownNotif'
import TheHeaderDropdownTasks from './TheHeaderDropdownTasks'
import TheHeaderDropdownMssgs from './TheHeaderDropdownMssgs'
import Logo from '@/assets/images/logo.svg'
export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt,
    TheHeaderDropdownNotif,
    TheHeaderDropdownTasks,
    TheHeaderDropdownMssgs
  },
  data(){
    return {
      Logo : Logo
    }
  }
}
</script>
