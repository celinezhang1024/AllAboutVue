<!-- h函数 -->
<template>
   <div >
       <Btn @on-click="getBtn" text="Cenline">
         <template #default >123</template>
       </Btn>
   </div>
</template>

<script setup lang='ts'>
import {createVNode,render,h} from 'vue'
// const div = createVNode('div',{id:"foo"},'Celine')
// render(div, document.querySelector("#app") as HTMLElement)
// console.log(div)
// 1. 以上h函数使用createVNode
// 2. 函数式编程
type Props = {
    text:string
}
const Btn = (props:Props, ctx:any)=>{
    return h('div',{
        class:['rounded','bg-red-300','text-center','text-white','p-3'],
        onClick:()=>{
            ctx.emit('on-click','我是按钮') // emit往外部派发事件
        }
    },ctx.slots.default())
}

const getBtn =(str:string)=>{
    console.log(str); 
}

</script>

<style scoped lang='less'>
</style>