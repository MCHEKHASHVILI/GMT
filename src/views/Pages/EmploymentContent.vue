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
      class="flex flex-col space-y-[2%] w-auto mx-[7.5%] mt-[4.5%] mb-[100px]"
    >
      <div class="flex space-x-[2.5%]">
        <img
          :src="vacancy.company.logo"
          class="w-[95px] max-sm:w-[85px]"
          alt="Employer logo"
        />
        <div class="m-auto font-bold">
          <h1 class="text-xl max-sm:text-base max-sm:font-normal">
            {{ vacancy.company.name }}
          </h1>
          <h3 class="max-sm:font-normal">{{ vacancy.job.position }}</h3>
        </div>
      </div>
      <div class="flex flex-col space-y-[2%]">
        <p v-for="paragraph in vacancy.job.description">{{ paragraph }}</p>
      </div>
      <div>
        <div>
          <table
            class="text-gray-500 border-separate border-spacing-y-3 border-spacing-x-5 relative left-[-20px]"
          >
            <tbody>
              <tr>
                <td>Salary</td>
                <td class="font-bold text-black">
                  <span class="text-xl max-sm:text-lg">{{
                    vacancy.job.salary.amount +
                    " " +
                    vacancy.job.salary.currency
                  }}</span>
                  {{ " " + vacancy.job.salary.type }}
                </td>
              </tr>
              <tr>
                <td>{{ vacancy.job.type }}</td>
                <td class="font-bold max-sm:font-normal text-black">
                  {{ vacancy.job.hours }}
                </td>
              </tr>
              <tr>
                <td>Contact</td>
                <td class="font-bold max-sm:font-normal text-black">
                  {{ vacancy.company.contact }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p class="text-gray-500">{{ vacancy.publishedAt }}</p>
        </div>
      </div>
    </div>
  </main-layout>
</template>
