import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Pages/Home.vue'),
        meta: {
            title: "Home"
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/Pages/About.vue'),
        meta: {
            title: "About us"
        }
    },
    {
        path: '/brands',
        component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
        children:[
            {
                path:"",
                name: "Brands",
                component: () => import('../views/Pages/Brands.vue'),
                meta: {
                    title: "Brands"
                }
            },
            {
                path: ":id",
                name: "BrandsContent",
                component:() => import('../views/Pages/Brand.vue'),
                meta: {
                    title: "Brand"
                },
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
                component: () => import('../views/Pages/News.vue'),
                meta: {
                    title: "News"
                }
            },
            {
                path: ':id',
                name: 'NewsContent',
                component: () => import('../views/Pages/NewsContent.vue'),
                meta: {
                    title: "News"
                },
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
                component: () => import('../views/Pages/Events.vue'),
                meta: {
                    title: "Events"
                }
            },
            {
                path: ':id',
                name: 'EventsContent',
                props: true,
                component: () => import('../views/Pages/EventsContent.vue'),
                meta: {
                    title: "Event"
                }
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
                component: () => import('../views/Pages/Employment.vue'),
                meta: {
                    title: "Employment"
                }
            },
            {
                path: ':id',
                name: 'EmploymentContent',
                component: () => import('../views/Pages/EmploymentContent.vue'),
                meta: {
                    title: "Employment"
                },
                props: true,
            }
        ]
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Pages/Contact.vue'),
        meta: {
            title: "Contact"
        }
    }
]
export default routes