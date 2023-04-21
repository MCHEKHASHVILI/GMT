<template>
    <footer>
        <div class="">
            <div class="bg-black text-white flex gap-[240px] pb-[25px]">
                <div class="leftSide pt-[60px] pl-[200px]">
                    <h1 class="text-3xl font-mainFont">GMT HOSPITALITY</h1>
                    <p class="ml-[50px] font-fancyFont">Traveller insights</p>
                </div>
                <div class="grid grid-cols-2 gap-[54px] pt-[60px] lg: md:grid-cols-4">
                    <div class="">
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <router-link to="/">
                            <li class="mb-4 text-sm	font-normal	">
                                <p class="mr-4  md:mr-6 text-slate-100">BRANDS</p>
                            </li>
                        </router-link>
                        <router-link to="/">
                            <li class="mb-4 text-sm	 font-normal	">
                                <p class="mr-4  md:mr-6 text-slate-100	">RESERVATION</p>
                            </li>
                        </router-link>
                        </ul>
                    </div>
                    <div>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <router-link to="/Events">
                            <li class="mb-4 text-sm	 font-normal	">
                                <p class="mr-4  md:mr-6 text-slate-100">EVENTS</p>
                            </li>
                        </router-link>
                        <router-link to="/News">
                            <li class="mb-4 text-sm	 font-normal	">
                                <p class="mr-4  md:mr-6 text-slate-100	">NEWS</p>
                            </li>
                        </router-link>
                        </ul>
                    </div>
                    <div>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <router-link to="/Employment">
                            <li class="mb-4 text-sm	font-normal	">
                                <p class="mr-4  md:mr-6 text-slate-100	">EMPLOYMENT</p>
                            </li>
                        </router-link>
                        <router-link to="/About">
                            <li class="mb-4 text-sm	font-normal	">
                                <p class="mr-4  md:mr-6 text-slate-100	">ABOUT US</p>
                            </li>
                        </router-link>
                        </ul>
                    </div>
                    <div>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4 text-sm	font-normal	">
                                <p class="text-slate-100">FOLLOW US</p>
                            </li>
                            <li class="flex gap-[15px] ">
                                <div class="rounded-full p-[15px] bg-zinc-700">
                                    <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-200"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                                </div>
                                <div class="rounded-full p-[15px] bg-zinc-700">
                                    <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-200"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="border-zinc-700 sm:mx-auto" />
            <div class="last bg-black text-center ">
                <h2 class="text-slate-100 py-[30px]">ALL RIGHTS RESERVED</h2>
            </div>
        </div>
    </footer>
</template>