<!-- 受控组件  -->
<template>
   <div>
       <button @click="flag = !flag">change {{flag}}</button>
       <div>标题 {{title}} </div>
       <Dialog v-model:title="title" v-model:title.aaa="title" v-model="flag" v-model.celine="flag"></Dialog>
   </div>
</template>

<script setup lang='ts'>
import Dialog from './Dialog.vue'
import {ref} from 'vue'
let flag = ref<boolean>(true)
let title = ref<string>('我是Celine') 
</script>
 
<style scoped lang='less'>
</style>