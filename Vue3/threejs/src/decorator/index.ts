/**
 * 装饰器函数
 * 大概率是用来基于原有的函数，在不修改使用的时候，通过装饰器的写法，去修改原有函数函数逻辑
 * @param target
 * @param name
 * @param descriptor
 */
export function measure(target:any,name:any,descriptor:any){
  const oldValue = descriptor.value; // 原有函数代码
  descriptor.value = async function(){ // 替换原有函数
    const start = Date.now();
    const res = await oldValue.apply(this,arguments); // 执行原有函数，this不变
    console.log(`${name}执行耗时 ${Date.now() - start}`)
  };
  return descriptor; 
}
