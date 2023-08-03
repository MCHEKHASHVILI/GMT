
<script>
import { mapGetters, mapActions } from 'vuex'


// const navbarComponents = computed(() => store.getters["navbar/navbarComponents"])

// const name = "GMT HOSPITALITY"
// const travellersInsights = "Travellers insights"

// const toggleResponsiveNavbar = () => {
//   store.commit("navbar/toggleResponsiveNavbar")
//   document.body.classList.remove('overflow-hidden');
// }
export default {
  computed: {
    ...mapGetters('navbar', ['navLinks', 'open', 'icon', 'iconProps']),
  },
  methods: {
    ...mapActions('navbar', ['toggleMenu'])
  },
}
</script>

<template>
  <section :class="['flex md:hidden w-full py-4 md:py-10 border-b-[1px] border-gray-700', (!open) ? 'bg-black' : 'bg-invert']">
    <div class="container mx-auto px-4 py-4 flex flex-col justify-between">
      <div :class="['w-full flex flex-row justify-between']">
        <RouterLink :to="{ name: 'Home' }" @click="toggleMenu">
          <img :class="[
            'object-cover h-12',
            { 'invert': open }
          ]" src="@/assets/logos/sublogo.png">
        </RouterLink>
        <div class="flex flex-1 justify-end">
          <KeepAlive>
            <Component :is="{...icon}" @click="toggleMenu"
              class="cursor-pointer aspect-square h-12 items-center justify-center" v-bind="iconProps" />
          </KeepAlive>
        </div>
      </div>
    </div>
  </section>
  <div v-if="open" :class="['text-center h-screen', { 'border-t-[1px] border-gray-700': open }]">
    <ul>
      <li class="text-2xl cursor-pointer  text-[#060606] font-semibold my-8" v-for="link in navLinks">
        <router-link @click="toggleMenu" :to="link.url">{{ link.label }}</router-link>
      </li>
    </ul>
  </div>
</template>
