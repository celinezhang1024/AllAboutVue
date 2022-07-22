<!-- 4. Ref 全家桶 -->
<template>
  <div>
    <div> 
      <button @click="change">改变</button>
      <div>原始对象： {{ state }}</div>
      <div>代理对象： {{ state2 }}</div>

      <div><button @click="change2">改变 foo: {{foo}} bar: {{bar}}</button></div>

      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { toRef, reactive, toRefs, toRaw} from 'vue';
  const obj = {foo:1,bar:1}
  const obj2 = reactive({foo:1,bar:1}) // 1. 响应式 vs 普通对象
  const obj3 = reactive({foo:1,bar:1})
  const obj4 = reactive({foo:1,bar:1})
  let {foo,bar} = toRefs(obj3);  // 3. 解构响应式数据
  console.log(foo,bar)

  // 4. 响应式=>原始对象, 把属性降级成静态的，节约内存
  const raw = toRaw(obj4) 
  console.log('响应式：',obj4)
  console.log('raw',raw)

  const state = toRef(obj,"bar") // 2. 把bar变成响应式的
  const state2 = toRef(obj2,"bar")
 
  const change = () => {
    state.value++; // 已经被转换成了ref对象了

    console.log('---> 原始对象', obj);
    console.log('---> 引用对象', state);

    // 如果原始对象未被代理，那么虽然数据修改了，但是不会触发在页面上面响应式 
    state2.value ++; 
  }

  const change2 = () =>{
    foo.value++;
    bar.value--;
  }

</script>