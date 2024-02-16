<script>
import { mapGetters, mapActions } from "vuex"
import mainLayout from "../../layouts/mainLayout.vue"
import LoadMoreButton from "../../components/buttons/LoadMoreButton.vue"
import EventsHeroSection from "../../components/sections/EventsHeroSection.vue"
import EventsList from "../../components/sections/EventsList.vue"

export default {
  components: {
    mainLayout,
    LoadMoreButton,
    EventsHeroSection,
    EventsList
},
  computed: {
    ...mapGetters('events', ['title', 'events', 'loading', 'next_page'])
  },
  methods: {
    ...mapActions('events', ['getEvents', 'getMore'])
  },
  mounted() {
    this.getEvents()
  }
}
</script>

<template>
  <main-layout>
    <h1 class="text-center font-medium text-2xl md:text-3xl md:font-bold uppercase my-4 md:mt-16 md:mb-12" v-html="title"></h1>
    <EventsHeroSection v-if="events" class="md:container md:mx-auto pb-4 md:pb-6" />
    <div class="container mx-auto flex flex-col space-y-4 mb-20">
      <EventsList :events="events" />
      <LoadMoreButton v-if="!!next_page" :loading="loading" @click="getMore" class="mx-auto my-12" />
    </div>
  </main-layout>
</template>
