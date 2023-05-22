export default {
    namespaced: true,
    state(){
        return{
            contactDetails:{
                address: '4 FREEDOM SQUARE,TBILISI 0105,GEORGIA',
                phone: '+995 (32) 2988 988',
                email: 'GMTH0spitality@GMT.GE',
                facebook: 'GMTHospitality',
                linkedin: 'GMTHospitality'
            }
        }
    },
    getters:{
        getContactDetails(state){
            return state.contactDetails
        }
    }
}