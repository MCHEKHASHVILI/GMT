<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
import iconCallendar from "../../components/icons/iconCallendar.vue";
import iconEye from '../../components/icons/iconEye.vue'

import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const news = computed(() =>
    store.getters["news/getNewsById"](+route.params.id)
);

const newsContent = computed(() =>
    store.getters["news/getNewsContentByParagraph"](+route.params.id)
);
</script>

<template>
    <main-layout>
        <div class="flex flex-col mx-10 md:mx-20">
            <div class="hidden max-sm:block">
                <h1 class="text-center font-hel_bold  mt-10">NEWS</h1>
            </div>
            <img :src="news.img" class="mt-5" alt="">
            <div class="flex flex-row items-center ">
                <div class="flex items-center">
                    <iconCallendar class="mr-2"/>
                    <span> {{ news.date }} </span>
                </div>
                <div class=" py-3 px-6 flex items-center">
                    <iconEye class="mr-2"/>
                    <span> {{ news.views }} </span>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </div>
            <h1 class="text-2xl font-hel_bold  mb-1  max-sm:text-lg ">{{ news.title }}</h1>
            <div class="text-base text-left mb-4">
                <p v-for="p in newsContent" class="mb-4">{{ p }}</p>
            </div>
        </div>
    </main-layout>
</template>