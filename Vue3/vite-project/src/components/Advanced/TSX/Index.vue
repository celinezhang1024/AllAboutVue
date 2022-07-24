<!-- TSX -->
<template>
    <div>
        <div>
            1. 安装：
            npm install @vitejs/plugin-vue-jsx <br/>
            2. 配置 tsconfig.json： <br/>
            "jsx": "preserve",  <br/>
            "jsxFactory": "h",  <br/>
            "jsxFragmentFactory": "Fragment", <br/>
            3. 配置 vite.config.ts 
            import vueJsx from '@vitejs/plugin-vue-jsx'
            plugins: [vue(),vueJsx()]
        </div>
        <div>=====================JSX=====================</div>
        <renderDom title="Title" @on-click="parentClick"/>
    </div>
</template>

<script setup lang='ts'>
import renderDom from './Index';
const parentClick = (txt:string)=>{
    console.log(txt);
    
}
</script>

<style scoped lang='less'>
</style>