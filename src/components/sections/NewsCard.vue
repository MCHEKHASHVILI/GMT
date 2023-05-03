<template>
    <div class="mx-auto max-w-sm flex flex-col items-end">
      <div class="relative w-full h-44 mb-2">
        <img :src="imageSrc" alt="Placeholder Image" class="absolute top-0 right-0 w-full h-full object-cover -m-1" />
        <span class="absolute bottom-0 left-0 bg-transparent text-white font-serif py-1 px-2 rounded">
          <i class="material-icons-outlined align-middle text-white">calendar_month</i> {{ date }}
        </span>
        <span class="absolute bottom-0 right-0 bg-transparent text-white font-serif py-1 px-2 rounded">
          <i class="material-icons-outlined align-middle text-white">visibility</i> {{ views }}
        </span>
      </div>
      <p class="text-[18px] font-bold">{{ title }}</p>
      <p class="text-gray-600 text-sm leading-5 mb-6 mt-2">{{ content }}</p>
    </div>
  </template>
  
  <script setup>
  const props =  defineProps ({
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