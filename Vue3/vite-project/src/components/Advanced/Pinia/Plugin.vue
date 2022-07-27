<!-- Pinia Plugin -->
<!-- Pina数据管理 代替vuex  -->
<template>
   <div> 
         <p>action-user:  {{Test.user}}</p>
         <p>action-name:  {{Test.name}}</p>
         <p>getter: {{Test.newName}}</p>
         <button @click="change">change</button> <br/>  
         <br/>
         <button @click="changetest">changeTest</button> <br/>  
         <p>getter: {{Store.baseCurrent}}</p>
       <br/> 
   </div>
</template>

<script setup lang='ts'>
import {useTestStore,useStore} from '../store' 
const Test = useTestStore() 
const Store = useStore()
const change = ()=>{ 
    Test.setName('You got it')
} 

const changetest = ()=>{
   Store.addBase()
}
 
</script>

<style scoped lang='less'>
</style>