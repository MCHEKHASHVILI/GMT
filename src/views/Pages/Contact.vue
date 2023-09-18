<script>
import { mapGetters, mapActions } from "vuex"
import MainLayout from "@/layouts/mainLayout.vue"
import InputTextContact from "@/components/inputs/InputTextContact.vue"
export default {
    components: {
        MainLayout,
        InputTextContact,
    },
    computed: {
        name: {
            get() { return this.$store.getters['contact/name'] },
            set(value) { this.$store.commit('contact/SET_NAME', value) }
        },
        topic: {
            get() { return this.$store.getters['contact/topic'] },
            set(value) { this.$store.commit('contact/SET_TOPIC', value) }
        },
        phone: {
            get() { return this.$store.getters['contact/phone'] },
            set(value) { this.$store.commit('contact/SET_PHONE', value) }
        },
        message: {
            get() { return this.$store.getters['contact/message'] },
            set(value) { this.$store.commit('contact/SET_MESSAGE', value) }
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
                        <div>
                            <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center"
                                v-html="(info && info?.icon) ? info.icon?.element : ''"></div>
                        </div>
                        <div class="flex flex-col justify-center pl-5">
                            <h4 class="text-base font-semibold text-[#797878]" v-html="info?.title"></h4>
                            <p class="text-sm font-semibold" v-html="info?.content"></p>
                        </div>
                    </div>
                </div>
                <div class="w-full p-8 bg-[#F5F5F5] bg-opacity-40">
                    <form @submit.prevent="sendContact" class="flex flex-col space-y-4">
                        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <InputTextContact class="w-full" v-model="name" required label="full name" />
                            <InputTextContact class="w-full" v-model="phone" required label="Phone" />
                        </div>
                        <select v-model="topic" required
                            class="w-full min-h-full h-12 bg-transparent border border-[#707070] border-opacity-50 capitalize text-[#0B0B0B] text-opacity-60 px-4 py-2">
                            <option :value="null" class="text-[#0B0B0B] text-opacity-60 text-lg capitalize">General comment
                            </option>
                            <option v-for="option in topics" :value="option?.title"
                                class="text-[#0B0B0B] text-opacity-70 text-lg capitalize" v-html="option?.title"></option>
                        </select>
                        <textarea v-model="message" required rows="4"
                            class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-2"
                            placeholder="Message"></textarea>
                        <div class="flex justify-end">
                            <button type="submit"
                                class="w-full md:w-auto min-h-full bg-[#0B0B0B] border border-[#707070] border-opacity-50 px-8 py-2 text-[#CCA657]">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main-layout>
</template>
