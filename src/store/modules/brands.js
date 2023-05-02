const brandsModule = {
    namespaced: true,
    state() {
        return {
            brands: [
                {
                    img: "/src/assets/images/funicular.png",
                    icon: "/src/assets/logos/funicular.svg",
                    name: "funicular",
                    description:
                        "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
                },
                {
                    img: "/src/assets/images/puri_guliani.png",
                    icon: "/src/assets/logos/puri_guliani.svg",
                    name: "puri guliani",
                    description:
                        "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
                },
                {
                    img: "/src/assets/images/guliani_express.png",
                    icon: "/src/assets/logos/puri_guliani_express.png",
                    name: "PURI GULIANI EXPRESS",
                    description:
                        "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore.",
                },
                {
                    img: "/src/assets/images/rigi.png",
                    icon: "/src/assets/logos/rigi.png",
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