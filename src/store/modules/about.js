const aboutModule = {
    namespaced: true,
    state() {
        return {
            cards: [
                {
                    id: 1,
                    name: 'NAME SURNAME',
                    title: ' F&B Product Development and Operations',
                    image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
                    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
                },
                {
                    id: 2,
                    name: "NAME SURNAME",
                    title: ' F&B Product Development and Operations',
                    image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
                    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "

                },
                {
                    id: 3,
                    name: "NAME SURNAME",
                    title: ' F&B Product Development and Operations',
                    image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
                    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
                },
                {
                    id: 4,
                    name: "NAME SURNAME",
                    title: ' F&B Product Development and Operations',
                    image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
                    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
                },
                {
                    id: 5,
                    name: "NAME SURNAME",
                    title: ' F&B Product Development and Operations',
                    image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
                    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
                },
            ],
            information: {
                title: 'WHO WILL BE BY YOUR SIDE',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vero quia ipsa iusto at temporibus saepe culpa fugiat optio mollitia quas inventore maxime est hic, suscipit quisquam debitis dolore nobis!'
            }
        }
    },
    getters: {

        getCard(state) {
            return state.cards
        },
        getInformation(state) {
            return state.information
        }

    },

}
export default aboutModule