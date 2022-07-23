<template> 
    <div class="content">
        <!-- 1. 列表 -->
        <!-- <div class="content-item" :key="item" v-for="item in 100"> 
            {{item}}
            <Card :content="`我是第${item}个`"></Card>
        </div> -->
        <!-- 2. Is 动态组件 -->
        <!-- <Is /> -->
        <!-- <Vue2 /> -->
        <!-- 3. 插槽 --><!-- v-slot: = # --> <!-- 匿名插槽简写 v-slot= = #default --><!--插槽作用域-->
        <!-- <Dialog>
            <template #header> 
                <div>插上面</div> 
            </template>
            <template #default="{data,index}"> 
                <div>{{data.name}} - {{data.age}} - {{index}}</div>
            </template>
            <template v-slot:footer>
                <div>插下面</div>
            </template>
        </Dialog> -->
        <!-- 4. 动态插槽 -->
        <Dialog>
            <template #[name]>
                <div>我在哪</div>
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Is from "../../Is/index.vue"
import Vue2 from "../../Is/Vue2.vue"

// 插槽
import Dialog from "../../Dialog/Index.vue"

// 4. 动态插槽，可选择上中下
let name = ref('footer') // footer default header
</script> 
<style lang="less">
.content{flex:1;margin:20px; overflow:auto;
    &-item{padding:20px;border:1px solid #ccc;}
}
</style>