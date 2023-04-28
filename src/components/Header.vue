<script setup>
import TopMenu from './TopMenu.vue';

const name = "GMT HOSPITALITY"
const travellersInsights = "Travellers insights"
</script>

<template>
  <header class="flex w-full h-[130px] justify-between items-center bg-black border-b-[1px] border-gray-600 px-4 md:px-10 lg:px-20">
    <div class="flex flex-col items-center justify-center">
      <p class="text-white text-2xl font-mainFont">{{ name }}</p>
      <p class="text-white text-[13px] font-fancyFont">{{ travellersInsights }}</p>
    </div>
    <TopMenu ></TopMenu> 
  </header>
</template>
