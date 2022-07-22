<template> 
    <div class="content">
        <div class="content-item" :key="item" v-for="item in 100">
            {{item}}
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less">
.content{flex:1;margin:20px;border:1px solid #ccc;overflow:auto;
    &-item{padding:20px;border:1px solid #ccc;}
}
</style>