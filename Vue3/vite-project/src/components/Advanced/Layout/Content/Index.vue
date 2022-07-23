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
        <!-- 3. 插槽 -->
        <Dialog>
            <template #header> <!-- v-slot: = # -->
                <div>插上面</div>
            </template>
            <template v-slot="{data,index}">
                <div>{{data.name}} - {{data.age}} - {{index}}</div><!--插槽作用域-->
            </template>
            <template v-slot:footer>
                <div>插下面</div>
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import Is from "../../Is/index.vue"
import Vue2 from "../../Is/Vue2.vue"

// 插槽
import Dialog from "../../Dialog/Index.vue"

</script>

<style lang="less">
.content{flex:1;margin:20px; overflow:auto;
    &-item{padding:20px;border:1px solid #ccc;}
}
</style>