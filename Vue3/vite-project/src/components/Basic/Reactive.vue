<!-- 3. 响应式副本 -->
<template>
    <div>
        <div>arr {{ message }} </div>
        <div>object {{ obj }} </div>

        <button @click="change1">change1</button>
        <button @click="change2">change2</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue'
let message:Array<number> = reactive([])

let obj = reactive({
    name: "Celine"
})
obj.name = "Celine 2022" // 动态改变数据
 
// 1. 直接赋值数据，会破坏响应式数据
setTimeout(()=>{
    let arr:Array<number> = [1,2,3,4]
    // message = arr  //🔥
    message.push(...arr)
    console.log(message)
})

// 2. readonly
let copy = readonly(obj);
// copy.name = "changeName" // Cannot assign to name because it is a read-only property

// 3. shallowReactive 只响应第一层
let shallowData = shallowReactive({
    test: "I'm Celine",
    nav: {
        bar:{
            name:"Who am I?"
        }
    }
})

const change1 = () =>{
    shallowData.test = "Have been changed!"
    console.log(shallowData.test)
} 

const change2 = () =>{
    shallowData.nav.bar.name = "Inside have been changed!"
    console.log(shallowData.nav.bar.name)
}

// change1();
// change2();

</script>

<style>
</style>