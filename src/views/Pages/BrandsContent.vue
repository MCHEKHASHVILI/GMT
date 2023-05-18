<script>

import mainLayout from '../../layouts/mainLayout.vue';
import {mapGetters, useStore} from 'vuex';
import galleryComponent from "@/components/galleryComponent.vue";
import {onMounted, ref} from "vue";
import Phone from '../../components/icons/iconPhone.vue'
import Address from '../../components/icons/iconAddress.vue'
import Email from '../../components/icons/iconEmail.vue'
import Facebook from '../..//components/icons/iconFacebook.vue'
import Linkedin from '../../components/icons/iconLinkedin.vue'
import ContactComponent from "@/components/ContactComponent.vue";
export default {

  components: {
    ContactComponent,
    galleryComponent,
    mainLayout,
  },
  computed: {
    ...mapGetters('brands', ['brandsContent']),
  },


    setup() {

      const links = [
        {
          name: "ADDRESS",
          content: "Mtatsminda plateau, 0114 Tbilisi, Georgia",
          icon: Address
        },
        {
          name: "PHONE",
          content: "+995 577 74 44 00",
          icon: Phone
        },
        {
          name: "E-MAIL",
          content: "info@funicular.ge",
          icon: Email
        },
        {
          name: "FACEBOOK",
          content: "Funicular" + ' \u2022 ' + 'ფუნიკულიორი'	,
          icon: Facebook
        },
        {
          name: "LINKEDIN",
          content: "Restaurant Funicular",
          icon: Linkedin
        },
      ]



      const store = useStore()

        onMounted(() => {
            store.dispatch("brands/fetchFrontPageData")
            store.dispatch("brands/fetchBrandsData")
        });
      return {links}
    },
};
</script>


<template>
  <mainLayout>
    <div class=" flex  flex-col  items-center mb-32">

<div class="  flex  justify-center flex-col md:flex-row mb-16 md:mb-32 md:gap-32  gap-10">
  <img class="md:w-1/2 " :src="brandsContent[0]?.mainImg" alt="" />

  <div class="flex-col pt-20   flex md:items-start items-center md:justify-end">
    <img class=" mb-12 md:w-40" :src="brandsContent[0]?.icon" alt="" />
    <h1 class="font-bold mb-8 text-3xl font-[arial]">
        {{brandsContent[0]?.title}}
    </h1>

    <div class="text-xl font-[arial] w-10/12  mb-4 ">
      <p class="font-[arial] ">
        {{ brandsContent[0]?.conceptDescription }}
      </p>

    </div>

    <div class="md:w-8/12 w-10/12 md:flex-row flex-col text-lg flex gap-4">
      <button
        class="bg-[#f5f5f5] text-center py-3   transition duration-300 hover:bg-[#0b0b0b] hover:text-[#d0a958] md:py-6 font-[arial] md:w-1/2"
      >
        MENU
      </button>

      <button

        class="bg-[#0b0b0b] transition py-3 duration-300 hover:opacity-80 text-[#d0a958] font-[arial] md:py-6 md:w-1/2"
      >
        GO TO WEBSITE
      </button>
    </div>
  </div>
</div>

<!-- სურათების ნაწილი -->

        <gallery-component :images-source="brandsContent[0]?.gallery"/>


<!-- კონტაკტის ნაწილი -->

      <ContactComponent :info="links"/>


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
