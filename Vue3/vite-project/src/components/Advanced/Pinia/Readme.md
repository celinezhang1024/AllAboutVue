优点：
1. ts重写。
1. 轻量1kb压缩后。
1. 去除mutations，只有state，getters，actions，action支持同步、异步。
1. 代码扁平化，store独立，且可自由使用。
1. 无需手动添加store，自动添加。
1. 支持vue2/3

vuex 
1. dispach提交action，
2. action commit 再提交mutation，
3. mutation再去修改state的值。

安装
npm install pinia -S
main.ts 引入