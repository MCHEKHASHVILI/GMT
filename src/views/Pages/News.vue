<script setup>
import mainLayout from '../../layouts/mainLayout.vue'
import NewsCard from '../../components/sections/NewsCard.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { onMounted } from 'vue'

const store = useStore()
const news = computed(() => store.getters['news/news'])
onMounted(() => {
  store.dispatch('news/fetchNewsData')
})
</script>

<template>
  <mainLayout>
    <div class="flex justify-center items-center h-40">
      <div class="text-center text-2xl font-hel_bold">
        NEWS
      </div>
    </div>
    <div class="md:mx-20">
      <div class="grid grid-cols-1 md:grid-cols-3 md:mx-8 mx-auto?">
        <NewsCard v-for="article in news" 
          :key="article.id" 
          :imageSrc="article.img" 
          :title="article.title"
          :content="article.excerpt"
          :date="article.publish_date" 
          :views="article.views" />
      </div>
    </div>
    <div class="flex justify-center items-center h-40 mb-20">
      <button class="w-56 h-14 bg-black hover:bg-gray-800 text-yellow-500 text-sm font-hel_light py-3 px-10">
        MORE
      </button>
    </div>
  </mainLayout>
</template>
