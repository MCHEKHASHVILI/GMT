<script>
import { mapActions, mapGetters } from 'vuex'
import mainLayout from '../../layouts/mainLayout.vue'
import GalleryComponent from "@/components/GalleryComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  props: {
    id: { type: Number, required: true }
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
  mounted() {
    this.getBrand(this.$props.id)
  }
}
// import { useRoute } from "vue-router";
// import mainLayout from '../../layouts/mainLayout.vue';
// import { mapGetters, useStore } from 'vuex';
// import ContactComponent from "@/components/ContactComponent.vue";
// import { computed, onMounted, ref, watch } from "vue";

// export default {
//   components: {
//     ContactComponent,
//     galleryComponent,
//     mainLayout,
//   },
//   setup() {
//     const route = useRoute();
//     const store = useStore();

//     const brand = computed(() => store.getters["brands/brand"]);
//     const testGallery = computed(() => store.getters["brands/testGallery"]);

//     const contact = ref({
//       address: "",
//       phone: "",
//       email: "",
//       facebook: "",
//       linkedin: "",
//     });

//     const updateContact = () => {
//       const data = brand.value;
//       contact.value.address = data?.contact?.address || "";
//       contact.value.phone = data?.contact?.phone || "";
//       contact.value.email = data?.contact?.email || "";
//       contact.value.facebook = data?.social_networks?.facebook_title || "";
//       contact.value.linkedin = data?.social_networks?.linkedin_title || "";
//     };

//     watch(brand, () => {
//       updateContact();
//     });

//     onMounted(() => {
//       store.dispatch("brands/getbrand", route.params.id);
//     });

//     return {
//       contact,
//       route,
//       brand,
//       testGallery,
//     };
//   },
// };
</script>

<template>
  <mainLayout>
    <div class="flex overflow-x-hidden  flex-col  items-center mb-32">
      <div class="w-screen flex justify-center  flex-col md:flex-row mb-16 md:mb-32 ">
        <img class="md:w-1/2 w-full   md:mr-32 mr-10" :src="brand?.featured_image" />
        <div class="flex-col  pt-20 md:w-1/2   flex md:items-start items-center md:justify-end">
          <img class=" mb-12  md:w-40" :src="brand?.logo" alt="" />
          <h1 class="font-bold mb-8 text-3xl font-[arial]">
            {{ brand?.title }}
          </h1>
          <div class="text-xl break-all font-[arial] w-10/12 mb-4">
            <p class="font-[arial]">
              {{ brand?.description }}
            </p>
          </div>
          <div class="md:w-8/12 w-10/12 md:flex-row flex-col text-lg flex gap-4">
            <a :href="brand?.menu"
              class="bg-[#f5f5f5] flex items-center justify-center py-3   transition duration-300 hover:bg-[#0b0b0b] hover:text-[#d0a958] md:py-6 font-[arial] md:w-1/2">MENU</a>
            <a :href="brand?.website"
              class="bg-[#0b0b0b] flex items-center justify-center transition py-3 duration-300 hover:opacity-80 text-[#d0a958] font-[arial] md:py-6 md:w-1/2">GO
              TO WEBSITE</a>
          </div>
        </div>
      </div>
      <GalleryComponent :images="brand?.images" />
      <ContactComponent :details="contact" />
    </div>
  </mainLayout>
</template>


