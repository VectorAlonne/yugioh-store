import './assets/main.css'

import { createApp } from 'vue'
import axios from 'axios'

import App from './App.vue'
import './index.css'
import router from './router'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

const app = createApp(App)

app.use(router)

app.mount('#app')