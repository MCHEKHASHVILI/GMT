import axios from "axios";


const titlesModule = {
    namespaced: true,
    state() {
        return {

            frontPageApi: "https://gmt.javal.ge/wp-json/custom/v1/homepage/en",



            titles: null


        }
    },
    getters: {
        titles(state) {
            return state.titles
        },

    },

    mutations:{
        storeFrontPageData(state, payload){

            state.titles = payload
            console.log(state)
        }
    },

    actions: {

        fetchFrontPageData({commit, state}){
            axios.get(state.frontPageApi)
                .then(result => commit("storeFrontPageData",result.data))

        }

    }
}

export default titlesModule

