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
    per_page: 5,
    total_pages: null,
    loading: false,

    types: [],
    type: null,
    date: null,
    filter_bar: false,

    booking: null,
    name: null,
    phone: null,
    email: null,
  },
  getters: {
    events: ({ events }) => events,
    event: ({ event }) => event,
    title: ({ title }) => title,
    subtitle: ({ subtitle }) => subtitle,
    cover: ({ cover }) => cover,

    loading: ({ loading }) => loading,
    next_page: (state) => ((state.total_pages - state.page) > 0) ? state.page + 1 : null,
    params: ({ per_page }, { next_page }) => (next_page) ? { params: { per_page,  page: next_page,  } } : { params: { per_page } },
    filtered_params: ({ type, date }, { params }) => (type || date) ? { params: { event_type: type, date, ...params.params } } : { ...params },

    types: ({ types }) => types,
    type: ({ type }) => type,
    date: ({ date }) => date,
    filter_bar: ({ filter_bar }) => filter_bar,
    
    booking: ({ booking }) => booking,
    name: ({ name }) => name,
    phone: ({ phone }) => phone,
    email: ({ email }) => email,
  },
  mutations: {
    'SET_EVENTS': (state, { more, data }) => (!!more) ? state.events.push(...data) : state.events = [...data],
    'SET_TITLE': (state, payload) => state.title = payload,
    'SET_EVENT': (state, payload) => state.event = payload,
    'SET_SUBTITLE': (state, payload) => state.subtitle = payload,
    'SET_COVER': (state, payload) => state.cover = payload,

    'SET_PAGE': (state, payload) => (payload) ? state.page = payload : state.page = null,
    'SET_TOTAL_PAGES': (state, payload) => (payload) ? state.total_pages = payload : state.total_pages = null,
    'SET_LOADING': (state, payload) => state.loading = (payload),

    'SET_FILTER_BAR': (state, payload) => state.filter_bar = (payload),
    'SET_TYPES': (state, payload) => state.types = payload,
    'SET_TYPE': (state, payload) => state.type = payload,
    'SET_DATE': (state, payload) => state.date = payload,

    'SET_BOOKING': (state, payload) => state.booking = payload,
    'SET_NAME': (state, payload) => state.name = payload,
    'SET_PHONE': (state, payload) => state.phone = payload,
    'SET_EMAIL': (state, payload) => state.email = payload,
  },
  actions: {
    getEvents: async ({ commit, getters }) => {

      commit('SET_LOADING', true)
      commit('SET_PAGE', 0)
      let { data } = await axios.get('events', getters.params)
      commit('SET_SUBTITLE', data.subtitle)
      commit('SET_COVER', data.featured_image)
      commit('SET_PAGE', data.page)
      commit('SET_TOTAL_PAGES', data.total_pages)
      commit('SET_TITLE', data.title)
      commit('SET_EVENTS', { more: false, data: data.events })
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
      commit('SET_PAGE', data.page)
      commit('SET_LOADING', false)

    },
    toggleFilterBar: ({ commit, getters }) => {
      commit('SET_FILTER_BAR', !getters.filter_bar)
      window.scrollTo({ top: 0 })
      document.body.classList.toggle('overflow-hidden')
      document.body.classList.toggle('touch-none')
    },
    toggleBooking: ({ commit, getters }, event) => {
      commit('SET_BOOKING', (!!event) ? event?.id : null)
      window.scrollTo({ top: 0 })
      document.body.classList.toggle('overflow-hidden')
      document.body.classList.toggle('touch-none')
    },
    setTypes: async({ commit }) => {
      commit('SET_TYPES', [
        { id: 'JAZZ', name: 'JAZZ' },
        { id: 'other', name: 'other' },
        { id: null, name: 'null' },
      ])
    },
    filterEvents: async ({ commit, getters }) => {
      commit('SET_LOADING', true)
      let { data } = await axios.get('events', getters.filtered_params)
      let { page, title, subtitle, featured_image, total_pages, events } = data
      commit('SET_PAGE', page )
      commit('SET_TITLE', title )
      commit('SET_SUBTITLE', subtitle )
      commit('SET_COVER', featured_image )
      commit('SET_TOTAL_PAGES', total_pages )
      commit('SET_EVENTS', { more: false, data: events } )
      commit('SET_LOADING', false )
    },
    book: async({ commit, getters, dispatch }) => {
      console.log('need book endpoint')
      dispatch('toggleBooking', null)
    },
  },
}




export default eventsModule