import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import unoCss from 'unocss/vite'
import {presetIcons,presetAttributify,presetUno} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx(),unoCss({
    presets:[presetIcons(),presetAttributify(),presetUno()], // unocss 预设[图标库，属性]
    rules:[
      ['flex',{display:'flex'}], // 静态引入
      ['red',{color:'red'}],
      [/^m-(\d+)$/,([,d]) =>({margin:`${Number(d)*10}px`})]// 1. 动态引入  
    ],
    shortcuts:{  // 2. 组合引入，快速生成原子化
      celine1:['flex','red']
    }
  }),AutoImport({
    imports:['vue'],
    dts:'src/auto-import.d.ts' // 注入声明文件
  })]
})
