import { createStore } from "vuex";
import brandsModule from "./modules/brands"
import employmentModule from "./modules/Employment";
import navbarModule from "./modules/navbar";
import titlesModule from "./modules/titles";

const store = createStore({
    modules: {
        "brands": brandsModule,
        "employment": employmentModule,
        "navbar": navbarModule,
        "titles": titlesModule,
    }
})
export default store