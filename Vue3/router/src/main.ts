import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import App2 from './App2.vue'
import router2 from './router/index2'


createApp(App2).use(router2).mount('#app')
