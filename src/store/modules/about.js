import axios from "@/interceptors/axios"


const aboutModule = {
    namespaced: true,
    state() {
        return {
            team: [],
            member: null,
            title: null,
            subtitle: null,
            description: null,
        }
    },
    getters: {
        team: ({ team }) => team,
        member: ({ member }) => member,
        title: ({ title }) => title,
        subtitle: ({ subtitle }) => subtitle,
        description: ({ description }) => description,
    },
    mutations: {
        "SET_TEAM": (state, payload) => state.team = payload,
        "SET_MEMBER": (state, payload) => state.member = payload,
        "SET_TITLE": (state, payload) => state.title = payload,
        "SET_SUBTITLE": (state, payload) => state.subtitle = payload,
        "SET_DESCRIPTION": (state, payload) => state.description = payload,
    },
    actions: {
        async getAboutUs({ commit }) {
          const response = await axios.get('about-us');
          const { title, subtitle, description, staff } = response.data
          commit("SET_TEAM", staff);
          commit("SET_TITLE", title);
          commit("SET_SUBTITLE", subtitle);
          commit("SET_DESCRIPTION", description);
        }
    }

}
export default aboutModule