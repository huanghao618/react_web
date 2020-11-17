import React from "react"

import {observer, inject} from "mobx-react"
@inject('store')
@observer

class HomeDetail extends React.Component {
    
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        let {match,store}=this.props
        return (
            <div>
                <h1>详情页</h1>
        <h3>{match.params.id}</h3>
        <h3>{match.params.name}</h3>
            </div>
        )
    }
}
export default  HomeDetail