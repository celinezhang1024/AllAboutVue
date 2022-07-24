import { createApp } from 'vue' 
import App from './App.vue'
import './assets/css/reset.less' // 全局导入基础样式
import Card from "./components/Advanced/Card/Index.vue" // 1. 全局组件
import mitt from "mitt"
const app = createApp(App)

const Mit = mitt() // 初始化函数
declare module 'vue' { // 需要全局的declare module 声明ts
    export interface ComponentCustomProperties{
        $Bus:typeof Mit // 申明它所有的类型
    }
}
app.config.globalProperties.$Bus = Mit // 挂载全局后

app.component("Card",Card).mount('#app')
