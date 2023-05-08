export const newsModule = {
  namespaced: true,
  state() {
    return {
      news: [
        {
          id: 1,
          img: '/src/assets/images/rest_rigi1.jpg',
          icon: '/src/assets/images/rest_rigi1.jpg',
          title: 'Tourism ipsum dolor sit amet, consectetur adipiscing elit.',
          content:
            'Nulla scelerisque mi ac nisl lacinia, vitae ullamcorper eros faucibus. Duis ullamcorper hendrerit urna, sit amet semper felis dictum quis. Vivamus nec',
          date: '15.03.2023',
          views: 100,
        },
        {
          id: 2,
          img: '/src/assets/images/rest_rigi2.jpg',
          icon: '/src/assets/images/rest_rigi2.jpg',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          content:
            'Suspendisse luctus, nisl eget scelerisque sagittis, mi arcu iaculis urna, eu sollicitudin lorem tellus sit amet elit.',
          date: '16.03.2023',
          views: 500,
        },
        {
          id: 3,
          img: '/src/assets/images/rest_rigi3.jpg',
          icon: '/src/assets/images/rest_rigi3.jpg',
          title: 'Duis ullamcorper hendrerit urna, sit amet semper felis dictum quis.',
          content:
            'Nulla scelerisque mi ac nisl lacinia, vitae ullamcorper eros faucibus. Vivamus nec ex finibus, bibendum eros ut, tristique purus.',
          date: '17.03.2023',
          views: 750,
        },
        {
          id: 4,
          img: '/src/assets/images/rest_rigi4.jpg',
          icon: '/src/assets/images/rest_rigi4.jpg',
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
    news: state => state.news
  }
}

export default newsModule