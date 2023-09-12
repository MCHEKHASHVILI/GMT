<script>
import { mapGetters, mapActions } from "vuex"
import MainLayout from "@/layouts/mainLayout.vue"
export default {
    components: {
        MainLayout,
    },
    computed: {
        name: {
            get(){ return this.$store.getters['contact/name'] },
            set(value){ this.$store.commit('contact/SET_NAME', value) }
        },
        topic: {
            get(){ return this.$store.getters['contact/topic'] },
            set(value){ this.$store.commit('contact/SET_TOPIC', value) }
        },
        phone: {
            get(){ return this.$store.getters['contact/phone'] },
            set(value){ this.$store.commit('contact/SET_PHONE', value) }
        },
        message: {
            get(){ return this.$store.getters['contact/message'] },
            set(value){ this.$store.commit('contact/SET_MESSAGE', value) }
        },
        ...mapGetters('contact', ['contact_info', 'topics', 'title'])
    },
    methods: {
        ...mapActions('contact', ['getContactInfo', 'sendContact']),
    },
    mounted() {
        this.getContactInfo()
    }
}
</script>
<template>
    <main-layout>
        <section class="container mx-auto w-full pb-28 md:pb-36 md:pt-8">
            <h1 class="text-center m-5 text-3xl font-bold uppercase" v-html="title"></h1>
            <div class="flex md:flex-row flex-col items-start justify-between space-y-4 md:space-x-4">
                <div class="w-full flex flex-col justify-between items-start space-y-5">
                    <div v-for="info in contact_info" class="flex flex-row">
                        <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center" v-html="(info && info?.icon) ? info.icon?.element : ''"></div>
                        <div class="flex flex-col justify-center pl-5">
                            <h4 class="text-base font-semibold text-[#797878]" v-html="info?.title"></h4>
                            <p class="text-sm font-semibold whitespace-nowrap" v-html="info?.content"></p>
                        </div>
                    </div>
                </div>
                <div class="w-full p-6 bg-[#575353] bg-opacity-40">
                    <form @submit.prevent="sendContact" class="flex flex-col space-y-4">
                        <input type="text" v-model="name" required class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-2" placeholder="Full Name"/>
                        <input type="text" v-model="phone" required class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-2" placeholder="Phone"/>
                        <select v-model="topic" required class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-2">
                            <option :value="null" class="text-[#0B0B0B] text-opacity-70 text-lg">Topic</option>
                            <option v-for="option in topics" :value="option?.title" class="text-[#0B0B0B] text-opacity-70 text-lg" v-html="option?.title"></option>
                        </select>
                        <textarea v-model="message" required rows="4" class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-2" placeholder="Description"></textarea>
                        <button type="submit" class="min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-2">SEND</button>
                    </form>
                </div>
            </div>
        </section>
    </main-layout>
</template>
