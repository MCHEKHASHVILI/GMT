import axios from "axios"



const apiUrl= `https://gmt.javal.ge/wp-json/custom/v1/about-us/en` 

const aboutModule = {
    namespaced: true,
    state() {
        return {
            staff: [
               
                
            ],
            information: {
                title: 'WHO WILL BE BY YOUR SIDE',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vero quia ipsa iusto at temporibus saepe culpa fugiat optio mollitia quas inventore maxime est hic, suscipit quisquam debitis dolore nobis!'
            }
        }
    },
    getters: {

        getStaff({staff}) {
            return staff
        },
        getInformation(state) {
            return state.information
        }

    },
    mutations:{
        STORE_STAFF(state,payload){
            state.staff=payload
        }
    },
    actions: {
        async getStaff({ commit }) {
          const res = await axios.get(apiUrl);
          commit("STORE_STAFF", res.data);
        }
    }

}
export default aboutModule