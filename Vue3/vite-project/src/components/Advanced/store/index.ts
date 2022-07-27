import {defineStore} from 'pinia'
import {Names} from './store-name'

type User = {
    name:string,
    age:number
}

let result:User = {
    name:'Celine',
    age:18
}

const Login = (): Promise<User> =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({
                name:'Celine 女王',
                age: 17
            })
        }, 2000);
    })
}

export const useTestStore = defineStore(Names.TEST,{
    state:()=> {
        return {
            user:<User>{age:1},
            current: 1000,
            name: 'Celine女王'
        }
    },
    // computed 修饰一些值
    getters:{
        newName():string{ // 方法，使ts无法推断返回值类型
            return `$-${this.name}-${this.getUserAge}`
        },
        getUserAge():number{
            return this.user.age
        }
    },
    // methods 可以做同步 异步，提交state
    actions:{
        setCurrent(num:number){
            this.current = num
        },
        async setUser(){
            const result = await Login() // 异步
            this.user = result;
            this.setName('Celine女王 加冕')
        },
        setName(name:string){
            this.name = name;
        }
    }
})

export const useStore = defineStore(Names.BASE,{
    state:()=> {
        return {
            baseCurrent:1
        }
    },
    actions:{ 
        addBase(){
            this.baseCurrent ++;
        }
    }
})