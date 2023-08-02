import IconBurger from '@/components/icons/iconBurger.vue'
import IconExit from "@/components/icons/iconExit.vue"

const navbarModule = {
    namespaced: true,
    state() {
        return {
            open: false,
            navLinks: [
                { url: "/brands", label: "BRANDS" },
                { url: "/events", label: "EVENTS" },
                { url: "/news", label: "NEWS" },
                { url: "/about", label: "ABOUT US" },
            ],
        }
    },
    getters: {
        navLinks: ({navLinks}) => navLinks,
        open: ({open}) => open,
        icon: ({open}) => (!open) ? IconBurger : IconExit,
        iconProps: ({open}) => (open) ? { fill: '#000000' } : { fill: '#FFFFFF' },
    },
    mutations: {
        "TOGGLE_MENU": (state, _payload) => state.open = !state.open
    },
    actions: {
        toggleMenu: async ({ commit }) => {
            commit('TOGGLE_MENU')
            document.body.classList.toggle('overflow-hidden')
        }
    }
}

export default navbarModule