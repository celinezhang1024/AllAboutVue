import {ref} from 'vue'
let v = ref<string>('aaa')
let flag = false
let Arr = [1,2,3,4,5]
type Props = {
    title:string
}

const renderDom = (props:Props,ctx:any)=> {
    return (
    <div>
        <input v-model={v.value} type="text" />
        <div>{v.value}</div> 
        <div>{flag ? '真的':'假的'}</div>
        {Arr.map(v => {
            return (<div onClick={clickTap.bind(this,v)} data-index={v}>{v}</div>)
        })}
        <div>{props.title}</div>
        <div onClick={clickEmit.bind(this,ctx)}>clickEmit</div>
    </div>)
}

const clickTap = (v:number)=>{
    console.log('我被点了',v)
}
const clickEmit = (ctx:any)=>{
    ctx.emit('on-click','ctx.emit hello')
}
export default renderDom