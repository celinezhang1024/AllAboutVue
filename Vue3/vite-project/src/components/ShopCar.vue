<template>
  <div>
    <table border style="width:800px">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(item,index) in data">
          <td>{{item.name}}</td>
          <td><button @click="addAndSub(item,false)">-</button> {{item.num}} <button @click="addAndSub(item,true)">+</button></td>
          <td>{{item.price*item.num}}</td>
          <td><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <td></td> 
        <td></td>
        <td></td>
        <td align="center">总价：{{$total}}</td>
      </tfoot>
    </table>
  </div>
</template>
<script setup lang="ts">
import {reactive,ref,computed} from 'vue'
type Goods = {name:string,num:number,price:number}
let $total = ref(0)
const data = reactive<Goods[]>([
  {name:'裤子',num:1,price:100},
  {name:'衣服',num:1,price:200},
  {name:'袜子',num:1,price:50},
])

const addAndSub = (item:Goods,type:boolean):void =>{
  if(item.num > 1 && !type){
    item.num--;
  }
  if(item.num < 99 && type){
    item.num++;
  } 
}

const del = (index:number):void =>{
  data.splice(index,1) // (删除的索引，个数)  
}

$total = computed<number>(()=>{
  return data.reduce((prev,next) =>{
    return prev+ (next.num* next.price)
  },0)
})
  
</script>