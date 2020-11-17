import React from "react"

import { Child2,Child3 } from "../../components"
export default class Change extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            msg:"lala",
            arr:[
                {id:1,name:"zhangsan"},
                {id:2,name:"lisi"},
                {id:3,name:"wangwu"}
            ],
            ccc:"快下课了"
            
        }
       
    }
    //改变子组件
    click(){
        this.setState({
            msg:"aa",
        })
    }
    // 接收子组件的修改的参数
    change(e){
        this.setState({
            msg:e
        })
    }
    listarr(){
        //解构赋值
        let{arr}=this.state
        return  arr.map(ele=>(
            <div key={ele.id}>
                <p>{ele.name}</p>
            </div>
        ))
    }
    render(){
        let {msg,ccc}=this.state
        return(
            <div>
                {/* onCan自定义事件 */}
                <h3>fuzujian</h3>
                <Child2 aa={msg} ccc={ccc} onCan={this.change.bind(this)} list={this.listarr()}> </Child2>
                <p>-------------</p>
                <Child3 aa={msg} ccc={ccc} onCan={this.change.bind(this)} > </Child3>
                <button onClick={this.click.bind(this) }>改变子组件</button>
            </div>
        )
    }
        

}