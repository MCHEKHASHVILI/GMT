<script setup>
import { onMounted } from "vue"
import useContact from "@/composables/useContact"
import MainLayout from "@/layouts/mainLayout.vue"
import InputTextContact from "@/components/inputs/InputTextContact.vue"
const {
    contact_info,
    topics,
    title,
    name,
    topic,
    phone,
    message,
    getContactInfo,
    sendContact,
    isSocial,
} = useContact()
onMounted(() => {
    getContactInfo()
})
</script>
<template>
    <main-layout>
        <section class="container mx-auto w-full pb-28 md:pb-36 md:pt-8">
            <h1 class="text-center m-5 text-3xl font-bold uppercase" v-html="title" />
            <div class="flex md:flex-row flex-col items-start justify-between space-y-4 md:space-x-4">
                <div class="w-full flex flex-col justify-between items-start space-y-5">
                    <div v-for="info in contact_info" class="flex flex-row">
                        <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center" v-html="(info && info?.icon) ? info.icon?.element : null" />
                        <div class="flex flex-col justify-center pl-5">
                            <h4 class="text-base font-semibold text-[#797878]" v-html="info?.title" />
                            <a v-if="isSocial(info)" :href=info.content v-text="info?.content" />
                            <p v-else class="text-sm font-semibold" v-html="info?.content" />
                        </div>
                    </div>
                </div>
                <div class="w-full p-8 bg-[#F5F5F5] bg-opacity-40">
                    <form @submit.prevent="sendContact" class="flex flex-col space-y-4">
                        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <InputTextContact class="w-full capitalize" v-model="name" required :label="$t('placeholders.name')" />
                            <InputTextContact class="w-full capitalize" v-model="phone" required :label="$t('placeholders.phone')" />
                        </div>
                        <select v-model="topic" required
                            class="w-full min-h-full h-12 bg-transparent border border-[#707070] border-opacity-50 capitalize text-[#0B0B0B] text-opacity-60 px-4 py-2">
                            <option :value="null" class="text-[#0B0B0B] text-opacity-60 text-lg capitalize" v-text="$t('placeholders.comment')" />
                            <option v-for="option in topics" :value="option?.title"
                                class="text-[#0B0B0B] text-opacity-70 text-lg capitalize" v-html="option?.title"></option>
                        </select>
                        <textarea v-model="message" required rows="4"
                            class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-2 capitalize"
                            :placeholder="$t('placeholders.message')"></textarea>
                        <div class="flex justify-end">
                            <button type="submit"
                                class="w-full md:w-auto min-h-full bg-[#0B0B0B] border border-[#707070] border-opacity-50 px-8 py-2 text-[#CCA657] uppercase">{{ $t('buttons.send') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main-layout>
</template>
