<!-- 注册 -->
<template>
   <div class="reg">
        我进来了 
        <div> 
        </div>
   </div>
</template>

<script setup lang='ts'> 
import { useRoute,useRouter } from 'vue-router'
// 获取router
const route = useRoute()
const router = useRouter()
const back = ()=>{
    router.back()
} 
</script>

<style scoped lang='less'>
.reg{
    background-color: red;
    width: 200px;
    height: 200px;
    .detailName{text-align: left;}
}
</style>