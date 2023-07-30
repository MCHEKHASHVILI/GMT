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
    <section class="grid grid-cols-2 gap-4">
        <!-- Card Container -->
        <div v-for="item in data" class="w-full p-8 border border-[#707070] border-opacity-40">
            <!-- Card Content -->
            <div class="flex flex-col space-y-2">
                <!-- Heading -->
                <div class="flex flex-col md:flex-row">
                    <!-- left / top -->
                    <div class="flex flex-row justify-between space-x-8">
                        <div class="w-48">
                            <img class="object-cover" :src="item?.featured_image"/>
                        </div>
                        <div>
                            <h2 class="font-medium md:font-bold whitespace-nowrap">{{ item?.title }}</h2>
                            <h2 class="font-medium md:font-bold">{{ item?.position }}</h2>
                        </div>
                    </div>
                    <!-- right / down -->
                    <div class="flex flex-1 justify-end">
                        <h2 class="">{{ item?.salary }} ₾ per month</h2>
                    </div>
                </div>
                <!-- Content -->
                <div>
                    {{ item?.excerpt }}
                </div>
                <!-- Footer -->
                <div class="">
                    <div class="pb-4 md:grid md:grid-cols-1">
                        <p class="pb-1.5">
                            <span class="font-medium md:font-bold">{{
                                item?.working_time
                            }}</span>
                            <span class="pl-4">{{ item?.working_hours }}</span>
                        </p>
                    </div>
                    <div class="grid gap-8 md:gap-28 md:flex">
                        <p class="md:w-[50%]">{{ item?.publish_date }}</p>
                        <div class="md:-translate-y-8 pb-6 md:w-1/2 md:translate-x-4">
                            <router-link :to="{ name: 'EmploymentContent', params: { id: item?.id } }"
                                class="hover:bg-black hover:text-yellow-500 inline-block items-center px-[37%] md:px-16 py-4 text-sm md:text-base text-center text-black bg-zinc-100">
                                VIEW DETAILS
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>