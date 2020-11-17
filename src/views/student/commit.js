import React from "react"

import {Child4} from "../../components"
function Child5(props){
   return(
       <div>
           删除
       </div>
   )
}
function Child6(props){
    return(
        <div>
            确定
        </div>
    )
 }
function Child7(props){
    return(
        <div>
            top
        </div>
    )
 }
 function Child8(props){
    return(
        <div>
            shop
        </div>
    )
 }
export default class Commit extends React.Component{
     constructor(props){
         super(props)
     }
     render(){
         return (
             <div>
                 <h1>组合</h1>
                 <Child4 title={<Child5/>}
                 button={<Child7/>}>
                    <div>haha</div>
                 </Child4>
                 
                 <hr/>
                 <Child4 title={<Child6/>}
                 button={<Child8/>}>
                    <div>haha</div>
                 </Child4>

                 
             </div>
         )
     }
}