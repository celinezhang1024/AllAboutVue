<!-- Module Css -->
<template>
   <div :class="[$style.div,$style.border]">
        1. 动态CSS
   </div>
   <div :class="[mc.div,mc.border]">
        2. 动态CSS 自定义名称
   </div>
</template>

<script setup lang='ts'>
// 自定义hooks
import {ref,useCssModule} from 'vue'
const css = useCssModule('mc')
console.log(css)
// return (<div class="mc.div">动态注册的</div>) 伪代码
</script>

<style module>
.div{color:yellow;}
.border{border: 1px solid #ccc;}
</style>

<style module="mc">
.div{color:blue;}
.border{border: 1px solid #ccc;}
</style>
