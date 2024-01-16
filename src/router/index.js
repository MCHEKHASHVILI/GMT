import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import {useTitle} from "@vueuse/core"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


router.beforeEach(async (to, from) => {

    const { meta } = to
    const title = (!meta?.page_id) ? useTitle(meta?.title ?? 'GMT') : null
    // return true
    // const store = useStore()
    // const pages = computed(() => store.getters('pages/pages'))
    // if(!pages.value) await store.dispatch('pages/getPages')
  })

export default router


