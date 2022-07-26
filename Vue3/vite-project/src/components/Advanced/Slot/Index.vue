<!-- 插槽 -->
<template>
   <div>
       <A>
        <div class="a">1. 私人定制DIV</div>
       </A>
       <div class="div">3. 动态CSS</div>
   </div>
</template>

<script setup lang='ts'>
import A from "./A.vue"
import {ref} from 'vue'
const style = ref('purple') 
const styleObj = ref({color:'pink'})
setTimeout(()=>{
    styleObj.value.color = 'gray'
},2000)
</script>

<style scoped lang='less'>
.div{
    // color:v-bind(style)
    color:v-bind('styleObj.color')
}
</style>