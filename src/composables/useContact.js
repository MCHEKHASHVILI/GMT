import { computed } from "vue"
import { useStore } from "vuex"
export default function useContact() {
    const store = useStore()
    const contact_info = computed(() => store.getters['contact/contact_info'])
    const topics = computed(() => store.getters['contact/topics'])
    const title = computed(() => store.getters['contact/title'])
    const name = computed({
        get: () => store.getters['contact/name'],
        set(value) { store.commit('contact/SET_STATE', { key: "name", value: value }) }
    })
    const topic = computed({
        get: () => store.getters['contact/name'],
        set(value) { store.commit('contact/SET_STATE', { key: "topic", value: value }) }
    })
    const phone = computed({
        get: () => store.getters['contact/name'],
        set(value) { store.commit('contact/SET_STATE', { key: "phone", value: value }) }
    })
    const message = computed({
        get: () => store.getters['contact/name'],
        set(value) { store.commit('contact/SET_STATE', { key: "message", value: value }) }
    })
    function getContactInfo() {
        store.dispatch("contact/getContactInfo")
    }
    function sendContact(payload) {
        store.dispatch("contact/sendContact", payload)
    }

    return {
        contact_info,
        topics,
        title,
        name,
        topic,
        phone,
        message,
        getContactInfo,
        sendContact
    }

}