<script>
import { mapGetters, mapActions } from "vuex"
import mainLayout from "../../layouts/mainLayout.vue"
import EmploymentsList from "../../components/sections/EmploymentsList.vue";
import LoadMoreButton from "../../components/buttons/LoadMoreButton.vue";

export default {
  name: 'Employment',
  components: {
    mainLayout,
    EmploymentsList,
    LoadMoreButton
  },
  computed: {
    ...mapGetters('vacancies', ['vacancies', 'title', 'loading', 'next_page'])
  },
  methods: {
    ...mapActions('vacancies', ['getVacancies', 'getMore'])
  },
  mounted() {
    this.getVacancies()
  },
}
</script>
<template>
  <main-layout>
    <h1 class="text-center font-bold text-3xl pb-12 pt-8 uppercase" v-html="title"></h1>
    <div class="w-full pb-14 md:pb-16">
      <div class="container mx-auto">
        <EmploymentsList />
        <div class="flex justify-center items-center h-40 mb-20">
          <LoadMoreButton v-if="!!next_page" :loading="loading" @click="getMore" />
        </div>
      </div>
    </div>
  </main-layout>
</template>
