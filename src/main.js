import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueSplide from '@splidejs/vue-splide';

import './assets/main.css'

const app = createApp(App)
app.use( VueSplide );
app.use(store)
app.use(router)

app.mount('#app')
