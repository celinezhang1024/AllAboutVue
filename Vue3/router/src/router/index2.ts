import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw>=[
    {
        path:"/",
        component:()=>import('./../components/root.vue'),
        // 重定向：1path， 2{}，3callback
        // redirect:'/user1',
        // redirect:{path:"user1"},
        // redirect:to=>{
        //     // return '/user1'
        //     return { 
        //         path:'/user1',
        //         query:{
        //             name:'Celine'
        //         }
        //     }
        // },
        // 别名：可以多个或1个
        alias:['/root','/root1','/root2'],
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