import axios from "axios";
const url=(id= "")=>
  "https://gmt.javal.ge/wp-json/custom/v1/events/en" ;

const eventsModule ={
    namespaced: true,
     state:  {
       events: {}, 
     },
     actions:{
         async getEvents ({commit}){
          const res = await axios.get(url());
             
          commit("EVENTS", res.data);
          console.log(res.data)
          
         },
     },
     mutations:{
      EVENTS(state,events){
        state.events = events;
      },
     },
     getters:{
      getEvents({events}){
        return events;
      }
     },    
      formattedEvents(state) {
        return state.events.map((event) => {
          return {
            ...event,
            formattedDate: `${event.publish_date.toLocaleDateString("ka-GE", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })} | ${event.publish_date.getHours()}:${event.publish_date.getMinutes().toString().padStart(2, "0")}`,
          };
        });
      },
    }
    



export default eventsModule