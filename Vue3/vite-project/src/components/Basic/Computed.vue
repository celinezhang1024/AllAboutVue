<!-- 5. 计算 -->
<template>
  <div>
    <input v-model="firstName" type="text" />
    <input v-model="lastName" type="text"/>
    <div>{{firstName}} == {{lastName}}</div>
    <div>{{name}}</div>
    <div>{{name2}}</div>
  </div>
</template>

<script lang="ts" setup>
  import {computed, ref} from 'vue'
  let firstName = ref('')
  let lastName = ref('')

  // 第一种写法
  const name = computed(()=>{
    return firstName.value + '---' + lastName.value
  })

  // 第二种写法
  const name2 = computed({
    get(){
      return firstName.value + lastName.value
    },
    set(){
      firstName.value + lastName.value
    }
  })

  
</script>