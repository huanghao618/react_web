import React from "react"


import {withRouter} from "react-router-dom"

class Child5 extends React.Component{
    click(){
        this.props.history.push("/list")
    }
  render(){
      return(
          <div>
            <button onClick={this.click.bind(this)}> 新增</button>
          </div>
      )
  }
}
export default withRouter(Child5)