const brandsModule = {
    namespaced: true,
    state() {
        return {
            brands: [
                {
                    img: "/src/assets/images/funicular.png",
                    icon: "https://i.ibb.co/wCT03tr/596e27ljb1c75l4-removebg-preview.png",
                    name: "funicular",
                    description:
                        "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
                },
                {
                    img: "/src/assets/images/puri_guliani.png",
                    icon: "https://i.imgur.com/YdLM7hD.png",
                    name: "puri guliani",
                    description:
                        "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
                },
                {
                    img: "/src/assets/images/guliani_express.png",
                    icon: "https://i.imgur.com/T26hDxW.png",
                    name: "PURI GULIANI EXPRESS",
                    description:
                        "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
                },
                {
                    img: "/src/assets/images/rigi.png",
                    icon: "https://i.imgur.com/YtYjJD8.png",
                    name: "RIGI GASTRODUQAN",
                    description:
                        "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
                }
            ]
        }
    },
    getters: {
        brands: state => state.brands
    }
}

export default brandsModule