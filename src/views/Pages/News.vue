<script>
import mainLayout from '../../layouts/mainLayout.vue'
import NewsCard from '../../components/sections/NewsCard.vue'
import { mapActions, mapGetters } from 'vuex';
import LoadMoreButton from '../../components/buttons/LoadMoreButton.vue';

export default {
  name: 'News',
  components: {
    mainLayout, NewsCard,
    LoadMoreButton
},
  computed: {
    ...mapGetters('news', ['title', 'news', 'next_page', 'loading'])
  },
  methods: {
    ...mapActions('news', ['getNews', 'getMore'])
  },
  mounted() {
    this.getNews()
  }
}
</script>

<template>
  <mainLayout>
    <h1 class="text-center text-3xl font-bold uppercase my-8 md:mt-16 md:mb-12" v-html="title"></h1>
    <div class="md:container px-4 md:px-0 md:mx-auto ">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <NewsCard v-for="article in news" :content="article" />
      </div>
    </div>
    <div class="flex justify-center items-center h-40 mb-20">
      <LoadMoreButton v-if="!!next_page" :loading="loading" @click="getMore" />
  </div>
</mainLayout></template>