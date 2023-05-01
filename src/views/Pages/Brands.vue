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
                <p class="mt-2 leading-6 w-[600px] max-sm:w-[300px] max-sm:ml-10 max-sm:text-left">{{ introduction.pharagrap
                }}</p>
            </div>
        </div>
        <div class="flex flex-col">
            <div href="#" class="flex flex-col sm:flex-row  sm:items-center  justify-start">
                <img class="sm:w-[50%] h-[50%] " :src='facilities[0].img' alt="funicular">
                <div class="flex flex-col sm:w-[50%] w-[100%]  sm:h-[100%] h-[50%] justify-center ml-[8%]">
                    <img class=" sm:w-52 -mt-6 max-sm:w-[200px] mb-1 ml-[-17px] max-sm:mt-3 " :src="facilities[0].icon"
                        alt="">
                    <h3 class=" font-bold mb-3 sm:mb-6 uppercase text-2xl max-sm:-mt-3 ">
                        {{ facilities[0].name }}</h3>
                    <p class="mb-6 max-sm:mb-4 w-[70%] text-[18px] max-sm:w-[80%]">
                        {{ facilities[0].desc }}
                    </p>
                    <router-link :to="{ name: 'Brands' }" class="flex text-[15px] text-yellow-500 uppercase max-sm:mb-8">{{
                        more }}</router-link>

                </div>
            </div>
            <div href="#" class="flex sm:flex-row flex-col-reverse w-[100%]  justify-start">
                <div
                    class="flex flex-col mr-[7%] mt-14 w-[50%] max-sm:w-[100%] max-sm:ml-[26px] max-sm:justify-start items-end max-sm:items-start text-end max-sm:text-start  ">
                    <img class="w-48 max-sm:-mt-[70px] sm:ml-[-20px] -ml-2  " :src="facilities[1].icon" alt="">
                    <h3 class="font-bold sm:-mt-2 max-sm:-mt-6 text-2xl uppercase mb-4  ">
                        {{ facilities[1].name }}
                    </h3>
                    <p class=" mb-4 text-[18px] w-[70%] max-sm:w-[80%]">
                        {{ facilities[1].desc }}
                    </p>
                    <router-link :to="{ name: 'Brands' }" class="mb-8 text-[15px] uppercase text-yellow-500">
                        {{ more }}</router-link>
                </div>
                <img class="sm:w-[50%] " :src="facilities[1].img" alt="puri guliani">

            </div>
            <div href="#" class=" flex flex-col sm:flex-row  sm:items-center  justify-start">
                <img class="sm:w-[50%] h-[50%] " :src="facilities[2].img" alt="puri guliani express">
                <div class="flex flex-col sm:w-[50%] w-[100%]  sm:h-[100%] h-[50%] justify-center ml-[8%]">
                    <img class=" sm:w-52 sm:-mt-8 max-sm:w-[200px] -ml-5 -mt-2 " :src="facilities[2].icon" alt="">
                    <h3 class="font-bold mb-4 sm:mb-6 uppercase text-2xl -mt-5 max-sm:-mt-7">
                        {{ facilities[2].name }}
                    </h3>
                    <p class="mb-6 max-sm:mb-4 w-[70%] text-[18px] max-sm:w-[80%] ">
                        {{ facilities[2].desc }}</p>
                    <router-link :to="{ name: 'Brands' }" class="flex text-[15px] text-yellow-500 uppercase max-sm:mb-8"> {{
                        more }}</router-link>
                </div>
            </div>
            <div href="#" class="flex sm:flex-row flex-col-reverse w-[100%]  justify-start">
                <div
                    class="flex flex-col mr-[7%] mt-14 w-[50%] max-sm:w-[100%] max-sm:ml-[26px] max-sm:justify-start items-end max-sm:items-start text-end max-sm:text-start ">
                    <img class=" w-[65%] sm:mt-28 sm:mb-9 max-sm:-mt-8 mb-4" :src="facilities[3].icon" alt="">
                    <h3 class="font-bold text-2xl uppercase sm:mb-6 mb-5 ">
                        {{ facilities[3].name }} </h3>
                    <p class="mb-4 text-[18px] w-[70%] max-sm:w-[85%]">
                        {{ facilities[3].desc }} </p>
                    <router-link :to="{ name: 'Brands' }" class="mb-8 text-[15px] uppercase text-yellow-500">
                        {{ more }}</router-link>
                </div>
                <img class="sm:w-[50%] " :src="facilities[3].img" alt="rigi gastrodouqan">
            </div>
        </div>
    </mainLayout>
</template>