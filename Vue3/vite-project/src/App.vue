<script setup lang="ts">
  import * as HelloWorldVue from './components/HelloWorld.vue';
  const message:string = 'Celine'
  const flag:boolean = false 
  const number:number = 0;
  const string:string = 'C,e,l,i,n,e'
</script>

<template> 
  <div>{{message}} - 模版语法 </div>
  <div>{{flag?"真的":"假的"}} - 条件</div> 
  <div>{{number+1}} - 运算</div>
  <div>{{string.split(',').map(v => `<div>${v}</div>`)}}</div>
</template>

<style scoped> 
</style>
