<template> 
    <div class="menu">菜单区域
        <!-- 事件 & 属性
        <div>{{title}}</div>
        <div>{{notice}}</div>
        <div>{{data}}</div> 
        <div> 
            <div>
                <button @click="clickTap">派发</button>
                <button @click="clickTap2">派发2</button>
            </div>
        </div> -->
        <Tree @on-click="getItem" :data="data"></Tree>
    </div>  
</template>

<script setup lang="ts">
import {reactive,ref} from "vue"
import Tree from "../../Tree/Index.vue"
type Props={title?:string,data?:number[],notice?:string} //?:可选
// defineProps<Props>() //没有默认值
withDefaults(defineProps<Props>(),{ // 有默认值
    title: '',
    data:()=>[1,2,3,4],
    notice:'我是默内容'
})

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


// 下面是Tree
type TreeList = {
    name:string,
    icon?:string,
    children?:TreeList[] | []
}
const data = reactive<TreeList[]>([
    {
        name:"no.1",
        children:[
            {
                name:"no.1-1",
                children:[
                    {
                        name:"no.1-1-1"
                    }
                ]
            }
        ]
    },
    {   name:"no.2",
        children:[
            {
                name:"no.2"
            }
        ]
    },
    {
        name:"no.3"
    },
    {
        name:"no.4"
    }
])
const getItem = (item:TreeList)=>{
    console.log(item,'父组件的item')
}
</script>

<style lang="less">
.menu{width:200px;border-right:1px solid #ccc;}
</style>