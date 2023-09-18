
<script>
import { mapGetters } from 'vuex'
import useHome from "@/composables/useHome"
import ApplicationLogo from '../ApplicationLogo.vue'
import LanguageSwitcher from '../buttons/LanguageSwitcher.vue';


export default {
    components: { ApplicationLogo, LanguageSwitcher },
    computed: {
        ...mapGetters('navbar', ['menus', 'navLinks', 'open'])
    },
    setup() {
        const { logo } = useHome();
        return { logo };
    },
    mounted(){

    }
}
</script>
<template>
    <section
        :class="['hidden md:flex w-full py-4 md:py-10 border-b-[1px] border-gray-700', (!open) ? 'bg-black' : 'bg-invert']">
        <div class="hidden md:flex md:container md:mx-auto md:justify-between md:items-center ">
            <ApplicationLogo imgClass="h-14 w-auto md:invert-0" :link="true" />
            <nav class="hidden md:flex md:flex-1 md:justify-end md:space-x-8 lg:space-x-16 3xl:text-lg">
                <router-link v-for="item in menus.top" :to="{ name: item }"
                    class="text-[#FFFFFF] hover:text-[#D3B266] whitespace-nowrap">
                    {{ $t(`menu.${item}`) }}
                </router-link>
                <LanguageSwitcher class="text-[#FFFFFF] hover:text-[#D3B266] cursor-pointer" />
            </nav>
        </div>
    </section>
</template>
<style scopped>
.router-link-exact-active {
    color: #D3B266
}
</style>