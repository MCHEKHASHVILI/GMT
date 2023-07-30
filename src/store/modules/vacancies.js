import axios from "@/interceptors/axios"

const vacanciesModule = {
  namespaced: true,
    state() {
      return {
          vacancies: [],
          vacancy: null,
          title: null,
      }
  },
  getters: {
    vacancies: ({ vacancies }) => vacancies,
    vacancy: ({ vacancy }) => vacancy,
    title: ({ title }) => title,
  },
  mutations: {
    "SET_VACANCIES": (state, payload) => state.vacancies = payload,
    "SET_VACANCY": (state, payload) => state.vacancy = payload,
    "SET_TITLE": (state, payload) => state.title = payload,
  },
  actions: {
    async getVacancies({ commit }) {
      let { data: { title, vacancies } } = await axios.get('vacancies')
      commit("SET_VACANCIES", vacancies);
      commit("SET_TITLE", title);
    },
    async getVacancy({ commit }, id) {
      let { data } = await axios.get('vacancies/' + id)
      commit("SET_VACANCY", data);
    },
  },
};

export default vacanciesModule;
