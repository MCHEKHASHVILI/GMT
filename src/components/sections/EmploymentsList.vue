<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "EmploymentsList",
    props: {
        vacancies: { type: Array, reqired: false, default: null }
    },
    computed: {
        ...mapGetters('vacancies', { data: 'vacancies' })
    },
    methods: {
        ...mapActions('vacancies', ['getVacancies'])
    },
    mounted() { this.getVacancies() },
}
</script>
<template>
    <section class="mx-8 md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Card Container -->
        <div v-for="item in data" class="w-full p-8 border border-[#707070] border-opacity-40">
            <!-- Card Content -->
            <div class="flex flex-col space-y-4">
                <!-- Heading -->
                <div class="flex flex-col md:flex-row space-y-4">
                    <!-- left / top -->
                    <div class="flex flex-row justify-start space-x-4">
                        <div class="w-36">
                            <img class="object-cover" :src="item?.featured_image"/>
                        </div>
                        <div class="flex flex-col justify-between md:font-medium">
                            <h1 class="text-lg md:text-2xl whitespace-nowrap inline-block align-top">{{ item?.title }}</h1>
                            <h2 class="text-lg md:text-xl whitespace-nowrap inline-block align-bottom md:font-bold">{{ item?.position }}</h2>
                        </div>
                    </div>
                    <!-- right / down -->
                    <div class="flex flex-1 justify-start md:justify-end items-end">
                        <h2 class="font-bold">
                            <!-- <span class="text-xl md:text-2xl">{{ item?.salary }} ₾</span>&nbsp; -->
                            <!-- <span class="text-lg md:text-xl">per month</span> -->
                        </h2>
                    </div>
                </div>
                <!-- Content -->
                <div class="text-lg md:text-xl">
                    {{ item?.excerpt }}
                </div>
                <!-- Footer -->
                <div class="flex flex-col md:flex-row md:justify-between items-center">
                    <div class="flex flex-col justify-between w-full items-start space-y-4 md:space-y-2 mb-8 md:mb-0">
                        <div class="flex flex-row justify-between space-x-2">
                            <span class="text-xl font-bold">{{ item?.working_time }}</span>
                            <span class="text-xl font-medium text-[#1D1A1A] text-opacity-70">{{ item?.working_hours }}</span>
                        </div>
                        <span class="text-xl text-[#1D1A1A] text-opacity-70">{{ item?.publish_date }}</span>
                    </div>
                    <div class="flex w-full h-full justify-end">
                        <router-link as="button"
                            :to="{ name: 'EmploymentContent', params: { id: item?.id } }"
                            :class="[
                                'bg-[#F5F5F5] hover:bg-[#0B0B0B] text-[#0B0B0B] hover:text-[#CCA657] text-center',
                                'h-full py-4 px-16 w-full md:w-auto',
                            ]">
                            <span class="text-lg uppercase whitespace-nowrap">view details</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>