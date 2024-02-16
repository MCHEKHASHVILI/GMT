<script>
import { mapGetters, mapActions } from "vuex"
import IconExit from "@/components/icons/iconExit.vue"
import DiscoverEventsButton from "../buttons/DiscoverEventsButton.vue"
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: { IconExit, DiscoverEventsButton, VueDatePicker },
    computed: {
        date: {
            get() { return this.$store.getters['events/date'] },
            set(value) { this.$store.commit('events/SET_DATE', value) },
        },
        type: {
            get() { return this.$store.getters['events/type'] },
            set(value) { this.$store.commit('events/SET_TYPE', value) },
        },
        ...mapGetters('events', ['subtitle', 'cover', 'filter_bar', 'types', 'filtered_params', 'loading'])
    },
    methods: {
        ...mapActions('events', ['toggleFilterBar', 'filterEvents'])
    }
}
</script>
<template>
    <section>
        <div class="relative flex flex-col md:flex-row">
            <div class="w-full md:flex md:flex-col md:justify-around">
                <h2 class="md:flex-grow pb-4 px-8 md:p-0 md:pt-2 lg:pt-8 xl:pt-20 md:pr-4 text-center md:text-start">
                    <span class="text-[#000000] font-bold text-xl md:text-2xl lg:text-3xl uppercase">
                        {{ subtitle }}
                    </span>
                </h2>
                <div  v-if="cover" class="absolute inset-0 flex flex-col justify-end p-4 md:p-0 md:pb-2 lg:pb-8 xl:pb-20">
                    <div class="hidden md:block w-7/12 p-2 lg:p-4 xl:p-6 bg-[#F5F5F5]">
                        <form class="flex flex-row justify-between space-x-4 min-h-full p-2" @submit.prevent="filterEvents">
                            <select v-model="type" required
                                class="w-full md:h-16 bg-transparent border border-[#707070] border-opacity-50 px-4">
                                <option :value="null" class="text-[#0B0B0B] text-opacity-70 text-lg">Category</option>
                                <option v-for="option in types" :value="option?.slug"
                                    class="text-[#0B0B0B] text-opacity-70 text-lg" v-html="option?.title"></option>
                            </select>
                            <VueDatePicker v-model="date" required :enable-time-picker="false">
                                <template #dp-input="{ value, onInput, onEnter, onTab, onClear, onBlur, onKeypress, onPaste, isMenuOpen }">
                                    <input class="w-full h-16 min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 text-[#0B0B0B] text-opacity-70 text-lg" :placeholder="(value) ? value : 'Date'"/>
                                </template>
                            </VueDatePicker>
                            <DiscoverEventsButton :loading="loading" />
                        </form>
                    </div>
                    <button class="md:hidden w-full py-2 bg-[#F5F5F5]" @click="toggleFilterBar">
                        <span class="uppercase text-[#000000]">filter</span>
                    </button>
                    <Teleport to="body">
                        <div v-if="!!filter_bar"
                            class="absolute bottom-0 w-full h-screen bg-[#000000] bg-opacity-50 flex flex-col justify-end">
                            <div class="bg-[#FFFFFF] h-3/4">
                                <div class="container mx-auto flex flex-col space-y-8 p-12">
                                    <div class="flex justify-between">
                                        <h3 class="text-xl text-[#1D1A1A] uppercase">Filter</h3>
                                        <button class="justify-end w-8" @click="toggleFilterBar">
                                            <IconExit />
                                        </button>
                                    </div>
                                    <form class="flex flex-col justify-between space-y-4 min-h-full"
                                        @submit.prevent="filterEvents">
                                        <select v-model="type" required
                                            class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4">
                                            <option :value="null" class="text-[#0B0B0B] text-opacity-70 text-lg">Category
                                            </option>
                                            <option v-for="option in types" :value="option?.slug"
                                                class="text-[#0B0B0B] text-opacity-70 text-lg">{{ option?.title }}
                                            </option>
                                        </select>
                                        <input type="date" v-model="date" required
                                            class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4 text-[#0B0B0B] text-opacity-70 text-lg" />
                                        <DiscoverEventsButton :loading="loading" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Teleport>
                </div>
            </div>
            <div class="w-full">
                <img :src="cover" class="object-cover" />
            </div>
        </div>
    </section>
</template>