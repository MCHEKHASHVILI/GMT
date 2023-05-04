<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
const newsContent = {
    img: 'https://images.pexels.com/photos/866398/pexels-photo-866398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    news: 'NEWS',
    title: 'UNWTO UPDATE PROJECTIONS OF THE IMPACT OF COVID-19 ON TOURISM',
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
        <div class="flex flex-col mx-[8%] ">
            <div class="hidden max-sm:block ">
                <h1 class="text-center font-bold mt-[10%]">{{ newsContent.news }}</h1>
            </div>
            <img :src="newsContent.img" class="mt-5 mb-8" alt="">
            <div class="flex flex-row flex items-center ">
                <p class="ml-2 order-2 text-sm">15.03.2023</p>
                <p class="ml-2 text-sm order-4">258</p>
            </div>
            <h1 class="text-2xl font-bold mb-1">{{ newsContent.title }}</h1>
            <div class="text-base text-left mb-4">
                <p v-for="p in newsContent.paragraphs" class="mb-4 ">{{ p }}</p>
            </div>
        </div>
    </main-layout>
</template>
