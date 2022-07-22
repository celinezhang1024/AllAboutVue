<!-- 7. watchEffect -->
<template>
  <div>
    <input id="ipt" v-model="message" type="text"/>
    <input v-model="message2" type="text"/>

    <button @click="stopWatch" >停止监听</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
let message = ref<string>('小飞')
let message2 = ref<string>('小飞象')

const stop = watchEffect((oninvalidate)=>{
  // 1. 非惰性的，和传统的watch不一样 watch只有值改变的时候才会调用
  // watchEffect 一进页面就会调用
  console.log('message', message.value)
  console.log('message2', message2.value) 

  // 2. 先处理回调，清除副作用,【防抖，清除API】
  oninvalidate(()=>{ 
    console.log('before')
  })

  // 3. 配置项flush,onTrigger
  let ipt = document.querySelector('#ipt') as HTMLInputElement;
  console.log(ipt,'el') 
},{
  flush:"post",
  onTrigger(e){
    debugger
  }
})

// 停止监听
const stopWatch = () => stop()

</script>