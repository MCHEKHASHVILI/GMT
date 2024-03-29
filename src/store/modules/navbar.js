import IconBurger from '@/components/icons/iconBurger.vue'
import IconExit from "@/components/icons/iconExit.vue"

const navbarModule = {
    namespaced: true,
    state() {
        return {
            open: false,
            menus: {
                top: [ 'brands', 'events', 'news', 'about', 'employment', 'contact' ],
                footer: [ 'brands', 'employment', 'events', 'about', 'news', 'contact' ]
            }
        }
    },
    getters: {
        menus: ({ menus }) => menus,
        open: ({ open }) => open,
        icon: ({ open }) => (!open) ? IconBurger : IconExit,
        iconProps: ({ open }) => (open) ? { fill: '#000000' } : { fill: '#FFFFFF' },
    },
    mutations: {
        "TOGGLE_MENU": (state, _payload) => state.open = !state.open
    },
    actions: {
        toggleMenu: async ({ commit }) => {
            commit('TOGGLE_MENU')
            document.body.classList.toggle('overflow-hidden')
            document.body.classList.toggle('touch-none')
        }
    }
}

export default navbarModule