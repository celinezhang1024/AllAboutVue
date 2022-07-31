import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            component:()=>import('@/views/login.vue')
        },
        {
            path:'/index',
            component:()=>import('@/views/index.vue')
        }
    ]
})

export default router