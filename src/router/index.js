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
      path: '/employment',
      name: 'Employment',
      component: () => import('../views/Pages/Employment.vue')
    },
    {
      path: '/employment/:id',
      name: 'EmploymentContent',
      component: () => import('../views/Pages/EmploymentContent.vue')
    }
  ]
})

export default router
