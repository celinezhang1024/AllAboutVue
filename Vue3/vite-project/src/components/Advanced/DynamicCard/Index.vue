<!-- 动态洗牌的效果  -->
<template>
   <div>
        <!-- 1. 列表移动过度 -->
        <div>1. 列表移动过度 </div>
        <button @click="random">random</button>
        <transition-group move-class="moveAni" class="wraps" tag="div">
           <div class="items" :key="item.id" v-for="item in list">{{item.number}}</div>
        </transition-group>
        <!-- 2. 状态过渡 -->
        <div>2. 状态过渡 </div>
        <div>
            <input v-model="num.current" step="20" type="text">
            <div>
                {{num.tweenedNumber.toFixed(2)}}
            </div>
        </div>
   </div>
</template>

<script setup lang='ts'>
import {ref,reactive,watch} from 'vue'
import _ from 'lodash'
import gsap from 'gsap'

// 随机使用lodash._shuffle()方法  
// npm install lodash -S 
// npm install @types/lodash --save-dev
let list = ref(Array.apply(null,{length:81} as number[]).map((_,index)=>{
    return {
        id:index,
        number:(index % 9) + 1
    }
})) 
const random = ()=>{
    list.value = _.shuffle(list.value)
}

// 2.
const num = reactive({
    current:0,
    tweenedNumber:0
})
watch(()=>num.current,(newVal,oldVal)=>{
    gsap.to(num,{
        duration:1,
        tweenedNumber:newVal
    })
})

</script>

<style scoped lang='less'> 
.wraps{
    display:flex;flex-wrap: wrap; width: calc(25px * 10 + 9px);
    .items{width:25px;height:25px;border:1px solid #ccc;display:flex;justify-content: center;align-items: center;}
}
.moveAni{
    transition: all 1s;
}
</style>