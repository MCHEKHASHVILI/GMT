<script>
import '@splidejs/vue-splide/css';
import { ref, onMounted } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide'

export default {
    props: ['images'],

    components:{
        Splide,
        SplideSlide,
    },
    setup() {

        const main = ref();
        const thumbs = ref();



        const mainOptions = {
            type: 'slide',
            rewind: false,
            perPage: 1,
            pagination: false,
            fixedHeight: 700,
        };

        const thumbOptions = ref({
            type: 'slide',
            rewind: false,
            perPage: 4,
            pagination: false,
            arrows: false,
            gap: '0.6rem',
            focus: 'center',
            isNavigation: true,
            updateOnMove: true,
        });

        const updateThumbOptions = () => {
            thumbOptions.value.perPage = window.innerWidth >= 768 ? 4 : 1.1;

        };

        onMounted(() => {
            const thumbsSplide = thumbs.value?.splide;

            if (thumbsSplide) {
                main.value?.sync(thumbsSplide);
            }


            updateThumbOptions();
            window.addEventListener('resize', updateThumbOptions);

        });

        return { mainOptions, thumbOptions, main, thumbs, };
    },
}





</script>

<template>

    <section class="w-5/6 mt-24 md:mt-0 flex flex-col mb-28 items-center">
        <h1 class="font-[arial] font-bold text-3xl mb-10">GALLERY</h1>
        <Splide class="w-full md:inline-block hidden mb-3" :options="mainOptions" aria-label="My Favorite Images" ref="main">
            <SplideSlide v-for="image in images" :key="image">
                <img class="h-full w-full" :src="image" :alt="'Slide ' + image">
            </SplideSlide>
        </Splide>

        <Splide class="w-full h-1/5" :options="thumbOptions" aria-label="My Favorite Images" ref="thumbs">
            <SplideSlide class="h-44" v-for="image in images" :key="image" :class="[ 'opacity-100 active:opacity-75 active:border-0' ]">
                <img class="w-full h-full" :src="image" :alt="'Thumbnail ' + image">
            </SplideSlide>
        </Splide>
    </section>



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