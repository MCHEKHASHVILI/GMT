
<script setup>

import ResponsiveNavbar from './ResponsiveNavbar.vue';
import {computed, onMounted} from "vue"
import {useStore} from "vuex"
const store = useStore()
const responsiveNavbarStatus = computed(() => store.getters["navbar/responsiveNavbar"])

const toggleResponsiveNavbar = () =>{
  store.commit("navbar/toggleResponsiveNavbar")
   document.body.classList.add('md:overflow-visible');
   document.body.classList.add('overflow-hidden');
   
}
const navbarComponents = computed(() => store.getters["navbar/navbarComponents"] )
</script>

<template>
  <ul class="md:flex hidden mr-[7%] ">
    <li v-for="component in navbarComponents" class="text-white mx-5 cursor-pointer">
      <router-link :to="component.routerLink">{{ component.name }}</router-link>
      
    </li>
    <p class="text-white mx-5 cursor-pointer">GEO</p>
    
  </ul>
  <Transition>
    <ResponsiveNavbar v-if="responsiveNavbarStatus"></ResponsiveNavbar>
  </Transition>
  <svg @click="toggleResponsiveNavbar" class="w-[40px] mr-4 cursor-pointer md:hidden" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32"><path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" fill="#ffffff"></path></svg>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>