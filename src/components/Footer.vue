<script setup>
import FooterMenuLinks from './FooterMenuLinks.vue'
import FooterMenuLinksMobile from './FooterMenuLinksMobile.vue'

</script>
<template>
    <footer>
        <div class=" bg-black text-white  md:flex md:justify-between md:pr-32 md:pb-10">
            <div class="leftSide pl-24 py-5 md:pt-10 md:pl-16">
                <router-link to="/">
                    <img src="../assets/images/Logo.png">
                </router-link>
            </div>
            <div class="hidden md:inline-block	pl-14 pb-14 md:pb-0 gap-x-32  md:gap-x-24 md:pt-14 ">
                <FooterMenuLinks />
            </div>
            <div class="md:hidden pl-14 pb-14 md:pb-0 gap-x-32  md:gap-x-24 md:pt-14 ">
                <FooterMenuLinksMobile />
            </div>
        </div>
        <hr class="border-zinc-700 mx-auto" />
        <div class="last bg-black text-center ">
            <h2 class="text-slate-100 py-12 md:py-10">ALL RIGHTS RESERVED</h2>
        </div>
    </footer>
</template>