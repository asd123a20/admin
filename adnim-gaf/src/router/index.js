import { createRouter, createWebHistory } from 'vue-router'
import user from '../views/user'

const routes = [
  {
    path: '/user',
    name: 'user',
    component: user
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
