import { onMounted, ref } from "vue"
import axios from '../interceptors/axios'

const useHome = () => {

    const homePage = ref({})

    const getHomePage = async () => {
       let { data } = await axios.get('homepage')
       homePage.value = data
    }

    onMounted(() => {
        getHomePage()
    })

    return {
        homePage,
        getHomePage
    }
}

export default useHome