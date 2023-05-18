import axios from 'axios'

const url = (id = '') => `https://gmt.javal.ge/wp-json/custom/v1/events${id}/en`

const eventsModule = {
    namespaced: true,
    state() {
        return {
            events: [
                {
                    id: 1,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-23"),

                    image:
                        "https://44.media.tumblr.com/fec9d7f7f351189e011bdaf23ecd2a9d/eaf5bdfe63613ce7-55/s540x810_f1/d87558f33ede9533145b105681ca62d40091896d.gif",
                    title:
                        " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                },
                {
                    id: 2,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-22"),

                    image:
                        "https://44.media.tumblr.com/fec9d7f7f351189e011bdaf23ecd2a9d/eaf5bdfe63613ce7-55/s540x810_f1/d87558f33ede9533145b105681ca62d40091896d.gif",
                    title:
                        " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                },
                {
                    id: 3,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-25"),

                    image:
                        "https://44.media.tumblr.com/fec9d7f7f351189e011bdaf23ecd2a9d/eaf5bdfe63613ce7-55/s540x810_f1/d87558f33ede9533145b105681ca62d40091896d.gif",
                    title:
                        " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                },
                {
                    id: 4,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-27"),

                    image:
                        "https://44.media.tumblr.com/fec9d7f7f351189e011bdaf23ecd2a9d/eaf5bdfe63613ce7-55/s540x810_f1/d87558f33ede9533145b105681ca62d40091896d.gif",
                    title:
                        " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                },
                {
                    id: 5,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-21"),

                    image:
                        "https://44.media.tumblr.com/fec9d7f7f351189e011bdaf23ecd2a9d/eaf5bdfe63613ce7-55/s540x810_f1/d87558f33ede9533145b105681ca62d40091896d.gif",
                    title:
                        " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                },
                {
                    id: 6,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-23"),
                    image:
                        "https://44.media.tumblr.com/fec9d7f7f351189e011bdaf23ecd2a9d/eaf5bdfe63613ce7-55/s540x810_f1/d87558f33ede9533145b105681ca62d40091896d.gif",
                    title:
                        " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                },
            ],
            event: {}
        }
    },
    actions: {
        async fetchSingleEvent({commit}, id) {
            const response = await axios.get(url('/' + id))
            commit('STORE_SINGLE_EVENT', response.data)
        }
    },
    mutations: {
        STORE_SINGLE_EVENT(state, event) {
            state.event = event
        }
    },
    getters: {
        getSingleEvent({event}) {
            if (event['publish_date']) {
                const [day, month, year] = event['publish_date'].split('.')
                const date = new Date(year, month - 1, day)
                const formattedDate = date.toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }).toUpperCase()
                return {
                    ...event,
                    formattedDate: formattedDate
                }
            }
            return event
        },
        events(state) {
            return state.events;
        },
        formattedEvents(state) {
            return state.events.map((event) => {
                return {
                    ...event,
                    formattedDate: `${event.date.toLocaleDateString("ka-GE", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                    })} | ${event.date.getHours()}:${event.date.getMinutes().toString().padStart(2, "0")}`,
                };
            });
        },
    },


}

export default eventsModule