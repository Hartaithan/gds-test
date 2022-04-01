import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ListView from '../views/ListView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ListView',
    component: ListView
  },
  {
    path: '/cards',
    name: 'CardsView',
    component: () => import('../views/CardsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
