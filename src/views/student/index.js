import React from "react"

import "./style.scss"

export default class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bol: false,
            color: "aa",
            dis: "block",
            style: {
                color: "orange",
                fontSize: "40px"
            }
        }
    }

    change() {
        var aa = Math.random()
        console.log(aa)
        this.setState({
            //动态改变属性
            color: aa > 0.5 ? "aa" : "bb",
            dis: aa > 0.5 ? "block" : "none",
        })
    }
    render() {
        let { color, bol, dis, style } = this.state

        return (
            <div className="student">
                {/* <h1 className="box">nihaoya</h1>
               <p>{bol && "hello"}</p>
               <p>{bol ?2:1}</p>
               <p className={color}>123</p>
               <p style={{fontSize:"30px",display:dis}}>111</p>
               <p style={style}>我来自哪里</p>
               <button onClick={()=>this.change()}>按钮呀</button>
               <br/> */}
            </div>
        )
    }
}