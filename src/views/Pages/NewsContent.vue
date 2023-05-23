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
        <div class="flex flex-col mx-10 md:mx-20">
            <div class="hidden max-sm:block">
                <h1 class="text-center font-hel_bold  mt-10">NEWS</h1>
            </div>
            <img :src="content?.featured_image" class="mt-5" alt="">
            <div class="flex flex-row items-center ">
                <div class="flex items-center">
                    <iconCallendar class="mr-2"/>
                    <span> {{ content?.publish_date }} </span>
                </div>
                <div class=" py-3 px-6 flex items-center">
                    <iconEye class="mr-2"/>
                    <span> {{ content?.views }} </span>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </div>
            <h1 class="text-2xl font-hel_bold  mb-1  max-sm:text-lg ">{{ content?.title }}</h1>
            <div class="text-base text-left mb-4 [&>p]:mb-4" v-html="content?.content"></div>
        </div>
    </main-layout>
</template>