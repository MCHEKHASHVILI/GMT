

const titlesModule = {
    namespaced: true,
    state() {
        return {

            titles: [
                {
                    pageTitle: "gmt hospitality",
                    pageSubTitle: "Traveller Insights",
                    sectionTitle: "dining facilities",
                    introTitle: "tourism inside out",
                    introDescription: "Lorem ipsum, lore dolor sit amet consectetur adipisicing elit. Repellat ullam id debitis nulla? Eligendi doloribus exercitationem at quod. Laudantium maxime illum, dolores quisquam autem explicabo sapiente natus quod nisi dolore."
                }
            ]


        }
    },
    getters: {
        titles(state) {
            return state.titles
        }
    }
}

export default titlesModule

