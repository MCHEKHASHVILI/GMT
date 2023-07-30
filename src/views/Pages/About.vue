<script>
import mainLayout from '../../layouts/mainLayout.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    mainLayout
  },
  computed: {
    ...mapGetters('about', ['team', 'title', 'subtitle', 'description'])
  },
  methods: {
    ...mapActions('about', ['getAboutUs'])
  },
  mounted() {
    this.getAboutUs();
  }
}
</script>
<template>
  <main-layout>
    <div class="md:container md:mx-auto mb-8">
      <!-- Heading -->
      <section class="text-center mx-auto md:w-1/2 mb-4 md:mb-8">
        <h1 class="font-bold uppercase text-3xl my-8 px-[25%]">{{ title }}</h1>
        <div class="font-normal text-lg text-left md:text-center leading-6 px-14">{{ description }}</div>
      </section>
      <!-- Content -->
      <div class="mb-8 md:mb-16 flex flex-col space-y-16">
        <div v-for="member in team" :key="member.index" class="flex flex-col md:flex-row justify-between md:space-x-8">
          <div class="basis-1/4 px-8 md:px-0">
            <img class="object-cover aspect-square" :src="member?.featured_image">
          </div>
          <div class="flex-1 px-8 md:px-0 md:pl-2">
            <h2 class="text-center font-semibold text-2xl md:text-left uppercase">{{ member?.title }}</h2>
            <h3 class="my-3 relative font-medium text-xl">
              {{ member?.position }}
              <div class="absolute bg-[#CCA657] h-0.5 w-12"></div>
            </h3>
            <div class="font-normal text-xl leading-[34px]">{{ member?.description }} </div>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>