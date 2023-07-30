<script>
import mainLayout from "../../layouts/mainLayout.vue"
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'Employment',
  components: {
    mainLayout
  },
  computed: {
    ...mapGetters('vacancies', ['vacancies', 'title'])
  },
  methods: {
    ...mapActions('vacancies', ['getVacancies'])
  },
  mounted() {
    this.getVacancies()
  },
}
</script>
<template>
  <main-layout>
    <h1 class="text-center font-bold text-3xl pb-12 pt-8 uppercase">
      {{ title }}
    </h1>
    <div class="w-full pb-14 md:pb-16">
      <div class="grid gap-10 justify-center md:grid md:grid-cols-2 px-12 md:px-32 md:gap-4 md:pb-1.5">
        <div v-for="vacancy in vacancies" class="w-full p-6 bg-white border border-gray-300 md:pb-0 relative md:relative">
          <div class="gap-x-10 gap-y-4 md:gap-10 md:grid md:grid-cols-3 grid grid-cols-2">
            <img class="h-12" :src="vacancy?.featured_image" />
            <div class="-translate-x-28">
              <h2 class="font-medium md:font-bold whitespace-nowrap">
                {{ vacancy?.title }}
              </h2>
              <h2 class="font-medium md:font-bold">
                {{ vacancy?.position }}
              </h2>
            </div>
            <div class="md:py-0 md:translate-x-8">
              <h2 class="font-bold md:font-bold pb-4 md:pt-6">
                {{ vacancy?.salary }} ₾ per month
              </h2>
            </div>
          </div>
          <p class="mb-3 font-hel_roman text-gray-700 dark:text-black">
            {{ vacancy?.excerpt }}
          </p>
          <div class="">
            <div class="pb-4 md:grid md:grid-cols-1">
              <p class="pb-1.5">
                <span class="font-medium md:font-bold">{{
                  vacancy?.working_time
                }}</span>
                <span class="pl-4">{{ vacancy?.working_hours }}</span>
              </p>
            </div>
            <div class="grid gap-8 md:gap-28 md:flex">
              <p class="md:w-[50%]">{{ vacancy?.publish_date }}</p>
              <div class="md:-translate-y-8 pb-6 md:w-1/2 md:translate-x-4">
                <router-link :to="{ name: 'EmploymentContent', params: { id: vacancy?.id } }"
                  class="hover:bg-black hover:text-yellow-500 inline-block items-center px-[37%] md:px-16 py-4 text-sm md:text-base text-center text-black bg-zinc-100">
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
