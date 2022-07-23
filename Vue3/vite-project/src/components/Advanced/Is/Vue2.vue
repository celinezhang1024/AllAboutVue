<!-- Vue2 中动态组件 -->
<template>
   <div>
        <!-- 通过字符串形式绑定 -->
       <component is="A"></component>
   </div>
</template>

<script setup lang='ts'>
    import A from './A.vue'
</script>

<script lang='ts'>
    export default {
        components:{A}
    }
</script>

<style scoped lang='less'>
</style>