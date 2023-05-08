<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const vacancy = computed(() =>
  store.getters["employment/getVacancyById"](+route.params.id)
);
</script>
<template>
  <main-layout>
    <div
      class="mx-[max(46px,7.292vw)] mt-[max(22px,3.451vw)] mb-[max(89px,7.212vw)]"
    >
      <section class="flex w-fit">
        <img
          class="w-[max(103px,7.813vw)]"
          :src="vacancy.company.logo"
          :alt="vacancy.company.name + ' logo'"
        />
        <article class="my-auto ml-[max(10px,1.367vw)]">
          <h1
            class="font-bold text-[max(16px,1.294vw)] max-sm:text-base max-sm:font-normal"
          >
            {{ vacancy.company.name }}
          </h1>
          <h3 class="font-bold max-sm:font-normal">
            {{ vacancy.job.position }}
          </h3>
        </article>
      </section>
      <section>
        <p
          class="mt-[max(20px,2.801vh)]"
          v-for="paragraph in vacancy.job.description"
        >
          {{ paragraph }}
        </p>
      </section>
      <section class="mt-[max(35px,4.902vh)] w-fit">
        <article
          class="text-gray-500 grid gap-x-[max(20px,1.302vw)] gap-y-[max(15px,2.101vh)] grid-cols-[auto_1fr]"
        >
          <p>Salary</p>
          <p class="font-bold text-black">
            <span class="text-xl max-sm:text-lg">{{
              vacancy.job.salary.amount + " " + vacancy.job.salary.currency
            }}</span>
            {{ " " + vacancy.job.salary.type }}
          </p>
          <p>{{ vacancy.job.type }}</p>
          <p class="font-bold max-sm:font-normal text-black">
            {{ vacancy.job.hours }}
          </p>
          <p>Contact</p>
          <p class="font-bold max-sm:font-normal text-black">
            {{ vacancy.company.contact }}
          </p>
        </article>
        <p class="mt-[max(25px,3.501vh)] text-gray-500">
          {{ vacancy.publishedAt }}
        </p>
      </section>
    </div>
  </main-layout>
</template>
