<script setup>
import {defineProps} from 'vue';

import Phone from '@/components/icons/iconPhone.vue'
import Address from '@/components/icons/iconAddress.vue'
import Email from '@/components/icons/iconEmail.vue'
import Facebook from '@/components/icons/iconFacebook.vue'
import Linkedin from '@/components/icons/iconLinkedin.vue'

const props = defineProps({
    contactDetails: Object,
    required: true
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
    <div class="flex flex-col w-full px-8 md:px-36 pb-28 md:pb-36 md:pt-8">
        <h1 class="text-center m-5 text-3xl font-bold">CONTACT</h1>
        <div class="flex md:flex-row flex-col items-center">
            <div class="flex flex-col w-full  md:w-2/5 h-96 justify-between">

                <div v-for="(content,label) in contactDetails" class="flex">
                    <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center p-4">
                        <component :is="layout[label].icon"></component>
                    </div>
                    <div class="flex flex-col justify-center pl-5">
                        <p class="text-base font-semibold text-[#797878]">{{ layout[label].title }}</p>
                        <p class="text-sm font-semibold">{{ content }}</p>
                    </div>
                </div>

            </div>

            <div class="w-full md:w-3/5 pt-7 md:pt-0">
                <iframe class="w-full h-52 md:h-96" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Freedom Square, Aleksandr Pushkin Street, Tbilisi 0105, Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                >
                </iframe>
            </div>
        </div>
    </div>
</template>
