<script setup>

import useHome from "@/composables/useHome"
import useNavigation from "@/composables/useNavigation"

const { footerLinks } = useNavigation()

</script>
<template>
    <footer class="bg-black text-white">
        <div class="container mx-auto flex flex-col md:flex-row justify-between px-8 md:px-0 py-8 md:py-11">
            <div class="w-full py-8 flex justify-around md:justify-start">
                <RouterLink :to="{ name: 'Home' }" @click="toggleMenu">
                <img :class="[
                    'object-cover h-12',
                    { 'invert': open }
                ]" src="@/assets/logos/sublogo.png">
                </RouterLink>
            </div>
            <div class="w-full justify-between md:justify-end">
                <div class="w-3/4 mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-8 text-xl">
                    <router-link v-for="link in footerLinks" :to="{ name: link.name }" class="justify-self-start">{{
                        link.title }}</router-link>
                    <div class="flex flex-col">
                        <h2 class="text-xl">Follow us</h2>
                        <div class="flex flex-row justify-content-start space-x-4 mt-2 py-2">
                            <img class="w-14 md:w-15" src="@/assets/icons/linkedin.svg">
                            <img class="w-14 md:w-15" src="@/assets/icons/facebook.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center border-t-[1px] border-gray-700">
            <h2 class="text-slate-100 py-12 md:py-10 text-lg">ALL RIGHTS RESERVED</h2>
        </div>
    </footer>
</template>