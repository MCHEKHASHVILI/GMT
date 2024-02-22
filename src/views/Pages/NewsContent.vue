<script>
import { mapGetters, mapActions } from "vuex"
import mainLayout from "@/layouts/mainLayout.vue"

export default {
    props: {
        id: Number | String,
        required: true
    },
    components: {
        mainLayout
    },
    computed: {
        ...mapGetters('news', ['content'])
    },
    methods: {
        ...mapActions('news', ['getContent'])
    },
    mounted() {
        this.getContent(this.$props.id)

    }
}
</script>

<template>
    <main-layout>
        <section class="container mx-auto">
            <div class="flex flex-col px-4 xl:px-0 xl:mb-36">
                <h1 class="text-center text-2xl xl:text-3xl font-bold uppercase my-8 xl:mt-16 xl:mb-12"></h1>
                <img :src="content?.featured_image" class="object-cover" alt="">
                <div class="flex flex-row py-4 xl:py-2 space-x-4 justify-start">
                    <div class="flex items-center justify-start space-x-2">
                        <span><i class="fas fa-eye"></i></span>
                        <span>{{ content?.publish_date }}</span>
                    </div>
                    <div class="flex items-center justify-start space-x-2">
                        <span><i class="fas fa-calendar"></i></span>
                        <span> {{ content?.views }} </span>
                    </div>
                    <link rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                </div>
                <h2 class="text-lg xl:text-3xl font-bold mb-4" v-html="content?.title"></h2>
                <div class="text-lg xl:text-xl text-left mb-20 xl:mb-4" v-html="content?.content"></div>
            </div>
        </section>
    </main-layout>
</template>