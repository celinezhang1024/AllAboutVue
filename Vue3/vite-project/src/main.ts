import { createApp } from 'vue' 
import App from './App.vue'
import './assets/css/reset.less' // 全局导入基础样式
import Card from "./components/Advanced/Card/Index.vue" // 1. 全局组件

createApp(App).component("Card",Card).mount('#app')
