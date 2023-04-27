<script setup>
import mainLayout from "../../layouts/mainLayout.vue";

const introduction = [
  {
    name: "TOURISM INSIDE OUT",
    description:
      "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
  },
];

const mainContent = [
  {
    img: "https://check24.ge/storage/gastronomy/248/gallery/6UVPl-1627999563-mpxnY.jpg",
    icon: "https://i.ibb.co/wCT03tr/596e27ljb1c75l4-removebg-preview.png",
    name: "FUNICULAR",
    description:
      "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
  },

  {
    img: "https://img.marketer.ge/2018/05/60704868_2383556391889316_7705561032881602560_n.jpg",
    icon: "https://i.imgur.com/YdLM7hD.png",
    name: "PURI GULIANI",
    description:
      "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
  },

  {
    img: "https://iguide.ge/uploads/610c55da34423.jpg",
    icon: "https://i.imgur.com/T26hDxW.png",
    name: "PURI GULIANI EXPRESS",
    description:
      "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
  },

  {
    img: "https://check24.ge/storage/gastronomy/92/gallery/zbs8e-1624022799-SFtuQ.jpg",
    icon: "https://i.imgur.com/YtYjJD8.png",
    name: "RIGI GASTRODUQAN",
    description:
      "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
  },
];
const name = "GMT HOSPITALITY";
const travellerInsights = "Traveller insights";
const diningFacilities = "DINING FACILITIES";
const readMore = "read more";
</script>
<template>
    <div class="w-[100vw]">
      <div
        class="flex w-[100%] items-center justify-between flex-col bg-black h-[120vh]"
      >
        <div class="flex flex-col mt-auto h-[50%] items-center">
          <p class="text-white md:text-[80px] text-[40px] font-mainFont">
            {{ name }}
          </p>
          <p class="text-white font-wvrili md:text-[30px] text-[20px] font-fancyFont">
            {{ travellerInsights }}
          </p>
        </div>

        <div
          class="flex w-[100%] pt-8 flex-col justify-center mb-[20px] items-center"
        >
          <p class="text-white md:text-[40px] text-[30px] font-[arial] mb-3">
            {{ introduction[0].name }}
          </p>

          <p class="text-white md: w-[90%] md:w-[30%] md:text-center  flex font-[arial]  mb-5">
            {{ introduction[0].description }}
          </p>

          <div class="flex items-center mb justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 w-8"
              viewBox="0 0 256 256"
            >
              <rect fill="none"></rect>
              <path
                d="M212,32V224a8,8,0,0,1-16,0V168H148a8.2,8.2,0,0,1-6-2.7,8.1,8.1,0,0,1-2-6.2,412.8,412.8,0,0,1,11.8-59.3c12-42.4,28.7-67.8,49.5-75.3A7.9,7.9,0,0,1,212,32ZM127.9,78.7l-8-48a8,8,0,1,0-15.8,2.6L110.6,72H92V32a8,8,0,0,0-16,0V72H57.4l6.5-38.7a8,8,0,1,0-15.8-2.6l-8,48h0A4.9,4.9,0,0,0,40,80a44.1,44.1,0,0,0,36,43.3V224a8,8,0,0,0,16,0V123.3A44.1,44.1,0,0,0,128,80a4.9,4.9,0,0,0-.1-1.2Z"
                fill="gray"
              ></path>
            </svg>
            <p class="flex text-neutral-300">{{ diningFacilities }}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 cursor-pointer h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <!-- მეორე ნაწილი -->
      <div class="md:h-[250vh] h-auto">
        
        <div class="flex md:mb-0 mb-4 w-[100%]  flex-col md:flex-row md:h-[25%] h-[15%]   md:items-center items-start justify-start">
          <img class="md:w-[50%] w-[100%] md:h-[100%] h-[50%] " :src="mainContent[0].img" />
          <div class="md:w-[50%] w-[100%]  md:h-[100%] h-[50%] justify-center flex flex-col md:ml-[5%] pl-4">
            <img
              class="md:w-[200px] w-[150px] md:mb-10 mb-0 md:ml-[-20px] ml-[-12px]"
              :src="mainContent[0].icon"
              alt=""
            />
            <p class="font-bold md:mb-10 mb-3 text-xl">{{ mainContent[0].name }}</p>
            <p class="mb-6 text-[20px] font-mainFont w-[90%]">
              {{ mainContent[0].description }}
            </p>
            <p class="flex md:text-[15px] text-[25px] text-orange-300">{{ readMore }}</p>
          </div>
        </div>

        <div class="flex md:mb-0 mb-4  md:flex-row md:mt-0 flex-col-reverse w-[100%] items-center md:h-[25%] h-[15%]  justify-start">
          <div
            class="md:w-[50%] w-[100%] md:h-[100%] h-[50%] md:justify-center justify-start md:items-end items-start md:text-end text-start flex flex-col md:mr-[5%] md:ml-[5%] pl-4"
          >
            <img
              class="w-[200px] md:mb-10 mb-0 md:ml-[-20px] ml-[-3px]"
              :src="mainContent[1].icon"
            />
            <p class="font-bold md:mb-10 mb-[12px] text-xl">{{ mainContent[1].name }}</p>
            <p class="mb-6 text-[20px] font-mainFont w-[90%]">
              {{ mainContent[1].description }}
            </p>
            <p class="flex md:text-[15px] text-[25px] text-orange-300">{{ readMore }}</p>
          </div>
          <img class="md:w-[50%]  w-[100%] h-[100%]" :src="mainContent[1].img" alt="" />
        </div> 

        <!-- ------------ -->

        <div class="flex md:mb-0 mb-4 w-[100%]  flex-col md:flex-row md:h-[25%] h-[15%]   md:items-center items-start justify-start">
          <img class="md:w-[50%] w-[100%] md:h-[100%] h-[50%] " :src="mainContent[2].img" />
          <div class="md:w-[50%] w-[100%]  md:h-[100%] h-[50%] justify-center flex flex-col md:ml-[5%] pl-4">
            <img
              class="md:w-[200px] w-[150px] md:mb-10 mb-0 md:ml-[-20px] ml-[-12px]"
              :src="mainContent[2].icon"
              alt=""
            />
            <p class="font-bold md:mb-10 mb-3 text-xl">{{ mainContent[2].name }}</p>
            <p class="mb-6 text-[20px] font-mainFont w-[90%]">
              {{ mainContent[2].description }}
            </p>
            <p class="flex md:text-[15px] text-[25px] text-orange-300">{{ readMore }}</p>
          </div>
        </div>

        <div class="flex md:mb-0 mb-4  md:flex-row flex-col-reverse w-[100%] items-center md:h-[25%] h-[15%]  justify-start">
          <div
            class="md:w-[50%] w-[100%] md:h-[100%] h-[50%] md:justify-center justify-start md:items-end items-start md:text-end text-start flex flex-col md:mr-[5%] md:ml-[5%] pl-4"
          >
            <img
              class="w-[200px] md:my-10 my-10 md:ml-[-20px] ml-[-3px]"
              :src="mainContent[3].icon"
            />
            <p class="font-bold md:mb-10 mb-[12px] text-xl">{{ mainContent[3].name }}</p>
            <p class="mb-6 text-[20px] font-mainFont w-[90%]">
              {{ mainContent[3].description }}
            </p>
            <p class="flex md:text-[15px] text-[25px] text-orange-300">{{ readMore }}</p>
          </div>
          <img class="md:w-[50%]   w-[100%] h-[100%]" :src="mainContent[3].img" alt="" />
        </div>   


      </div>
    </div>
</template>

<style></style>
