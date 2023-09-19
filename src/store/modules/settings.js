import axios from '../../interceptors/axios'
const settingsModule = {
    namespaced: true,
    state(){
        return {
            social_links: []
        }
    },
    getters: {
        social_links: ({ social_links }) => social_links
    },
    mutations: {
        "SET_SOCIAL_LINKS": (state, payload) => state.social_links = payload
    },
    actions: {
        getSocialLinks: async ({ commit }) => {
            let { data } = await axios.get('settings')
            // console.log(data?.social_links)
            commit("SET_SOCIAL_LINKS", data?.social_links)
        }
    },
}

export default settingsModule