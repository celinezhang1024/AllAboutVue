<!--  -->
<template>
   <div class="B"> 
       <h1>B组件</h1>  
   </div> 
</template>

<script setup lang='ts'>
import {getCurrentInstance} from 'vue' 
const instance = getCurrentInstance()
// instance?.proxy?.$Bus.on('on-celine',(str)=>{ // 1. 只调用一件
//     console.log(str,'========>B')  
// })
// instance?.proxy?.$Bus.on('*',(type,str)=>{ // 2. 调用全部
//     console.log(type,str,'========>B')  
// })
// 3. on off
const BusEvent = (str:any)=>{ 
    console.log(str,'========>B')   
}
instance?.proxy?.$Bus.on('on-celine',BusEvent)
instance?.proxy?.$Bus.off('on-celine',BusEvent)

</script>

<style scoped lang='less'>
</style>