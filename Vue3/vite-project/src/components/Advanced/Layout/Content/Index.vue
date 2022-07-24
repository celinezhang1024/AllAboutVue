<template> 
    <div class="content" style="position:relative;"  >
        <!-- 1. 列表 -->
        <!-- <div class="content-item" :key="item" v-for="item in 100"> 
            {{item}}
            <Card :content="`我是第${item}个`"></Card>
        </div> -->
        <!-- 2. Is 动态组件 -->
        <!-- <Is /> -->
        <!-- <Vue2 /> -->
        <!-- 3. 插槽 --><!-- v-slot: = # --> <!-- 匿名插槽简写 v-slot= = #default --><!--插槽作用域-->
        <!-- <Dialog>
            <template #header> 
                <div>插上面</div> 
            </template>
            <template #default="{data,index}"> 
                <div>{{data.name}} - {{data.age}} - {{index}}</div>
            </template>
            <template v-slot:footer>
                <div>插下面</div>
            </template>
        </Dialog> -->
        <!-- 4. 动态插槽 -->
        <!-- <Dialog>
            <template #[name]>
                <div>我在哪</div>
            </template>
        </Dialog> -->
        <!-- 5. Teleport 传送组件, to插入到哪个组件里 html也可以。但是会被v-if影响 -->
        <!-- <teleport to="body">
            <div class="content-loading">loading...</div>
        </teleport> -->
        <!-- 6. Login  keep-alive :include 可以指定缓存组件的名称 :exclude 不缓存-->
        <button @click="switchCom">切换</button>
        <keep-alive :max="10" :include="['Login']">
            <Login v-if="flag"></Login>
            <Reg v-else></Reg> 
        </keep-alive>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Is from "../../Is/index.vue"
import Vue2 from "../../Is/Vue2.vue"

// 插槽
import Dialog from "../../Dialog/Index.vue"
// 6. Login
import Login from "../../Login/Index.vue"
import Reg from "../../Register/Index.vue"

// 4. 动态插槽，可选择上中下
let name = ref('footer') // footer default header

// 6. Login
const flag = ref(true)
const switchCom = () =>{
    flag.value = !flag.value
}


</script> 
<style lang="less">
.content{flex:1;margin:20px; overflow:auto;
    &-item{padding:20px;border:1px solid #ccc;}
    &-loading{position:absolute;top:10px;right:10px;background:blue;}
}
</style>