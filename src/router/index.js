/** @format */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard/',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/dashboard/Home.vue'),
      },
      {
        path: 'cbt',
        name: 'Cbt',
        component: () => import('../views/dashboard/Cbt.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/dashboard/Profile.vue'),
      },
      {
        path: 'result',
        name: 'Result',
        component: () => import('../views/dashboard/Result.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
