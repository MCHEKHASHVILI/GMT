<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
</script>
<template>
  <main-layout>
    <div>
      <div
        class="flex w-[100%] items-center justify-between flex-col bg-black h-[120vh]"
      >
        <div class="flex flex-col mt-auto h-[50%] items-center">
          <p class="text-white text-[70px] font-sataurisFonti">
            GMT HOSPITALITY
          </p>
          <p class="text-white font-wvrili text-[40px]">Traveller insights</p>
        </div>

        <div
          class="flex border-t-[1px] border-gray-700 w-[100%] pt-8 flex-col justify-center mb-[20px] items-center"
        >
          <p class="text-white text-[23px] font-[arial] mb-3">
            TOURISM INSIDE OUT
          </p>
          <p class="text-white w-[30%] flex font-[arial] text-center mb-5">
            Lorem ipsum, lore dolor sit amet consectetur adipisicing elit.
            Repellat ullam id debitis nulla? Eligendi doloribus exercitationem
            at quod. Laudantium maxime illum, dolores quisquam autem explicabo
            sapiente natus quod nisi dolore.
          </p>

          <div class="flex items-center mb justify-center">
            <i class="fa-solid text-white fa-utensils mr-3"></i>
            <p class="flex text-white">DINING FACILITIES</p>
          </div>
          <i class="fa-solid text-white text-[22px] fa-chevron-down"></i>
        </div>
      </div>
      <!-- მეორე ნაწილი -->
      <div class="">
        <div class="flex w-[100%] items-center justify-start">
          <img
            class="w-[50%] h-[100%]"
            src="https://check24.ge/storage/gastronomy/248/gallery/6UVPl-1627999563-mpxnY.jpg"
            alt=""
          />
          <div class="w-[50%] flex flex-col ml-[5%]">
            <img
              class="w-[200px] mb-10 ml-[-20px]"
              src="https://i.ibb.co/wCT03tr/596e27ljb1c75l4-removebg-preview.png"
              alt=""
            />
            <p class="font-bold mb-10 text-xl">FUNICULAR</p>
            <p class="mb-6 w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              similique, debitis, eligendi, reprehenderit amet officia
              voluptatem sunt nihil ea quos nostrum explicabo placeat impedit!
              Sunt delectus ducimus corrupti dolorem sunt nihil ea quos nostrum
              explicabo placeat impedit! Sunt delectus ducimus corrupti dolorem
              impedit?
            </p>
            <p class="flex text-orange-300">read more</p>
          </div>
        </div>

        <div class="flex w-[100%] items-center justify-start">
          <div class="w-[50%] items-end text-end flex flex-col mr-[5%]">
            <img
              class="w-[200px] mb-10 ml-[-20px]"
              src="https://i.imgur.com/YdLM7hD.png"
              alt=""
            />
            <p class="font-bold mb-10 text-xl">PURI GULIANI</p>
            <p class="mb-6 w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              similique, debitis, eligendi, reprehenderit amet officia
              voluptatem sunt nihil ea quos nostrum explicabo placeat impedit!
              Sunt delectus ducimus corrupti dolorem sunt nihil ea quos nostrum
              explicabo placeat impedit! Sunt delectus ducimus corrupti dolorem
              impedit?
            </p>
            <p class="flex text-orange-300">read more</p>
          </div>
          <img
            class="w-[50%] h-[100%]"
            src="https://www.ton.eu/Resizer/img.ashx?src=/root/content/references/2019/Puri-Guliani-bakery/2.jpg&bin=1&t=22"
            alt=""
          />
        </div>

        <!-- ------------ -->

        <div class="flex w-[100%] items-center justify-start">
          <img
            class="w-[50%] h-[100%]"
            src="https://imageproxy.wolt.com/venue/5d1cbb2ac53e3955d9a37fb2/2843d250a6251fe3eb26cc70fa3b628e"
            alt=""
          />
          <div class="w-[50%] flex flex-col ml-[5%]">
            <img
              class="w-[200px] mb-10 ml-[-20px]"
              src="https://i.imgur.com/T26hDxW.png"
              alt=""
            />
            <p class="font-bold mb-10 text-xl">PURI GULIANI EXPRESS</p>
            <p class="mb-6 w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              similique, debitis, eligendi, reprehenderit amet officia
              voluptatem sunt nihil ea quos nostrum explicabo placeat impedit!
              Sunt delectus ducimus corrupti dolorem sunt nihil ea quos nostrum
              explicabo placeat impedit! Sunt delectus ducimus corrupti dolorem
              impedit?
            </p>
            <p class="flex text-orange-300">read more</p>
          </div>
        </div>

        <div class="flex w-[100%] items-center justify-start">
          <div class="w-[50%] items-end text-end flex flex-col mr-[5%]">
            <img
              class="w-[350px] mb-10 ml-[-20px]"
              src="https://i.imgur.com/YtYjJD8.png"
              alt=""
            />
            <p class="font-bold mb-10 text-xl">RIGI GASTRODUQAN</p>
            <p class="mb-6 w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              similique, debitis, eligendi, reprehenderit amet officia
              voluptatem sunt nihil ea quos nostrum explicabo placeat impedit!
              Sunt delectus ducimus corrupti dolorem sunt nihil ea quos nostrum
              explicabo placeat impedit! Sunt delectus ducimus corrupti dolorem
              impedit?
            </p>
            <p class="flex text-orange-300">read more</p>
          </div>
          <img
            class="w-[50%] h-[100%]"
            src="https://check24.ge/storage/gastronomy/92/gallery/zbs8e-1624022799-SFtuQ.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </main-layout>
</template>
