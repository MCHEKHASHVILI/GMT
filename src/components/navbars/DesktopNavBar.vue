
<script>
import { mapGetters } from 'vuex'
import useHome from "@/composables/useHome"
import ApplicationLogo from '../ApplicationLogo.vue'


export default {
    computed: {
        ...mapGetters('navbar', ['menus', 'navLinks', 'open']),
        // ...mapGetters('language', ['currentLang']),
    },
    setup() {
        const { logo } = useHome();
        return { logo };
    },
    components: { ApplicationLogo }
}
</script>
<template>
    <section
        :class="['hidden md:flex w-full py-4 md:py-10 border-b-[1px] border-gray-700', (!open) ? 'bg-black' : 'bg-invert']">
        <div class="hidden md:flex md:container md:mx-auto md:justify-between md:items-center ">
            <ApplicationLogo imgClass="h-14 w-auto md:invert-0" :link="true" />
            <nav class="hidden md:flex md:flex-1 md:justify-end md:space-x-8 lg:space-x-16 3xl:text-lg">
                <router-link v-for="item in menus.top" :to="{ name: item.name }"
                    class="text-[#FFFFFF] hover:text-[#D3B266] whitespace-nowrap">
                    {{ item.label }}
                </router-link>
                <button class="text-[#FFFFFF] hover:text-[#D3B266] cursor-pointer">GEO</button>
            </nav>
        </div>
    </section>
</template>
<style scopped>
.router-link-exact-active {
    color: #D3B266
}
</style>