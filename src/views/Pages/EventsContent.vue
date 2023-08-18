<script setup>
import mainLayout from '@/layouts/mainLayout.vue';
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const store = useStore()
const route = useRoute()

onMounted(() => {
    store.dispatch('events/getEvent', route.params.id)
})
const event = computed(() => store.getters['events/event'])

</script>
<template>
    <main-layout>
        <div class="flex items-center justify-center flex-col p-9 md:px-20">
            <img class="w-full " :src="event.featured_image" alt="event image">

            <div class="flex items-center w-full mt-4">
                <div class="bg-[#f5f5f5] flex items-center justify-center px-9 py-1 mr-6 font-medium text-base">
                    JAZZ
                </div>
                <p class="text-[#7d7c7c] font-medium">{{ event['formattedDate'] }}</p>
            </div>

            <div class="flex flex-col w-full mt-4">
                <p class="md:text-3xl font-bold mb-4 ">{{ event.title }}</p>
                <p class="mb-6 whitespace-pre-line " v-html="event.description"></p>
                <p class="text-[#676666] text-base mb-4">Price: <span class="text-[#343131]">{{ event.price }}</span>
                </p>
                <div class="text-[#b4934d] px-8 py-4 flex items-center justify-center w-full sm:w-52 bg-black">BOOK
                    NOW
                </div>
            </div>
        </div>
    </main-layout>
</template>