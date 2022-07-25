
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
    <!-- <Layout/>   -->
    <!-- 异步组件，打包时会拆开-->
    <!-- <Suspense> 
      <template #default> 
        <API />
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense> -->
    <!-- <DynamicCard/> -->
    <!-- <ProvideInject/> -->
    <!-- 发布订阅 -->
    <!-- <EventBus/> -->
    <!-- <MittC /> -->
    <!-- <Tsx /> -->
    <!-- <VModel/> -->
    <!-- <Directive/> -->
    <Directive2/>
  </div>
</template>

<script setup lang="ts">
  import {ref, defineAsyncComponent} from 'vue'
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
  import DynamicCard from "./components/Advanced/DynamicCard/Index.vue" // 洗牌动画效果
  import ProvideInject from "./components/Advanced/ProvideInject/Index.vue" // 数据跨层传递
  import EventBus from "./components/Advanced/EvventBus/Index.vue" // 发布订阅
  import MittC from './components/Advanced/Mitt/Index.vue'
  import Tsx from './components/Advanced/TSX/Index.vue'
  import VModel from './components/Advanced/VModel/Index.vue'
  import Directive from './components/Advanced/Directive/Index.vue'
  import Directive2 from './components/Advanced/Directive/Index2.vue'
   
  const API = defineAsyncComponent(()=> import("./components/Advanced/API/Index.vue"))

  // const flag = ref<boolean>(true); // + 配合生命周期的代码
  // const unLoadLifeCycle = ()=>{
  //   flag.value = !flag.value;
  // }

</script>

<style lang="less">
html,body,#app,.frame{height: 100%;overflow: hidden;} 
</style>
