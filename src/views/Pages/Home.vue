<script setup>
import BrandsList from "../../components/sections/BrandsList.vue";
import mainLayout from "../../layouts/mainLayout.vue";
import { computed} from "vue";
import { useStore } from "vuex";
const store = useStore()
const titles = computed(() => store.getters["titles/titles"])


</script>
<template>
  <mainLayout >
    <div class="flex flex-col h-screen bg-black">
      <div class="flex grow">
        <div class="m-auto text-white text-center">
          <h1 class="font-mainFont font-extrabold text-5xl uppercase">{{ titles[0].pageTitle }}</h1>
          <h2 class="font-fancyFont text-3xl">{{ titles[0].pageSubTitle }}</h2>
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-black">
      <div class="text-white text-left md:text-center w-3/5 mx-auto pb-4">
        <h3 class="font-mainFont font-extrabold text-center text-2xl md:text-3xl uppercase">{{ titles[0].introTitle }}</h3>
        <p class="font-mainFont font-extrabold text-xl mt-4">{{ titles[0].introDescription }}</p>
        <div class="flex flex-row space-x-4 justify-center text-2xl font-bold text-opacity-70 mt-8 md:mt-2">
          <img src="/src/assets/icons/dining.svg">
          <h3 class="uppercase">{{ titles[0].sectionTitle }}</h3>
        </div>
        <img class="my-8 mx-auto" src="/src/assets/icons/arrow.svg">
      </div>
    </div>
    <BrandsList />
  </mainLayout>
</template>

