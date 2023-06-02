import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App);
app.mount('#app');
app.use(VueToast)