import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '*',
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
    path: '/Product',
    name: 'Product',
    component: () => import('@/views/Product.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
