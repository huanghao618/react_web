import { observable,action } from "mobx";
//所有的方法都是action定义的
export default class Todo {
    //共享的数据
    @observable count =0  
    //同步
    @action changeCount(payload){
        if(payload=="add"){
            this.count++
        }else{
            this.count--
        }
    }
    //异步，调接口
    

}