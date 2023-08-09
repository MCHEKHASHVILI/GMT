<script>
import { mapGetters } from 'vuex'
import BrandsList from '@/components/sections/BrandsList.vue'
import mainLayout from '@/layouts/mainLayout.vue'

export default {
    components: {
        mainLayout, BrandsList
    },
    computed: {
        ...mapGetters('brands', ['title', 'description'])
    }
}
</script>
<template>
    <mainLayout>
        <section class="w-full p-4 md:py-16 md:bg-[#F5F5F5]">
            <div class="flex flex-col gap-y-4 w-full md:w-2/5 mx-auto text-left text-[#1D1A1A] ">
                <h1 class="uppercase font-semibold md:font-bold text-2xl md:text-3xl text-center" v-html="title"></h1>
                <div class="text-xl md:text-center" v-html="description"></div>
            </div>
        </section>
        <BrandsList />
    </mainLayout>
</template>