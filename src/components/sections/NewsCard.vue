<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <router-link :to="'news/' + id">
  <div class="mx-auto max-w-md flex flex-col items-end">
    <div class="relative w-full h-52 mb-2">
      <img :src="imageSrc" alt="Placeholder Image" class="absolute top-0 right-0 w-full h-full object-cover -m-1" />
      <span class="absolute bottom-0 left-0 bg-transparent text-white font-hel_roman py-4 px-4 rounded" style="font-size: 0.8em;">
        <i class="fas fa-calendar" style="color: #ffffff font-size: 0.8em;"></i>
        {{ date }}
      </span>
      <span class="absolute bottom-0 right-0 bg-transparent text-white font-hel_roman py-4 px-4 rounded" style="font-size: 0.8em;">
        <i class="fas fa-eye" style="color: #ffffff font-size: 0.8em;"></i>
        {{ views }}
      </span>
    </div>
    <p class="text-xl font-hel_medium">{{ title }}</p>
    <p class="text-gray-600 text-hel_roman leading-5 mb-6 mt-2">{{ content }}</p>
  </div>
</router-link>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</template>