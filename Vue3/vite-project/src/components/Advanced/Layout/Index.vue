<template> 
    <div class="layout"> 
        <Menu /> 
        <div class="layout-right">
            <Header />
            <Content />
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from "./Menu/Index.vue"
import Header from "./Header/Index.vue"
import Content from "./Content/Index.vue"

</script>

<style lang="less">
.layout{display: flex;height: 100%;overflow: hidden;
    &-right{flex:1;display: flex;flex-direction: column;} // .layout-right🔥
} 
</style>