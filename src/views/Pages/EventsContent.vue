<script setup>
import mainLayout from '../../layouts/mainLayout.vue';

const event = {
  type: "JAZZ",
  date: "MARCH 25, 2023·10:25",
  title: "JAZZ  UP YOUR NIGHT: JOIN US FOR LIVE JAZZ MUSIC AND DELICIOUS DINING AT OUR RESTAURANT",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta autem voluptates illo optio. Unde, nihil atque! Veritatis voluptatum, nihil vel architecto quia qui unde porro quasi delectus provident ullam? sit eius numquam! Aliquam recusandae amet expedita eos commodi, eaque voluptates nam qui pariatur reprehenderit suscipit id alias non.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id amet labore error voluptatum culpa ipsa, eius tempora, voluptate eaque earum accusamus ad! Reiciendis, quam. Dignissimos iusto voluptas voluptates doloribus!",
  price: 150,
  image: "https://www.news10.com/wp-content/uploads/sites/64/2020/07/tolga-ahmetler-Mx9vRuQpVkI-unsplash-1.jpg?strip=1"
}
</script>
<template>
  <main-layout>
    <div class="flex items-center justify-center flex-col p-7">
      <img class="w-full " :src="event.image" alt="event image">

      <div class="flex items-center w-full mt-4">
        <div class="bg-[#f5f5f5] flex items-center justify-center px-9 py-1 mr-6 font-medium text-base" >
          {{event.type}}
        </div>
        <p class="text-[#7d7c7c] font-medium">{{event.date}}</p>
      </div>

      <div class="flex flex-col w-full mt-4">
        <p class="md:text-3xl font-bold mb-4 ">{{event.title}}</p>
        <p class="mb-6">{{event.content}}</p>
        <p class="text-[#676666] text-base mb-4">Price: <span class="text-[#343131]">{{event.price}}GEL</span></p>
        <div class="text-[#b4934d] px-8 py-4 flex items-center justify-center w-full sm:w-52 bg-black">BOOK NOW</div>


      </div>
    </div>
  </main-layout>
</template>