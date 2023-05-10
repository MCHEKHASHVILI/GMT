<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
import Phone from '../../components/icons/iconPhone.vue'
import Address from '../../components/icons/iconAddress.vue'
import Email from '../../components/icons/iconEmail.vue'
import Facebook from '../..//components/icons/iconFacebook.vue'
import Linkedin from '../../components/icons/iconLinkedin.vue'

import ContactComponent from "@/components/ContactComponent.vue";

const links = [
    {
        name: "ADDRESS",
        content: "4 FREEDOM SQUARE,TBILISI 0105,GEORGIA",
        icon: Address
    },
    {
        name: "PHONE",
        content: "+995 (32) 2988 988",
        icon: Phone
    },
    {
        name: "E-MAIL",
        content: "GMTH0spitality@GMT.GE",
        icon: Email
    },
    {
        name: "FACEBOOK",
        content: "GMTHospitality",
        icon: Facebook
    },
    {
        name: "LINKEDIN",
        content: "GMTHospitality",
        icon: Linkedin
    },
]
</script>
<template>
    <main-layout>
        <ContactComponent :info="links"/>
    </main-layout>
</template>
