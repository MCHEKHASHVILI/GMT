import axios from "axios"

const newsModule = {
  namespaced: true,
  state() {
    return {

      newsApi: "https://gmt.javal.ge/wp-json/custom/v1/news/en",
      singlenewsApi: "https://gmt.javal.ge/wp-json/custom/v1/news/104/en",


      news: [

      ],

      newscontent: [

      ]
    }
  },
  getters: {
    news: state => state.news,
    newscontent: state => state.newscontent
  },


  mutations: {
    storeNewsData(state, payload) {
      const article = payload.news[0]; 
  
      for (let i = 0; i < 9; i++) {
        state.news.push({
          id: i + 1,
          img: article.featured_image,
          excerpt: article.excerpt,
          title: article.title,
          publish_date: article.publish_date,
          views: article.views
        });
      }
    },
    // storeNewsData(state, payload) {
    //   for (let a = 0; a < payload.news.length; a++) {
    //     state.news.push(
    //       {
    //         id: a + 1,
    //         img: payload.news[a].featured_image,
    //         excerpt: payload.news[a].excerpt,
    //         title: payload.news[a].title,
    //         publish_date: payload.news[a].publish_date,
    //         views: payload.news[a].views
    //       }
    //     )

    //   }

    // },
    storeSingleNewsData(state, payload) {

      for (let a = 0; a < 9; a++) {

        state.newscontent.push(
          {
            id: a+1,
            mainImg: payload.singleNews[a].featured_image,
            publish_date: payload.singleNews[a].publish_date,
            views: payload.singleNews[a].views,
            title: payload.singleNews[a].title,
            content: payload.singleNews[a].content,
          }

        )


      }

    },
  },
  actions: {
    fetchNewsData({ commit, state }) {
      axios.get(state.newsApi)
        .then(result => commit("storeNewsData", result.data))
    },

    fetchSingleNewsData({ commit, state }) {
      axios.get(state.singlenewsApi)
        .then(result => commit("storeSingleNewsData", result.data))

    }

  }
}

export default newsModule