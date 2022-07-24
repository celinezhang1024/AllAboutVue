<template>
   <div class="B">
       <h1>我是B组件</h1>
       <button @click="changeFlag">change Flag</button>
       {{data}}
   </div>
</template>

<script setup lang='ts'>
import {inject,Ref,ref} from 'vue' // Ref interface
let data = inject<Ref<boolean>>('flag',ref(false)); // ref(false) 兜底
const changeFlag = ()=>{
    data.value = !data?.value;
}
</script>
 
<style scoped lang='less'>
.B{
    width:150px;height: 150px;background:green;color:#fff;
}
</style>