import { createStore } from "vuex";
import brandsModule from "./modules/brands"
import employmentModule from "./modules/employment";
import navbarModule from "./modules/navbar";
import titlesModule from "./modules/titles";
import aboutModule from "./modules/about";

import footerModule from "./modules/footer"
import eventsModule from "./modules/events";
import newsModule from "./modules/news";

const store = createStore({
    modules: {
        "brands": brandsModule,
        "employment": employmentModule,
        "navbar": navbarModule,
        "titles": titlesModule,
        "about": aboutModule,
        
        "footer": footerModule,
        "events": eventsModule,
        "news": newsModule
    }
})
export default store