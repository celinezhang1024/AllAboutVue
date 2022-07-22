<!-- 7. watch -->
<template>
  1. 同时监听2个值
  <input v-model="message" type="text" />
  <br/>
  <input v-model="message2" type="text" />
  <br/>
  2. ref deep:true
  <input v-model="obj.nav.bar.name" type="text"/>
  <br/>
  3. reactive
  <input v-model="rectiveObj.nav.bar.name" type="text"/>
  <br/>
  4. 只监听name1
  <input v-model="partObj.name1" type="text" />
  <input v-model="partObj.name2" type="text" />
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

  watch(obj,(newVal,oldVal) =>{ // watch默认不被触发，但是加了immediate会
    console.log('新的：' , newVal) 
    console.log("旧的", oldVal)
  },{
    deep:true,
    immediate:true // 设置后默认第一次跳过watch，所以第一次oldVal是undefined
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

  // 组合监听 = 单一监听
  let partObj = reactive({
    name1:"1",
    name2:"2"
  })

  watch(() => partObj.name1, (newVal,oldVal)=>{ // 只监听了name1
    console.log('新的：' , newVal) 
    console.log("旧的", oldVal)
  })
</script>