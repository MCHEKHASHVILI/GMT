<script setup>
import mainLayout from '../../layouts/mainLayout.vue';
</script>
<template>
  <main-layout>
   <div class="flex items-center justify-center min-h-screen container mx-auto">
     <!-- grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <!-- card -->
        <div class="rounded-xl shadow-lg">
         <div class="p-5 flex flex-col">
         <div class="rounded-xl overflow-hidden"> 
          <img src="./images/jazz.jpg" alt="">
         </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">Jazz up your night:
           Join us for live music and delicious dinning at our restaurant!</h5>
           <h6></h6>
           <div href="#" class="text-center bg-blue-100 text-black-700 py-2 rounded-lg
           font-semibold mt-4 hover:bg-grey-300 focus:scale-95 transition-all duration-200 ease-out">VIEW DETAILS</div>
         </div>
        </div>
      </div>
   </div>
  </main-layout>
</template>