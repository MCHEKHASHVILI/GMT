import { ref } from "vue"

export default (function useNavigation () {

	const menuLinks = ref([])

    const footerLinks = ref([
        { name: 'Brands', title: 'Brands' },
        { name: 'Employment', title: 'Employment' },
        { name: 'Events', title: 'Events' },
        { name: 'about', title: 'About Us' },
        { name: 'News', title: 'News' },
    ])

	let instance = { menuLinks, footerLinks }      

	return () => {
		return instance
	}
})()