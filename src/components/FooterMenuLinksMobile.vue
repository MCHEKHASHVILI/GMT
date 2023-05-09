<script setup>
import { useStore } from "vuex";
import { computed } from 'vue'

const store = useStore();
const footerComponents = computed(() => store.getters["footer/footerComponentsMobile"])
</script>

<template>
    <div class="pb-3 ">
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-x-32  text-gray-500 dark:text-gray-400 font-medium ">
            <li class="text-white w-28 h-12 font-hel_light" v-for="(component, index) in footerComponents" :key="index">
                <router-link v-if="component.routerLink" :to="component.routerLink">{{ component.name
                }}</router-link>
                <span v-else>
                    {{ component.alink }}
                </span>
            </li>
            <div class="footer-icons flex gap-3 order-last">
                <a href="#">
                    <img class="w-10" src="/src/assets/icons/facebook.svg" alt="Facebook icon">
                </a>
                <a href="#">
                    <img class="w-10" src="/src/assets/icons/linkedin.svg" alt="LinkedIn icon">
                </a>
            </div>
            <div class="footer-icons">
            </div>
        </ul>
    </div>
</template>