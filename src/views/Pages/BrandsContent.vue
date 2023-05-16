<script>
import mainLayout from '../../layouts/mainLayout.vue';
import '@splidejs/vue-splide/css';
import { ref, onMounted } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import {useStore} from "vuex";



export default {
  components: {
    Splide,
    SplideSlide,

    mainLayout,
  },
  computed: {
    ...mapGetters('brands', ['brandsContent']),
  },



  setup() {
      const store = useStore()

      const main = ref();
    const thumbs = ref();



    const mainOptions = {
      type: 'loop',
      rewind: true,
      perPage: 1,
      pagination: false,
      fixedHeight: 740,
    };

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
    };

    onMounted(() => {
      const thumbsSplide = thumbs.value?.splide;

        if (thumbsSplide) {
        main.value?.sync(thumbsSplide);
      }


      updateThumbOptions();
        store.dispatch("brands/fetchFrontPageData")
        store.dispatch("brands/fetchBrandsData")

        window.addEventListener('resize', updateThumbOptions);

    });

    return { mainOptions, thumbOptions, main, thumbs, };
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

<section class="w-5/6 mt-24 md:mt-0 flex flex-col mb-28 items-center">
    <h1 class="font-[arial] font-bold text-3xl mb-10">GALLERY</h1>
    <Splide class="w-full md:inline-block hidden mb-3" :options="mainOptions" aria-label="My Favorite Images" ref="main">
      <SplideSlide v-for="image in brandsContent[0]?.galerry" :key="image">
        <img class="h-full w-full" :src="image" :alt="'Slide ' + image">
      </SplideSlide>
    </Splide>

    <Splide class="w-full h-1/5" :options="thumbOptions" aria-label="My Favorite Images" ref="thumbs">
      <SplideSlide class="h-44" v-for="image in brandsContent[0]?.galerry" :key="image" :class="[ 'opacity-75 active:opacity-100 active:border-0' ]">
        <img class="w-full h-full" :src="image" :alt="'Thumbnail ' + image">
      </SplideSlide>
    </Splide>
  </section>

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
