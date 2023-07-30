<script setup>
import FooterMenuLinks from './FooterMenuLinks.vue'
import FooterMenuLinksMobile from './FooterMenuLinksMobile.vue'

import useHome from "@/composables/useHome"
import useNavigation from "@/composables/useNavigation"

const { logo } = useHome()
const { footerLinks } = useNavigation()

</script>
<template>
    <footer class="bg-black text-white">
        <div class="container mx-auto flex flex-col md:flex-row justify-between md:py-11">

            <div class="w-full py-4">
                <img src="/logos/sublogo.png" class="h-16 w-auto">
            </div>

            <div class="w-full justify-end">
                <div class="grid grid-cols-2 md:grid-cols-3 justify-items-stretch gap-y-2 text-lg">
                    <router-link v-for="link in footerLinks" :to="{ name: link.name }" class="justify-self-start">{{
                        link.title }}</router-link>
                    <div class="flex flex-col">
                        <h2 class="text-xl">Follow us</h2>
                        <div class="flex flex-row justify-content-start space-x-4 mt-2">
                            <img class="w-12 md:w-15" src="/src/assets/icons/linkedin.svg">
                            <img class="w-12 md:w-15" src="/src/assets/icons/facebook.svg">
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