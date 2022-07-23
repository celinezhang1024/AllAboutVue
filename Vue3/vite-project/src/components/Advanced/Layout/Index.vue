<!-- 2. 布局 -->
<template> 
    <div class="layout"> 
        <Menu ref="menus" @on-click="getList" @getList2="getList2" title="我是一只鱼" :data="list" />  <!-- v-bind:data="list" 绑定复杂类型 -->
        <div class="layout-right">
            <Header />
            <Content />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive,ref } from "vue";
import Menu from "./Menu/Index.vue" //2. 局部组件
import Header from "./Header/Index.vue"
import Content from "./Content/Index.vue"
const list = reactive<number[]>([1,2,3])
const menus = ref(null)
const getList = ((list:number[],flag:boolean)=>{
    console.log(list,'我是自组件传过来的list',flag)
    // 读取子组件的实例
    console.log(menus.value)
})
// 多个事件派发
const getList2 = ((list:number[],flag:boolean)=>{
    console.log(list,'2我是自组件传过来的list',flag)
})
</script>

<style scoped lang="less">
.layout{display: flex;height: 100%;overflow: hidden;
    &-right{flex:1;display: flex;flex-direction: column;} // .layout-right🔥
} 
</style>