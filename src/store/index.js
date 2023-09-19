import { createStore } from "vuex"
import brandsModule from "./modules/brands"
import vacanciesModule from "./modules/vacancies"
import navbarModule from "./modules/navbar"
import aboutModule from "./modules/about"
import contactModule from "./modules/contact"
import eventsModule from "./modules/events"
import newsModule from "./modules/news"
import settingsModule from "./modules/settings"

const store = createStore({
    modules: {
        "brands": brandsModule,
        "vacancies": vacanciesModule,
        "navbar": navbarModule,
        "about": aboutModule,
        "contact": contactModule,
        "events": eventsModule,
        "news": newsModule,
        "settings": settingsModule,
    }
})
export default store