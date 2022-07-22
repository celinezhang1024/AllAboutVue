<template>
  <input v-model="message" type="text" />
  <input v-model="message2" type="text" />

  <input v-model="obj.nav.bar.name" type="text"/>
</template>

<script setup lang="ts">
  import {ref,watch} from 'vue'
  // 1. 多个数据的绑定
  let message = ref<string>('')
  let message2 = ref<string>('') 
  
  watch([message,message2],(newVal,oldVal) =>{
    console.log("新的",newVal)
    console.log("旧的",oldVal)
  })

  // 2. 对象的绑定 深度监听deep:true
  let obj = ref({
    nav:{
      bar:{
        name:"Celine"
      }
    }
  })

  watch(obj,(newVal,oldVal) =>{
    console.log('新的：' , newVal) 
  },{
    deep:true
  })
</script>