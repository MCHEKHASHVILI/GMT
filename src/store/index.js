import { createStore } from "vuex";
import brandsModule from "./modules/brands"
import vacanciesModule from "./modules/vacancies";
import navbarModule from "./modules/navbar";
import titlesModule from "./modules/titles";
import aboutModule from "./modules/about";
import contactModule from "./modules/contact";
import footerModule from "./modules/footer"
import eventsModule from "./modules/events";
import newsModule from "./modules/news";

const store = createStore({
    modules: {
        "brands": brandsModule,
        "vacancies": vacanciesModule,
        "navbar": navbarModule,
        "titles": titlesModule,
        "about": aboutModule,
        "contact": contactModule,
        "footer": footerModule,
        "events": eventsModule,
        "news": newsModule,
    }
})
export default store