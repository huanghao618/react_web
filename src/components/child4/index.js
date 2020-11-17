import React from "react"
import "./style.scss"
function Child4(props) {
    return (
        <div className="child4">
            <div>{props.title}</div>
            <div>{props.children}</div>
            <button>{props.button}</button>
        </div>
    )
}
export default Child4