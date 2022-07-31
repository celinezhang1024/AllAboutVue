<!-- login -->
<template>
  <div class="login">
    <LoadingBar></LoadingBar>
    <el-form ref="form" :rules="rules" :model="formInline" class="demo-form-inline">
      <el-form-item prop="user" label="账号">
        <el-input v-model="formInline.user" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          v-model="formInline.password"
          placeholder="请输入密码"
          type="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref } from "vue";
import { useRouter } from "vue-router";
import { FormItemRule,FormInstance,ElMessage } from "element-plus" 
import LoadingBar from "../components/loadingBar.vue";

const form = ref<FormInstance>()
const router = useRouter();
type Form = {
  user: string;
  password: string;
};
type Rules = {
  [K in keyof Form]?: Array<FormItemRule>;
};
const formInline = reactive<Form>({
  user: "",
  password: "",
});

const rules = reactive<Rules>({
  user: [
    {
      required: true,
      message: "请输入账号",
      type: "string",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      type: "string",
    },
  ],
});

const onSubmit = () => {
  console.log("submit!",form.value);
  form.value?.validate((validate)=>{
    console.log(validate);
    if(validate){
      router.push("/index"); 
      localStorage.setItem('token','1')
    }else{
      ElMessage.error('请输入完整')
    }
  })
};
</script>

<style scoped lang="less">
.login {
  width: 400px;
  height: 200px;
}
</style>
