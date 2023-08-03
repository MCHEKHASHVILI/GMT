<script setup>
const props = defineProps({
  content: { type: Object, required: true, }
})

const redirectTo = { name: 'NewsContent', params: { id: props.content?.id } }
</script>
<template>
  <div class="text-[#1D1A1A]">
    <div class="flex flex-col items-start justify-between space-y-6">
      <div class="w-full relative">
        <router-link :to="{ ...redirectTo }">
          <img :src="props.content?.featured_image" class="object-cover" alt="" />
          <div class="text-[#FFFFFF] font-normal flex w-full justify-between px-4 -mt-8">
            <div class="w-full flex space-x-2 justify-start">
            <span><i class="fas fa-calendar"></i></span>
            <span>{{ props.content?.publish_date }}</span>
          </div>
            <div class="w-full flex space-x-2 justify-end">
              <span><i class="fas fa-eye"></i></span>
              <span>{{ props.content?.views }}</span></div>
          </div>
        </router-link>
      </div>
      <router-link :to="{ ...redirectTo }">
        <h2 class="text-2xl font-medium" v-html="props.content.title"></h2>
      </router-link>
      <div class="text-xl font-normal" v-html="props.content?.excerpt"></div>
    </div>
  </div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" /></template>