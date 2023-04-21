<script setup>
import mainLayout from '../../layouts/mainLayout.vue';
import { ref } from 'vue';

const items = ref([
  { 
    id: 1,
    logo: "https://www.gmt.ge/uploads_script/news/596e27ljb1c75l4.jpg",
    title: "FINICULAR",
    name: "Chef",
    money: "4000 ₾ per month",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",
    time: "Full time",
    time2: "00:09-00:17:00",
    date: "march 25, 2023 - 10:25",
    detail: "VIEW DETAILS",
  },
  { 
    id: 2,
    logo: "https://www.gmt.ge/uploads_script/news/596e27ljb1c75l4.jpg",
    title: "FINICULAR",
    name: "Chef",
    money: "4000 ₾ per month",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",
    time: "Full time",
    time2: "00:09-00:17:00",
    date: "march 25, 2023 - 10:25",
    detail: "VIEW DETAILS",
   },
   { 
    id: 3,
    logo: "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/183461071_101827522088439_4050325639092768269_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGTGt73bVV_l8Bs9YITRHfYWR48Tc03CnxZHjxNzTcKfChcP4FfLTCMVrH_1JNdVuYkRe5QIU9W9xCFmkZfU2Z3&_nc_ohc=L5UBt4mwf9EAX_EDPH0&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfC8c9Qx-Qm6-ErbAxLW3gokBrv10RB-TjzfyH85r5DIKg&oe=645E91D1",
    title: "PURI GULIANI",
    name: "Chef",
    money: "4000 ₾ per month",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",
    time: "Full time",
    time2: "00:09-00:17:00",
    date: "march 25, 2023 - 10:25",
    detail: "VIEW DETAILS",
   },
   { 
    id: 4,
    logo: "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/183461071_101827522088439_4050325639092768269_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGTGt73bVV_l8Bs9YITRHfYWR48Tc03CnxZHjxNzTcKfChcP4FfLTCMVrH_1JNdVuYkRe5QIU9W9xCFmkZfU2Z3&_nc_ohc=L5UBt4mwf9EAX_EDPH0&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfC8c9Qx-Qm6-ErbAxLW3gokBrv10RB-TjzfyH85r5DIKg&oe=645E91D1",
    title: "PURI GULIANI",
    name: "Chef",
    money: "4000 ₾ per month",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",
    time: "Full time",
    time2: "00:09-00:17:00",
    date: "march 25, 2023 - 10:25",
    detail: "VIEW DETAILS",
   },
   { 
    id: 5,
    logo: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/119485246_609465163063254_3941978344519784791_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF7BLgwMIY7ScJ5lcI0NVZrfWO6Ghl5-p59Y7oaGXn6nuoHjoskUxA-ZTex2F9AZ9qmjNfia4sqGiNXUCuc8Gdh&_nc_ohc=YYSVYk6S3Y8AX-Wi4Z-&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfDG8r9IZCfI7vVnmpgCogo-J2Xx-ShUnLjK_f5ButC9Bg&oe=645EA161",
    title: "RIGI GASTRODOUQAN",
    name: "Chef",
    money: "4000 ₾ per month",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",
    time: "Full time",
    time2: "00:09-00:17:00",
    date: "march 25, 2023 - 10:25",
    detail: "VIEW DETAILS",
   },
   { 
    id: 5,
    logo: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/119485246_609465163063254_3941978344519784791_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF7BLgwMIY7ScJ5lcI0NVZrfWO6Ghl5-p59Y7oaGXn6nuoHjoskUxA-ZTex2F9AZ9qmjNfia4sqGiNXUCuc8Gdh&_nc_ohc=YYSVYk6S3Y8AX-Wi4Z-&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfDG8r9IZCfI7vVnmpgCogo-J2Xx-ShUnLjK_f5ButC9Bg&oe=645EA161",
    title: "RIGI GASTRODOUQAN",
    name: "Chef",
    money: "4000 ₾ per month",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",
    time: "Full time",
    time2: "00:09-00:17:00",
    date: "march 25, 2023 - 10:25",
    detail: "VIEW DETAILS",
   },
])


</script>
<template>
  <main-layout>
    <h1 class="text-center font-bold text-3xl pb-12">EMPLOYMENT</h1>
    <div class="container pb-[100px]">
      <div class="justify-center grid grid-cols-2 px-[150px] gap-[15px] pb-1.5">
        <div v-for="item in items" class="w-full p-6 bg-white border border-gray-300 ">
          <div class="flex">
            <img class="h-12" :src="item.logo">
            <div>
              <h2 class="font-medium md:font-bold">{{item.title}}</h2>
              <h2 class="font-medium md:font-bold">{{item.name}}</h2>
            </div>
            <div class="py-6 ml-auto">
              <h2 class="font-medium md:font-bold">{{item.money}}</h2>
            </div>
          </div>
          <p class="mb-3 font-normal text-gray-700 dark:text-black">{{item.description}}</p>
          <div class="flex">
            <div>
              <p class="pb-1.5"><span class="font-medium md:font-bold">{{item.time}}</span> {{ item.time2 }}</p>
              <p>{{item.date}}</p>
            </div>
            <div class="ml-auto">
              <a href="#" class="inline-flex items-center px-[50px] py-4 text-sm  text-center text-black bg-zinc-100">
                {{item.detail}}
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</main-layout></template>