<script>
import MainLayout from "@/layouts/mainLayout.vue"
import { mapGetters, mapActions } from "vuex"

export default {
  name: "EmploymentContent",
  props: {
    id: { type: [Number, String], required: true }
  },
  components: {
    MainLayout
  },
  computed: {
    ...mapGetters('vacancies', ['vacancy'])
  },
  methods: {
    ...mapActions('vacancies', ['getVacancy'])
  },
  mounted(){
    this.getVacancy(this.id)
  },
}

</script>
<template>
  <main-layout>
    <div
      class="font-hel_roman mx-[max(46px,7.292vw)] mt-[max(22px,3.451vw)] mb-[max(89px,7.212vw)]"
    >
      <section class="flex w-fit">
        <img
          class="w-[max(103px,7.813vw)]"
          :src="vacancy?.featured_image"
          :alt="vacancy?.title + ' logo'"
        />
        <article class="my-auto ml-[max(10px,1.367vw)]">
          <h1
            class="font-bold text-[max(16px,1.294vw)] max-sm:text-base max-sm:font-normal"
          >
            {{ vacancy?.title }}
          </h1>
          <h3 class="font-bold max-sm:font-normal">
            {{ vacancy?.position }}
          </h3>
        </article>
      </section>
      <section v-html="vacancy?.description" class="[&>p]:mt-[max(20px,2.801vh)]"></section>
      <section class="mt-[max(35px,4.902vh)] w-fit">
        <article
          class="text-gray-500 grid gap-x-[max(20px,1.302vw)] gap-y-[max(15px,2.101vh)] grid-cols-[auto_1fr]"
        >
          <p>Salary</p>
          <p class="font-bold text-black">
            <span class="text-xl max-sm:text-lg">{{ vacancy?.salary }}</span> ₾
            per month
          </p>
          <p>{{ vacancy?.working_time }}</p>
          <p class="font-bold max-sm:font-normal text-black">
            {{ vacancy?.working_hours }}
          </p>
          <p>Contact</p>
          <p class="font-bold max-sm:font-normal text-black">
            {{ vacancy?.email }}
          </p>
        </article>
        <p class="mt-[max(25px,3.501vh)] text-gray-500">
          {{ vacancy?.publish_date }}
        </p>
      </section>
    </div>
  </main-layout>
</template>
