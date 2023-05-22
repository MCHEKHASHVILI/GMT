import axios from "axios";

const brandsModule = {
    namespaced: true,
    state() {
        return {
            singleBrandApi: `https://gmt.javal.ge/wp-json/custom/v1/brands/`,
            frontPageApi: "https://gmt.javal.ge/wp-json/custom/v1/homepage/en",
            brandsApi: "https://gmt.javal.ge/wp-json/custom/v1/brands/en",
            testGallery: ["https://media-cdn.tripadvisor.com/media/photo-o/12/07/9f/c4/restaurant-funicular.jpg", "https://sakurageorgia.com/storage/app/media/uploaded-files/51830210_1163410307162283_286887846684393472_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/59816191_1216595945177052_844218183291240448_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/51830210_1163410307162283_286887846684393472_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/59816191_1216595945177052_844218183291240448_o.jpg"],
            brands: null,
            singleBrandData: null,
        }
    },


    getters: {
        testGallery: state => state.testGallery,
        brands: state => state.brands,
        singleBrandData: state => state.singleBrandData,

    },

    mutations:{
        storeFrontPageData(state, payload){
            state.brands = payload


        },

        storeBrandsData(state, payload){

            state.brandsContent = payload
        },

        storeSingleBrandData(state, payload){

            state.singleBrandData = payload
            console.log(state.singleBrandData)

        }

    },

    actions: {
        getSingleBrandData({commit, state}, key){
            axios.get(state.singleBrandApi+key+'/ka')
                .then(result => commit("storeSingleBrandData", result.data) )
        },
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
