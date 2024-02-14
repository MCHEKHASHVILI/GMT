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
            <div class="flex flex-col gap-y-4 w-full md:w-full mx-auto text-left text-[#1D1A1A] ">
                <h1 class="uppercase font-semibold md:font-bold text-2xl md:text-3xl text-center" v-html="title"></h1>
                <div class="text-lg mt-4">
                    <div class="hidden 2xl:block left"></div>
                    <div class="hidden 2xl:block right"></div>
                    <div class="md:text-center" v-html="description"></div>
                </div>
            </div>
        </section>
        <BrandsList />
    </mainLayout>
</template>
<style scopped>
.left,
.right {
  background-color: transparent;
  height: 12ex;
  width: 20%;
}

.left {
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
}
</style>