<!-- A -->
<template>
   <div>
       我是插槽
       <slot></slot>
   </div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='less'>
// 1. 插槽
:slotted(.a){
    color:red;
} 
// 2. 全局
:global(div){
    color:blue;
} 
// 3. 动态CSS 在外面 
</style>