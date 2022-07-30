import {createRouter,createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        component:()=> import('./../components/login.vue')
    },
    {
        path:'/reg',
        component:()=> import('./../components/reg.vue')
    }
]

const router = createRouter({ 
    history: createWebHistory(), // createWebHashHistory(), // 
    routes
})

export default router