<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const footerComponents = computed(() => store.getters["footer/footerComponents"])
</script>
<template>
    <footer>
        <div class="bg-black text-white  md:flex md:justify-between md:pr-32 md:pb-10">
            <div class="leftSide pl-24 py-5 md:pt-10 md:pl-16">
                <router-link to="/">
                    <img src="../assets/images/Logo.png">
                </router-link>
            </div>
            <div class="pl-14 pb-14 md:pb-0 gap-x-32  md:gap-x-24 md:pt-14 ">
                <div  class="pb-3 ">
                    <ul  class="grid grid-cols-2 md:grid-cols-3 gap-x-32  text-gray-500 dark:text-gray-400 font-medium">
                            <li v-for="components in footerComponents" class="mb-4 text-sm	font-normal	text-white md:pb-2">
                                <router-link :to="components.routerLink">{{ components.name }}</router-link>
                            </li>
                            <li class="flex  ">
                            <div class=" flex gap-3 left-12 ">
                                <div class=" rounded-full p-2 md:p-3 bg-zinc-700">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-200"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="rounded-full p-2 md:p-3 bg-zinc-700">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-200"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </li>
                            <li class="mb-4 text-sm	font-normal	">
                               <a class="uppercase text-white" href="#">follow us</a>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="border-zinc-700 mx-auto" />
        <div class="last bg-black text-center ">
            <h2 class="text-slate-100 py-12 md:py-10">ALL RIGHTS RESERVED</h2>
        </div>
    </footer>
</template>