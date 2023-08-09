<script>
import { mapGetters, mapActions } from "vuex"

export default {
    props: {
        brands: { type: Array, reqired: false, default: null }
    },
    computed: {
        ...mapGetters('brands', { data: 'brands' })
    },
    methods: {
        ...mapActions('brands', ['getBrands'])
    },
    mounted() { this.getBrands() },
}
</script>
<template>
    <section>
        <div v-for="(item, index) in data" :key="index" :class="[
            'flex flex-col w-full h-full',
            (index % 2 === 0) ? 'md:flex-row' : 'md:flex-row-reverse'
        ]">
            <div class="w-full md:w-1/2">
                <img class="object-fill w-full h-full" :src="item?.featured_image" alt="">
            </div>

            <div :class="[
                'flex flex-col w-full md:w-1/2 h-full p-8 md:p-18 ',
                (index % 2 === 0) ? 'md:items-start' : 'md:items-end'
            ]">
                <!-- <div class="container mx-auto"> -->
                    <div
                        :class="['min-h-24 md:h-full w-full md:grid', (index % 2 === 0) ? 'md:place-content-start' : 'md:place-content-end']">
                        <img class="object-cover md:w-full md:h-auto" :src="item?.logo" alt="">
                    </div>
                    <h2 class="text-2xl md:text-3xl font-bold dark:text-white mt-4 uppercase" v-html="item?.title"></h2>
                    <div :class="['text-lg md:text-xl mt-4 md:mt-8 md:w-2/3', (index % 2 === 0) ? 'md:text-left' : 'md:text-right']"
                        v-html="item?.description"></div>
                    <router-link :to="{ name: 'BrandsContent', params: { id: item?.id } }"
                        class="mt-8 text-yellow-500 text-lg hover:underline w-fit text-right uppercase">Read
                        More</router-link>
                <!-- </div> -->
            </div>
        </div>
    </section>
</template>