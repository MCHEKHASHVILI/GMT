
<script>
import { mapGetters } from 'vuex'
import useHome from "@/composables/useHome"
import ApplicationLogo from '../ApplicationLogo.vue'


export default {
    computed: {
        ...mapGetters('navbar', ['menus', 'navLinks', 'open'])
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
            <!-- <RouterLink :to="{ name: 'Home' }">
                <img v-if="!!logo" class="h-14 w-auto md:invert-0" :src="logo">
                <img v-else class="h-14 w-auto md:invert-0" src="@/assets/logos/sublogo.png">
            </RouterLink> -->
            <ApplicationLogo imgClass="h-14 w-auto md:invert-0" :link="true" />
            <nav class="hidden md:flex md:flex-1 md:justify-end md:space-x-16">
                <router-link v-for="item in menus.top" :to="{ name: item.name }"
                    class="text-[#FFFFFF] hover:text-[#D3B266]">
                    {{ item.label }}
                </router-link>
                <p class="text-[#FFFFFF] hover:text-[#D3B266] cursor-pointer">GEO</p>
            </nav>
        </div>
    </section>
</template>
<style scopped>
.router-link-exact-active {
    color: #D3B266
}
</style>