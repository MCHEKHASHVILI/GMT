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
          title2: 'UNWTO UPDATES PROJECTIONS OF THE IMPACT OF COVID-19 ON TOURISM',
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
      ]
    }
  },
  getters: {
    news: state => state.news,
    getNewsById: (state) => (id) => {
      return state.news.find((e) => e.id === id);
    },
  }
}

export default newsModule