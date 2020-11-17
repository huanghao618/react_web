import React from "react"
import {withRouter} from "react-router-dom"

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                { id: 1, name: "zhangsan" },
                { id: 2, name: "lisi" },
                { id: 3, name: "wangwu" },
            ],
            username:"lao",
            password:"sa",
        }
    }
    list(){
      
    }
    //事件对象拿到value的值，然后在改变value值
    changhe(e){
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }
    click2(e){
        console.log(e.target.value)
        this.setState({
            password:e.target.value
        })
    }
    submit(){
        var data={
            username:this.state.username,
            password:this.state.password,
            box:document.querySelector("#box").value,
            box1:this.refs.box1.value
        }
        console.log(data)
    }
    render() {
        let { username,arr,password } = this.state
        var res=arr.map(ele => (
            <div key={ele.id}>
                <span>{ele.id}</span>
                <span>{ele.name}</span>
            </div>
        ))
        return (
            <div>
                <p>循环遍历</p>
                <div>
                    {res}
                </div>
                {/* 受控表单 */}
                <input defaultValue={username} type="text" onChange={this.changhe.bind(this)}/>
                <input value={password} type="text" onChange={this.click2.bind(this)}/>
                 <br/>
                {/* 不受控表单 */}
                <input type="text" id="box"/>
                <input type="text" ref="box1"/>
                <br/>
                <input type="file"/>
                <button onClick={this.submit.bind(this)}>提交数据</button>
            </div>
        )
    }
}