import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Pages/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Pages/About.vue')
    },
    {
      path: '/events:zurikelass',
      name: 'events',
      component: () => import('../views/Pages/Events.vue')
    },
    {
      path: '/employment',
      name: 'Employment',
      component: () => import('../views/Pages/Employment.vue')
    },
  ]
})

export default router
