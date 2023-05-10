const eventsModule ={
    namespaced: true,
     state () {
        return {
            events : [
                {
                    id: 1,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-23"),
                 
                    image:
                      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
                    title:
                      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                  },
                  {
                    id: 2,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-22"),
                    
                    image:
                      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
                    title:
                      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                  },
                  {
                    id: 3,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-25"),
                   
                    image:
                      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
                    title:
                      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                  },
                  {
                    id: 4,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-27"),
                 
                    image:
                      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
                    title:
                      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                  },
                  {
                    id: 5,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-21"),
                  
                    image:
                      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
                    title:
                      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                  },
                  {
                    id: 6,
                    type: "Jazz",
                    price: "150 Gel",
                    date: new Date("2023-03-23"),
                    image:
                      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
                    title:
                      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
                  },
            ]
        }
     },
     getters: {
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