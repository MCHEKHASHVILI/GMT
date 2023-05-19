import axios from "axios";

const brandsModule = {
    namespaced: true,
    state() {
        return {

            frontPageApi: "https://gmt.javal.ge/wp-json/custom/v1/homepage/en",
            brandsApi: "https://gmt.javal.ge/wp-json/custom/v1/brands/en",
            testGallery: ["https://media-cdn.tripadvisor.com/media/photo-o/12/07/9f/c4/restaurant-funicular.jpg", "https://sakurageorgia.com/storage/app/media/uploaded-files/51830210_1163410307162283_286887846684393472_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/59816191_1216595945177052_844218183291240448_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/51830210_1163410307162283_286887846684393472_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/59816191_1216595945177052_844218183291240448_o.jpg"],
            brandsContent: null,
            brands: null,
        }
    },


    getters: {
        testGallery: state => state.testGallery,
        brands: state => state.brands,
        brandsContent: state => state.brandsContent,

    },

    mutations:{
        storeFrontPageData(state, payload){
            state.brands = payload


        },

        storeBrandsData(state, payload){

            state.brandsContent = payload


        }

    },

    actions: {
        fetchFrontPageData({commit, state}){
            axios.get(state.frontPageApi)
                .then(result => commit("storeFrontPageData",result.data))
        },

        fetchBrandsData({commit, state}){
            axios.get(state.brandsApi)
                .then(result => commit("storeBrandsData", result.data))

        }

    }
}

export default brandsModule
