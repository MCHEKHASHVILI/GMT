<script>
import mainLayout from '../../layouts/mainLayout.vue'
import NewsCard from '../../components/sections/NewsCard.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    mainLayout, NewsCard,
  },
  computed: {
    ...mapGetters('news', ['title','news', 'more'])
  },
  methods: {
    ...mapActions('news', ['getNews', 'getMore'])
  },
  mounted(){
    this.getNews()
  }
}
</script>

<template>
  <mainLayout>
    <h1 class="text-center text-3xl font-bold uppercase my-8 md:mt-16 md:mb-12">{{ title }}</h1>
    <div class="md:container px-4 md:px-0 md:mx-auto ">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <NewsCard v-for="article in news" :content="article"/>
      </div>
    </div>
    <div class="flex justify-center items-center h-40 mb-20">
      <button v-if="!!more" @click="getMore" class="w-56 h-14 bg-black hover:bg-gray-800 text-yellow-500 text-sm py-3 px-10">
        MORE
      </button>
    </div>
  </mainLayout>
</template>