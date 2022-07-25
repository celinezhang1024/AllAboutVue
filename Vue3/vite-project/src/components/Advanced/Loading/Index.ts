// 插件
import {App,createVNode,render} from 'vue'
import Loading from './Index.vue' 

export default {
  install (app:App){
    const vnode = createVNode(Loading) // 转成虚拟的DOM
    render(vnode,document.body) // 挂载在本地
    console.log(vnode)
    console.log(vnode.component?.exposed);
    app.config.globalProperties.$loading = {
      show:vnode.component?.exposed.show,
      hide:vnode.component?.exposed.hide
    } 
    
    // show:vnode.component?.exposed.show()
  }
}
// 对象必须export