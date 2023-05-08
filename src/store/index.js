import { createStore } from "vuex";
import brandsModule from "./modules/brands"
import employmentModule from "./modules/employment";
import navbarModule from "./modules/navbar";
import titlesModule from "./modules/titles";
import eventsModule from "./modules/events";
const store = createStore({
    modules: {
        "brands": brandsModule,
        "employment": employmentModule,
        "navbar": navbarModule,
        "titles": titlesModule,
        "events": eventsModule,
    }
})
export default store