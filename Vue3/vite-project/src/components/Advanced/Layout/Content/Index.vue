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
        <!-- <button @click="switchCom">切换</button>
        <keep-alive :max="10" :include="['Login']">
            <Login v-if="flag"></Login>
            <Reg v-else></Reg> 
        </keep-alive> -->
        <!-- 7. transition -->
        <button @click="flagShow = !flagShow">显示/隐藏</button>
        <!-- 7.1. <transition name="fade" enter-from-class="e-from" enter-active-class="e-active" enter-to-class="e-to"> 
            <div v-show="flagShow" class="content-box"></div>
        </transition> -->
        <!-- 7.2. 使用animate库 npm install animate.css -S -->
        <!-- <transition name="fade" :duration="{enter:50,leave:500}" leave-active-class="animate__animated animate__bounce" enter-active-class="animate__animated animate__fadeIn"> 
            <div v-show="flagShow" class="content-box"></div>
        </transition>  -->
        <!-- 7.3. gasp库， transition生命周期:进入 离开-->
        <transition 
            @before-enter="EnterFrom" 
            @enter="EnterActive"
            @after-enter="EnterTo"
            @enter-cancelled="EnterCancelled"

            @before-leave="LeaveFrom"
            @leave="Leave"
            @after-leave="LeaveTo"
            @leave-cancelled="LeaveCancel"
         >
         <div v-show="flagShow" class="content-box"></div>
        </transition>
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
import "animate.css"

// 4. 动态插槽，可选择上中下
let name = ref('footer') // footer default header

// 6. Login
const flag = ref(true)
const switchCom = () =>{
    flag.value = !flag.value
}

// 7. transition
const flagShow = ref(true) 
const EnterFrom = (el:Element) =>{
    console.log("进入之前")
}
const EnterActive = (el:Element,done:Function) =>{
    console.log("过渡曲线")
    setTimeout(()=>{
        done()
    },3000)
}
const EnterTo = (el:Element) =>{
    console.log("过渡完成")
}
const EnterCancelled = (el:Element) =>{
    console.log("过渡被打断")
}

// 离开阶段生命周期
const LeaveFrom = () =>{
    console.log("离开之前")
}
const Leave = (el:Element,done:Function) =>{
    console.log("离开过度曲线")
    setTimeout(() => {
        done()
    }, 5000);
}
const LeaveTo = () =>{
    console.log("离开完成") 
}
const LeaveCancel = () =>{
    console.log("离开过度曲线被打断")
}

</script> 
<style lang="less">
.content{flex:1;margin:20px; overflow:auto;
    &-item{padding:20px;border:1px solid #ccc;}
    &-loading{position:absolute;top:10px;right:10px;background:blue;} 
    &-box{background: red;width: 200px;height: 200px;}
    
    // 1. .e-from{width: 0;height: 0;transform: rotate(-360deg);}
    // .e-active{transition: all .5s ease-in-out;}
    // .ec-to{width: 200px;height: 200px;}

    // .fade-leave-from{width: 200px;height: 200px;transform: rotate(360deg);}
    // .fade-leave-active{transition: all .5s ease-in-out;}
    // .fade-leave-to{width: 0;height: 0;}
}
</style>