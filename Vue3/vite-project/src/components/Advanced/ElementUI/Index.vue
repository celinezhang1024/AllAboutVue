<!-- Element UI 饿了吗 -->
<!-- npm install element-plus -S -->
<template>
  <div>
    <el-calendar v-model="value" />
    <el-input class="ipt" />

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>

<style scoped lang="less">
.ipt{
  width:200px;
  // 1. 有警告 /deep/
  // /deep/ .el-input__inner{
  //   background:red;
  // }
  // 2. 或者 vue3 推荐deep()
  :deep(.el-input__inner){
    background:blue;
  }
}
</style>