
<script setup>

import { computed} from "vue";
import { useStore } from "vuex";
const store = useStore()
const titles = computed(() => store.getters["titles/titles"])
const navbarComponents = computed(() => store.getters["navbar/navbarComponents"] )

const toggleResponsiveNavbar = () =>{
    store.commit("navbar/toggleResponsiveNavbar")
}
</script>

<template>
  <div class="w-screen h-screen bg-[#f5f5f5] absolute z-[1]   flex flex-col items-center md:hidden top-0 left-0">
    <div class="flex w-full h-[130px] justify-between items-center border-b-[2px] border-gray-300 px-4 md:px-10 lg:px-20" >
        <a href="/">  <div class=" text-black text-center cursor-pointer">
          <h1 class="font-mainFont font-  text-2xl uppercase"><span class="font-bold">{{ titles[0].pageTitle.slice(0,3) }}</span> {{ titles[0].pageTitle.slice(3) }} </h1>
          <p class="font-fancyFont font-extralight  text-[13px]">{{ titles[0].pageSubTitle }}</p>
        </div></a>

        <svg @click="toggleResponsiveNavbar" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-[60px] cursor-pointer m-[3%] h-[60px]" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
    </div>

    <ul class="text-center mt-[22%]">
        <li @click="toggleResponsiveNavbar"  class=" text-2xl cursor-pointer text-[#060606] font-semibold my-14"  v-for="component in navbarComponents"><router-link :to="component.routerLink">{{ component.name }}</router-link></li>

    </ul>
    

  </div>
</template>