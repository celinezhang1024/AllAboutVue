import {createRouter,createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'Login',
        component:()=> import('./../components/login.vue')
    },
    {
        path:'/reg/:id',
        name:'Reg',
        component:()=> import('./../components/reg.vue')
    }
]

const router = createRouter({ 
    history: createWebHistory(), // createWebHashHistory(), // 
    routes
})

export default router