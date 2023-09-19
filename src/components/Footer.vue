<script>
import { mapGetters, mapActions } from 'vuex'
import ApplicationLogo from "./ApplicationLogo.vue";
import GrowthHuntersLogo from "./GrowthHuntersLogo.vue";
export default {
    components: { ApplicationLogo, GrowthHuntersLogo },
    computed: { 
        ...mapGetters('navbar', ['open', 'menus']),
        ...mapGetters('settings', ['social_links'])
    },
    methods: {
        ...mapActions('settings', ['getSocialLinks'])
    },
    mounted(){
        this.getSocialLinks()
    }
}
</script>
<template>
    <footer class="w-full bg-black text-white">
        <div class="container mx-auto flex flex-col md:flex-row justify-between py-8 md:py-11">
            <div class="w-full py-8 md:py-0 flex flex-col md:justify-between">
                <ApplicationLogo :imgClass="['object-cover mx-auto md:mx-0 h-12', { 'invert': open }]" class="w-full"
                    :link="true" />
                <GrowthHuntersLogo class="hidden md:flex flex-row flex-wrap justify-start items-center" />
            </div>
            <div class="w-full justify-between md:justify-end">
                <div class="w-full flex flex-col md:flex-row justify-between md:pl-16">
                    <div class="w-full flex flex-1 justify-between md:justify-end">
                        <div class="w-full grid grid-cols-2 gap-8 md:gap-8 gap-x-20 md:gap-x-32">
                            <div v-for="item in menus.footer" class="w-full text-left px-2">
                                <router-link :to="{ name: item.name }" class="justify-self-start">
                                    <span class="text-xl md:md-0 whitespace-nowrap">{{ item.label }}</span>
                                </router-link>
                            </div>
                            <div></div>
                            <div class="md:hidden flex flex-col px-2">
                                <h2 class="text-xl whitespace-nowrap">Follow us</h2>
                                <div class="flex flex-row justify-content-start space-x-4 mt-2 py-2">
                                    <div v-for="social in social_links" class="h-14 w-14 rounded-full flex items-center justify-center bg-[#FFFFFF] bg-opacity-20">
                                        <a :href="social?.url" target="_blank" v-html="social?.icon.element"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:flex flex-col md:ml-32 px-2">
                        <h2 class="text-xl capitalize">{{ $t('system.social.follow_us') }}</h2>
                        <div class="flex flex-row justify-content-start space-x-4 mt-2 py-2">
                            <div v-for="social in social_links" class="h-14 w-14 rounded-full flex items-center justify-center bg-[#FFFFFF] bg-opacity-20">
                                <a :href="social?.url" target="_blank" v-html="social?.icon.element"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GrowthHuntersLogo class="flex md:hidden mx-auto my-4" />
        </div>
        <div class="flex justify-center border-t-[1px] border-gray-700">
            <h2 class="text-slate-100 py-12 md:py-10 text-lg">{{ $t('system.all_rights_reserved') }}</h2>
        </div>
    </footer>
</template>