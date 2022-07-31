<!-- Router -->
<template>
   <div>
       <h1>Celine 女王</h1>
       <div>
         <!-- 1. 硬编码 -->
          <!-- <router-link replace to="/">Login</router-link>
          <router-link replace to="/reg">Regist</router-link> -->
          <!-- 2. name -->
          <!-- <router-link :to="{name:'Login'}">Login</router-link>
          <router-link :to="{name:'Reg'}">Regist</router-link> -->
          <!-- 3. a标签,有默认行为会刷新页面 -->
          <!-- <a href="/">Login</a>
          <a href="/reg">Regist</a> -->
          <!-- 4.编程式跳转 -->
          <button @click="toPage('Login')">Login /</button>
          <button @click="toPage('Reg')">Reg /reg</button>
          <button @click="next()">next</button>
          <button @click="prev()">prev</button>
       </div>
       <hr>
       <router-view></router-view>
   </div>
</template>

<script setup lang='ts'>
// 4.编程式跳转 
import { useRouter } from 'vue-router'
const router = useRouter()
const toPage = (url:string)=>{
  // 4.1 字符串的跳转方式
  // 参数是url
  // router.push(url)
  // 4.2 对象的
  // router.push({path:url})
  // 4.3 命名式的
  // 参数要是name
  router.push({name:url})
  // router.replace({name:url})
}
// js逻辑判断前进后退
const next = ()=>{
  router.go(1)
}
const prev = ()=>{
  // router.go(-1)
  router.back()
}

</script>

<style scoped lang='less'>
</style>