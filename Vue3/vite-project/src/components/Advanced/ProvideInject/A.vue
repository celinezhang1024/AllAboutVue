<template>
   <div class="A">
       <h1>我是A组件</h1>
       {{data}}
       <B/>
   </div>
</template>

<script setup lang='ts'>
import {inject} from 'vue'
import B from './B.vue'
let data = inject('flag')
</script>

<style scoped lang='less'>
.A{
    width:200px;height: 200px;background:blue;color:#fff;
}
</style>