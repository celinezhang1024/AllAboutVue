
<template> 
  <div>{{message}} - 模版语法 </div>
  <div>{{flag?"真的":"假的"}} - 条件</div> 
  <div>{{number+1}} - 运算</div>
  <div>{{string.split(',').map(v => `<div>${v}</div>`)}} - map方法</div>
  <div><span v-text="string"></span> - v-text包裹文本</div>
  <div v-html="hl"></div>
  <div v-if="!flag">删除节点|隐藏 - v-if</div>
  <div v-else-if="flag === true">删除节点显示 - v-if</div>
  <div v-show="flag">隐藏节点显示 - v-show</div> 
  <div v-on:click="clickTapP">clickTap parent
    <div @click.stop="clickTapC">clickTap child</div>
  </div>
  <form action="/">
    <!-- 提交不刷新.prevent -->
    <button @click.prevent="clickTapC" type="submit">提交</button> 
  </form>
  <div v-bind:style="style">v-bind绑定 style</div>
  <div :class="['a','b']">v-bind绑定 class</div>
  <div :class="[flag?'a':'c']">:绑定选择 class</div>
  <div :class="bStyle"></div>
</template>

<script setup lang="ts">
  import * as HelloWorldVue from './components/HelloWorld.vue';
  const message:string = 'Celine'
  const flag:boolean = false 
  const number:number = 0;
  const string:string = 'C,e,l,i,n,e'
  const hl:string = '<section>v-html包裹标签</section>'
  const clickTapP = () => {
    console.log('clickTap 父节点!')
  } 
  const clickTapC = () =>{
    console.log('clickTap 子节点!')
  }
  type Style = {
    color:string,
    height:string
  }
  const style:Style = {
    color:'red',
    height:'20px'
  }
  // style选择配置
  type BoxStyle = {
    border: boolean,
    shadow: boolean,
    padding: boolean,
  }
  const bStyle:BoxStyle = {
    border: true,
    shadow: true,
    padding: true,
  }
</script>

<style scoped> 
.a{color:blue;}
.b{font-weight: 700;}
.c{color:yellow;}
.border{border:1px solid #cccccc;}
.shadow{box-shadow: inset 5px 5px 5px #ff0;}
.padding{padding:10px;}
</style>
