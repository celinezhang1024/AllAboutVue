<template>
  <div id="hello"></div>

  <div>{{count}}</div>
  <button @click="count++">改变count</button>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount,onUnmounted,ref, onUpdated} from '@vue/runtime-core';
console.log('setup')
const count = ref(0)
onBeforeMount(()=>{
    let div = document.querySelector("#hello") as HTMLElement;
    console.log("创建之前，获取不到DOM",div) 
})

onMounted(()=>{
    let div = document.querySelector("#hello") as HTMLElement;
    console.log("挂载之后，获取到DOM",div) 
})

onBeforeUpdate(()=>{
    console.log("更新之前")
})

onUpdated(()=>{
    console.log("更新之后")
})

onBeforeUnmount (()=>{
    console.log("卸载之前")
})

onUnmounted(()=>{
    console.log("卸载之后")
})
</script>
