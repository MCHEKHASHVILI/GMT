import { ref } from "vue"
import axios from '../interceptors/axios'

export default (function useHome () {

	const logo = ref(null)
    const subtitle = ref()
    const description = ref()
    const sectionTitle = ref()
    const brands = ref()

    const getHomePage = async () => {
       
       let { data } = await axios.get('homepage')

       logo.value = data.cover_logo
       subtitle.value = data.subtitle
       description.value = data.description
       sectionTitle.value = data.section_title
       brands.value = data.brands
    }

	let instance = { logo, subtitle, description, sectionTitle, brands, getHomePage }      

	return () => {
		return instance
	}
})()