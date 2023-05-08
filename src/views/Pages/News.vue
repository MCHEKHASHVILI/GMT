<script setup>
import mainLayout from '../../layouts/mainLayout.vue'
import NewsCard from '../../components/sections/NewsCard.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const newsModule = computed(() => store.getters['news/news'])
</script>

<template>
  <mainLayout>
    <div class="flex justify-center items-center h-40">
      <div class="text-center text-2xl font-bold">
        NEWS
      </div>
    </div>
    <div class="md:mx-20">
      <div class="grid grid-cols-1 md:grid-cols-3 md:mx-8 mx-auto?">
        <NewsCard v-for="article in newsModule" 
          :key="article.id" 
          :imageSrc="article.icon" 
          :title="article.title"
          :content="article.content" 
          :date="article.date" 
          :views="article.views" />
      </div>
    </div>
    <div class="flex justify-center items-center h-40">
      <button class="w-56 h-14 bg-black hover:bg-gray-800 text-yellow-500 font-[1px] py-3 px-10">
        MORE
      </button>
    </div>
  </mainLayout>
</template>