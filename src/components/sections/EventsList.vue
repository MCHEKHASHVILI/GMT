<script>
import { mapGetters, mapActions } from 'vuex'
import IconExit from "@/components/icons/iconExit.vue"
import DiscoverEventsButton from '../buttons/DiscoverEventsButton.vue'
export default {
    props: {
        events: Array
    },
    components: { IconExit, DiscoverEventsButton },
    computed: {
        name: {
            get() {
                return this.$store.getters['events/name']
            },
            set(value) {
                this.$store.commit('events/SET_NAME', value)
            }
        },
        phone: {
            get() {
                return this.$store.getters['events/phone']
            },
            set(value) {
                this.$store.commit('events/SET_PHONE', value)
            }
        },
        email: {
            get() {
                return this.$store.getters['events/email']
            },
            set(value) {
                this.$store.commit('events/SET_EMAIL', value)
            }
        },
        ...mapGetters('events', ['booking'])
    },
    methods: {
        ...mapActions('events', ['toggleBooking', 'book'])
    }
}
</script>
<template>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2">
        <div v-for="event in events" class="w-full h-full">
            <div class="w-full h-full bg-[#FFFFFF] flex flex-col justify-between space-y-2">
                <img class="w-full object-fit h-48" :src="event.featured_image">
                <div class="grow">
                    <h2 class="text-2xl font-medium" v-html="event.title"></h2>
                </div>
                <div
                    class="w-full flex flex-row flex-wrap 2xl:flex-nowrap justify-start align-baseline space-x-4 md:space-x-2">
                    <div class="w-full flex flex-row justify-start space-x-2">
                        <div class="text-sm text-[#000000] bg-[#F5F5F5] flex flex-col justify-around px-8 md:px-6 uppercase"
                            v-html="event.event_type"></div>
                        <div class="flex flex-col justify-around">
                            <div
                                class="flex flex-row space-x-1 justify-start text-lg lg:text-xl text-[#1D1A1A] whitespace-nowrap">
                                <span class="text-opacity-70">Price:</span><span v-html="event.price"></span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-row justify-start 2xl:justify-end lg:text-xl text-[#1D1A1A] py-2 uppercase whitespace-nowrap"
                        v-html="event.start_date"></div>
                </div>
                <div class="flex flex-row justify-between space-x-4 text-[#0B0B0B] lg:text-lg">
                    <router-link :to="{ name: 'EventsContent', params: { id: event.id } }" custom v-slot="{ navigate }">
                        <button @click="navigate" role="link"
                            class="w-full p-4 bg-[#F5F5F5] hover:bg-[#0B0B0B] hover:text-white text-center">
                            <span class="uppercase">{{ $t('buttons.event_details') }}</span>
                        </button>
                    </router-link>
                    <button class="w-full p-4 bg-[#0B0B0B] text-[#CCA657] hover:bg-[#444141]"
                        @click.prevent="toggleBooking(event)">
                        <span class="uppercase">{{ $t('buttons.event_book_now') }}</span>
                    </button>
                    <Teleport to="body">
                        <div v-if="booking === event?.id" class="absolute inset-0 bg-black bg-opacity-25">
                            <div class="h-screen flex items-end md:items-center justify-center">
                                <div class="h-3/4 md:h-auto w-full md:max-w-xl md:mx-auto bg-[#FFFFFF]">
                                    <div class="container mx-auto flex flex-col justify-start space-y-8 p-12">
                                        <div class="flex flex-row justify-between">
                                            <h3 class="w-full text-xl text-[#1D1A1A] uppercase">booking</h3>
                                            <div class="w-full flex flex-row justify-end">
                                                <IconExit @click.prevent="toggleBooking(null)"
                                                    class="justify-end w-8 -mr-2" />
                                            </div>
                                        </div>
                                        <form class="flex flex-col justify-between space-y-4 min-h-full"
                                            @submit.prevent="book">
                                            <input required type="text" v-model="name"
                                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4 text-[#0B0B0B] text-opacity-70 text-lg"
                                                placeholder="Full Name" />
                                            <input required type="text" v-model="phone"
                                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4 text-[#0B0B0B] text-opacity-70 text-lg"
                                                placeholder="Phone" />
                                            <input required type="email" v-model="email"
                                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4 text-[#0B0B0B] text-opacity-70 text-lg"
                                                placeholder="Email" />
                                            <DiscoverEventsButton>book</DiscoverEventsButton>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Teleport>
                </div>
            </div>
        </div>
    </section>
</template>