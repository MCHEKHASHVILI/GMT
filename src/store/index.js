import { createStore } from "vuex";
import brandsModule from "./modules/brands"
import employmentModule from "./modules/Employment";

const store = createStore({
    modules: {
        "brands": brandsModule,
        "employment": employmentModule,
    }
})

export default store