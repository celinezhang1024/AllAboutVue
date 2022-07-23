<!-- 4. 动态组件 -->
<template>
   <div >
       <div class="tab">
            <div @click="switchCom(item)" v-for="item in data"> {{item.name}} </div>
       </div>
       <component :is="current.comName"></component>
   </div>
</template>

<script setup lang='ts'>
// Is组件
import {reactive,ref,markRaw,toRaw} from 'vue'
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
type Tabs = {
    name:string,
    comName:any
}

type Com = Pick<Tabs,'comName'> // 摘取
 
const data = reactive<Tabs[]>([
    {name:"我是A组件",comName:markRaw(A)}, // 跳过代理
    {name:"我是B组件",comName:markRaw(B)},
    {name:"我是C组件",comName:markRaw(C)},
])

let current = reactive<Com>({
    comName:data[0].comName
})

const switchCom = (item:Tabs) => {
    current.comName = item.comName
    console.log(item.comName)
}
</script>

<style scoped lang='less'>
.tab{display:flex;
    .active{background:skyblue;color:#fff;}
    div{ 
       border:1px solid #ccc; margin:10px;
    }
}
</style>