import React from "react"

import "./style.scss"
export default class Tolist extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            listArr:[ ],
            listArr2:[ ],
            task:""
        }
    }
    //拿到input的值
    formChange(key,e){
        // console.log(e.target.value)
        this.setState({
            [key]:e.target.value
        })
    }
    // 添加事件
    keyHendel(e){
    // console.log(e.keyCode)
    if(e.keyCode==13){
        let {task}=this.state
        var arr=this.state.listArr
        arr.push({id:Date.now(),name:task})
        this.setState({
            listArr:arr,
            task:""
        })
     }
    }
    // 删除事件1
    remove(){
            let {task}=this.state
            var arr=this.state.listArr
            arr.splice("",1)
            this.setState({
                listArr:arr
            })
    }
    // 删除事件2
    remove2(){
        let {task}=this.state
        var arr2=this.state.listArr2
        arr2.splice("",1)
        this.setState({
            listArr2:arr2
        })
}
    // 列表事件1
    listArrx(){
      return  this.state.listArr.map(ele=>(
        <p key={ele.id} value={ele.id}>{ele.name}</p>
        ))
    }
    // 列表事件2
    listArr2(){
        return  this.state.listArr2.map(ele=>(
          <p key={ele.id} value={ele.id}>{ele.name}</p>
          ))
      }
    //转换事件1
    tansform(){
        let{listArr,listArr2}=this.state
        var arr1 = listArr.splice("",1)
        listArr2.push(arr1[0])
        this.setState({
            listArr2:arr1
        })
    }
    //转换事件2
    tansform2(){
        let{listArr,listArr2}=this.state
        var arr2 = listArr2.splice("",1)
        listArr.push(arr2[0])
        this.setState({
            listArr:arr2
        })
    }
    render() {
        let{task,listArr,listArr2}=this.state

        return (
            <div className="todolist">
                {/*导航条 */}
                <header className="header">
                    <div>
                        <span>TODOS</span>
                        <input type="text" 
                        value={task}
                        onChange={this.formChange.bind(this, 'task')}
                        onKeyUp={this.keyHendel.bind(this)}/>
                    </div>
                </header>
                {/* 正在进行 */}
                <div>
                    <div>
                        <span>正在进行</span>
        <span>{listArr.length}</span>
                    </div>
                     {/* 一行 */}
                    <div>
                        <button  onClick={this.tansform.bind(this)}>转换</button>
                        
                        <p className="border">{this.listArrx()}</p>
                        <button onClick={this.remove.bind(this)}>删除</button>
                    </div>
                </div>
                 {/* 已经完成 */}
                 <div>
                    <div>
                        <span>已经完成</span>
                        <span>
                        {listArr2.length}
                        </span>
                    </div>
                    {/* 一行 */}
                    <div>
                        <button  onClick={this.tansform2.bind(this)}>转换</button>
                        <p className="border">{this.listArr2()}</p>
                        <button onClick={this.remove2.bind(this)}>删除</button>
                    </div>
                </div>
                {/* 底部 */}
                <footer className="app_bot">
                此todos由2001班制作完成
                </footer>
                </div>
        )
    }
}

