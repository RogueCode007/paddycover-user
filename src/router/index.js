import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')


// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')


const InsuranceCovers = () => import('@/views/covers/InsuranceCovers')
const Dependents = () => import('@/views/dependents/Dependents')
const Claims = () => import('@/views/claims/Claims')
const Transactions = () => import('@/views/transactions/Transactions')
const Repayment = () => import('@/views/repayments/Repayment')
const UpdateProfile = () => import('@/views/accounts/UpdateProfile')
const ManageCards = () => import('@/views/accounts/ManageCards')
const ChangePassword = () => import('@/views/accounts/ChangePassword')
Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'insurance-covers',
          name: 'Insurance Covers',
          component: InsuranceCovers
        },
        {
          path: 'dependents',
          name: 'Dependents',
          component: Dependents
        },
        {
          path: 'claims',
          name: 'Claims',
          component: Claims
        },
        {
          path: 'transactions',
          name: 'Transactions',
          component: Transactions
        },
        {
          path: 'repayments',
          name: 'Repayments',
          component: Repayment
        },
        {
          path: 'accounts',
          name: 'Accounts',
          redirect: '/accounts/update-profile',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'update-profile',
              name: 'Update Profile',
              component: UpdateProfile
            },
            {
              path: 'manage-cards',
              name: 'Manage Cards',
              component: ManageCards
            },
            {
              path: 'change-password',
              name: 'change password',
              component: ChangePassword
            }
          ]
        },
      ]
    },
    {
      path: '/app',
      redirect: '/app/login',
      component:{
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
