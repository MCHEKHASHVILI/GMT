import { createStore } from "vuex";
import brandsModule from "./modules/brands"
import employmentModule from "./modules/employment";
import navbarModule from "./modules/navbar";
import titlesModule from "./modules/titles";
import footerModule from "./modules/footer"

const store = createStore({
    modules: {
        "brands": brandsModule,
        "employment": employmentModule,
        "navbar": navbarModule,
        "titles": titlesModule,
        "footer": footerModule,
    }
})
export default store