
<template> 
  <div class="frame"> 
    <!-- 基础功能 -->
    <!-- <Basic /> --> 
    <!-- <Ref />  -->
    <!-- <Reactive/> -->
    <!-- <AllRefsVue/> -->
    <!-- <Computed/> -->
    <!-- <ShopCar/> -->
    <!-- <Watch/> -->
    <!-- <WatchEffect/> -->

    <!-- 高级功能 -->
    <!-- <LifeCycleVue v-if="flag" />
    <button @click="unLoadLifeCycle">加载/卸载组件</button> --> 
    <Layout/>  
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  // 基础功能
  import Basic from "./components/Basic/Basic.vue"
  import Ref from "./components/Basic/Ref.vue"   
  import Reactive from "./components/Basic/Reactive.vue"
  import AllRefsVue from "./components/Basic/AllRefs.vue"
  import Computed from "./components/Basic/Computed.vue"
  import ShopCar from "./components/Basic/ShopCar.vue"
  import Watch from "./components/Basic/Watch.vue"
  import WatchEffect from "./components/Basic/WatchEffect.vue"
  // 高级功能
  import LifeCycleVue from "./components/Advanced/LifeCycle.vue" // + 配合生命周期的代码
  import Layout from "./components/Advanced/Layout/Index.vue" 
  
  // const flag = ref<boolean>(true); // + 配合生命周期的代码
  // const unLoadLifeCycle = ()=>{
  //   flag.value = !flag.value;
  // }

</script>

<style lang="less">
html,body,#app,.frame{height: 100%;overflow: hidden;}
</style>
