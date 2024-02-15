import axios from "@/interceptors/axios"

export default {
    namespaced: true,
    state() {
        return {
            contact_info: [],
            title: null,
            topic: null,
            name: null,
            phone: null,
            message: null,
            topics: [],
        }
    },
    getters: {
        contact_info: ({ contact_info }) => contact_info,
        topic: ({ topic }) => topic,
        title: ({ title }) => title,
        phone: ({ phone }) => phone,
        topics: ({ topics }) => topics,
        name: ({ name }) => name,
        message: ({ message }) => message,
    },
    mutations: { 
        "SET_STATE": (state, payload) => state[payload.key] = payload.value,
        "SET_CONTACT_INFO": (state, payload) => state.contact_info = payload,
        "SET_TOPICS": (state, payload) => state.topics = payload,
        "SET_TOPIC": (state, payload) => state.topic = payload,
        "SET_PHONE": (state, payload) => state.phone = payload,
        "SET_NAME": (state, payload) => state.name = payload,
        "SET_MESSAGE": (state, payload) => state.message = payload,
        "SET_TITLE": (state, payload) => state.title = payload,
        "RESET_FORM": (state) => {
            state.title = null
            state.topic = null
            state.name = null
            state.phone = null
            state.message = null
        },
    },
    actions: { 
        getContactInfo: async ({commit}) => {
            let { data } = await axios.get('contact')
            // console.log(data)
            commit("SET_CONTACT_INFO", data.contact_info)
            commit("SET_TOPICS", data.topics)
            commit("SET_TITLE", data.title)
        },
        sendContact: async ({commit, getters}) => {
            let { status } = await axios.post('email/contact',{
                fullname: getters.name,
                topic: getters.topic,
                message: getters.message,
                phone: getters.phone,
            })
            if(status === 200){
                commit("RESET_FORM")
            }
        },
    },
}