import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DomainsRegister from '../views/DomainsRegister.vue'
import DomainsNew from '../views/DomainsNew.vue'
import CMSAndConstructor from '../views/CMSAndConstructor.vue'
import Services from '../views/Services.vue'
import ServersAndDataCenters from '../views/ServersAndDataCenters.vue'
import VPS from '../views/VPS.vue'
import SSL from '../views/SSL.vue'
import Hosting from '../views/Hosting.vue'

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
  },
  {
    path: '/cms',
    name: 'CMSAndConstructor',
    component: CMSAndConstructor
  },
  {
    path: '/vps',
    name: 'VPS',
    component: VPS
  },
  {
    path: '/servers',
    name: 'ServersAndDataCenters',
    component: ServersAndDataCenters
  },
  {
    path: '/ssl',
    name: 'SSL',
    component: SSL
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/hosting',
    name: 'Hosting',
    component: Hosting
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
