import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import './assets/css/index.css'
import toast from './plugins/toast';

import interceptorsSetup from './helpers/interceptors'
interceptorsSetup(router, store);

createApp(App).use(router).use(store).use(toast).mount('#app')
