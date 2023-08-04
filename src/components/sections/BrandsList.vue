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
        ...mapActions('brands', [ 'getBrands' ])
    },
    mounted(){ this.getBrands() },
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
                'flex flex-col w-full h-full py-16 px-4 md:w-1/2 md:p-24 ',
                (index % 2 === 0) ? 'md:items-start' : 'md:items-end'
            ]">
                <div :class="['w-full md:grid', (index % 2 === 0) ? 'md:place-content-start' : 'md:place-content-end']">
                    <img class="object-cover w-full h-auto" :src="item?.logo" alt="">
                </div>
                <h2 class="text-4xl font-extrabold dark:text-white mt-4 uppercase">{{ item?.title }}</h2>
                <p :class="['mt-4 md:mt-8 md:w-2/3', (index % 2 === 0) ? 'md:text-left' : 'md:text-right']">{{
                    item?.description }}</p>
                <router-link :to="{ name: 'BrandsContent', params: { id: item?.id } }"
                    class="mt-8 text-yellow-500 text-xl hover:underline w-fit text-right">Read More</router-link>
            </div>
        </div>
    </section>
</template>