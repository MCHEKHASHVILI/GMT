<script setup>

  const name = "GMT HOSPITALITY"
  const travellersInsights = "Travellers insights"

</script>


<template>
  <header
    class="flex h-[130px] justify-between items-center bg-black border-b-[1px] border-gray-600"
  >
    <div class="ml-[7%]">
      <a href="/" class="flex flex-col items-center">
        <p class="text-white text-2xl font-mainFont">{{ name }}</p>
        <p class="text-white text-[13px] font-fancyFont">{{ travellersInsights }}</p>
      </a>
    </div>
  </header>
</template>
