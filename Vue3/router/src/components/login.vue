<!-- login -->
<template>
   <div class="login">
       <table>
        <thead>
            <tr>
                <th>品牌</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="item.id" v-for="item in data">
                <th>{{ item.name }}</th>
                <th>{{ item.price }}</th>
                <th>
                    <button @click="toDetail(item)">详情</button>
                </th>
            </tr>
        </tbody>
       </table>
   </div>
</template>

<script setup lang='ts'>
import {data} from './list.json'
import {useRouter} from 'vue-router'
const router = useRouter()
type Item = {
  name: string;
  price: number;
  id: number;
}
// query放在url
// params放在内存里面的
const toDetail = (item:Item)=>{
    router.push({
        name:'Reg',
        params:{id:item.id}
    })
}
</script>

<style scoped lang='less'>
.login{
    background-color: green;
    width: 200px;
    height: 200px;
}
</style>