import { createApp } from 'vue' 
import App from './App.vue'
import './assets/css/reset.less' // 全局导入基础样式
import Card from "./components/Advanced/Card/Index.vue" // 1. 全局组件
import mitt from "mitt"
import Loading from "./components/Advanced/Loading/Index"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
const app = createApp(App)

const Mit = mitt() // 一 1. 初始化函数
declare module 'vue' { // 一 2. 需要全局的declare module 声明ts
    export interface ComponentCustomProperties{
        $Bus:typeof Mit // 申明它所有的类型 
    }
}
app.config.globalProperties.$Bus = Mit // 3. 一 挂载全局后


// 二 1. 定义类型
type Filters = {
    format:<T>(str:T)=>string
}
// 二 2. 申明文件
declare module '@vue/runtime-core'{
    export interface ComponentCustomProperties{
        $filters:Filters,
        $env:string,
        $loading:{
            show:()=>void,
            hide:()=>void
        }
    }
}
// 二 3. 全局函数
app.config.globalProperties.$filters = {
    format <T>(str:T): string{
        return `真-${str}`
    }
}

// 自定义常量
app.config.globalProperties.$env = 'dev'

app.use(Loading)
app.use(ElementPlus)
app.component("Card",Card).mount('#app')
