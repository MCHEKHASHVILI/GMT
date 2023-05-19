<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const brands = computed(() => store.getters["brands/getBrands"]);

onMounted(() => store.dispatch("brands/getBrands"));

</script>
<template>
    <section>
        <div v-for="item , index in brands.brands" :key="index" :class="[
                'flex flex-col w-full h-full',
                (index % 2 == 0) ? 'md:flex-row' : 'md:flex-row-reverse'
            ]">
            <div class="w-full md:w-1/2">
                <img class="object-fill w-full h-full" :src="item.featured_image">
            </div>
            <div :class="[
                    'flex flex-col w-full h-full p-16 md:w-1/2 md:p-24 ',
                    (index % 2 == 0) ? 'md:items-start' : 'md:items-end'
                ]">
                <div :class="['w-full md:grid', (index % 2 == 0) ? 'md:place-content-start' : 'md:place-content-end']">
                    <img class="object-cover w-full h-auto" :src="item.logo">
                </div>
                <h2 class="text-4xl font-extrabold dark:text-white mt-4 uppercase">{{ item.title }}</h2>
                <p :class="['mt-4 md:mt-8 md:w-2/3', (index % 2 == 0) ? 'md:text-left' : 'md:text-right']">{{
                    item.description }}</p>
                    <router-link :to="{ name: 'BrandsContent', params: { id: item?.id } }"
                    class="mt-8 text-yellow-500 text-xl hover:underline w-fit text-right">Read More</router-link> 
            </div>
        </div>
    </section>
</template>