<template> 
    <div class="menu">菜单区域
        <div>{{title}}</div>
        <div>{{data}}</div> 
    </div> 
    <div> 
        <div>
            <button @click="clickTap">派发</button>
            <button @click="clickTap2">派发2</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive,ref} from "vue"
type Props={title:string,data:number[]}
defineProps<Props>() 

const list = reactive<number[]>([1,2,3,4,5])
const flag = ref(false)
const emit = defineEmits(['on-click','getList2'])
const clickTap = () =>{
    emit("on-click",list,false)
}
const clickTap2 = () =>{
    emit("getList2",list,true)
}
// 暴露实例 比vue2更安全
defineExpose({list}) //,flag

</script>

<style lang="less">
.menu{width:200px;border-right:1px solid #ccc;}
</style>