<script setup>
import Phone from '@/components/icons/iconPhone.vue'
import Address from '@/components/icons/iconAddress.vue'
import Email from '@/components/icons/iconEmail.vue'
import Facebook from '@/components/icons/iconFacebook.vue'
import Linkedin from '@/components/icons/iconLinkedin.vue'

const props = defineProps({
    details: { type: Object, required: true }
})

const layout = {
    'address': {
        title: "ADDRESS",
        icon: Address
    },
    'phone': {
        title: "PHONE",
        icon: Phone
    },
    'email': {
        title: "E-MAIL",
        icon: Email
    },
    'facebook': {
        title: "FACEBOOK",
        icon: Facebook
    },
    'linkedin': {
        title: "LINKEDIN",
        icon: Linkedin
    }
}
</script>
<template>
    <section class="flex flex-col w-full px-8 md:px-0 pb-28 md:pb-36 md:pt-8">
        <h1 class="text-center m-5 text-3xl font-bold">CONTACT</h1>
        <div class="flex md:flex-row flex-col items-start">
            <div class="w-full md:w-2/5 flex flex-col h-full items-start justify-right space-y-2">
                <!-- Basic info as Text -->
                <div v-for="(info, key) in details?.basic" class="flex flex-row">
                    <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center p-4">
                        <component :is="layout[key]?.icon" role="img"></component>
                    </div>
                    <div class="flex flex-col justify-center pl-5">
                        <p class="text-base font-semibold text-[#797878]">{{ layout[key]?.title }}</p>
                        <p class="text-sm font-semibold">{{ info }}</p>
                    </div>
                </div>
                <!-- Socials as links -->
                <div v-for="(social, key) in details?.social" class="flex flex-row">
                    <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center p-4">
                        <component :is="layout[key]?.icon"></component>
                    </div>
                    <div class="flex flex-col justify-center pl-5">
                        <p class="text-base font-semibold text-[#797878]">{{ layout[key]?.title }}</p>
                        <a :href="social?.url" class="text-sm font-semibold" target="_blank">{{ social?.title }}</a>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-3/5 pt-7 md:pt-0">
                <iframe class="w-full h-52 md:h-96 min-h-full" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Freedom Square, Aleksandr Pushkin Street, Tbilisi 0105, Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed">
                </iframe>
            </div>
        </div>
    </section>
</template>
