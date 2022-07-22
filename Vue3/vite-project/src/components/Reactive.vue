<!-- 响应式副本 -->
<template>
    <div>
        <div>arr {{ message }}</div>
        <div>object {{ obj }}</div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
let message:Array<number> = reactive([])

let obj = reactive({
    name: "Celine"
})
obj.name = "Celine 2022" // 动态改变数据

// 直接赋值数据，会破坏响应式数据
setTimeout(()=>{
    let arr:Array<number> = [1,2,3,4]
    // message = arr  //🔥
    message.push(...arr)
    console.log(message)
})

</script>

<style>
</style>