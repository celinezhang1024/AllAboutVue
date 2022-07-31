<!--  -->
<template>
   <div>
       <router-link to="/user1">/user1</router-link>
       <router-link to="/user2">/user2</router-link>
       <hr>
       <router-view></router-view>
       <router-view name="b"></router-view>
       <router-view name="c"></router-view>
   </div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='less'>
</style>