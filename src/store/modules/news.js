import axios from "@/interceptors/axios"

const newsModule = {
  namespaced: true,
  state() {
    return {
      news: [],
      content: {},
      title: null,
    }
  },
  getters: {
    news: state => state.news,
    content: state => state.content
  },
  mutations: {
    'SET_NEWS': (state, payload) => state.news = payload,
    'SET_TITLE': (state, payload) => state.title = payload,
    'SET_CONTENT': (state, payload) => state.content = payload,
  },
  actions: {
    getNews: async ({ commit }) => {
      let { data } = await axios.get('news')
      commit('SET_NEWS', data.news)
      commit('SET_TITLE', data.title)
    },
    getContent: async ({ commit }, id) => {
      let { data } = await axios.get('news/' + id)
      commit('SET_CONTENT', data)
    }
  },
}

export default newsModule