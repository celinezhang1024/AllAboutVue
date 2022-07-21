
<style>
</style>

<template>
    <div>1. v-model+钩子函数 <input v-model="userName1" type="text" /> {{userName1}} </div> 
    <div>2. Ref 钩子函数-接口 {{userName2}} <button @click="changeMsg">改变hook的值</button></div> 
    <div>3. 浅复制 shallowRef {{shallowMsg}} <button @click="changeShllowMsg">修改shallow的value</button></div>
    <div>4. triggerRef 强制更新视图 {{shallowMsg}}</div>
    <div>5. customRef 自定义Ref <button @click="changeMsg5">自定义Ref修改其值</button> {{messageMyRef}}</div>
</template>

<script setup lang="ts"> 
  import { ref, Ref, isRef, shallowRef, triggerRef, customRef } from 'vue' 
  let userName1 = ref<string | number>("test"); // 响应式 钩子函数, 联合类型
  let userName2:Ref<string> = ref("Celine"); //  Ref接口
  let notRef:number = 1; 

  const changeMsg = () =>{
    userName2.value = "changed Celine"; // 修改hooks的值
    console.log("changed Value") 
    console.log("是不是Ref",isRef(notRef))  
  }

  // 3. 只跟踪自身的变换.value，不改变视图
  type Obj = {name:string}
  let shallowMsg:Ref<Obj> = shallowRef({name:"Celine"})
  const changeShllowMsg = () =>{
    // 3. 无法修改 用属性，可配合3
    shallowMsg.value.name = "Celine abc"
    // 3. 用对象 可以修改 
    // shallowMsg.value = {name:"Celine abc"}
    // 4. 强制更新视图
    triggerRef(shallowMsg)
    console.log(shallowMsg.value.name)
  }

  // 5. customRef 自定义Ref
  function MyRef<T>(value:T){
    return customRef((trank,trigger) => { // 工厂函数
      return {
        get(){
          trank()
          return value
        },
        set(newVal:T){
          console.log("set")
          value = newVal
          trigger()
        }
      }
    })
  }

  let messageMyRef = MyRef<string>('小Celine')
  const changeMsg5 = () =>{
    messageMyRef.value = "大Celine"
  }

</script>