import { createApp,createVNode,render } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import App2 from './App2.vue'
import router2 from './router/index2'
import App3 from './App3.vue'
import router3 from './router/index3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import LoadingBar from "./components/loadingBar.vue"; 

const Vnode = createVNode(LoadingBar)
console.log(Vnode)
render(Vnode,document.body)

const whileList = ['/']
// 路由守卫,如果未登陆就跳回根目录
router3.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    Vnode.component?.exposed?.startLoading()
    if(whileList.includes(to.path) || localStorage.getItem('token')){ 
        next();
    }else{
        next('/')
    }
})

router3.afterEach((to,from)=>{
    Vnode.component?.exposed?.endLoading()
})

createApp(App3).use(ElementPlus).use(router3).mount('#app')
