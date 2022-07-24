<!-- 数据跨层传递 -->
<template>
   <div class="root">
       <h1>根组件</h1>
       <A/>
   </div>
</template>

<script setup lang='ts'>
import {provide,ref,reactive} from 'vue'
import A from './A.vue'
// provide('flag',false) // 不是响应式的
provide('flag',ref(false))

</script>

<style scoped lang='less'>
.root{
    width:250px;height: 250px;background:red;color:#fff;
}
</style>