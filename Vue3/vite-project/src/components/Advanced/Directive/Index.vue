<template>
  <div >
    <button @click="flag = !flag" >切换</button>
    <A v-if="flag" v-move:aaa.celine="{background:'green',flag}"></A> 
    传值: {background:'red'}<br/>
    自定义参数： aaa<br/>
    自定义修饰符：celine<br/>
    输出 ...args: arg:aaa,modifiers:celine,value: {background: 'red'})<br/>
  </div>
</template>
 
<script setup lang='ts'>
import {ref,Directive,DirectiveBinding} from 'vue'
import A from './A.vue'
let flag = ref<boolean>(true)
type Dir = {
  background:string
}
const vMove:Directive = {
  created (){
    console.log("===> created")
  },
  beforeMount(){ // 元素绑定之后会调用beforeMount
    console.log("===> beforeMount"); 
  },
  mounted(el:HTMLElement,dir:DirectiveBinding<Dir>,){ // 插入dom
    console.log("===> mounted");
    el.style.background =  dir.value.background 
    // [el,dir 传入的(arg:aaa,modifiers:celine,value: {background: 'red'}) ]
  },
  beforeUpdate(){ // 更新之前
    console.log("===> beforeUpdate"); 
  },
  updated(){ // 更新之后
    console.log("===> updated"); 
  },
  beforeUnmount(){
    console.log("===> beforeUnmount"); 
  },
  unmounted(){
    console.log("===> unmounted"); 
  }
}
</script>
 
<style lang="less">
 
</style> 