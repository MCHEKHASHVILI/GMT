<script setup>
import useHome from "@/composables/useHome"
const {
  subtitle,
  description,
  sectionTitle
} = useHome()
</script>
<template>
    <div class="flex flex-col bg-black">
        <div class="text-[#FFFFFF] text-left xl:text-center w-full px-4 md:px-0 md:w-3/5 md:mx-auto pb-4">
            <h3 class="text-center font-medium text-2xl md:text-3xl uppercase" v-html="subtitle"></h3>
            <div class="text-lg mt-4">
                <div class="hidden 2xl:block left"></div>
                <div class="hidden 2xl:block right"></div>
                <div class="2xl:text-center" v-html="description"></div>
            </div>
            <div class="flex flex-row space-x-4 justify-center text-2xl font-bold text-opacity-70 mt-8 md:mt-2">
                <img src="/src/assets/icons/dining.svg">
                <h3 class="uppercase font-medium opacity-70" v-html="sectionTitle"></h3>
            </div>
            <img class="my-8 mx-auto font-medium opacity-70" src="/src/assets/icons/arrow.svg">
        </div>
    </div>
</template>
<style scopped>
.left,
.right {
  background-color: transparent;
  height: 12ex;
  width: 25%;
}

.left {
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
}
</style>