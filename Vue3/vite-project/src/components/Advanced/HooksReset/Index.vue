<template>
  <div >
    <img id="img" width="300" height="300" src="../../../assets/vue.svg"/>
    <!-- <A a="456" title="123"></A> -->
    {{x}} {{y}} <br />
    使用自定义全局函数 
    {{$filters.format('Celine')}} <br />
    {{$env}}
  </div>
</template>
 
<script setup lang='ts'>
// import A from "./A.vue"
import useBase64 from './hooks'
import { useMouse } from '@vueuse/core'

// "x" and "y" are refs
const { x, y } = useMouse()

console.log(x.value)

const mouse = useMouse()

console.log(mouse.x.value)


useBase64({ el:'#img'}).then(res=>{
  console.log(res.baseUrl); 
})

</script>
 
<style lang="less">
 
</style> 