import {createRouter,createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/user', 
        component:()=> import('./../components/footer.vue'),
        children:[
            {
                path:'',
                name:'Login',
                component:()=> import('./../components/login.vue')
            },
            {
                path:'reg',
                name:'Reg',
                component:()=> import('./../components/reg.vue')
            }
        ]
    }
]

const router = createRouter({ 
    history: createWebHistory(), // createWebHashHistory(), // 
    routes
})

export default router