import axios from "axios";


const titlesModule = {
    namespaced: true,
    state() {
        return {

            frontPageApi: "https://gmt.javal.ge/wp-json/custom/v1/homepage/en",



            titles: [
                {
                    pageImg:null ,
                    sectionTitle: null,
                    introTitle: null,
                    introDescription: null,
                }
            ]


        }
    },
    getters: {
        titles(state) {
            return state.titles
        },

    },

    mutations:{
        storeFrontPageData(state, payload){
            state.titles[0].sectionTitle = payload.section_title
            state.titles[0].introTitle = payload.subtitle
            state.titles[0].introDescription = payload.description
            state.titles[0].pageImg = payload.cover_logo



            console.log(payload)
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

