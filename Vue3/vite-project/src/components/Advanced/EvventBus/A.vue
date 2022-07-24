<!--  -->
<template>
   <div class="A">
        <h1>A组件</h1>
        <button @click="emitB">派发事件</button>
   </div>
</template>

<script setup lang='ts'>
import Bus from './Bus'
let flag = false
const emitB = ()=>{
    flag = !flag
    Bus.emit('on-click',flag)
}

</script>

<style scoped lang='less'>
</style>