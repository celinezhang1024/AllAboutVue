
<style>
</style>

<template>
    <div>15. v-model+钩子函数 <input v-model="userName" type="text" /> {{userName}} </div> 
    <div> 钩子函数接口 {{userName2}} <button @click="changeMsg">改变hook的值</button></div> 
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue' 
  let userName = ref<string | number>("test"); // 响应式 钩子函数, 联合类型
  let userName2:Ref<string> = ref("Celine"); //  Ref接口
  const changeMsg = () =>{
    userName2.value = "changed Celine"; // 修改hooks的值
    console.log("changed Value")
  }

</script>