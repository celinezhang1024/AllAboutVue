<template>
  <div class="container"> 
  </div>
</template>
<script lang="ts"> 

export default{
    name:'About',
    data:() => {
        return {
            a:1
        }
    },
    computed:{

    },
    methods: {
        isInViewPortOfOne:function(el:HTMLElement) {
            // viewPortHeight 兼容所有浏览器写法
            const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            const offsetTop = el.offsetTop
            const scrollTop = document.documentElement.scrollTop
            const top = offsetTop - scrollTop
            console.log('top', top)
            // 这里有个+100是为了提前加载+ 100
            return top <= viewPortHeight + 100
        }
    }
} 

</script>
<style>
.container{width:100%;height:100%;}
.about{width:100px;height: 11100px;}
</style>
