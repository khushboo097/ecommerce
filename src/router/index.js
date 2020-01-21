import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/profile.vue'
import newuser from '../views/Newuser.vue'
import Merchant from '../views/merchant-login.vue'
import newMerchant from '../views/Newmerchant.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  
  {
    path:'/login',
    name:'Login',
    component: Login
  }
  ,
  {
    path:'/profile',
    name:'profile',
    component: Profile
  },
  {
    path:'/newuser',
    name:'new',
    component: newuser
  },
  {
    path:'/loginMerchant',
    name:'Merchant;ogin',
    component: Merchant
  },
  {
    path:'/newMerchant',
    name:'newMerch',
    component: newMerchant
  },
  {
    path: '*',
    name: 'error',
    component: () => import('@/views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
