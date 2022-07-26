<!-- Pina数据管理 代替vuex  -->
<template>
   <div>
       pinia:{{Test.current}} - {{Test.name}}
   </div>
</template>

<script setup lang='ts'>
import {useTestStore} from '../store'

const Test = useTestStore()

</script>

<style scoped lang='less'>
</style>