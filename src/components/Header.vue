<script setup>
import { onMounted } from "vue"
import { RouterLink } from 'vue-router'
import TopMenu from './TopMenu.vue'
import useHome from "@/composables/useHome"

const { getHomePage, logo } = useHome()

onMounted(() => (logo.value != null) ? getHomePage() : null)

</script>

<template>
  <section class="w-full bg-black px-10 md:px-0 py-10 border-b-[1px] border-gray-700">
    <div class="container mx-auto flex justify-between items-center">
      <RouterLink :to="{ name: 'Home' }">
        <img class="h-14 w-auto" src="/logos/sublogo.png">
      </RouterLink>
      <TopMenu  />
    </div>
  </section>
</template>
