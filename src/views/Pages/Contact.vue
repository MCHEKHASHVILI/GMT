<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import ContactComponent from "@/components/ContactComponent.vue";

const contactDetails = {
    address: '4 FREEDOM SQUARE,TBILISI 0105,GEORGIA',
    phone: '+995 (32) 2988 988',
    email: 'GMTH0spitality@GMT.GE',
    facebook: 'GMTHospitality',
    linkedin: 'GMTHospitality'
}
</script>
<template>
    <main-layout>
        <ContactComponent :contactDetails="contactDetails"/>
    </main-layout>
</template>
