import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DomainsRegister from '../views/DomainsRegister.vue'
import DomainsNew from '../views/DomainsNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/domains/register',
    name: 'DomainsRegister',
    component: DomainsRegister
  },
  {
    path: '/domains/new',
    name: 'DomainsNew',
    component: DomainsNew
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
