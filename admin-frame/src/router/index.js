import { createRouter, createWebHistory } from 'vue-router'
import layout from '../views/layout.vue'
import home from '../views/home.vue'
import iframe from '../views/iframe.vue'
const routes = [
  {
    path: '/',
    redirect: '/frame'
  },
  {
    path: '/frame',
    component: layout,
    children: [
      {
        path: '/frame',
        component: home
      },
      {
        path: '/frame/:module/:app/:path(.*)',
        component: iframe
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL) || 'history',
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
