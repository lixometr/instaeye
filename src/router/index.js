import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import( '../views/Accounts.vue')
  },
  {
    path: '/proxy-add',
    name: 'ProxyAdd',
    component: () => import( '../views/ProxyAdd.vue')
  },
  {
    path: '/proxy-list',
    name: 'ProxyList',
    component: () => import( '../views/ProxyList.vue')
  },
  {
    path: '/logs',
    name: 'Logs',
    component: () => import( '../views/Logs.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
