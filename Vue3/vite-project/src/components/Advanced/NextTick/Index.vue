<template>
  <div >
    <input v-model="message" type="text">
    <div ref="div">{{message}}</div>
    <button @click="change">change</button>
  </div>
</template>
 
<script setup lang='ts'>
import {ref,nextTick} from 'vue'
const message = ref<string>('Celine')
const div = ref<HTMLElement>()
const change = async () =>{
  message.value = 'Celine best!' 
  await nextTick()
  console.log(div.value?.innerText) // 监听不到最新的值

}
</script>
 
<style scoped lang="less">
 
</style> 