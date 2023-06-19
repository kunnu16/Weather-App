import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import store from './store';
import router from './router';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueToast)
app.mount('#app');
