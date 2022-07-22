<template>
  同事监听2个值
  <input v-model="message" type="text" />
  <br/>
  <input v-model="message2" type="text" />
  <br/>
  ref deep:true
  <input v-model="obj.nav.bar.name" type="text"/>
  <br/>
  reactive
  <input v-model="rectiveObj.nav.bar.name" type="text"/>
  <br/>
</template>

<script setup lang="ts">
  import {ref,watch,reactive} from 'vue'
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
    console.log("旧的", oldVal)
  },{
    deep:true,
    immediate:true // 默认第一次跳过watch，所以第一次oldVal是undefined
  }) 

  // 3. reactive
  let rectiveObj = reactive({
    nav:{
      bar:{
        name:"Celine"
      }
    }
  })
  watch(rectiveObj,(newVal,oldVal)=>{
    console.log('新的：' , newVal) 
    console.log("旧的", oldVal)
  })

</script>