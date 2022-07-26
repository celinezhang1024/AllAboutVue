<!-- Pina数据管理 代替vuex  -->
<template>
   <div>
       pinia:{{Test.current}} - {{Test.name}}
       <button @click="change">change</button>
   </div>
</template>

<script setup lang='ts'>
import {useTestStore} from '../store'

const Test = useTestStore()
// 1. 直接修改 Test.current++
// 2. 通过 $patch 修改整个对象
// Test.$patch({
//     current:888,
//     name:'手办'
// })
// 3. $patch工厂函数，可以做业务判断
// Test.$patch((state)=>{
//     if(state.current === 1000){
//         state.current = 999
//         state.name = '工厂函数，条件判断'
//     }
// })
// 4. $state修改值,缺点：必须修改整个对象
// Test.$state = {
//     current:22,
//     name:'abc'
// }
// 5. action修改

const change = ()=>{
    Test.setCurrent(0.2)
}

</script>

<style scoped lang='less'>
</style>