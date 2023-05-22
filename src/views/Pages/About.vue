<script setup>
import mainLayout from '../../layouts/mainLayout.vue'
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const staffs = computed(() => store.getters["about/getStaff"]);
onMounted(() => store.dispatch("about/getStaff"));


const informations = store.getters['about/getInformation']

</script>
<template>
  <main-layout>
    <div class="m-5">
      <div class="text-center  mx-auto text-left md:w-1/2 md:mt-16">
        <h1 class="mb-3 text-2xl font-hel_bold ">{{ informations.title }} </h1>
        <p class=" break-all font-hel_light ">{{ informations.description }}</p>
      </div>
    </div>
    <div class="m-5 md:mx-28  ">
      <div class="flex flex-col justify-around md:flex-row" v-for="staff in staffs.staff" :key="id">
        <div class="w-auto h-auto "> <img :src="staff?.featured_image"> </div>
        <div class="m-6">
          <h2 class="text-center text-2xl font-hel_medium md:text-left">{{ staff?.title }}</h2>
          <h3 class="my-3 relative font-hel_medium text-lg"> {{ staff?.position }}
            <div class="absolute bg-amber-500 h-0.5 w-12 "></div>
          </h3>
          <p class=" font-hel_light ">{{ staff?.description }} </p>
        </div>
      </div>
    </div>

  </main-layout>
</template>