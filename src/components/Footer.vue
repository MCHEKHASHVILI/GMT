<template>
    <footer>
        <div class="">
            <div class="bg-black text-white  md:flex md:justify-between md:pr-[6%] md:pb-[2%]">
                <div class="leftSide pl-[23%] py-[5%] md:pt-[3%] md:pl-16 md">
                    <img src="../assets/images/Logo.png">
                </div>
                <div class="pl-[10%] pb-[15%] md:pb-0 gap-x-32 md:grid grid grid-cols-2 md:gap-x-24 md:pt-14 md:grid-cols-4 ">
                    <div class="order-1 md:order-1">
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <router-link to="/brands">
                            <li class="mb-4 text-sm	font-normal	">
                                <p class="uppercase mr-4  md:mr-6 text-slate-100">brands</p>
                            </li>
                        </router-link>
                        </ul>
                    </div>
                    <div class="order-5 md:order-2">
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <router-link to="/events">
                            <li class="mb-4 text-sm	 font-normal	">
                                <p class="uppercase mr-4  md:mr-6 text-slate-100	">events</p>
                            </li>
                        </router-link>
                        </ul>
                    </div>
                    <div class="order-4 md:order-3">
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <router-link to="/employment">
                            <li class="mb-4 text-sm	 font-normal	">
                                <p class="uppercase mr-4  md:mr-6 text-slate-100">Employment</p>
                            </li>
                        </router-link>
                        </ul>
                    </div>
                    <div class="order-7 md:order-4">
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4 text-sm	 font-normal	">
                                <a href="#" class="uppercase mr-4  md:mr-6 text-slate-100	">follow us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="order-3  md:order-5">
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <router-link to="/reservation">
                            <li class="mb-4 text-sm	font-normal	">
                                <p class="uppercase mr-4  md:mr-6 text-slate-100	">reservation</p>
                            </li>
                        </router-link>
                        </ul>
                    </div>
                    <div class="order-2 md:order-6">
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <router-link to="/news">
                            <li class="mb-4 text-sm	font-normal	">
                                <p class="uppercase mr-4  md:mr-6 text-slate-100	">news</p>
                            </li>
                        </router-link>
                        </ul>
                    </div>
                    <div class="order-6 md:order-7">
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <router-link to="/about">
                            <li class="mb-4 text-sm	font-normal	">
                                <p class="uppercase mr-4  md:mr-6 text-slate-100">about us</p>
                            </li>
                        </router-link>
                        </ul>
                    </div>
                    <div class="order-8  md:order-8">
                        <ul class=" text-gray-500 dark:text-gray-400 font-medium">
                            <li class="flex gap-[15px] ">
                                <div class="flex gap-3 left-12 translate-y-8 md:left-0 absolute md:relative md:translate-x-0 md:translate-y-0">
                                <div class="rounded-full p-[7px] md:p-[15px] bg-zinc-700">
                                    <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-200"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                                </div>
                                <div class="rounded-full p-[7px] md:p-[15px] bg-zinc-700">
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
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="border-zinc-700 mx-auto" />
            <div class="last bg-black text-center ">
                <h2 class="text-slate-100 py-[8%] md:py-[3%]">ALL RIGHTS RESERVED</h2>
            </div>
        </div>
    </footer>
</template>