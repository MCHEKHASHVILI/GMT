<script>
import { mapGetters, mapActions } from "vuex"
export default {
    computed: {
        ...mapGetters('contact', ['contact_info']),
    },
    methods: {
        ...mapActions('contact', ['getContactInfo']),
    },
    mounted() {
        this.getContactInfo()
    }
}
</script>
<template>
    <section class="flex flex-col w-full px-8 md:px-0 pb-28 md:pb-36 md:pt-8">
        <h1 class="text-center m-5 text-3xl font-bold">CONTACT</h1>
        <div class="flex md:flex-row flex-col items-start">
            <div class="w-full md:w-2/5 flex flex-col h-full items-start justify-right space-y-2">
                <!-- Basic info as Text -->
                <!-- <div v-for="(info, key) in details?.basic" class="flex flex-row">
                </div>
                <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center p-4">
                    <component :is="{ ...layout[key]?.icon }" role="img"></component>
                    <div class="flex flex-col justify-center pl-5">
                        <p class="text-base font-semibold text-[#797878]">{{ layout[key]?.title }}</p>
                        <p class="text-sm font-semibold">{{ info }}</p>
                    </div>
                </div> -->
                <!-- Socials as links -->
                <!-- <div v-for="(social, key) in details?.social" class="flex flex-row">
                    <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center p-4">
                    </div>
                    <component :is="{ ...layout[key]?.icon }" ></component>
                    <div class="flex flex-col justify-center pl-5">
                        <p class="text-base font-semibold text-[#797878]">{{ layout[key]?.title }}</p>
                        <a :href="social?.url" class="text-sm font-semibold" target="_blank">{{ social?.title }}</a>
                    </div>
                </div> -->
                <div class="w-full flex flex-col justify-between items-start space-y-5">
                    <div v-for="info in brand?.contact" class="flex flex-row">
                        <div>
                            <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center" v-html="(info && info?.icon) ? info.icon?.element : ''"></div>
                        </div>
                        <div class="flex flex-col justify-center pl-5">
                            <h4 class="text-base font-semibold text-[#797878]" v-html="info?.title"></h4>
                            <p class="text-sm font-semibold" v-html="info?.content"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-3/5 pt-7 md:pt-0">
                <iframe class="w-full h-52 md:h-96 min-h-full" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Freedom Square, Aleksandr Pushkin Street, Tbilisi 0105, Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed">
                </iframe>
            </div>
        </div>
    </section>
</template>
