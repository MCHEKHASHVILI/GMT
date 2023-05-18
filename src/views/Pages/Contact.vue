<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import {useStore} from "vuex";

const store = useStore()
const contactDetails = store.getters['contact/getContactDetails']

</script>
<template>
    <main-layout>
        <ContactComponent :contactDetails="contactDetails"/>
    </main-layout>
</template>
