import axios from "@/interceptors/axios"

const brandsModule = {
    namespaced: true,
    state() {
        return {
            brands: [],
            brand: null,
            title: null,
            description: null,
        }
    },
    getters: {
        brands: ({ brands }) => brands,
        brand: ({ brand }) => brand,
        title: ({ title }) => title,
        description: ({ description }) => description,
        contact: ({ brand }) => {
            
            const socials = {}

            for (const [ key, value ] of Object.entries({ ...brand?.social_networks })) {
                let [ label, variant ] = key.split('_')
                if(Object.keys(socials).includes(label)){
                    socials[label][variant] = value
                }else{
                    socials[label] = { }
                    socials[label][variant] = value 
                }
            }

            return { 
                basic: { ...brand?.contact },
                social: { ...socials }
            } 
        }
    },
    mutations:{
        "SET_BRANDS": (state, payload) => state.brands = payload,
        "SET_BRAND": (state, payload) => state.brand = payload,
        "SET_TITLE": (state, payload) => state.title = payload,
        "SET_DESCRIPTION": (state, payload) => state.description = payload,
    },
    actions: {
        getBrands: async ({ commit }) => {
            let { data: { brands, title, description } } = await axios.get('brands')
            commit("SET_BRANDS", brands)
            commit("SET_TITLE", title)
            commit("SET_DESCRIPTION", description)
        },
        getBrand: async ({ commit }, id) => {
            let { data } = await axios.get('brands/' + id)
            data.images = (data?.gallery) ? data?.gallery.map(item => item.url) : [] //["https://media-cdn.tripadvisor.com/media/photo-o/12/07/9f/c4/restaurant-funicular.jpg", "https://sakurageorgia.com/storage/app/media/uploaded-files/51830210_1163410307162283_286887846684393472_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/59816191_1216595945177052_844218183291240448_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/51830210_1163410307162283_286887846684393472_o.jpg","https://sakurageorgia.com/storage/app/media/uploaded-files/59816191_1216595945177052_844218183291240448_o.jpg"]
            commit("SET_BRAND", data)
        },
    }
}

export default brandsModule
