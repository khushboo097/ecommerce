import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Newuser from '../views/Newuser.vue'
// import Merchant from '../views/merchant-login.vue'
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
    path: '/category/:category?',
    name: 'category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path:'/newuser',
    name:'new',
    component: Newuser
  },
  {
    path:'/newMerchant',
    name:'newMerch',
    component: newMerchant
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/Logout.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/History.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/Error.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('@/views/Payment.vue')
  },
  {
    path: '/Forgot',
    name: 'Forgot',
    component: () => import('@/views/Forgot.vue')
  },
  {
    path: '/productdescription',
    name: 'productdescription',
    component: () => import('@/views/Product.vue')
  },
  {
    path: '/Shoppingcart',
    name: 'Shoppingcart',
    component: () => import('@/views/Shoppingcart.vue')
  },
  {
    path: '/Review',
    name: 'Review',
    component: () => import('@/views/Review.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


// this.$router.push({
//   name: 'category',
//   params: {
//     category: 'books'
//   },
//   query: {

//   }
// })
