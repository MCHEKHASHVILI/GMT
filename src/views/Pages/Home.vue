<script setup>
import { onMounted } from "vue"
import BrandsList from "@/components/sections/BrandsList.vue"
import mainLayout from "@/layouts/mainLayout.vue"
import useHome from "@/composables/useHome"

const {
  getHomePage,
  logo,
  subtitle,
  description,
  sectionTitle,
  brands
} = useHome()

onMounted(() => getHomePage())
onMounted(() => console.log(brands))

</script>
<template>
  <mainLayout>
    <div class="flex flex-col h-screen bg-black">
      <img class="m-auto md:w-2/5 w-11/12 text-center" src="/logos/sublogo.png">
    </div>
    <div class="flex flex-col bg-black">
      <div class="text-white text-left md:text-center w-3/5 mx-auto pb-4">
        <h3 class="font-mainFont font-extrabold text-center text-2xl md:text-3xl uppercase">{{ subtitle }}</h3>
        <p class="font-mainFont font-extrabold text-xl mt-4">{{ description }}</p>
        <div class="flex flex-row space-x-4 justify-center text-2xl font-bold text-opacity-70 mt-8 md:mt-2">
          <img src="/src/assets/icons/dining.svg">
          <h3 class="uppercase">{{ sectionTitle }}</h3>
        </div>
        <img class="my-8 mx-auto" src="/src/assets/icons/arrow.svg">
      </div>
    </div>
    <BrandsList :brands="brands" />
  </mainLayout>
</template>

