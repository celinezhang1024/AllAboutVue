<template>
  <div >
    <img id="img" width="300" height="300" src="../../../assets/vue.svg"/>
    <!-- <A a="456" title="123"></A> -->
  </div>
</template>
 
<script setup lang='ts'>
// import A from "./A.vue"
import useBase64 from './hooks'

useBase64({ el:'#img'}).then(res=>{
  console.log(res.baseUrl); 
})

</script>
 
<style lang="less">
 
</style> 