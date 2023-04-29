<script setup>
import mainLayout from '../../layouts/mainLayout.vue';
const introduction = {
    title: 'brands',
    pharagrap: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, reiciendis accusamus atque, 
                    voluptate quam quo itaque nihil optio reprehenderit molestiae mollitia hic laudantium, nulla tenetur unde?
                    Ullam odit quam inventore ducimus eius nostrum minima temporibus, tempore,  nam facilis, debitis corrupti
                    neque ipsa non!.`
}
const facilities = [
    {
        name: 'funicular',
        desc:
            `Lorem ipsum  dolor sit amet consectetur adipisicing elit.
             Ratione modi sint optio, iste molestias pariatur, 
             eaque similique aperiam nulla recusandae sed.Praesentium, 
             
             consectetur perspiciatis a obcaecati eius ut corporis molestias 
             itaque cupiditate facilis nostrum nam repellendus, vel totam ipsa 
             alias iure autem pariatur,blanditiis aliquam non quis illum commodi!
              Doloribus explicabo dignissimos vero cum harum facer unde.`,
        img: 'https://global.discourse-cdn.com/standard17/uploads/threejs/original/3X/7/1/7159ad834d6f370550c6ae51eb6566eb1e1340b1.png',
        icon: 'https://i.ibb.co/wCT03tr/596e27ljb1c75l4-removebg-preview.png'
    },
    {
        name: 'puri guliani',
        desc:
            `Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aspernatur fuga totam illo odit facere impedit, doloribus
              blanditiis dolorem. Cumque nihil rem commodi quidem? Sequi molestias dolorem ipsa fugiat voluptatem
              sint deleniti fugit accusantium corporis ad, exercitationem labore quam aperiam provident quibusdam quaerat 
              iste? Similique enim fuga omnis quibusdam a consectetur eligendi? Cumque facilis nobis pariatur suscipit nesciunt`,
        img: 'https://global.discourse-cdn.com/standard17/uploads/threejs/original/3X/7/1/7159ad834d6f370550c6ae51eb6566eb1e1340b1.png',
        icon: 'https://i.imgur.com/YdLM7hD.png'
    },
    {
        name: 'puri guliani express',
        desc:
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga totam illo odit facere impedit, 
            doloribus blanditiis dolorem. Cumque nihil rem commodi quidem? Sequi molestias dolorem ipsa fugiat voluptatem sint deleniti fugit
            accusantium corporis ad, exercitationem labore quam aperiam provident  quibusdam quaerat iste? Similique
             enim fuga omnis quibusdam a consectetur eligendi? Cumque facilis nobis pariatur suscipit nesciunt`,
        img: 'https://global.discourse-cdn.com/standard17/uploads/threejs/original/3X/7/1/7159ad834d6f370550c6ae51eb6566eb1e1340b1.png',
        icon: 'https://i.imgur.com/T26hDxW.png'
    },
    {
        name: 'rigi gastrodouqan',
        desc:
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga totam illo odit facere impedit, doloribus 
             blanditiis dolorem. Cumque nihil rem commodi quidem? Sequi molestias dolorem ipsa fugiat
             voluptatem sint deleniti fugit accusantium corporis ad, exercitationem labore quam.`,
        img: 'https://global.discourse-cdn.com/standard17/uploads/threejs/original/3X/7/1/7159ad834d6f370550c6ae51eb6566eb1e1340b1.png',
        icon: 'https://i.imgur.com/YtYjJD8.png'
    }

]
const more = 'read more'
</script>
<template>
    <mainLayout>
        <div class="bg-gray-100 max-sm:w-310 max-sm:h-[330px] h-[260px] ">
            <div class=" text-center absolute sm:top-44 sm:left-[470px] max-sm:top-40 max-sm:w-96">
                <h2 class=" uppercase font-bold text-2xl "> {{ introduction.title }}</h2>
                <p class="mt-2 leading-6 w-[600px] max-sm:w-[300px] max-sm:ml-10 max-sm:text-left">{{ introduction.pharagrap }}</p>
            </div>
        </div>
        <div class="flex flex-col">
            <div href="#" class="flex flex-col items-center bg-white sm:flex-row ">
                <img class="object-cover w-full sm:max-w-[760px] sm:h-auto" :src='facilities[0].img' alt="funicular">
                <div class="flex flex-col justify-between w-full sm:w-auto sm:pl-24 px-4 max-sm:relative">
                    <img class=" w-44 -mt-6 mx-auto sm:mx-0 max-sm:absolute max-sm:top-8 " :src="facilities[0].icon" alt="">
                    <h5
                        class=" text-gray-900  uppercase mb-6 mt-1 text-center sm:text-left font-bold text-2xl ml-4 max-sm:text-left max-sm:mt-[120px]">
                        {{ facilities[0].name }}</h5>
                    <p
                        class="text-black w-full sm:w-[400px] leading-6 tracking-tighter mb-3 text-center sm:text-left ml-4 max-sm:text-left max-sm:w-80 max-sm:text-xl">
                        {{ facilities[0].desc }}
                    </p>
                    <span class="text-yellow-500 ml-5 max-sm:text-xl max-sm:uppercase max-sm:mt-4">{{ more }}</span>

                </div>
            </div>
            <div href="#" class="flex flex-col items-center bg-white  sm:flex-row  ">
                <div class="flex flex-col justify-between pr-24 w-full sm:relative">
                    <img class="w-44 sm:absolute sm:left-[475px] sm:-top-9 max-sm:ml-8 " :src="facilities[1].icon" alt="">
                    <h5
                        class="text-2xl font-bold text-gray-900 sm:text-right max-sm:ml-9 max-sm:-mt-5 uppercase sm:mb-8 max-sm:mb-6 sm:mt-32 mr-4 ">
                        {{ facilities[1].name }}
                    </h5>
                    <p
                        class=" text-black sm:text-right sm:w-[455px] leading-6 sm:ml-48 tracking-tighter mb-3  max-sm:text-xl max-sm:ml-9 max-sm:w-80 ">
                        {{ facilities[1].desc }}
                    </p>
                    <span
                        class="text-yellow-500 sm:text-right mr-4 max-sm:mt-4 max-sm:ml-9 max-sm:uppercase max-sm:text-xl ">
                        {{ more }}</span>
                </div>
                <img class="object-cover w-full sm:max-w-[760px] sm:h-auto sm:w-full " :src="facilities[1].img"
                    alt="puri guliani">

            </div>
            <div href="#" class="flex flex-col items-center bg-white sm:flex-row ">
                <img class="object-cover w-full sm:h-auto sm:w-full sm:max-w-[760px]  " :src="facilities[2].img"
                    alt="puri guliani express">
                <div class="flex flex-col justify-between w-full sm:w-auto sm:pl-24 px-4 max-sm:relative">
                    <img class="w-44 -mt-3" :src="facilities[2].icon" alt="">
                    <h5 class=" text-2xl font-bold  text-gray-900 uppercase mb-6 mt-1 ml-5 max-sm:-mt-5">
                        {{ facilities[2].name }}
                    </h5>
                    <p class=" w-[400px] leading-6 tracking-tighter ml-5 mb-3 max-sm:text-xl max-sm:w-80  ">
                        {{ facilities[2].desc }}</p>
                    <span class="text-yellow-500 ml-5 max-sm:uppercase max-sm:text-xl max-sm:mt-4 "> {{ more }}</span>
                </div>
            </div>
            <div href="#" class="flex flex-col items-center bg-white sm:flex-row  ">
                <div class="flex flex-col justify-between pr-24 w-full sm:relative ">

                    <img class="w-96 sm:absolute left-[260px] top-14 max-sm:ml-9 max-sm:mb-5" :src="facilities[3].icon"
                        alt="">
                    <h5
                        class="mb-2 text-2xl font-bold text-gray-900 sm:text-right max-sm:ml-9 uppercase mb-4 sm:mt-28 mr-4">
                        {{ facilities[3].name }} </h5>
                    <p
                        class="text-black sm:text-right sm:w-[455px] leading-6 sm:ml-48 max-sm:ml-9 tracking-tighter mb-3 max-sm:text-xl max-sm:w-80">
                        {{ facilities[3].desc }} </p>
                    <span
                        class="text-yellow-500 sm:text-right mr-4 max-sm:text-xl max-sm:ml-9 max-sm:uppercase max-sm:mt-4">
                        {{ more }}</span>
                </div>
                <img class="object-cover w-full  sm:h-auto sm:w-full sm:max-w-[760px] " :src="facilities[3].img"
                    alt="rigi gastrodouqan">
            </div>
        </div>
    </mainLayout>
</template>