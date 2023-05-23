import {createRouter, createWebHistory, RouterView} from 'vue-router'

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
            path: '/brands',
            component: () => RouterView,
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
            component: () => RouterView,
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
            component: () => RouterView,
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
            component: () => RouterView,
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
