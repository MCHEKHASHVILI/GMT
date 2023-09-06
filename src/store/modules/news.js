import axios from "@/interceptors/axios"

const newsModule = {
  namespaced: true,
  state() {
    return {
      news: [],
      content: {},
      title: null,
      
      page: null,
      next_page: null,
      per_page: 5,
      total_pages: null,
      loading: false,
    }
  },
  getters: {
    news: ({ news }) => news,
    content: ({ content }) => content,
    title: ({ title }) => title,
    
    loading: ({ loading }) => loading,
    next_page: ({ next_page }) => next_page,
    params: ({ per_page, next_page }) => (next_page) ? { params: { per_page, page: next_page } } : { params: { per_page } }
  },
  mutations: {
    'SET_NEWS': (state, { more, data }) => (!!more) ? state.news.push(...data) : state.news = [...data],
    'SET_TITLE': (state, payload) => state.title = payload,
    'SET_CONTENT': (state, payload) => state.content = payload,
    
    'SET_PAGE': (state, payload) => (payload) ? state.page = payload : state.page = null,
    'SET_NEXT_PAGE': (state) => ((state.total_pages - state.page) > 0) ? state.next_page = state.page + 1 : state.next_page = null,
    'SET_TOTAL_PAGES': (state, payload) => (payload) ? state.total_pages = payload : state.total_pages = null,
    'SET_LOADING': (state, payload) => state.loading = (payload),
  },
  actions: {
    getNews: async ({ commit, getters }) => {

      commit('SET_LOADING', true)
      let { data } = await axios.get('news', getters.params)
      commit('SET_NEWS', { more: false, data: data.news })
      commit('SET_PAGE', data.page)
      commit('SET_TOTAL_PAGES', data.total_pages)
      commit('SET_NEXT_PAGE')
      commit('SET_TITLE', data.title)
      commit('SET_LOADING', false)

    },
    getContent: async ({ commit }, id) => {
      commit('SET_LOADING', true)
      let { data } = await axios.get('news/' + id)
      commit('SET_CONTENT', data)
      // update views
      await axios.post('update-views/' + id)
      commit('SET_LOADING', false)
    },
    getMore: async ({ commit, getters }) => {

      commit('SET_LOADING', true)
      let { data } = await axios.get('news', getters.params)
      commit('SET_NEWS', { more: true, data: data.news })
      commit('SET_PAGE', data.page )
      commit('SET_NEXT_PAGE')
      commit('SET_LOADING', false)
    }
  },
}

export default newsModule