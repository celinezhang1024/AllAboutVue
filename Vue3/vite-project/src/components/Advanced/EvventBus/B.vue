<!--  -->
<template>
   <div class="B"> 
       <h1>B组件</h1>
       {{Flag}}
   </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
import Bus from './Bus'
let Flag = ref(false)
Bus.on('on-click',(flag:boolean) => {
    Flag.value = flag
})
</script>

<style scoped lang='less'>
</style>