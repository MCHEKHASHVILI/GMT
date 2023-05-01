const navbarModule = {
    namespaced: true,
    state() {
        return {
            scrollSwitch: "wefwf",
            responsiveNavbar: false,
            navbarComponents: [
                { routerLink: "/brands", name: "BRANDS" },
                { routerLink: "/reservation", name: "RESERVATION" },
                { routerLink: "/events", name: "EVENTS" },
                { routerLink: "/news", name: "NEWS" },
                { routerLink: "/about", name: "ABOUT US" },
             
            ],
            

        }
    },
    getters: {
        navbarComponents(state) {
            return state.navbarComponents
        },
        responsiveNavbar(state){
            return state.responsiveNavbar
        },
        scrollSwitch(state){
            return state.scrollSwitch
        }
    },

    mutations: {
        toggleResponsiveNavbar(state){
            state.responsiveNavbar = !state.responsiveNavbar
            state.scrollSwitch = !state.scrollSwitch
        }
    }
}

export default navbarModule