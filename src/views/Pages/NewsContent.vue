<script>
import { mapGetters, mapActions } from "vuex"
import mainLayout from "../../layouts/mainLayout.vue"
import iconCallendar from "../../components/icons/iconCallendar.vue"
import iconEye from '../../components/icons/iconEye.vue'

export default {
    props: {
        id: Number | String,
        required: true
    },
    components: {
        mainLayout, iconCallendar, iconEye
    },
    computed: {
        ...mapGetters('news', ['content'])
    },
    methods: {
        ...mapActions('news', ['getContent'])
    },
    mounted(){
        this.getContent(this.$props.id)
    }
}
</script>

<template>
    <main-layout>
        <div class="flex flex-col px-4 md:px-0 md:mb-36 md:container md:mx-auto">
            <h1 class="text-center text-2xl md:text-3xl font-bold uppercase my-8 md:mt-16 md:mb-12">NEWS</h1>
            <img :src="content?.featured_image" class="object-cover" alt="">
            <div class="flex flex-row items-center md:py-2">
                <div class="flex items-center">
                    <iconCallendar class="mr-2"/>
                    <span> {{ content?.publish_date }} </span>
                </div>
                <div class="py-3 md:py-0 px-6 flex items-center">
                    <iconEye class="mr-2"/>
                    <span> {{ content?.views }} </span>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </div>
            <h2 class="text-lg md:text-3xl font-bold mb-4">{{ content?.title }}</h2>
            <div class="text-lg md:text-xl text-left mb-20 md:mb-4" v-html="content?.content"></div>
        </div>
    </main-layout>
</template>