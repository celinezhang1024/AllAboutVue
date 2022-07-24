<!-- 注册 keep-alive --> 
<template>
   <div>
       <table>
        <tr>
            <td>账号</td> <td><input v-model="form.login" type="text"> </td>
        </tr>
        <tr>
            <td>密码</td> <td><input v-model="form.psd" type="password"> </td>
        </tr>
         <tr>
            <td>验证码</td> <td><input v-model="form.code" type="text"> </td>
        </tr>
       </table>
       <button @click="">注册</button>
   </div>
</template>

<script setup lang='ts'>
    import { reactive,onMounted,onActivated,onUnmounted,onDeactivated  } from 'vue';
    const form = reactive({
        login:"",psd:"",code:""
    }) 
    onActivated(()=>{
        console.log('reg onActivated');
        form.code = "" // 切换时，清空code
    }) 
</script>

<style scoped lang='less'>
</style>