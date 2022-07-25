<template>
  <div class="A">
    A组件
  </div>
</template>
 
<script setup lang='ts'>
// 自定义hook接受所有属性
import { useAttrs, useSlots } from 'vue';
let attr = useAttrs()
console.log(attr)

</script>
 
<style lang="less">
 
</style> 