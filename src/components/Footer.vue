<script>
import { mapGetters } from 'vuex'
import ApplicationLogo from "./ApplicationLogo.vue";
export default {
    components: { ApplicationLogo },
    computed: { ...mapGetters('navbar', ['open', 'menus']) }
}
</script>
<template>
    <footer class="w-full bg-black text-white">
        <div class="container mx-auto flex flex-col md:flex-row justify-between px-8 md:px-0 py-8 md:py-11">
            <div class="w-full py-8 md:py-0 md:pb-8 flex justify-around md:justify-start">
                <ApplicationLogo :imgClass="['object-cover h-12', { 'invert': open }]" :link="true" />
            </div>
            <div class="w-full justify-between md:justify-end">
                <div class="w-full flex flex-col md:flex-row justify-between">
                    <div class="w-full flex flex-1 justify-between md:justify-end">
                        <div class="w-full grid grid-cols-2 gap-8 md:gap-8 gap-x-20 md:gap-x-40">
                            <div v-for="item in menus.footer" class="w-full text-left px-auto">
                                <router-link  :to="{ name: item.name }" class="justify-self-start">
                                <span class="text-xl md:md-0">{{ item.label }}</span>
                                </router-link>
                            </div>
                            <div class="md:hidden flex flex-col">
                                <h2 class="text-xl">Follow us</h2>
                                <div class="flex flex-row justify-content-start space-x-4 mt-2 py-2">
                                    <img class="w-14 md:w-15" src="@/assets/icons/linkedin.svg">
                                    <img class="w-14 md:w-15" src="@/assets/icons/facebook.svg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:flex flex-col md:ml-40">
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