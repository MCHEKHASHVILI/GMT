<script setup>
import { onMounted, computed } from 'vue'
import { Loader } from 'google-maps'
const props = defineProps(['contact_info', 'map'])
const loadMap = async () => {

    const lat = computed(() => parseFloat(props.map?.latitude))
    const lng = computed(() => parseFloat(props.map?.longitude))

    const LocalLatLng = { lat: lat.value, lng: lng.value }
    
    const options = { /** Todo */ }

    const loader = new Loader(import.meta.env.VITE_APP_MAP_API_KEY, options)
    const google = await loader.load()

    const googleMap = new google.maps.Map(document.getElementById('map'), {
        center: LocalLatLng,
        zoom: 12,
        disableDefaultUI: true,
    })

    var marker = new google.maps.Marker({
        position: LocalLatLng,
        title:"Hello World!"
    })

    marker.setMap(googleMap)

}


onMounted(() => loadMap())
</script>
<template>
    <section class="flex flex-col w-full px-8 md:px-0 pb-28 md:pb-36 md:pt-8">
        <h1 class="text-center m-5 text-3xl font-bold">CONTACT</h1>
        <div class="flex md:flex-row flex-col items-start">
            <div class="w-full md:w-2/5 flex flex-col h-full items-start justify-right space-y-2">
                <div class="w-full flex flex-col justify-between items-start space-y-5">
                    <div v-for="info in contact_info" class="flex flex-row">
                        <div v-if="iscocial(info)">
                            <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center" v-html="(info && info?.icon) ? info.icon?.element : null" />
                            <div class="flex flex-col justify-center pl-5">
                                <h4 class="text-base font-semibold text-[#797878]" v-html="info?.title" />
                                <p v-if="!social" class="text-sm font-semibold" v-html="info?.content" />
                            </div>
                        </div>
                        <a v-else :href="info?.content">
                            <div class="bg-[#e6e6e6] w-16 h-16 rounded-full flex justify-center items-center" v-html="(info && info?.icon) ? info.icon?.element : null" />
                            <div class="flex flex-col justify-center pl-5">
                                <h4 class="text-base font-semibold text-[#797878]" v-html="info?.title" />
                                <p v-if="!social" class="text-sm font-semibold" v-html="info?.content" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- <div class="w-full h-52 md:h-96 min-h-full" id="map"></div> -->
            <!-- <div class="w-full md:w-3/5 pt-7 md:pt-0">
                <iframe class="w-full h-52 md:h-96 min-h-full" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Freedom Square, Aleksandr Pushkin Street, Tbilisi 0105, Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed&desableDefaultUI=true">
                </iframe>
            </div> -->
        </div>
    </section>
</template>