import axios from "@/interceptors/axios"

const eventsModule = {
  namespaced: true,
  state: {
    events: [],
    event: {},
    title: null,
    subtitle: null,
    cover: null,

    page: null,
    next_page: null,
    per_page: 5,
    total_pages: null,
    loading: false,
  },
  getters: {
    events: ({ events }) => events,
    event: ({ event }) => event,
    title: ({ title }) => title,
    subtitle: ({ subtitle }) => subtitle,
    cover: ({ cover }) => cover,
    
    loading: ({ loading }) => loading,
    next_page: ({ next_page }) => next_page,
    params: ({ per_page, next_page }) => (next_page) ? { params: { per_page, page: next_page } } : { params: { per_page } }
  },
  mutations: {
    'SET_EVENTS': (state, { more, data }) => (!!more) ? state.events.push(...data) : state.events = [...data],
    'SET_TITLE': (state, payload) => state.title = payload,
    'SET_EVENT': (state, payload) => state.event = payload,
    'SET_SUBTITLE': (state, payload) => state.subtitle = payload,
    'SET_COVER': (state, payload) => state.cover = payload,
    
    'SET_PAGE': (state, payload) => (payload) ? state.page = payload : state.page = null,
    'SET_NEXT_PAGE': (state) => ((state.total_pages - state.page) > 0) ? state.next_page = state.page + 1 : state.next_page = null,
    'SET_TOTAL_PAGES': (state, payload) => (payload) ? state.total_pages = payload : state.total_pages = null,
    'SET_LOADING': (state, payload) => state.loading = (payload),
  },
  actions: {
    getEvents: async ({ commit, getters }) => {

      commit('SET_LOADING', true)
      let { data } = await axios.get('events', getters.params)
      commit('SET_EVENTS', { more: false, data: data.events })
      commit('SET_SUBTITLE', data.subtitle)
      commit('SET_COVER', data.featured_image)
      commit('SET_PAGE', data.page)
      commit('SET_TOTAL_PAGES', data.total_pages)
      commit('SET_NEXT_PAGE')
      commit('SET_TITLE', data.title)
      commit('SET_LOADING', false)

    },
    getEvent: async ({ commit }, id) => {

      commit('SET_LOADING', true)
      let { data } = await axios.get('events/' + id)
      commit('SET_EVENT', data)
      commit('SET_LOADING', false)

    },
    getMore: async ({ commit, getters }) => {

      commit('SET_LOADING', true)
      let { data } = await axios.get('events', getters.params)
      commit('SET_EVENTS', { more: true, data: data.events })
      commit('SET_PAGE', data.page )
      commit('SET_NEXT_PAGE')
      commit('SET_LOADING', false)

    }
  },
}




export default eventsModule