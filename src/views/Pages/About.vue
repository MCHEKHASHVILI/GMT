<script setup>
import mainLayout from '../../layouts/mainLayout.vue'
import { useStore } from 'vuex';


const store = useStore()
const cards = store.getters['about/getCard']
const informations = store.getters['about/getInformation']

</script>
<template>
  <main-layout>
    <div class="m-5 md:mx-56  ">
      <div class=" w-full  text-center  mx-auto text-left md:w-1/2 md:mt-16">
        <h1 class="mb-3 text-2xl font-hel_medium font-hel_bold ">{{ informations.title }} </h1>
        <p class=" break-all font-hel_light ">{{ informations.description }}</p>
      </div>
    </div>

    <div class="mx-5 my-10  md:mx-28 md:my-16 md:flex " v-for="card in cards" :key="card.id">
      <div class="flex-shrink-0 ">
        <img class="h-full w-full md:w-80" :src="card?.image">
      </div>
      <div class="md:mx-6">
        <h2 class="text-center my-4 text-2xl font-hel_medium md:text-left">{{ card?.name }}</h2>
        <h3 class="relative font-hel_bold text-lg"> {{ card?.title }}
          <div class="absolute bg-amber-500 h-0.5 w-12 my-2"></div>
        </h3>
        <p class="mt-6 font-hel_light ">{{ card?.description }} </p>
      </div>
    </div>
  </main-layout>
</template>