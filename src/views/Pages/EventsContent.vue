<script setup>
import mainLayout from '../../layouts/mainLayout.vue';

const event = {
  type: "JAZZ",
  date: "MARCH 25, 2023·10:25",
  title: "JAZZ  UP YOUR NIGHT: JOIN US FOR LIVE JAZZ MUSIC AND DELICIOUS DINING AT OUR RESTAURANT",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta autem voluptates illo optio. Unde, nihil atque! Veritatis voluptatum, nihil vel architecto quia qui unde porro quasi delectus provident ullam? sit eius numquam! Aliquam recusandae amet expedita eos commodi, eaque voluptates nam qui pariatur reprehenderit suscipit id alias non.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id amet labore error voluptatum culpa ipsa, eius tempora, voluptate eaque earum accusamus ad! Reiciendis, quam. Dignissimos iusto voluptas voluptates doloribus!",
  price: 150
}
</script>
<template>
  <main-layout>
    <div class="flex items-center justify-center flex-col p-[30px]">
      <img class="w-full " src="https://www.news10.com/wp-content/uploads/sites/64/2020/07/tolga-ahmetler-Mx9vRuQpVkI-unsplash-1.jpg?strip=1" alt="">

      <div class="flex items-center w-[100%] mt-4">
        <div class="flex bg-[#f5f5f5] items-center justify-center px-9 py-1 mr-6 font-medium text-[15px]" >
          {{event.type}}
        </div>
        <p class="text-[#7d7c7c] font-medium">{{event.date}}</p>
      </div>

      <div class="flex flex-col w-[100%] mt-4">
        <p class="md:text-[30px] font-bold mb-4 ">{{event.title}}</p>
        <p class="mb-6">{{event.content}}</p>
        <p class="text-[17px] mb-4 text-[#676666]">Price: <span class=" text-[#343131]">{{event.price}}GEL</span></p>
        <div class="px-8 py-4 flex items-center justify-center w-full sm:w-[200px] bg-black text-[#b4934d] ">BOOK NOW</div>


      </div>
    </div>
  </main-layout>
</template>