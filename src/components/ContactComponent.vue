<script>
import { mapGetters, mapActions } from "vuex"
// import { Loader } from 'google-maps';
export default {
    computed: {
        ...mapGetters('contact', ['contact_info']),
    },
    methods: {
        ...mapActions('contact', ['getContactInfo']),
        // loadMap: async () => {
        //     const options = { /* todo */ }
        //     const loader = new Loader('AIzaSyCQMm7STIgpt1bDztiJYokEPgTxfHEw0I4', options)
        //     const google = await loader.load()
        //     const map = new google.maps.Map(document.getElementById('map'), {
        //         center: { lat: -34.397, lng: 150.644 },
        //         zoom: 8,
        //     })
        // }
    },
    mounted() {
        this.getContactInfo()
        // this.loadMap()
    }
}
</script>
<template>
    <section class="flex flex-col w-full px-8 md:px-0 pb-28 md:pb-36 md:pt-8">
        <h1 class="text-center m-5 text-3xl font-bold">CONTACT</h1>
        <div class="flex md:flex-row flex-col items-start">
            <div class="w-full md:w-2/5 flex flex-col h-full items-start justify-right space-y-2">
                <div class="w-full flex flex-col justify-between items-start space-y-5">
                    <div v-for="info in contact_info" class="flex flex-row">
                        <div>
                            <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center"
                                v-html="(info && info?.icon) ? info.icon?.element : ''"></div>
                        </div>
                        <div class="flex flex-col justify-center pl-5">
                            <h4 class="text-base font-semibold text-[#797878]" v-html="info?.title"></h4>
                            <p class="text-sm font-semibold" v-html="info?.content"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-52 md:h-96 min-h-full" id="map"></div>
            <div class="w-full md:w-3/5 pt-7 md:pt-0">
                <iframe class="w-full h-52 md:h-96 min-h-full" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Freedom Square, Aleksandr Pushkin Street, Tbilisi 0105, Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed&desableDefaultUI=true">
                </iframe>
            </div>
        </div>
    </section>
</template>
