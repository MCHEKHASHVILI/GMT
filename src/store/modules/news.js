export const newsModule = {
  namespaced: true,
  state() {
    return {
      news: [
        {
          id: 1,
          img: '/src/assets/images/rest_rigi4.jpg',
          icon: '/src/assets/images/rest_rigi4.jpg',
          title: 'Tourism and COVID-19. Minimize losses, reacquire reserves',
          content:
            'Tourism will be one of the sectors most affected by COVID-19, in fact, for contributing to the contagion of the pandemic',
          date: '15.03.2023',
          views: 100,
        },
        {
          id: 2,
          img: '/src/assets/images/rest_rigi2.jpg',
          icon: '/src/assets/images/rest_rigi2.jpg',
          title: 'UNWTO updates projections of the impact of Covid-19 on tourism ',
          content:
            'Tourism will be one of the sectors most affected by COVID-19, in fact, for contributing to the contagion of the pandemic',
          date: '16.03.2023',
          views: 500,
        },
        {
          id: 3,
          img: '/src/assets/images/rest_rigi3.jpg',
          icon: '/src/assets/images/rest_rigi3.jpg',
          title: 'UNWTO updates projections of the impact of Covid-19 on tourism',
          content:
            'Tourism will be one of the sectors most affected by COVID-19, in fact, for contributing to the contagion of the pandemic',
          date: '17.03.2023',
          views: 750,
        },
        {
          id: 4,
          img: '/src/assets/images/rest_rigi1.jpg',
          icon: '/src/assets/images/rest_rigi1.jpg',
          title: 'Duis ullamcorper hendrerit urna, sit amet semper felis dictum quis.',
          content:
            'Nulla scelerisque mi ac nisl lacinia, vitae ullamcorper eros faucibus. Vivamus nec ex finibus, bibendum eros ut, tristique purus.',
          date: '17.03.2023',
          views: 750,
        },
        {
          id: 5,
          img: '/src/assets/images/rest_rigi5.jpg',
          icon: '/src/assets/images/rest_rigi5.jpg',
          title: 'Duis ullamcorper hendrerit urna, sit amet semper felis dictum quis.',
          content:
            'Nulla scelerisque mi ac nisl lacinia, vitae ullamcorper eros faucibus. Vivamus nec ex finibus, bibendum eros ut, tristique purus.',
          date: '17.03.2023',
          views: 750,
        },
        {
          id: 6,
          img: '/src/assets/images/rest_rigi6.jpg',
          icon: '/src/assets/images/rest_rigi6.jpg',
          title: 'Duis ullamcorper hendrerit urna, sit amet semper felis dictum quis.',
          content:
            'Nulla scelerisque mi ac nisl lacinia, vitae ullamcorper eros faucibus. Vivamus nec ex finibus, bibendum eros ut, tristique purus.',
          date: '17.03.2023',
          views: 750,
        },
        {
          id: 7,
          img: '/src/assets/images/puri_guliani.png',
          icon: '/src/assets/images/puri_guliani.png',
          title: 'Duis ullamcorper hendrerit urna, sit amet semper felis dictum quis.',
          content:
            'Nulla scelerisque mi ac nisl lacinia, vitae ullamcorper eros faucibus. Vivamus nec ex finibus, bibendum eros ut, tristique purus.',
          date: '17.03.2023',
          views: 750,
        },
        {
          id: 8,
          img: '/src/assets/images/funicular.png',
          icon: '/src/assets/images/funicular.png',
          title: 'Duis ullamcorper hendrerit urna, sit amet semper felis dictum quis.',
          content:
            'Nulla scelerisque mi ac nisl lacinia, vitae ullamcorper eros faucibus. Vivamus nec ex finibus, bibendum eros ut, tristique purus.',
          date: '17.03.2023',
          views: 750,
        },
        {
          id: 9,
          img: '/src/assets/images/rest_rigi1.jpg',
          icon: '/src/assets/images/rest_rigi1.jpg',
          title: 'Duis ullamcorper hendrerit urna, sit amet semper felis dictum quis.',
          content:
            'Nulla scelerisque mi ac nisl lacinia, vitae ullamcorper eros faucibus. Vivamus nec ex finibus, bibendum eros ut, tristique purus.',
          date: '17.03.2023',
          views: 750,
        },
      ],
      newscontent: {
        paragraphs: [
          `Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. At fugiat
                      tempora
                      quaerat quisquam, quo iste quibusdam! Adipisci esse maxime saepe veniam id enim, illo, alias similique
                      blanditiis ut nisi vero.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. At fugiat tempora quaerat quisquam, quo iste
                      quibusdam! Adipisci esse maxime saepe veniam id eni illo,blanditiis ut nisi vero.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ad nisi quia provident temporibus,
                      quaerat similique facilis. Impedit eum vitae molestias  maxime iure.`,
  
          `Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. At fugiat
                      tempora
                      quaerat quisquam, quo iste quibusdam! Adipisci esse maxime saepe veniam id enim, illo, alias similique
                      blanditiis ut nisi vero.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. At fugiat tempora quaerat quisquam, quo iste
                      quibusdam! Adipisci esse maxime saepe veniam id eni illo,blanditiis ut nisi vero.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta culpa accusamus impedit sit
                      cum dolore dolores nostrum nisi? Quibusdam.`,
  
          `Lorem ipsum dolor sit
                      amet consectetur, adipisicing elit. At fugiat
                      tempora
                      quaerat quisquam, quo iste quibusdam! Adipisci esse maxime saepe veniam id enim, illo, alias similique
                      blanditiis ut nisi vero.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. At fugiat tempora quaerat quisquam, quo iste
                      quibusdam! Adipisci esse maxime saepe veniam id eni illo,blanditiis ut nisi vero.
                      Lorem ipsum .`,
  
          `Lorem ipsum dolor sit
                      amet
                      consectetur, adipisicing elit. At fugiat
                      tempora
                      quaerat quisquam, quo iste quibusdam! Adipisci esse maxime saepe veniam id enim, illo, alias similique
                      blanditiis ut nisi vero.`
  
      ]
    }
  }
  },
  getters: {
    news: state => state.news,
    getNewsById: (state) => (id) => {
      return state.news.find((e) => e.id === id);
    },
    getNewsContentByParagraph: (state) => (id) => {
      const newsItem = state.news.find((e) => e.id === id);
      return newsItem ? state.newscontent.paragraphs : [];
    },
  }
}

export default newsModule