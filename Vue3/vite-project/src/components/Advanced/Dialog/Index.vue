<!-- 插槽 -->
<template>
   <div>
       <header class="header"> <!--具名插槽-->
        <slot name="header"></slot> 
       </header>
       <main class="main">
        <div v-for="(item,index) in data"> 
            <slot :data="item" :index="index"></slot> <!--匿名插槽 父组件传值到子组件 -->
        </div>
       </main>
       <footer class="footer">
        <slot name="footer"></slot>
       </footer>
   </div>
</template>

<script setup lang='ts'>
import {reactive} from 'vue'
type person = {name:string,age:number}
const data = reactive<person[]>([{
    name:"celine",age:20
},
{
    name:"nancy",age:30
},{
    name:"manda",age:40
}])

</script>

<style scoped lang='less'>
.header{height: 200px;background: red;}
.main{height: 200px;background: green;}
.footer{height: 200px;background: blue;}
</style>