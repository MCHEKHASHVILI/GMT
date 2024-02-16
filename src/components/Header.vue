<script setup>
import { onMounted } from "vue"
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import LanguageSwitcher from '@/components/buttons/LanguageSwitcher.vue'
import useNavigation from "@/composables/useNavigation"
import useHome from "@/composables/useHome"
const {
    menus,
    navLinks,
    open,
    icon,
    iconProps,
    toggleMenu,
    closeMenu,
    capitalize,
} = useNavigation()
const { getHomePage } = useHome()
onMounted(() => {
    getHomePage()
})
</script>
<template>
    <header class="w-full">
        <section class="hidden xl:flex w-full py-4 xl:py-10 border-b-[1px] border-gray-700 bg-[#0B0B0B]">
            <div class="hidden xl:flex xl:container xl:mx-auto xl:justify-between xl:items-center ">
                <ApplicationLogo :imgClass="['h-14 w-auto', { 'invert-0': !open }]" :link="true" />
                <nav class="hidden xl:flex xl:flex-1 xl:justify-end xl:space-x-8 lg:space-x-16 3xl:text-lg">
                    <router-link v-for="item in menus.top" :to="{ name: capitalize(item) }"
                        class="text-[#FFFFFF] hover:text-[#D3B266] whitespace-nowrap">
                        {{ $t(`menu.${item}`) }}
                    </router-link>
                    <LanguageSwitcher class="text-[#FFFFFF] hover:text-[#D3B266] cursor-pointer" />
                </nav>
            </div>
        </section>
        <section class="flex xl:hidden w-full py-4 xl:py-10 border-b-[1px] border-[#000000] border-opacity-20 bg-[#0B0B0B]"
            :class="{ 'invert': open }">
            <div class="container mx-auto px-4 py-4 flex flex-col justify-between">
                <div :class="['w-full flex flex-row justify-between']">
                    <ApplicationLogo :imgClass="['object-cover h-12', { 'invert-0': open }]" :link="true"
                        @click="closeMenu" />
                    <div class="flex flex-1 justify-end items-center">
                        <KeepAlive>
                            <component :is="{ ...icon }"
                                class="cursor-pointer aspect-square items-center justify-center h-8"
                                :class="{ 'h-9 invert': open }" v-bind="iconProps" @click="toggleMenu" />
                        </KeepAlive>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="open" class="xl:hidden text-center h-screen" :class="{ 'border-t-[1px] border-gray-700': open }">
            <ul>
                <li class="text-2xl cursor-pointer  text-[#060606] font-semibold my-8" v-for="item in menus.top">
                    <router-link @click="toggleMenu" :to="{ name: capitalize(item) }">{{ $t(`menu.${item}`) }}</router-link>
                </li>
                <li class="text-2xl cursor-pointer  text-[#060606] font-semibold my-8">
                    <LanguageSwitcher />
                </li>
            </ul>
        </div>
    </header>
</template>
<style scopped>
.router-link-exact-active {
    color: #D3B266
}
</style>