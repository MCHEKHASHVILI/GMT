import { computed } from "vue"
import { useStore } from "vuex"

export default function useNavigation() {
    const store = useStore()
    const menus = computed(() => store.getters["navbar/menus"])
    const navLinks = computed(() => store.getters["navbar/navLinks"])
    const open = computed(() => store.getters["navbar/open"])
    const icon = computed(() => store.getters["navbar/icon"])
    const iconProps = computed(() => store.getters["navbar/iconProps"])
    const social_links = computed(() => store.getters["settings/social_links"])
    function getSocialLinks() { store.dispatch("settings/getSocialLinks") }
    function toggleMenu() { store.dispatch("navbar/toggleMenu") }
    function closeMenu() { if (!!open.value) { toggleMenu() } }
    function capitalize(string) { return string[0].toUpperCase() + string.slice(1) }
    return {
        menus,
        navLinks,
        open,
        icon,
        iconProps,
        toggleMenu,
        closeMenu,
        capitalize,
        social_links,
        getSocialLinks,
    }
}