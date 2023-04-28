import { createStore } from "vuex";
import brandsModule from "./modules/brands"

const store = createStore({
    modules: {
        "brands": brandsModule
    }
})

export default store