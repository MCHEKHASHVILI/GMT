<script setup>
import { onMounted } from "vue"
import BrandsList from "@/components/sections/BrandsList.vue"
import mainLayout from "@/layouts/mainLayout.vue"
import useHome from "@/composables/useHome"
import ApplicationLogo from "../../components/ApplicationLogo.vue";

const {
  getHomePage,
  logo,
  subtitle,
  description,
  sectionTitle,
  brands
} = useHome()

onMounted(() => getHomePage())

</script>
<template>
  
  <mainLayout>
    <ApplicationLogo class="flex flex-col py-[70%] md:py-0 md:h-screen bg-black"
      imgClass="m-auto md:w-2/5 w-11/12 text-center" />
    <div class="flex flex-col bg-black">
      <div class="text-[#FFFFFF] text-left md:text-center w-full px-4 md:px-0 md:w-3/5 md:mx-auto pb-4">
        <h3 class="text-center font-medium text-2xl md:text-3xl uppercase" v-html="subtitle"></h3>
        <div class="text-lg mt-4" v-html="description"></div>
        <div class="flex flex-row space-x-4 justify-center text-2xl font-bold text-opacity-70 mt-8 md:mt-2">
          <img src="/src/assets/icons/dining.svg">
          <h3 class="uppercase" v-html="sectionTitle"></h3>
        </div>
        <img class="my-8 mx-auto" src="/src/assets/icons/arrow.svg">
      </div>
    </div>
    <BrandsList :brands="brands" />
  </mainLayout>
</template>

