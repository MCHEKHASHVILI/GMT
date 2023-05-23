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
        <section class="w-full bg-gray-200 p-8">
            <div class="flex flex-col gap-4 w-full md:w-1/2 mx-auto text-left">
                <h4 class="uppercase font-bold text-3xl text-center">{{ title }}</h4>
                <div v-html="description" class="text-xl md:text-center"></div>
            </div>
        </section>
        <BrandsList />
    </mainLayout>
</template>