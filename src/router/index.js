import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';
import Landing from '../views/cbt/Landing.vue';
import Examination from '../views/cbt/Examination.vue';
import Result from '../views/cbt/Result.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/examination',
    name: 'exam-landing',
    component: Landing,
  },
  {
    path: '/examination/proper',
    name: 'examination',
    component: Examination,
  },
  {
    path: '/examination/result',
    name: 'examination-result',
    component: Result,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
