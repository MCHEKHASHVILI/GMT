<script>
import { mapActions, mapGetters } from "vuex"
import mainLayout from '@/layouts/mainLayout.vue'
import IconExit from "@/components/icons/iconExit.vue"
import DiscoverEventsButton from '@/components/buttons/DiscoverEventsButton.vue'
export default {
    props: {
        id: Number | String,
        requred: true,
    },
    components: { mainLayout, DiscoverEventsButton, IconExit },
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
        ...mapGetters('events', ['event', 'booking'])
    },
    methods: {
        ...mapActions('events', ['getEvent', 'toggleBooking', 'book'])
    },
    mounted() {
        this.getEvent(this.$props.id)
    }
}
</script>
<template>
    <main-layout>
        <div class="container mx-auto">
            <div class="flex items-center justify-between space-y-4 flex-col my-12">
                <img class="w-full" :src="event.featured_image" alt="event image">
                <div class="flex items-center w-full justify-start space-x-4">
                    <div class="bg-[#d39b9b] text-center font-medium text-base p-8 py-2 uppercase"
                        v-html="event.event_type"></div>
                    <div class="text-[#7d7c7c] font-medium py-2" v-html="event.start_date"></div>
                </div>
                <div class="flex flex-col w-full mt-4">
                    <h1 class="md:text-3xl font-bold mb-4">{{ event.title }}</h1>
                    <div class="mb-6 whitespace-pre-line text-lg" v-html="event.description"></div>
                    <div class="text-[#676666] text-base mb-4"><span class="capitalize">{{ $t('labels.price') }}</span>: <span class="text-[#343131]">{{ event.price }}</span>
                    </div>
                    <button class="w-full md:w-48 p-4 bg-[#0B0B0B] text-[#CCA657] hover:bg-[#444141]"
                        @click.prevent="toggleBooking(event)">
                        <span class="uppercase">{{ $t('buttons.book') }}</span>
                    </button>
                    <Teleport to="body">
                        <div v-if="booking === event?.id" class="absolute inset-0 bg-black bg-opacity-25">
                            <div class="h-screen flex items-end md:items-center justify-center">
                                <div class="h-3/4 md:h-auto w-full md:max-w-xl md:mx-auto bg-[#FFFFFF]">
                                    <div class="container mx-auto flex flex-col justify-start space-y-8 p-12">
                                        <div class="flex flex-row justify-between">
                                            <h3 class="w-full text-xl text-[#1D1A1A] uppercase">{{ $t("forms.booking") }}</h3>
                                            <div class="w-full flex flex-row justify-end">
                                                <IconExit @click.prevent="toggleBooking(null)"
                                                    class="justify-end w-8 -mr-2" />
                                            </div>
                                        </div>
                                        <form class="flex flex-col justify-between space-y-4 min-h-full"
                                            @submit.prevent="book">
                                            <input required type="text" v-model="name"
                                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4 text-[#0B0B0B] text-opacity-70 text-lg"
                                                :placeholder="$t('placeholders.name')" />
                                            <input required type="text" v-model="phone"
                                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4 text-[#0B0B0B] text-opacity-70 text-lg"
                                                :placeholder="$t('placeholders.phone')" />
                                            <input required type="email" v-model="email"
                                                class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4 text-[#0B0B0B] text-opacity-70 text-lg"
                                                :placeholder="$t('placeholders.email')" />
                                            <DiscoverEventsButton>{{ $t('buttons.book') }}</DiscoverEventsButton>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Teleport>
                </div>
            </div>
        </div>
    </main-layout>
</template>