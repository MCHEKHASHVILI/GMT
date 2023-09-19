<script setup>
import { onMounted } from "vue"
import BrandsList from "@/components/sections/BrandsList.vue"
import mainLayout from "@/layouts/mainLayout.vue"
import useHome from "@/composables/useHome"
import ApplicationLogo from "../../components/ApplicationLogo.vue";
import SubHeroComponent from "../../components/sections/HomePage/SubHeroComponent.vue"
const {
  getHomePage,
  brands
} = useHome()

onMounted(() => getHomePage())

</script>
<template>
  <mainLayout>
    <ApplicationLogo
      class="flex flex-col py-[50%] md:py-0 md:h-screen bg-black"
      imgClass="m-auto md:w-2/5 w-11/12 text-center opacity-100"
    />
    <SubHeroComponent />
    <BrandsList :brands="brands" />
  </mainLayout>
</template>
