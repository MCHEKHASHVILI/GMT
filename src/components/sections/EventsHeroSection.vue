<script>
import { mapGetters, mapActions } from "vuex"
import IconExit from "@/components/icons/iconExit.vue"
import DiscoverEventsButton from "../buttons/DiscoverEventsButton.vue"

export default {
    components: { IconExit, DiscoverEventsButton },
    computed: {
        date: {
            get() {
                return this.$store.getters['events/date']
            },
            set(value) {
                this.$store.commit('events/SET_DATE', value)
            }
        },
        type: {
            get() {
                return this.$store.getters['events/type']
            },
            set(value) {
                this.$store.commit('events/SET_TYPE', value)
            }
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
                <div class="absolute inset-0 flex flex-col justify-end p-4 md:p-0 md:pb-2 lg:pb-8 xl:pb-20">
                    <div class="hidden md:block w-7/12 p-2 lg:p-4 xl:p-6 bg-[#F5F5F5]">
                        <form class="flex flex-row justify-between space-x-4 min-h-full p-2" @submit.prevent="filterEvents">
                            <select v-model="type" required
                                class="w-full md:h-16 bg-transparent border border-[#707070] border-opacity-50 px-4">
                                <option :value="null" class="text-[#0B0B0B] text-opacity-70 text-lg">Category</option>
                                <option v-for="option in types" :value="option?.slug"
                                    class="text-[#0B0B0B] text-opacity-70 text-lg" v-html="option?.title"></option>
                            </select>
                            <input type="date" v-model="date" required
                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 text-[#0B0B0B] text-opacity-70 text-lg" />
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
                                            <option :value="null" class="text-[#0B0B0B] text-opacity-70 text-lg">Category</option>
                                            <option v-for="option in types" :value="option?.slug"
                                                class="text-[#0B0B0B] text-opacity-70 text-lg">{{ option?.title }}
                                            </option>
                                        </select>
                                        <input type="date" v-model="date" required
                                            class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4 text-[#0B0B0B] text-opacity-70 text-lg" />
                                        <DiscoverEventsButton :loading="loading" />
                                        <!-- <button class="w-full min-h-full bg-[#0B0B0B] px-2 py-4" type="submit">
                                            <span class="text-[#CCA657] uppercase whitespace-nowrap">discover events</span>
                                        </button> -->
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
    <!-- <div> -->
    <!-- desktop version -->
    <!-- <div class="hidden md:relative md:flex md:flex-row">
            <div class="w-full">
                <div class="absolute w-full h-full inset-0">
                    <div class="flex flex-col h-full justify-around space-y-4">
                        <div class="w-1/2">
                            <h2 class="text-[#000000] font-bold text-3xl" v-html="subtitle"></h2>
                        </div>
                        <div class="w-full md:w-7/12 h-36 p-8 bg-[#F5F5F5]">
                            <form class="flex flex-row justify-between space-x-4 min-h-full p-2"
                                @submit.prevent="filterEvents">
                                <select v-model="type"
                                    class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4">
                                    <option v-for="option in types" :value="option?.id"
                                        class="text-[#0B0B0B] text-opacity-70 text-lg" v-html="option?.name"></option>
                                </select>
                                <input type="date" v-model="date"
                                    class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 text-[#0B0B0B] text-opacity-70 text-lg" />
                                <button class="w-full min-h-full bg-[#0B0B0B] px-2" type="submit">
                                    <span v-if="loading">
                                        <div role="status mx-auto">
                                            <svg aria-hidden="true"
                                                class="w-4 h-4 mr-2 text-gray-200 animate-spin fill-[#CCA657]"
                                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor" />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill" />
                                            </svg>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </span>
                                    <span v-else class="text-[#CCA657] uppercase whitespace-nowrap">discover events</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <img :src="cover" class="object-cover" />
            </div>
        </div> -->
    <!-- mobile version -->
    <!-- <div class="md:hidden">
            <div class="w-full flex flex-col">
                <div class="w-full mb-4">
                    <h2 class="text-[#000000] font-bold text-xl text-center" v-html="subtitle"></h2>
                </div>
                <div class="w-full relative">
                    <img :src="cover" class="object-cover" />
                    <div class="absolute w-full bottom-5 px-4">
                        <button class="w-full py-2 bg-[#F5F5F5]" @click="toggleFilterBar">
                            <span class="uppercase text-[#000000]">filter</span>
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="!!filter_bar"
                class="absolute bottom-0 w-full h-screen bg-[#000000] bg-opacity-50 flex flex-col justify-end">
                <div class="bg-[#FFFFFF] flex flex-col justify-start space-y-8 h-3/4">
                    <div class="container mx-auto flex flex-col space-y-4">
                        <div class="flex flex-row justify-between p-2 mt-2">
                            <h3 class="w-full text-xl text-[#1D1A1A]">Filter</h3>
                            <div class="w-full flex flex-row justify-end">
                                <IconExit @click="toggleFilterBar" class="justify-end w-8 -mr-2" />
                            </div>
                        </div>
                        <form class="flex flex-col justify-between space-y-4 min-h-full p-2" @submit.prevent="filterEvents">
                            <select v-model="type"
                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4">
                                <option value="Category" class="text-[#0B0B0B] text-opacity-70 text-lg">Category
                                </option>
                            </select>
                            <input type="date" v-model="date"
                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4 text-[#0B0B0B] text-opacity-70 text-lg" />
                            <button class="w-full min-h-full bg-[#0B0B0B] px-2 py-4" type="submit">
                                <span class="text-[#CCA657] uppercase whitespace-nowrap">discover events</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div> -->
<!-- </div> --></template>