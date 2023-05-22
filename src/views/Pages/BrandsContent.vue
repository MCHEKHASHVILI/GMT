<script>
import {useRoute} from "vue-router";
import mainLayout from '../../layouts/mainLayout.vue';
import {mapGetters, useStore} from 'vuex';
import galleryComponent from "@/components/galleryComponent.vue";
import {onMounted} from "vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {


  components: {
    ContactComponent,
    galleryComponent,
    mainLayout,

  },
  computed: {
    ...mapGetters('brands', ['singleBrandData']),
    ...mapGetters('brands', ['testGallery']),

  },


    setup() {
      const route = useRoute()

      const store = useStore()

        onMounted(() => {
          store.dispatch("brands/getSingleBrandData", route.params.id)
        });
      return { route}
    },
};
</script>


<template>
  <mainLayout>
    <div class=" flex overflow-x-hidden  flex-col  items-center mb-32">

<div class="w-screen  flex justify-center  flex-col md:flex-row mb-16 md:mb-32 ">
  <img  class="md:w-1/2 w-full   md:mr-32 mr-10" :src="singleBrandData?.featured_image " />

  <div class="flex-col  pt-20 md:w-1/2   flex md:items-start items-center md:justify-end">
    <img class=" mb-12  md:w-40" :src="singleBrandData?.logo" alt="" />
    <h1 class="font-bold mb-8 text-3xl font-[arial]">
        {{singleBrandData?.title}}
    </h1>

    <div class="text-xl break-all	 font-[arial] w-10/12  mb-4 ">
      <p class="font-[arial] ">
        {{singleBrandData?.description}}
      </p>

    </div>

    <div class="md:w-8/12 w-10/12 md:flex-row flex-col text-lg flex gap-4">
      <a :href="singleBrandData?.menu" class="bg-[#f5f5f5] flex items-center justify-center py-3   transition duration-300 hover:bg-[#0b0b0b] hover:text-[#d0a958] md:py-6 font-[arial] md:w-1/2">MENU</a>


      <a :href="singleBrandData?.website" class="bg-[#0b0b0b] flex items-center justify-center transition py-3 duration-300 hover:opacity-80 text-[#d0a958] font-[arial] md:py-6 md:w-1/2" >GO TO WEBSITE</a>

    </div>
  </div>
</div>

<!-- სურათების ნაწილი -->

      <gallery-component :images-source="testGallery"/>


<!-- კონტაკტის ნაწილი -->




</div>
  </mainLayout>

</template>

<style>
  .splide__arrow {
    width: 65px;
    height: 65px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .splide__arrow path {
    fill: white;
  }
</style>
