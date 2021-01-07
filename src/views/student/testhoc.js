import React from "react"

import hoc from "../../utils/hoc"

class TestHoc extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>测试高阶组件</h1>
        <div>{this.props.msg+1}</div>
        <div>{this.props.onDa()}</div>
            </div>
        )
    }
}
export default hoc(TestHoc)