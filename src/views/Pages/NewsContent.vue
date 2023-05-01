<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
const newsContent = {
    img: 'https://images.pexels.com/photos/866398/pexels-photo-866398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    news: 'NEWS',
    img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjHVmlSyqMwa9M0uGgJjqJTKsJ-HkYPThfQ&usqp=CAU',
    img3: 'data:image/png;base64,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',
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
                <img :src="newsContent.img2" class="w-[1%] sm:w-639 order-1">
                <p class="ml-2 order-2 text-sm">15.03.2023</p>
                <img :src="newsContent.img3" class="w-[1%] h-[1%] ml-[2%] sm:w-639 sm:h-auto order-3">
                <p class="ml-2 text-sm order-4">258</p>
            </div>
            <h1 class="text-2xl font-bold mb-1">{{ newsContent.title }}</h1>
            <div class="text-base text-left mb-4">
                <p v-for="p in newsContent.paragraphs" class="mb-4 ">{{ p }}</p>
            </div>
        </div>
    </main-layout>
</template>
