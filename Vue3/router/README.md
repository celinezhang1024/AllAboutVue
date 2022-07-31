npm init vite@latest 

vite 不带router，所以要从0开始配置。

npm install vue-router -S

Hash
location.hash = '/reg' 
location.hash = '/'
window.addEventListener("hashchange",(e)=>{
    // Hash路由切换 createWebHashHistory() # 
    console.log(e)
})

History
// replacestate,
// pushstate 跳转 history.pushState({state:1},'','/cccc')
window.addEventListener("popstate",(e)=>{ 
    // 路由切换，浏览器前进后退 createWebHistory() 
    console.log(e)
})

replace 不留跳转记录

json to ts
ctrl+shift+alt+s

路由传参
1. query在url
2. params在内存，返回会丢失
3. 动态路由参数  params:{id:item.id}


npm install element-plus -S