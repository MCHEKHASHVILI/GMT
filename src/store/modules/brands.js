import axios from "axios";

const ulr = `https://gmt.javal.ge/wp-json/custom/v1/brands/en`;

const brands = {
  namespaced: true,
  state: {
    brands: {},
  },
  actions: {
    async getBrands({ commit }) {
      const res = await axios.get(ulr);
      commit("SAVE_BRANDS", res.data);
    },
  
  },
  mutations: {
    SAVE_BRANDS(state, brands) {
      state.brands = brands;
    },

  },
  getters: {
    getBrands({ brands }) {
      return brands;
    },
  },
};

export default brands;