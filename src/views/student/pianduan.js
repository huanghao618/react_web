import React from "react"

function Aaa(){
    return(
        <div><p>1</p></div>
    )
}
function Bbb(){
    return(
        <div><p>1111</p></div>
    )
}
export default class Pian extends React.Component{
    render(){
        return(
                <React.Fragment>
                   <Aaa></Aaa>
                   <Bbb></Bbb>
                </React.Fragment>
        )
    }
} 