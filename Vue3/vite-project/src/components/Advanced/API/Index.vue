<!-- 模拟API访问, 这是一个异步组件，导入时必须要异步导入 -->
<template>
   <div>
       <div v-for="item in list">
         {{item.name}}
       </div>
   </div>
</template>

<script setup lang='ts'>
   import {axios} from './server'  
   const list = await axios('./data.json')
   console.log(list)
</script>
<style scoped lang='less'>
</style>