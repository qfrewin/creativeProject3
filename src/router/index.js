import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rotations from '../views/Rotations.vue'
import Asignments from '../views/Asignments.vue'
import Schedules from '../views/Schedules.vue'

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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
