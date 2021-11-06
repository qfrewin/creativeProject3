import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rotations from '../views/Rotations.vue'
import Asignments from '../views/Asignments.vue'
import Schedules from '../views/Schedules.vue'
import Cell from '../views/Cell.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rotations',
    name: 'Rotations',
    component: Rotations
  },
  {
    path: '/asignments',
    name: 'Asignments',
    component: Asignments
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: Schedules
  },
  {
    path: '/cell',
    name: 'Cell',
    component: Cell
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
