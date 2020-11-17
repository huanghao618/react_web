import React from "react"
//引入高阶组件
import {withRouter} from "react-router-dom"
export default class Lianxi extends React.Component {
    
    constructor(props){
        super(props)
        console.log(this.props)
        this.state={
            msg:1
        }
    }
    click(){
        this.setState({
            msg:2
        })
    }
    render() {
        let {msg} =this.state
        return (
            <div>
                <h1 style={{color:"red"}}>练习</h1>
        <p>{msg}</p>
        <button onClick={this.click.bind(this)}>dianji</button>
            </div>
        )
    }
}