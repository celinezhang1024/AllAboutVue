<template>
  <div>
    <input v-model="message" type="text"/>
    <input v-model="message2" type="text"/>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
let message = ref<string>('小飞')
let message2 = ref<string>('小飞象')

watchEffect(()=>{
  console.log('message', message.value)
  console.log('message2', message2.value)
})

</script>