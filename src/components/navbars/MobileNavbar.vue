
<script>
import { mapGetters, mapActions } from 'vuex'
import ApplicationLogo from '../ApplicationLogo.vue';

export default {
  computed: {
    ...mapGetters('navbar', ['menus', 'open', 'icon', 'iconProps']),
  },
  methods: {
    ...mapActions('navbar', ['toggleMenu']),
    goHome(){ if(!!this.open) { this.toggleMenu() }}
  },
  components: { ApplicationLogo }
}
</script>

<template>
  <section
    :class="['flex md:hidden w-full py-4 md:py-10 border-b-[1px] border-[#000000] border-opacity-20', (!open) ? 'bg-[#0B0B0B]' : 'bg-invert']">
    <div class="container mx-auto px-4 py-4 flex flex-col justify-between">
      <div :class="['w-full flex flex-row justify-between']">
        <ApplicationLogo :imgClass="['object-cover h-12', { 'invert': open }]" :link="true" @click="goHome" />
        <div class="flex flex-1 justify-end items-center">
          <KeepAlive>
            <Component :is="{ ...icon }" @click="toggleMenu"
              class="cursor-pointer aspect-square items-center justify-center" :class="[(open) ? 'h-9' : 'h-8']" v-bind="iconProps" />
          </KeepAlive>
        </div>
      </div>
    </div>
  </section>
  <div v-if="open" :class="['text-center h-screen', { 'border-t-[1px] border-gray-700': open }]">
    <ul>
      <li class="text-2xl cursor-pointer  text-[#060606] font-semibold my-8" v-for="item in menus.top">
        <router-link @click="toggleMenu" :to="{ name: item.name }">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
</template>
