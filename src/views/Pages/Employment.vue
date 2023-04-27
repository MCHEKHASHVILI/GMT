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
    date: "march 25, 2023  10:25",
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
    date: "march 25, 2023  10:25",
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
    date: "march 25, 2023  10:25",
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
    date: "march 25, 2023  10:25",
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
    date: "march 25, 2023  10:25",
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
    date: "march 25, 2023  10:25",
    detail: "VIEW DETAILS",
   },
])


</script>
<template>
  <main-layout>
    <h1 class="text-center font-bold text-3xl pb-12">EMPLOYMENT</h1>
    <div class="container pb-[100px]">
      <div class="md:grid md:grid-cols-1 sm:grid-cols-1 sm:grid justify-center grid grid-cols-2 px-[150px] gap-[15px] pb-1.5 ">
        <div v-for="item in items" class="w-full p-6 bg-white border border-gray-300 sm:pb-[0px] md:pb-[0px]">
          <div class="sm:grid md:grid flex ">
            <img class="h-12" :src="item.logo">
            <div class="sm:translate-y-[-48px] sm:translate-x-[80px] md:translate-x-[80px] md:translate-y-[-48px]">
              <h2 class=" font-medium md:font-bold">{{item.title}}</h2>
              <h2 class="font-medium md:font-bold">{{item.name}}</h2>
            </div>
            <div class="sm:translate-y-[-48px] sm:ml-0 py-6 ml-auto md:translate-y-[-48px] md:ml-0 md:sm:translate-y-[-48px] ">
              <h2 class="font-medium md:font-bold">{{item.money}}</h2>
            </div>
          </div>
          <p class="sm:translate-y-[-48px] md:translate-y-[-48px] mb-3 font-normal text-gray-700 dark:text-black">{{item.description}}</p>
          <div class="sm:block md:block flex">
            <div class="sm:translate-y-[-48px] md:translate-y-[-48px]">
              <p class="pb-1.5"><span class="font-medium md:font-bold">{{item.time}}</span> <span class="sm:pl-[30px] md:pl-[30px] ">{{ item.time2 }}</span></p>
              <p>{{item.date}}</p>
            </div>
            <div class="sm:translate-y-[-40px] md:translate-y-[-30px] ml-auto">
              <a href="#" class="sm:px-[100px]  md:px-[100px] inline-flex items-center px-[50px] py-4 text-sm  text-center text-black bg-zinc-100">
                {{item.detail}}
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</main-layout></template>