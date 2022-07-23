<!-- 3. 递归组件 -->
<template>
   <div style="margin-left:10px;">
      <div :key="index" v-for="(item,index) in data">
         {{item.name}}
         <TreeItem v-if="item?.children?.length" :data="item.children"></TreeItem>
      </div>
   </div>
</template>

<script setup lang='ts'>
import TreeItem from './Index.vue'

type TreeList = {
   name:string,
   icon?:string,
   children?:TreeList[] | []
}

type Props = {
   data?:TreeList[]
}
defineProps<Props>()
</script>

<style scoped lang='less'>
</style>