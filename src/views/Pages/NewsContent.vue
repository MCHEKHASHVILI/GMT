<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const news = computed(() =>
  store.getters["news/getNewsById"](+route.params.id)
);

const newsContent = {
    paragraphs: [
        `Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. At fugiat
                    tempora
                    quaerat quisquam, quo iste quibusdam! Adipisci esse maxime saepe veniam id enim, illo, alias similique
                    blanditiis ut nisi vero.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At fugiat tempora quaerat quisquam, quo iste
                    quibusdam! Adipisci esse maxime saepe veniam id eni illo,blanditiis ut nisi vero.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ad nisi quia provident temporibus,
                    quaerat similique facilis. Impedit eum vitae molestias  maxime iure.`,

        `Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. At fugiat
                    tempora
                    quaerat quisquam, quo iste quibusdam! Adipisci esse maxime saepe veniam id enim, illo, alias similique
                    blanditiis ut nisi vero.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At fugiat tempora quaerat quisquam, quo iste
                    quibusdam! Adipisci esse maxime saepe veniam id eni illo,blanditiis ut nisi vero.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta culpa accusamus impedit sit
                    cum dolore dolores nostrum nisi? Quibusdam.`,

        `Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. At fugiat
                    tempora
                    quaerat quisquam, quo iste quibusdam! Adipisci esse maxime saepe veniam id enim, illo, alias similique
                    blanditiis ut nisi vero.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At fugiat tempora quaerat quisquam, quo iste
                    quibusdam! Adipisci esse maxime saepe veniam id eni illo,blanditiis ut nisi vero.
                    Lorem ipsum .`,

        `Lorem ipsum dolor sit
                    amet
                    consectetur, adipisicing elit. At fugiat
                    tempora
                    quaerat quisquam, quo iste quibusdam! Adipisci esse maxime saepe veniam id enim, illo, alias similique
                    blanditiis ut nisi vero.`

    ]
}
</script>

<template>
    <main-layout>
        <div class="flex flex-col mx-10 md:mx-20">
            <div class="hidden max-sm:block">
                <h1 class="text-center font-hel_bold  mt-10">NEWS</h1>
            </div>
            <img :src="news.img" class="mt-5" alt="">
            <div class="flex flex-row flex items-center ">
                <span class=" bottom-0 left-0 font-serif py-3 px-4 rounded"
                    style="font-size: 0.8em;">
                    <i class=" fas fa-calendar" style="color: #241f31;"></i>
                    {{ news.date }}
                </span>
                <span class=" bottom-0 right-0  font-serif py-3 px-4 rounded"
                    style="font-size: 0.8em;">
                    <i class="fas fa-eye" style="color: #241f31;"></i>
                    {{ news.views }}
                </span>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </div>
            <h1 class="text-2xl font-hel_bold  mb-1  max-sm:text-lg ">{{ news.title }}</h1>
            <div class="text-base text-left mb-4">
                <p v-for="p in newsContent.paragraphs" class="mb-4">{{ p }}</p>
            </div>
        </div>
    </main-layout>
</template>n