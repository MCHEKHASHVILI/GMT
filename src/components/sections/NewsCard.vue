<script setup>
defineProps({
  content: { type: Object, required: true, }
})
</script>
<template>
  <router-link :to="{ name: 'NewsContent', params: { id: content?.id } }">
    <div class="mx-auto max-w-md flex flex-col items-end ">
      <div class="relative w-full h-52 mb-2 bg-gradient-to-t">
        <img :src="content?.featured_image" alt="Placeholder Image" class="absolute top-0 right-0 w-full h-full object-cover -m-1" />
        <span class="absolute bottom-0 left-0 bg-transparent text-white font-hel_roman py-4 px-4 rounded" style="font-size: 0.8em;">
          <i class="fas fa-calendar opacity-100" style="color: #ffffff font-size: 0.8em;"></i>
          {{ content?.publish_date }}
        </span>
        <span class="absolute bottom-0 right-0 bg-transparent text-white font-hel_roman py-4 px-4 rounded" style="font-size: 0.8em;">
          <i class="fas fa-eye " style="color: #ffffff font-size: 0.8em;"></i>
          {{ content?.views }}
        </span>
      </div>
      <p class="text-xl font-hel_medium">{{ content.title }}</p>
      <p class="text-gray-600 text-hel_roman leading-5 mb-6 mt-2">{{ content?.excerpt }}</p>
    </div>
  </router-link>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</template>