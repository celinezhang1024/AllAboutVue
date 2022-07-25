<template>
  <div > 
    <input v-model="value" type="text" />
    <A v-move="{background:value}" ></A>  
  </div>
</template>
 
<script setup lang='ts'>
import {ref,Directive,DirectiveBinding} from 'vue'
import A from './A.vue' 
let value = ref<string>('')

type Dir={
  background:string
}
const vMove:Directive = (el:HTMLElement,bingding:DirectiveBinding<Dir>)=>{ 
  el.style.background = bingding.value.background
}
</script>
 
<style lang="less">
 
</style> 