<!-- 注册 -->
<template>
   <div class="reg">
        详情页面
        <button @click="back">返回</button>
        <div>
            <div class="detailName">品牌：{{ route.query.name }}</div>
            <div class="detailName">价格：{{ route.query.price }}</div>
            <div class="detailName">ID：{{ route.query.id }}</div>
        </div>
   </div>
</template>

<script setup lang='ts'>
import {data} from './list.json'
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