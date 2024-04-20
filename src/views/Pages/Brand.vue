<script>
import { mapActions, mapGetters } from 'vuex'
import mainLayout from '../../layouts/mainLayout.vue'
import GalleryComponent from "@/components/GalleryComponent.vue"
import ContactComponent from "@/components/ContactComponent.vue"

export default {
  props: {
    id: { type: [Number, String], required: true }
  },
  components: {
    mainLayout,
    GalleryComponent,
    ContactComponent,
  },
  computed: {
    ...mapGetters('brands', ['brand', 'contact']),
  },
  methods: {
    ...mapActions('brands', ['getBrand'])
  },
  created() {
    this.getBrand(this.$props.id)
  },
  // mounted() {
  // }
}
</script>
<template>
  <mainLayout>
    <div class="flex overflow-x-hidden flex-col items-center mb-32">
      <div class="w-screen flex justify-center flex-col md:flex-row mb-16 md:mb-32 ">
        <img class="md:w-1/2 w-full md:mr-32 mr-10 object-cover" :src="brand?.featured_image" />
        <div class="flex flex-col px-4 md:px-0 py-8 md:w-1/2 md:items-start items-left md:justify-end">
          <div class="min-h-24">
            <img class="md:w-40" :src="brand?.logo" alt="" />
          </div>
          <h1 class="font-bold mb-8 text-3xl" v-html="brand?.title"></h1>
          <div class="text-xl w-full md:w-10/12 mb-4">
            <div class="w-full" v-html="brand?.description"></div>
          </div>
          <div class="w-10/12 md:w-8/12 md:flex-row flex-col text-lg flex gap-4">
            <a :href="brand?.menu" target="_blank"
              class="bg-[#f5f5f5] flex items-center justify-center py-3 transition duration-300 hover:bg-[#0b0b0b] hover:text-[#d0a958] md:py-6 md:w-1/2 uppercase whitespace-nowrap">
              {{ $t('buttons.menu') }}
            </a>
            <a :href="brand?.website" target="_blank"
              class="bg-[#0b0b0b] flex items-center justify-center transition py-3 duration-300 hover:opacity-80 text-[#d0a958] md:py-6 md:w-1/2 uppercase whitespace-nowrap">
              {{ $t('buttons.go_to_website') }}
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <GalleryComponent v-if="!!brand && brand?.gallery && brand.gallery.length" :images="brand.gallery" />
        <!-- <ContactComponent v-if="!!brand" :contact_info="brand?.contact_info" :map="brand?.map" /> -->
      </div>
    </div>
  </mainLayout>
</template>


