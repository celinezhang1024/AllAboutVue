import { createApp } from 'vue' 
import App from './App.vue'
import './assets/css/reset.less' // 全局导入基础样式
import Card from "./components/Advanced/Card/Index.vue" // 1. 全局组件
import mitt from "mitt"
import Loading from "./components/Advanced/Loading/Index"

import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import 'uno.css'

import {createPinia, PiniaPluginContext} from 'pinia' 

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

const store = createPinia() // 注册Pinia
const __piniaKey:string = '-Celine-'
type Options = {
    key?:string
}
const setStorage = (key:string,value:any) =>{
    localStorage.setItem(key,JSON.stringify(value))
}
const getStorage = (key:string) =>{
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
const piniaPlugin = (options:Options)=>{
    return (context:PiniaPluginContext) => {
        const {store} = context; 
        store.$subscribe(()=>{ 
            const key = `${options?.key ?? __piniaKey}-${store.$id}`;
            const data = getStorage(key) 
            setStorage(key,toRaw(store.$state))
            return {
                ...data
            }
        })
        console.log(store,'store')
    }
}

app.use(Loading)
app.use(ElementPlus)
app.use(Antd)
store.use(piniaPlugin({
    key:'pinia'
})) // 这里不要写错了 ！
app.use(store)
app.component("Card",Card).mount('#app')
