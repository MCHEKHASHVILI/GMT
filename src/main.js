import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

import './assets/main.css'

const app = createApp(App)
app.use(VueSplide);
app.use(store)
app.use(router)
// app.use(VueRecaptchaPlugin, {
//     v2SiteKey: '6Lf2qhooAAAAAGTGh8VB87tVGXstYL3Z7hfGmbcp',
//     v3SiteKey: '6LddqxooAAAAAEEk03i8Yki05Qgeq-_A75d_xCI2',
// })

app.mount('#app')
