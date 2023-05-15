import axios from "axios";

const brandsModule = {
    namespaced: true,
    state() {
        return {

            frontPageApi: "https://gmt.javal.ge/wp-json/custom/v1/homepage/en",



            brands: [
                {
                    id: 1,
                    img: null,
                    icon: null,
                    name: null,
                    description:
                        null,

                    mainImg: "https://i.imgur.com/EdMolig.png",
                    conceptDescription: {
                        firstPart:"The magnificent building of Funicular Complex was built in 1938. Since then it is an architectural landmark and the trademark of Tbilisi.The building itself was built by the project of Georgian architects Zakaria and Nadezhda Kurdiani (coauthor A.Valabuev).",
                        secondPart: 'Funicular complex is a prominent venue in several Georgian cult movies such as: "Nag", "Day Last, Day First", and "Encounter in the Mountain".',
                        lastPart: "Nowadays Funicular Complex is owned by GMT Group and includes 4 separate dining facilities: Tbilisi's legendary restaurant Funicular with its fascinating Ballroom, traditional Georgian restaurant Chela and café Funicular. Each outlet is conceptually different and unique from one another with its delicious cuisine, distinctive service and the cozy interior.",
                    },

                    galerry: ["https://media-cdn.tripadvisor.com/media/photo-o/12/07/9f/c4/restaurant-funicular.jpg", "https://sakurageorgia.com/storage/app/media/uploaded-files/51830210_1163410307162283_286887846684393472_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/59816191_1216595945177052_844218183291240448_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/51830210_1163410307162283_286887846684393472_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/59816191_1216595945177052_844218183291240448_o.jpg"]

                },
                {
                    id: 2,
                    img: "/src/assets/images/puri_guliani.png",
                    icon: "/src/assets/logos/puri_guliani.svg",
                    name: "puri guliani",
                    description:
                        "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
                },


            ]
        }
    },
    getters: {
        brands: state => state.brands,

    },

    mutations:{
        storeFrontPageData(state, payload){
            for(let a=0; a<payload.brands.length;a++){
                state.brands[a].img = payload.brands[a].featured_image
                state.brands[a].icon = payload.brands[a].logo
                state.brands[a].name = payload.brands[a].title
                state.brands[a].description = payload.brands[a].description



            }

        }

    },

    actions: {

        fetchFrontPageData({commit, state}){
            axios.get(state.frontPageApi)
                .then(result => commit("storeFrontPageData",result.data))

        }

    }




}

export default brandsModule