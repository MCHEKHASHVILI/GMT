import axios from "axios";

const ulr = (id = "") =>
  `https://gmt.javal.ge/wp-json/custom/v1/news${id}/en`;

const news = {
  namespaced: true,
  state: {
    news: [],
    singleNews: {},
  },
  actions: {
    async getNews({ commit }) {
      const res = await axios.get(ulr());
      commit("SAVE_NEWS", res.data);
    },
    async getSingleNews({ commit }, id) {
      const res = await axios.get(ulr("/" + id));
      console.log(res.data);
      commit("SAVE_SINGLE_NEWS", res.data);
    },
  },
  mutations: {
    SAVE_NEWS(state, news) {
      state.news = news;
    },
    SAVE_SINGLE_NEWS(state, singleNews) {
      state.singleNews = singleNews;
    },
  },
  getters: {
    getNews({ news }) {
      return news;
    },
    getSingleNews({ singleNews }) {
      return singleNews;
    },
  },
};

export default news;