<!-- 父路由 -->
<template>
   <div>
      <h1>我是父路由</h1>
      <div>
        <router-view></router-view>
      </div> 
      <div>
        <router-link to="/user/">Login</router-link>
        <router-link to="/user/reg" >Reg</router-link>
      </div>
   </div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='less'>
</style>