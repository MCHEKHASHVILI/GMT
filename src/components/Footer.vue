<script setup>
import { onMounted } from "vue"
import ApplicationLogo from "./ApplicationLogo.vue";
import GrowthHuntersLogo from "./GrowthHuntersLogo.vue"
import useNavigation from '@/composables/useNavigation'
const {
    open,
    menus,
    social_links,
    getSocialLinks,
    capitalize,
} = useNavigation()
onMounted(() => {
    getSocialLinks()  
})
</script>
<template>
    <footer class="w-full bg-black text-white">
        <div class="container mx-auto flex flex-col xl:flex-row justify-between py-8 xl:py-11">
            <div class="w-full py-8 xl:py-0 flex flex-col xl:justify-between">
                <ApplicationLogo :imgClass="['object-cover mx-auto xl:mx-0 h-12', { 'invert': open }]" class="w-full"
                    :link="true" />
            </div>
            <div class="w-full justify-between xl:justify-end">
                <div class="w-full flex flex-col xl:flex-row justify-between xl:pl-16">
                    <div class="w-full flex flex-1 justify-between xl:justify-end">
                        <div class="w-full grid grid-cols-2 gap-8 xl:gap-8 gap-x-20 xl:gap-x-32">
                            <div v-for="item in menus.footer" class="w-full text-left px-2">
                                <router-link :to="{ name: capitalize(item) }" class="justify-self-start">
                                    <span class="text-xl xl:xl-0 whitespace-nowrap">{{ $t(`menu.${item}`) }}</span>
                                </router-link>
                            </div>
                            <div></div>
                            <div class="xl:hidden flex flex-col px-2">
                                <h2 class="text-xl whitespace-nowrap">Follow us</h2>
                                <div class="flex flex-row justify-content-start space-x-4 mt-2 py-2">
                                    <div v-for="social in social_links" class="h-14 w-14 rounded-full flex items-center justify-center bg-[#FFFFFF] bg-opacity-20">
                                        <a :href="social?.url" target="_blank" v-html="social?.icon.element"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden xl:flex flex-col xl:ml-32 px-2">
                        <h2 class="text-xl capitalize">{{ $t('system.social.follow_us') }}</h2>
                        <div class="flex flex-row justify-content-start space-x-4 mt-2 py-2">
                            <a v-for="social in social_links" :href="social?.url" target="_blank">
                                <div v-html="social?.icon.element" class="h-14 w-14 rounded-full flex items-center justify-center bg-[#FFFFFF] bg-opacity-20 hover:bg-opacity-10 transition-all"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center border-t-[1px] border-gray-700 items-center">
            <div class="flex flex-col justify-around">
                <!-- <GrowthHuntersLogo class="hidden xl:flex flex-row flex-nowrap justify-start items-center align-bottom" /> -->
                <GrowthHuntersLogo class="flex flex-col sm:flex-row items-center" />
            </div>
            <div class="flex items-center text-center">
                <h2 class="text-slate-100 py-12 xl:py-10 text-lg" v-text="$t('system.all_rights_reserved')" />
            </div>
        </div>
    </footer>
</template>