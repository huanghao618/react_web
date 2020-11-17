import React from "react"

//抛出高阶组件
export default function hoc(Zujian){
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state={
                msg:"nihao",
                arr:[
                    {id:1,name:"qq"},
                    {id:2,name:"ww"}
                ]
            }
        }
        click(){
            console.log("a")
        }
        fun(){
            let {arr}=this.state
           return arr.map(ele=>(
            <div key={ele.id}>{ele.name}</div>
            ))
        }
        render(){
            return(
                <div>
                    
                    <Zujian msg={this.state.msg}
                     onDa={this.fun.bind(this)}>

                     </Zujian>
                </div>
            )
        }
    }
}