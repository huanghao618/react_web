import React from "react"

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sportArr: [
                { id: 1, name: "篮球" },
                { id: 2, name: "足球" },
                { id: 3, name: "羽毛球" },
                { id: 4, name: "棒球" }
            ],
            sport: 1,
            task: ""
        }
    }
    sportArr() {
        let { sportArr } = this.state
        return sportArr.map(ele => (
            <option key={ele.id} value={ele.id}>{ele.name}</option>
        ))
    }
    // 方法复用
    formChange(key, e) {
        this.setState({
            [key]: e.target.value
        })
    }

    keyHandle(e) {
        let { task } = this.state
        if (e.keyCode == 13) {
            var arr = this.state.sportArr
            arr.push({ id: Date.now(), name: task })
            this.setState({
                sportArr: arr,
                task: ''
            })
        }
    }
    render() {

        let { sport, task } = this.state
        return (
            <div>
                <select value={sport} onChange={this.formChange.bind(this, 'sport')}>
                    {this.sportArr()}
                </select>
                <hr />

                <input type="text" value={task} onChange={this.formChange.bind(this, 'task')} onKeyUp={this.keyHandle.bind(this)} />
            </div>
        )
    }
}