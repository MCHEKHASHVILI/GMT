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
    <section class="">
      <div class="text-center mx-auto md:w-1/2 md:pt-16">
        <h1 class="mb-3 text-2xl font-hel_bold ">{{ title }} </h1>
        <p class=" break-all font-hel_light ">{{ description }}</p>
      </div>
    </section>
    <div class="m-5 md:mx-28">
      <div class="flex flex-col justify-around md:flex-row" v-for="member in team" :key="member.index">
        <div class="w-auto h-auto">
          <img :src="member?.featured_image">
        </div>
        <div class="m-6">
          <h2 class="text-center text-2xl font-hel_medium md:text-left">{{ member?.title }}</h2>
          <h3 class="my-3 relative font-hel_medium text-lg"> {{ member?.position }}
            <div class="absolute bg-amber-500 h-0.5 w-12 "></div>
          </h3>
          <p class="font-hel_light ">{{ member?.description }} </p>
        </div>
      </div>
    </div>
  </main-layout>
</template>