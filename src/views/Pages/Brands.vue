<script setup>
import BrandsList from '../../components/sections/BrandsList.vue';
import mainLayout from '../../layouts/mainLayout.vue';

const pageTitle = 'brands'
const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, reiciendis accusamus atque, 
                    voluptate quam quo itaque nihil optio reprehenderit molestiae mollitia hic laudantium, nulla tenetur unde?
                    Ullam odit quam inventore ducimus eius nostrum minima temporibus, tempore,  nam facilis, debitis corrupti
                    neque ipsa non!.`


</script>
<template>
    <mainLayout>
        <section class="w-full bg-gray-200 p-8">
            <div class="flex flex-col gap-4 w-full md:w-1/2 mx-auto text-left">
                <h4 class="uppercase font-bold text-3xl text-center">{{ pageTitle }}</h4>
                <p class="text-xl md:text-center">{{ description }}</p>
            </div>
        </section>
        <BrandsList />
    </mainLayout>
</template>