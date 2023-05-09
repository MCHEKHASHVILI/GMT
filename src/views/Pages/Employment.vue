<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const vacancies = computed(() => store.getters["employment/getVacancies"]);
</script>
<template>
  <main-layout>
    <h1 class="text-center font-bold text-3xl pb-12 pt-[3%] uppercase">employment</h1> 
    <div class="w-full pb-[60%] md:pb-[7%]">
      <div
        class="grid gap-[2%] justify-center md:grid md:grid-cols-2 px-[10%] md:gap-[15px] md:pb-1.5"
      >
        <div
          v-for="vacancy in vacancies"
          class="w-full p-6 bg-white border border-gray-300 pb-[8%] md:pb-0 relative md:relative"
        >
          <div
            class="gap-[12%] md:gap-[7%] md:grid md:grid-cols-3 grid grid-cols-2"
          >
            <img class="h-12" :src="vacancy.company.logo" />
            <div class="translate-x-[-70%]">
              <h2 class="font-medium md:font-bold whitespace-nowrap">
                {{ vacancy.company.name }}
              </h2>
              <h2 class="font-medium md:font-bold">
                {{ vacancy.job.position }}
              </h2>
            </div>
            <div class="md:py-0 md:translate-x-[10%]">
              <h2 class="font-bold md:font-bold pb-[15%] md:pt-[14%]">
                {{ Object.values(vacancy.job.salary).join(" ") }}
              </h2>
            </div>
          </div>
          <p class="mb-3 font-hel_roman text-gray-700 dark:text-black">
            {{ vacancy.job.title }}
          </p>
          <div class="">
            <div class="pb-[3%] md:grid md:grid-cols-1">
              <p class="pb-1.5">
                <span class="font-medium md:font-bold">{{
                  vacancy.job.type
                }}</span>
                <span class="pl-[5%]">{{ vacancy.job.hours }}</span>
              </p>
            </div>
            <div class="grid gap-[20%] md:flex">
              <p class="md:w-[50%]">{{ vacancy.publishedAt }}</p>
              <div
                class="md:translate-y-[-40%] pb-[4%] md:w-[50%] md:translate-x-[10%]"
              >
                <router-link
                  :to="'/employment/' + vacancy.id"
                  class="hover:bg-black hover:text-yellow-500 inline-block items-center px-[37%] md:px-[25%] py-4 text-base text-center text-black bg-zinc-100"
                >
                  VIEW DETAILS
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>
