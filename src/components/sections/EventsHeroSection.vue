<script setup>
import { ref } from 'vue'
import IconExit from "@/components/icons/iconExit.vue"

defineProps({
    title: String,
    cover: String,
})

const category = ref('Category')
const date = ref('Date')
const filterBar = ref(false)

const toggleFilterBar = () => {
    filterBar.value = !filterBar.value
    document.body.classList.toggle('overflow-hidden')
    document.body.classList.toggle('touch-none')
}

</script>
<template>
    <div>
        <!-- desktop version -->
        <div class="hidden md:relative md:flex md:flex-row">
            <div class="w-full">
                <div class="absolute w-full h-full inset-0">
                    <div class="flex flex-col h-full justify-around space-y-4">
                        <div class="w-1/2">
                            <h2 class="text-[#000000] font-bold text-3xl" v-html="title"></h2>
                        </div>
                        <div class="w-7/12 w-full h-36 p-8 bg-[#F5F5F5]">
                            <form class="flex flex-row justify-between space-x-4 min-h-full p-2" @submit.prevent="">
                                <select v-model="category"
                                    class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4">
                                    <option value="Category" class="text-[#0B0B0B] text-opacity-70 text-lg">Category
                                    </option>
                                </select>
                                <select v-model="date"
                                    class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4">
                                    <option value="Date" class="text-[#0B0B0B] text-opacity-70 text-lg">Date</option>
                                </select>
                                <button class="w-full min-h-full bg-[#0B0B0B] px-2" type="submit">
                                    <span class="text-[#CCA657] uppercase whitespace-nowrap">discover events</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <img :src="cover" class="object-cover" />
            </div>
        </div>
        <!-- mobile version -->
        <div class="md:hidden">
            <div class="w-full flex flex-col">
                <div class="w-full mb-4">
                    <h2 class="text-[#000000] font-bold text-xl text-center" v-html="title"></h2>
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
            <div v-if="!!filterBar" class="absolute bottom-0 w-full h-screen bg-[#000000] bg-opacity-50 flex flex-col justify-end">
                <div class="bg-[#FFFFFF] flex flex-col justify-start space-y-8 h-3/4">
                    <div class="container mx-auto">
                        <div class="flex flex-row justify-between p-2 mt-2">
                            <h3 class="w-full text-xl text-[#1D1A1A]">Filter</h3>
                            <div class="w-full flex flex-row justify-end">
                                <IconExit @click="toggleFilterBar" class="justify-end w-8 -mr-2" />
                            </div>
                        </div>
                        <form class="flex flex-col justify-between space-y-4 min-h-full p-2" @submit.prevent="">
                            <select v-model="category"
                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4">
                                <option value="Category" class="text-[#0B0B0B] text-opacity-70 text-lg">Category
                                </option>
                            </select>
                            <select v-model="date"
                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4">
                                <option value="Date" class="text-[#0B0B0B] text-opacity-70 text-lg">Date</option>
                            </select>
                            <button class="w-full min-h-full bg-[#0B0B0B] px-2 py-4" type="submit">
                                <span class="text-[#CCA657] uppercase whitespace-nowrap">discover events</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>