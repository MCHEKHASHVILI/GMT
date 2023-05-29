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
        <!-- <div class="md:flex md:justify-between md:pr-32 md:pb-10">
            <div class="leftSide pl-24 py-5 md:pt-10 md:pl-16">
                <router-link to="/">
                    <img src="../assets/images/Logo.png">
                </router-link>
            </div>
            <div class="hidden md:inline-block pl-14 pb-14 md:pb-0 gap-x-32  md:gap-x-24 md:pt-14 ">
                <FooterMenuLinks />
            </div>
            <div class="md:hidden pl-14 pb-14 md:pb-0 gap-x-32  md:gap-x-24 md:pt-14 ">
                <FooterMenuLinksMobile />
            </div>
        </div>
        <hr class="border-zinc-700 mx-auto" />
        <div class="last text-center">
            <h2 class="text-slate-100 py-12 md:py-10">ALL RIGHTS RESERVED</h2>
        </div> -->
        <div class="flex flex-col justify-between md:flex-row border-b-[1px] border-gray-700 pb-4">
            <div class="flex w-full justify-center py-4">
                <img src="/logos/sublogo.png" class="h-16 w-auto">
            </div>
            <div class="flex w-full justify-center">
                <div class="grid grid-cols-2 md:grid-cols-3 justify-items-stretch gap-y-2 text-lg">
                    <router-link v-for="link in footerLinks" :to="{ name: link.name }" class="justify-self-start">{{ link.title }}</router-link>
                    <div class="flex flex-col">
                        <h2 class="text-xl">Follow us</h2>
                        <div class="flex flex-row justify-content-start space-x-4 mt-2">
                            <img class="w-1/4" src="/src/assets/icons/linkedin.svg">
                            <img class="w-1/4" src="/src/assets/icons/facebook.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <h2 class="text-slate-100 py-12 md:py-10 text-lg">ALL RIGHTS RESERVED</h2>
        </div>
    </footer>
</template>