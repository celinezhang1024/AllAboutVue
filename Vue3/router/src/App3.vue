<template>
   <div>
       <router-view v-slot="{Component,route}">
            <transition :enter-active-class="`animate__animated ${route.meta.transition}`"   > 
                <component :is="Component"></component>
            </transition>
       </router-view>
   </div>
</template>

<script setup lang='ts'>
import 'animate.css'
</script>

<style scoped lang='less'>
</style>