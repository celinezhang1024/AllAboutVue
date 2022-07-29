import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import App2 from './App2.vue'
import router from './router'

const app = createApp(App2)

app.use(router) //注册路由
app.use(createPinia())

app.mount('#app')
