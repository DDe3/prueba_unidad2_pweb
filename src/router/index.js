import { createRouter, createWebHashHistory } from 'vue-router'
import Juego from '../views/Juego.vue'

const routes = [
  {
    path: '/',
    component: Juego 
  },
  {
    path: '/juego',
    component: Juego
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
