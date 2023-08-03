import axios from "@/interceptors/axios"

const newsModule = {
  namespaced: true,
  state() {
    return {
      news: [],
      content: {},
      title: null,
      more: null,
    }
  },
  getters: {
    news: ({ news }) => news,
    content: ({ content }) => content,
    title: ({ title }) => title,
    more: ({ more }) => more,
  },
  mutations: {
    'SET_NEWS': (state, { more, data }) => (!!more) ? state.news.push(...data) : state.news = [...data],
    'SET_TITLE': (state, payload) => state.title = payload,
    'SET_CONTENT': (state, payload) => state.content = payload,
    'SET_MORE': (state, payload) => (payload) ? state.more = payload : state.more = null,
  },
  actions: {
    getNews: async ({ commit }) => {
      let { data } = await axios.get('news')
      commit('SET_NEWS', { more: false, data: data.news })
      commit('SET_TITLE', data.title)
      if(true == false) {// set pagination to api
        commit('SET_MORE', data.title)
      }
    },
    getContent: async ({ commit }, id) => {
      let { data } = await axios.get('news/' + id)
      commit('SET_CONTENT', data)
    },
    getMore: async ({ commit, state }) => {
      // let { data } = await axios.get(state.more) // state more will be an url or null
      // commit('SET_NEWS', { more: true, data: data.news }) // [news] as optional key
      console.log('need an api for pagination')
    }
  },
}

export default newsModule