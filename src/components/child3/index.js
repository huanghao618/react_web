import React from "react"

export default class Child3 extends React.Component{
    constructor(props){
        super(props)
    }
    aa(){
        // onCan改变子组件的msg
        this.props.onCan("nihao")
    }
    render(){
        let {aa,ccc}=this.props
        return(
            <div>
                <p>子组件-2</p>
        <p>{aa}</p>
        <p>{ccc}</p>
        {/*  */}
        <button onClick={this.aa.bind(this)}>子组件2</button>
            </div>
        )
    }
}