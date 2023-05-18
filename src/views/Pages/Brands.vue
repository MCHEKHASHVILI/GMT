<script setup>
import BrandsList from '../../components/sections/BrandsList.vue';
import mainLayout from '../../layouts/mainLayout.vue';
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
const store = useStore();
const brands = computed(() => store.getters["brands/getBrands"]);

onMounted(() => store.dispatch("brands/getBrands"));

</script>
<template>
    <mainLayout>
        <section class="w-full bg-gray-200 p-8">
            <div class="flex flex-col gap-4 w-full md:w-1/2 mx-auto text-left">
                <h4 class="uppercase font-bold text-3xl text-center">{{ brands.title }}</h4>
                <p class="text-xl md:text-center">{{ brands.description }}</p>
            </div>
        </section>
        <BrandsList />
    </mainLayout>
</template>