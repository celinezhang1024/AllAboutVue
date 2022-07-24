<!-- 登陆 keep-alive -->
<template>
   <div>
       <table>
        <tr>
            <td>账号</td> <td><input v-model="form.login" type="text"> </td>
        </tr>
        <tr>
            <td>密码</td> <td><input v-model="form.psd" type="password"> </td>
        </tr>
       </table>
       <button @click="">登陆</button>
   </div>
</template>

<script setup lang='ts'>
    import { reactive,onMounted,onActivated,onUnmounted,onDeactivated } from 'vue';
    const form = reactive({
        login:"",psd:""
    })
    // 在keep-alive时只调用一次
    onMounted(()=>{
        console.log('login onMounted');
    })
    
    onUnmounted(()=>{
        console.log('login onUnmounted');
    })
    
    // onActivated & onDeactivated 只有在keep-alive时才会调用
    onActivated(()=>{
        console.log('login onActivated');
    })
    onDeactivated(()=>{
        console.log('login onDeactivated');
    })
</script>

<script lang="ts">
export default {
    name:"Login"
}
</script>

<style scoped lang='less'>
</style>