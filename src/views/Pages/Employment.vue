<script>
import EmploymentsList from "../../components/sections/EmploymentsList.vue";
import mainLayout from "../../layouts/mainLayout.vue"
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'Employment',
  components: {
    mainLayout,
    EmploymentsList
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
      <div class="container mx-auto">
        <EmploymentsList />
      </div>
    </div>
  </main-layout>
</template>
