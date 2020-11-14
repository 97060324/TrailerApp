import Vue from 'vue'
import VueRouter from 'vue-router'
import MainTrailer from '../views/MainTrailer.vue'
import TrailerOne from '../views/TrailerOne.vue'
import TrailerTwo from '../views/TrailerTwo.vue'
import TrailerThree from '../views/TrailerThree.vue'
import TrailerFour from '../views/TrailerFour.vue'
import TrailerFive from '../views/TrailerFive.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainTrailer',
    component: MainTrailer
  },
  {
    path: '/TrailerHead',
    name: 'TrailerHead',
    component: () => import(/* webpackChunkName: "about" */ '../views/TrailerHead.vue')
  },
  {
    path: '/TrailerOne',
    name: 'TrailerOne',
    component: () => import(/* webpackChunkName: "about" */ '../views/TrailerOne.vue')
  },
  {
    path: '/TrailerTwo',
    name: 'TrailerTwo',
    component: () => import(/* webpackChunkName: "about" */ '../views/TrailerTwo.vue')
  },
  {
    path: '/TrailerThree',
    name: 'TrailerThree',
    component: () => import(/* webpackChunkName: "about" */ '../views/TrailerThree.vue')
  },
  {
    path: '/TrailerFour',
    name: 'TrailerFour',
    component: () => import(/* webpackChunkName: "about" */ '../views/TrailerFour.vue')
  },
  {
    path: '/TrailerFive',
    name: 'TrailerFive',
    component: () => import(/* webpackChunkName: "about" */ '../views/TrailerFive.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
