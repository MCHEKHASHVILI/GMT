import axios from "axios";

const ulr = (id = "") =>
  `https://gmt.javal.ge/wp-json/custom/v1/vacancies${id}/en`;

const vacancies = {
  namespaced: true,
  state: {
    vacancies: {},
    vacancy: {},
  },
  actions: {
    async getVacancies({ commit }) {
      const res = await axios.get(ulr());
      commit("SAVE_VACANCIES", res.data);
    },
    async getSingleVacancy({ commit }, id) {
      const res = await axios.get(ulr("/" + id));
      commit("SAVE_SINGLE_VACANCY", res.data);
    },
  },
  mutations: {
    SAVE_VACANCIES(state, vacancies) {
      state.vacancies = vacancies;
    },
    SAVE_SINGLE_VACANCY(state, vacancy) {
      state.vacancy = vacancy;
    },
  },
  getters: {
    getVacancies({ vacancies }) {
      return vacancies;
    },
    getSingleVacancy({ vacancy }) {
      return vacancy;
    },
  },
};

export default vacancies;
