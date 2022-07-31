import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// to.meta.title is not assignable string
declare module 'vue-router'{
    interface RouteMeta{
        title:string,
        transition:string
    }
}

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior:(to,from,savePosition) =>{
        console.log(savePosition)
        // if(savePosition){
        //     return savePosition
        // }else{
            // return {top:1800}
        // }
        return new Promise((r)=>{
            setTimeout(() => {
                r({
                    top:99999999
                })
            }, 2000);
        })
    },
    routes:[
        {
            path:'/',
            component:()=>import('@/views/login.vue'),
            meta:{
                title:'登陆页面',
                transition:'animate__bounce'
            }
        },
        {
            path:'/index',
            component:()=>import('@/views/index.vue'),
            meta:{
                title:'首页!!',
                transition:'animate__swing'
            }
        }
    ]
})

export default router