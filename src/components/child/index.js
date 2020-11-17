import React from "react"


//函数的无状态组件 没有自己的this.state,只有props接收父组件的值
function Child(props){
  return(
      <div>
          <h1>子组件666</h1>
          <h2>{props.aaa}</h2>
          <p>{props.ccc}</p>
      </div>
  )
}

// 箭头函数无状态
// var Child =(props)=>{
//     return(
//         <div>
//             <h1>子组件666</h1>
//             <h2>{props.aaa}</h2>
//             <p>{props.ccc}</p>
//         </div>
//     )
// }
export default Child

