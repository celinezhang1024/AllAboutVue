npm init vite@latest 

vite 不带router，所以要从0开始配置。

npm install vue-router -S

window.addEventListener("hashchange",(e)=>{
    // Hash路由切换 createWebHashHistory() # 
    console.log(e)
})

window.addEventListener("popstate",(e)=>{
    // 路由切换，浏览器前进后退 createWebHistory() 
    console.log(e)
})