import { createStore } from "vuex";
import brandsModule from "./modules/brands"
import employmentModule from "./modules/employment";
import navbarModule from "./modules/navbar";
import titlesModule from "./modules/titles";
import aboutModule from "./modules/about";

const store = createStore({
    modules: {
        "brands": brandsModule,
        "employment": employmentModule,
        "navbar": navbarModule,
        "titles": titlesModule,
        "about" : aboutModule,
    }
})
export default store