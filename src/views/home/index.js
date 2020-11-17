import React from "react"



import { Child5 } from "../../components"
//观察者，注射
import { observer, inject } from "mobx-react"
//先放这个
//引入ui组件
import { Button } from 'antd';

import { Steps } from 'antd';
import { Input } from 'antd';


@inject("store")
@observer

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                { id: 1, name: "zhangsan" },
                { id: 2, name: "lisi" },
                { id: 3, name: "wangwu" }
            ]
        }
    }
    componentDidMount() {
        console.log('home props', this.props)
        // let { cnode } = this.props.store
        // let params = {
        //     mdrender: false,
        //     tab: '',
        //     page: 1,
        //     limit: 5
        // }
        // cnode.getCnodeList(params)
    }


    click(ele) {

        this.props.history.push("/home/detail/" + ele.id + "/" + ele.name)
    }
    arrlist() {
        let { arr } = this.state
        return arr.map(ele => (
            <div key={ele.id} onClick={this.click.bind(this, ele)}>
                <span>{ele.id}</span>
                <span>-</span>
                <span >{ele.name}</span>
            </div>
        ))
    }
    changeCount(ele) {
        let { todo } = this.props.store
        todo.changeCount(ele)
    }
    lianxi() {
        let { cnode } = this.props.store
        cnode.fn1()
    }
    //渲染页面
    on1(){
     const{cnode}=this.props.store
     return cnode.list.map(ele=>(

     <div key={ele.id}>{ele.title}</div>
     ))
    }
    render() {
        let { todo, cnode } = this.props.store
        const { Step } = Steps;
        return (
            <div>
                <h1>首页</h1>
                <Child5></Child5>
                <h2>{todo.count}</h2>


                <button onClick={this.changeCount.bind(this, "add")}>加</button>
                <button onClick={this.changeCount.bind(this, "jian")} >减</button>
                <div>
                    {this.arrlist()}
                </div>
                <hr />
                <Button type="primary">Button</Button>
                <hr />

                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                <Input placeholder="Basic usage" />
                <Button type="primary">Button</Button>
                <Button>Button</Button>
                <Button type="dashed">Button</Button>
                <br />
                <Button type="text">Button</Button>
                <Button type="link">Button</Button>
                <div>
                   {this.on1()}
                </div>
            </div>
        )
    }
}
export default Home