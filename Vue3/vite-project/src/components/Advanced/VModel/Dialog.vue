<!-- 对话框 -->
<template>
   <div v-if="modelValue" class="dialog">
       <div class="dialog-header">
        <div>标题--- {{ title }}</div>
        <div @click="close">X</div>
       </div>
       <div class="dialog-content">内容</div>
   </div>
</template>

<script setup lang='ts'>
type Props = {modelValue:boolean,title:string,
    modelModifiers?:{
        celine:boolean
    },
    titleModifiers?:{
        aaa:string
    }
} 
const PropsData = defineProps<Props>()
const emit = defineEmits(['update:modelValue','update:title'])

const close = ()=>{ 
    console.log(PropsData.titleModifiers?.aaa); 
    if(!PropsData.modelModifiers?.celine){
        emit('update:title',"I'm Celine")
    }else
    {
        emit('update:title',"I'm San")
    }
    emit('update:modelValue',false)
}
</script>

<style scoped lang='less'>
.dialog{width: 300px;height: 300px;border:1px solid #ccc;position:fixed;left:50%;top:50%;transform: translate(-50%,-50%);
    &-header{border-bottom: 1px solid #ccc;display: flex;justify-content: space-between;padding:10px;}
    &-content{padding:10px;}
}
</style>