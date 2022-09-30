import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import style from './assets/style.css'
import js from './assets/bootstrap.bundle.js'

createApp(App).use(router).use(style).use(js).mount('#app')
