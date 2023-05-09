<script setup>
import { useStore } from "vuex";
import { computed } from 'vue'

const store = useStore();
const footerComponents = computed(() => store.getters["footer/footerComponents"])
</script>

<template>
    <div class="pb-3 ">
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-x-32  text-gray-500 dark:text-gray-400 font-medium ">
            <li class="text-white w-28 h-12 font-hel_light" v-for="(component, index) in footerComponents" :key="index">
                <router-link v-if="component.routerLink" :to="component.routerLink">{{ component.name
                }}</router-link>
                <span class="flex gap-4" v-else-if="component.icon">
                    <a href="#">
                        <img :src="component.icon" alt="icon" class="w-12">
                    </a>
                    <a href="#">
                        <img :src="component.icon2" alt="icon" class="w-12">
                    </a>
                </span>
                <span v-else>
                    {{ component.alink }}
                </span>
            </li>
        </ul>
    </div>
</template>