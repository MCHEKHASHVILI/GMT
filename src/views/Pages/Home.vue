<script setup>
import BrandsList from "@/components/sections/BrandsList.vue"
import mainLayout from "@/layouts/mainLayout.vue"
import useHome from "@/composables/useHome"

const { homePage } = useHome()

</script>
<template>
  <mainLayout>
    <div class="flex flex-col h-screen bg-black">
      <img class="m-auto md:w-2/5 w-11/12 text-center" :src=homePage?.cover_logo>
    </div>
    <div class="flex flex-col bg-black">
      <div class="text-white text-left md:text-center w-3/5 mx-auto pb-4">
        <h3 class="font-mainFont font-extrabold text-center text-2xl md:text-3xl uppercase">{{ homePage?.subtitle }}</h3>
        <p class="font-mainFont font-extrabold text-xl mt-4">{{ homePage?.description }}</p>
        <div class="flex flex-row space-x-4 justify-center text-2xl font-bold text-opacity-70 mt-8 md:mt-2">
          <img src="/src/assets/icons/dining.svg">
          <h3 class="uppercase">{{ homePage?.section_title }}</h3>
        </div>
        <img class="my-8 mx-auto" src="/src/assets/icons/arrow.svg">
      </div>
    </div>
    <BrandsList :brands="homePage.brands" />
  </mainLayout>
</template>

