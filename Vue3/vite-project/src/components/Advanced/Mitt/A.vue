<!--  -->
<template>
   <div class="A">
        <h1>A组件</h1>
        <button @click="emit">emit</button>
   </div>
</template>

<script setup lang='ts'> 
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
const emit = ()=>{
    instance?.proxy?.$Bus.emit('on-celine','mitt')
    instance?.proxy?.$Bus.emit('on-celine2','mitt2222')
}
</script>

<style scoped lang='less'>
</style>