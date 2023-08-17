<script setup>
defineProps({
    events: Array
})
</script>
<template>
    <section class="grid md:grid-cols-3 gap-4">
        <div v-for="event in events" class="w-full h-full">
            <div class="w-full bg-[#FFFFFF] flex flex-col justify-between space-y-2 h-full">
                <img class="w-full h-48" :src="event.featured_image">
                <div class="grow">
                    <h2 class="text-2xl font-medium" v-html="event.title"></h2>
                </div>
                <div class="w-full flex flex-row justify-between align-baseline space-x-4">
                    <div class="w-full flex flex-row justify-between">
                        <span class="text-[#000000] bg-[#F5F5F5] py-2 px-6 uppercase" v-html="event.event_type"></span>
                        <div class="flex flex-row space-x-2 justify-start text-xl text-[#1D1A1A]">
                            <span class="py-2 text-opacity-70">Price:</span>
                            <span class="py-2 whitespace-nowrap" v-html="event.price"></span>
                        </div>
                    </div>
                    <div class="w-full flex flex-row justify-end text-xl text-[#1D1A1A]">
                        <span class="py-2">{{ event.start_date }}</span>
                    </div>
                </div>
                <div class="flex flex-row justify-between space-x-4 text-[#0B0B0B] text-lg">
                    <button class="w-full p-4 bg-[#F5F5F5] hover:bg-[#0B0B0B] hover:text-white" @click.prevent="">
                        <span class="uppercase">view details</span>
                    </button>
                    <button class="w-full p-4 bg-[#0B0B0B] text-[#CCA657] hover:bg-[#444141]" @click.prevent="">
                        <span class="uppercase">book now</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>