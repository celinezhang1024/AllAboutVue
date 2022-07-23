<!-- 3. 递归组件 -->
<template>
   <div style="margin-left:10px;">
      <div @click.stop="clickItem(item)" :key="index" v-for="(item,index) in data"> <!--阻止冒泡-->
         {{item.name}}
         <TreeItem @on-click="clickItem" v-if="item?.children?.length" :data="item.children"></TreeItem> <!--自身组件派发自己-->
      </div>
   </div>
</template>

<script setup lang='ts'>  
type TreeList = { 
   name:string,
   icon?:string,
   children?:TreeList[] | []
}

type Props = {
   data?:TreeList[]
}
defineProps<Props>()
const emit = defineEmits(['on-click'])
const clickItem = (item:TreeList) =>{
   emit('on-click',item)
}
</script>

// 由于setup无法定义name，再写一个script
<script lang="ts">
   import { defineComponent, reactive } from 'vue'
    export default defineComponent({
        name:"TreeItem" //就是它自己
    })
</script>

<style scoped lang='less'>
</style>