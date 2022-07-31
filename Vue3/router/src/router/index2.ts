import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw>=[
    {
        path:"/",
        component:()=>import('./../components/root.vue'),
        children:[
            {
                path:'/user1',
                components:{
                    default:()=>import('./../components/A.vue')
                }
            },
            {
                path:'/user2',
                components:{
                    b:()=>import('./../components/B.vue'),
                    c:()=>import('./../components/C.vue')
                }
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router