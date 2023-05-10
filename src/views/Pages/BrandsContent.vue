<script>
import '@splidejs/vue-splide/css'
import { ref } from 'vue'
import { mapGetters } from 'vuex'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { onMounted } from "vue";
import mainLayout from '../../layouts/mainLayout.vue'
import Phone from "../../components/icons/iconPhone.vue";
import Address from "../../components/icons/iconAddress.vue";
import Email from "../../components/icons/iconEmail.vue";
import Facebook from "../..//components/icons/iconFacebook.vue";
import Linkedin from "../../components/icons/iconLinkedin.vue";


export default {

  components: {
    Splide, SplideSlide, mainLayout
  },
  computed: {
    ...mapGetters('brands', ['brands'])
  },
  setup(){
    const main = ref()
    const thumbs = ref()

    
    const links = [
  {
    name: "ADDRESS",
    content: "Mtatsminda plateau, 0114 Tbilisi, Georgia",
    icon: Address,
  },
  {
    name: "PHONE",
    content: "+995 577 74 44 00",
    icon: Phone,
  },
  {
    name: "E-MAIL",
    content: "info@funicular.ge",
    icon: Email,
  },
  {
    name: "FACEBOOK",
    content: "Funicular \u{2022} ფუნიკულიორი",
    icon: Facebook,
  },
  {
    name: "LINKEDIN",
    content: "Restaurant Funicular",
    icon: Linkedin,
  },
];
    const mainOptions = {
      type: 'loop',
      rewind: true,
      perPage: 1,
      pagination: false,
      fixedHeight: 740,
    }

   
    const thumbOptions = ref({
      type: 'slide',
      rewind: true,
      perPage: 4,
      pagination: false,
      arrows: false,
      gap: '0.6rem',
      focus: 'center',
      isNavigation: true,
      updateOnMove: true,
    });

    const updateThumbOptions = () => {
      thumbOptions.value.perPage = window.innerWidth >= 768 ? 4 : 1;
    }

    onMounted( () => {
      const thumbsSplide = thumbs.value?.splide;
      if ( thumbsSplide ) {
        main.value?.sync( thumbsSplide );
      }
      updateThumbOptions();
      window.addEventListener('resize', updateThumbOptions);
    });

    return { mainOptions, thumbOptions, main, thumbs,links }
  }
}
</script>

<template>
  <mainLayout>
    <div class=" flex  flex-col  items-center mb-32">

<div class="h-5/6 flex  justify-center flex-col md:flex-row mb-16 md:mb-32 md:gap-40  gap-10">
  <img class="md:w-5/6 " :src="brands[0].mainImg" alt="" />

  <div class="flex-col  flex md:items-start items-center md:justify-end">
    <img class=" w-36 mb-12 md:w-48" :src="brands[0].icon" alt="" />
    <h1 class="font-bold mb-8 text-3xl font-[arial]">
      {{ brands[0].name.toUpperCase() }}
    </h1>

    <div class="text-xl mb-4 w-10/12">
      <p class="font-[arial]">
        {{ brands[0].conceptDescription.firstPart }}
      </p>
      <br />
      <p class="font-[arial]">
        {{ brands[0].conceptDescription.secondPart }}
      </p>
      <br />
      <p class="font-[arial]">
        {{ brands[0].conceptDescription.lastPart }}
      </p>
      <br />
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

<section class="w-5/6 flex flex-col mb-28 items-center ">
  <h1 class="font-[arial] font-bold text-3xl mb-10">GALERRY</h1>
  <Splide class="w-full md:inline-block hidden mb-3 " :options="mainOptions" aria-label="My Favorite Images" ref="main">
      <SplideSlide  v-for="image in brands[0].galerry">
          <img class="h-full w-full"  :src="image" alt="Sample 1">
      </SplideSlide>
      
  </Splide>

  <Splide class="w-full h-1/5 " :options="thumbOptions" aria-label="My Favorite Images" ref="thumbs">
      <SplideSlide class="h-44" v-for="image in brands[0].galerry" :class="[ 'opacity-75 active:opacity-100 active:border-0' ]">
          <img  class="w-full h-full" :src="image" alt="Sample 1">
      </SplideSlide>
  </Splide>
</section>

<!-- კონტაკტის ნაწილი -->



<div class="flex flex-col justify-center w-full items-center">
        <h1 class="text-3xl font-[arial]  font-bold">CONTACT</h1>

        <div class="flex md:flex-row flex-col h-full   w-[85%] py-5 items-center">

          <div class="flex flex-col md:w-1/2 w-full mb-8	 gap-7">
            <div v-for="link in links" class="flex">
              <div
                class="bg-[#e6e6e6] w-14 h-14 rounded-full flex justify-center items-center p-4"
              >
                <component :is="link.icon"></component>
              </div>
              <div class="flex flex-col md:w-full w-80 break-words justify-center pl-5">
                <p class="font-semibold text-lg text-[#797878]">
                  {{ link.name }}
                </p>
                <p class="text-lg  font-semibold">{{ link.content }}</p>
              </div>
            </div>
          </div>

          <div class="md:w-2/3 w-full h-full">
            <iframe
              class="w-full  h-52	 md:h-96 "
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Freedom Square, Aleksandr Pushkin Street, Tbilisi 0105, Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed"
            >
            </iframe>
          </div>
        </div>
      </div>
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
