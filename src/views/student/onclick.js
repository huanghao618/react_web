import React from "react"

// 引入子组件
import {Child,Child2} from "@/components"

export default class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"哈哈哈"
        }
        this.click2=this.click2.bind(this,"3")
        
    }
    //正常点击事件指向实例this.click1.bind(this)
    click1(arg,e){
        console.log("click1",arg,this,e)
    }
    //正常在构造函数里写this.click2
    click2(arg,e){
        console.log("click2",arg,this,e)
    }
    //箭头函数指向()=>this.click3()
    click3(arg,e){
        console.log("click3",arg,this,e)
    }
    aa(){
        //更改state的值，是个异步操作，可以改变全部的参数
        //动态绑定点击事件this.setState 用this.setState
        this.setState({
            msg:"buhaole",
            aa:"sa"
        },function(){
            console.log("回调函数")
        })
    }
    render(){
        return(
        <div>
           <h1>你好呀aa</h1>
           {/* 注释：常用的两种 */}
           <button onClick={this.click1.bind(this,"1")}>按钮1</button>
           <button onClick={(e)=>this.click3("2",e)}>按钮3</button>
           {/* 注释：不太常用 */}
           <button onClick={this.click2}>按钮2</button>
           
           <button onClick={this.aa.bind(this)}>更改数据</button>
          
           <Child aaa="111" ccc={this.state.msg}></Child>
           <Child2 bbb="122" ccc={true}></Child2>
        </div>
        )
    }
}
