import { createRouter, createWebHistory ,RouterView} from 'vue-router'

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
      path: '/News',
      name: 'News',
      component: () => import('../views/Pages/News.vue')
    },
      path: '/events',
      component: () => RouterView,
      children: [
        {
          path:'',
          name: 'Events',
          component: () => import('../views/Pages/Events.vue')
        },
        {
          path: ':id',
          name: 'EventsContent',
          component: () => import('../views/Pages/EventsContent.vue')
        },
      ]
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
