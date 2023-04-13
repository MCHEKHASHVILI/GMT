<script setup>
import mainLayout from '../../layouts/mainLayout.vue';
</script>
<template>
  <main-layout>
   <h1 class=" flex justify-center md:text-2xl font-medium mt-3 ">EVENTS</h1>
   <br>
   <!-- Form -->
<img class="h-auto pr-20 max-w-lg ml-auto" src="./images/chello.jpeg" alt="image description">

   <h2 class=" w-screen flex pl-20 md:text-2xl font-medium mt-3 ">DON'T MISS OUT ON OUR EVENTS-STAY 
    CONNECTED</h2>
    <br>
   <div class="mx-52 gap-8  pr-20 pl-20  bg-gray-50 p-2 border shadow-md">
  <form class="flex flex-wrap justify-between  ">
    <div class="mb-4 mr-2">
      <label class="block text-gray-700 font-bold mb-2">
        Location
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="location" placeholder="Location">
          <option></option>
          <option></option>
          
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="mb-4 mr-2">
      <label class="block text-gray-700 font-bold mb-2" for="date">
        Date
      </label>
      <input class="block appearance-none w-full bg-gray-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="Date">
    </div>

    <div class="mb-4 mr-2">
      <label class="block text-gray-700 font-bold mb-2" for="type">
        Type
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="type" placeholder="Type">
          <option>Option 1</option>
          <option>Option 2</option>
       
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z"/>
          </svg>
        </div>
      </div>
    </div>

    <div class=" justify-end mt-6">
      <button class="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        DISCOVER EVENTS
      </button>
    </div>
  </form>
</div>

    
    

    

   <div class="flex items-center justify-center min-h-screen container mx-auto">
     <!-- grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-20 pr-20">

      <!-- card -->
        <div class="rounded-xl shadow-lg">
         <div class="p-5 flex flex-col">
         <div class="rounded-xl overflow-hidden"> 
          <img src="./images/jazz singers night_0.jpg" alt="">
         </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">Jazz up your night:
           Join us for live music and delicious dinning at our restaurant!</h5>
           <div class="text-center px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jazz</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: 150 Gel</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">March 25,2023 | 10:25</span>
  </div>
           <div href="#" class="text-center bg-blue-100 text-black-700 py-2 rounded-lg
           font-semibold mt-4 hover:bg-grey-300 focus:scale-95 transition-all duration-200 ease-out">VIEW DETAILS</div>
         </div>
        </div>
        <div class="rounded-xl shadow-lg">
         <div class="p-5 flex flex-col">
         <div class="rounded-xl overflow-hidden"> 
          <img src="./images/jazz singers night_0.jpg" alt="">
         </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">Jazz up your night:
           Join us for live music and delicious dinning at our restaurant!</h5>
           <div class="text-center px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jazz</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: 150 Gel</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">March 25,2023 | 10:25</span>
  </div>
           <div href="#" class="text-center bg-blue-100 text-black-700 py-2 rounded-lg
           font-semibold mt-4 hover:bg-grey-300 focus:scale-95 transition-all duration-200 ease-out">VIEW DETAILS</div>
         </div>
        </div>
        <div class="rounded-xl shadow-lg">
         <div class="p-5 flex flex-col">
         <div class="rounded-xl overflow-hidden"> 
          <img src="./images/jazz singers night_0.jpg" alt="">
         </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">Jazz up your night:
           Join us for live music and delicious dinning at our restaurant!</h5>
           <div class="text-center px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jazz</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: 150 Gel</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">March 25,2023 | 10:25</span>
  </div>
           <div href="#" class="text-center bg-blue-100 text-black-700 py-2 rounded-lg
           font-semibold mt-4 hover:bg-grey-300 focus:scale-95 transition-all duration-200 ease-out">VIEW DETAILS</div>
         </div>
        </div>
        <div class="rounded-xl shadow-lg">
         <div class="p-5 flex flex-col">
         <div class="rounded-xl overflow-hidden"> 
          <img src="./images/jazz singers night_0.jpg" alt="">
         </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">Jazz up your night:
           Join us for live music and delicious dinning at our restaurant!</h5>
           <div class="text-center px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jazz</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: 150 Gel</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">March 25,2023 | 10:25</span>
  </div>
           <div href="#" class="text-center bg-blue-100 text-black-700 py-2 rounded-lg
           font-semibold mt-4 hover:bg-grey-300 focus:scale-95 transition-all duration-200 ease-out">VIEW DETAILS</div>
         </div>
        </div>
        <div class="rounded-xl shadow-lg">
         <div class="p-5 flex flex-col">
         <div class="rounded-xl overflow-hidden"> 
          <img src="./images/jazz singers night_0.jpg" alt="">
         </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">Jazz up your night:
           Join us for live music and delicious dinning at our restaurant!</h5>
           <div class="text-center px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jazz</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: 150 Gel</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">March 25,2023 | 10:25</span>
  </div>
           <div href="#" class="text-center bg-blue-100 text-black-700 py-2 rounded-lg
           font-semibold mt-4 hover:bg-grey-300 focus:scale-95 transition-all duration-200 ease-out">VIEW DETAILS</div>
         </div>
        </div>
        <div class="rounded-xl shadow-lg">
         <div class="p-5 flex flex-col">
         <div class="rounded-xl overflow-hidden"> 
          <img src="./images/jazz singers night_0.jpg" alt="">
         </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">Jazz up your night:
           Join us for live music and delicious dinning at our restaurant!</h5>
           <div class="text-center px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jazz</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: 150 Gel</span>
    <span class="inline-block bg-gray-50 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">March 25,2023 | 10:25</span>
  </div>
           <div href="#" class="text-center bg-blue-100 text-black-700 py-2 rounded-lg
           font-semibold mt-4 hover:bg-grey-300 focus:scale-95 transition-all duration-200 ease-out">VIEW DETAILS</div>
         </div>
        </div>
      </div>
   </div>
   
   
  </main-layout>
</template>