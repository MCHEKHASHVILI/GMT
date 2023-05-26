import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { defineComponent } from 'vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Pages/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/Pages/About.vue')
        },
        {
            path: '/brands',
            component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
            children:[
                {
                    path:"",
                    name: "Brands",
                    component: () => import('../views/Pages/Brands.vue'),
                },
                {
                    path: ":id",
                    name: "BrandsContent",
                    component:() => import('../views/Pages/Brand.vue'),
                    props: true,
                }
            ]
        },
        {
            path: '/news',
            component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
            children: [
                {
                    path: '',
                    name: 'News',
                    component: () => import('../views/Pages/News.vue')
                },
                {
                    path: ':id',
                    name: 'NewsContent',
                    component: () => import('../views/Pages/NewsContent.vue'),
                    props: true,
                }
            ]
        },
        {
            path: '/events',
            component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
            children: [
                {
                    path: '',
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
            component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
            children: [
                {
                    path: '',
                    name: 'Employment',
                    component: () => import('../views/Pages/Employment.vue')
                },
                {
                    path: ':id',
                    name: 'EmploymentContent',
                    component: () => import('../views/Pages/EmploymentContent.vue')
                }
            ]
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/Pages/Contact.vue')
        }
    ]
})

export default router
