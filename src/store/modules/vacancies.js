import axios from "@/interceptors/axios"

const vacanciesModule = {
  namespaced: true,
    state() {
      return {
          vacancies: [],
          vacancy: null,
          title: null,

          page: null,
          next_page: null,
          per_page: 5,
          total_pages: null,
          loading: false,
      }
  },
  getters: {
    vacancies: ({ vacancies }) => vacancies,
    vacancy: ({ vacancy }) => vacancy,
    title: ({ title }) => title,

    loading: ({ loading }) => loading,
    next_page: ({ next_page }) => next_page,
    params: ({ per_page, next_page }) => (next_page) ? { params: { per_page, page: next_page } } : { params: { per_page } }
  },
  mutations: {
    "SET_VACANCIES": (state, { more, data }) => (!!more) ? state.vacancies.push(...data) : state.vacancies = [...data],
    "SET_VACANCY": (state, payload) => state.vacancy = payload,
    "SET_TITLE": (state, payload) => state.title = payload,

    'SET_PAGE': (state, payload) => (payload) ? state.page = payload : state.page = null,
    'SET_NEXT_PAGE': (state) => ((state.total_pages - state.page) > 0) ? state.next_page = state.page + 1 : state.next_page = null,
    'SET_TOTAL_PAGES': (state, payload) => (payload) ? state.total_pages = payload : state.total_pages = null,
    'SET_LOADING': (state, payload) => state.loading = (payload),
  },
  actions: {
    async getVacancies({ commit, getters }) {

      commit('SET_LOADING', true)
      let { data: { title, vacancies, page, total_pages } } = await axios.get('vacancies', getters.params)
      commit("SET_VACANCIES", { more: false, data: vacancies });
      commit("SET_TITLE", title);
      commit('SET_PAGE', page)
      commit('SET_TOTAL_PAGES', total_pages)
      commit('SET_NEXT_PAGE')
      commit('SET_LOADING', false)

    },
    async getVacancy({ commit }, id) {
      commit('SET_LOADING', true)
      let { data } = await axios.get('vacancies/' + id)
      commit("SET_VACANCY", data);
      commit('SET_LOADING', false)
    },
    getMore: async ({ commit, getters }) => {

      commit('SET_LOADING', true)
      let { data: { vacancies, page } } = await axios.get('vacancies', getters.params)
      commit('SET_VACANCIES', { more: true, data: vacancies })
      commit('SET_PAGE', page )
      commit('SET_NEXT_PAGE')
      commit('SET_LOADING', false)

    }
  },
};

export default vacanciesModule;
