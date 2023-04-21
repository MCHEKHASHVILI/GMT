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
          <p class="text-white text-[70px] font-mainFont">
            GMT HOSPITALITY
          </p>
          <p class="text-white font-wvrili text-[30px] font-fancyFont">Traveller insights</p>
        </div>

        <div
          class="flex  w-[100%] pt-8 flex-col justify-center mb-[20px] items-center"
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
            
            <svg  xmlns="http://www.w3.org/2000/svg" class="mr-2 w-8" viewBox="0 0 256 256"><rect fill="none"></rect><path d="M212,32V224a8,8,0,0,1-16,0V168H148a8.2,8.2,0,0,1-6-2.7,8.1,8.1,0,0,1-2-6.2,412.8,412.8,0,0,1,11.8-59.3c12-42.4,28.7-67.8,49.5-75.3A7.9,7.9,0,0,1,212,32ZM127.9,78.7l-8-48a8,8,0,1,0-15.8,2.6L110.6,72H92V32a8,8,0,0,0-16,0V72H57.4l6.5-38.7a8,8,0,1,0-15.8-2.6l-8,48h0A4.9,4.9,0,0,0,40,80a44.1,44.1,0,0,0,36,43.3V224a8,8,0,0,0,16,0V123.3A44.1,44.1,0,0,0,128,80a4.9,4.9,0,0,0-.1-1.2Z" fill="gray"></path></svg>  
            <p class="flex text-neutral-300">DINING FACILITIES</p>

          </div>
          <i class="fa-solid text-white text-[22px] fa-chevron-down"></i>
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /> </svg>
               </div>
      </div>
      <!-- მეორე ნაწილი -->
      <div class="h-[250vh]">

              <div class="flex w-[100%] h-[25%] items-center justify-start">
          <img
            class="w-[50%] h-[100%]"
            src="https://check24.ge/storage/gastronomy/248/gallery/6UVPl-1627999563-mpxnY.jpg"
            alt=""
          />
          <div class="w-[50%] h-[100%] justify-center  flex flex-col ml-[5%]">
            <img
              class="w-[200px] mb-10 ml-[-20px]"
              src="https://i.ibb.co/wCT03tr/596e27ljb1c75l4-removebg-preview.png"
              alt=""
            />
            <p class="font-bold mb-10 text-xl">FUNICULAR</p>
            <p class="mb-6 w-[50%]">
              Lorem ipsum, lore dolor sit amet consectetur adipisicing elit.
              Repellat ullam id debitis nulla? Eligendi doloribus exercitationem
              at quod. Laudantium maxime illum, dolores quisquam autem explicabo
              sapiente natus quod nisi dolore.
          
            </p>
            <p class="flex text-orange-300">read more</p>
          </div>
        </div>

        <div class="flex w-[100%] items-center h-[25%] justify-start">
          <div class="w-[50%] h-[100%] justify-center items-end text-end flex flex-col mr-[5%]">
            <img
            class="w-[200px] mb-10 ml-[-20px]"
              src="https://i.imgur.com/YdLM7hD.png"
              alt=""
            />
            <p class="font-bold mb-10 text-xl">PURI GULIANI</p>
            <p class="mb-6 w-[50%]">
              Lorem ipsum, lore dolor sit amet consectetur adipisicing elit.
              Repellat ullam id debitis nulla? Eligendi doloribus exercitationem
              at quod. Laudantium maxime illum, dolores quisquam autem explicabo
              sapiente natus quod nisi dolore.
            </p>
            <p class="flex text-orange-300">read more</p>
          </div>
          <img
            class="w-[50%] h-[100%]"
            src="https://img.marketer.ge/2018/05/60704868_2383556391889316_7705561032881602560_n.jpg"
            alt=""
          />
        </div>

        <!-- ------------ -->

        <div class="flex w-[100%] h-[25%] items-center justify-start">
          <img
            class="w-[50%] h-[100%]"
            src="https://iguide.ge/uploads/610c55da34423.jpg"
            alt=""
          />
          <div class="w-[50%] h-[100%] justify-center  flex flex-col ml-[5%]">
            <img
              class="w-[200px] mb-10 ml-[-20px]"
              src="https://i.imgur.com/T26hDxW.png"
              alt=""
            />
            <p class="font-bold mb-10 text-xl">PURI GULIANI EXPRESS</p>
            <p class="mb-6 w-[50%]">
              Lorem ipsum, lore dolor sit amet consectetur adipisicing elit.
              Repellat ullam id debitis nulla? Eligendi doloribus exercitationem
              at quod. Laudantium maxime illum, dolores quisquam autem explicabo
              sapiente natus quod nisi dolore.
          
            </p>
            <p class="flex text-orange-300">read more</p>
          </div>
        </div>

        <div class="flex w-[100%] items-center h-[25%] justify-start">
          <div class="w-[50%] h-[100%] justify-center items-end text-end flex flex-col mr-[5%]">
            <img
              class="w-[350px] mb-10 ml-[-20px]"
              src="https://i.imgur.com/YtYjJD8.png"
              alt=""
            />
            <p class="font-bold mb-10 text-xl">RIGI GASTRODUQAN</p>
            <p class="mb-6 w-[50%]">
              Lorem ipsum, lore dolor sit amet consectetur adipisicing elit.
              Repellat ullam id debitis nulla? Eligendi doloribus exercitationem
              at quod. Laudantium maxime illum, dolores quisquam autem explicabo
              sapiente natus quod nisi dolore.
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

<style>


</style>
