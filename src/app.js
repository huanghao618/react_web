import React from "react"
//引入子组件
import routes from "./views"

//
import {Provider} from "mobx-react"
import store from "./store"

//引入安装包
import 'antd/dist/antd.css';

import "./views/index.scss"
import { HashRouter, NavLink, Switch, Route, BrowserRouter, Redirect } from "react-router-dom"
export default class App extends React.Component {
    constructor(props) {
        super(props),
            //声明式变量
            this.state = {
                msg: "hello world"
            }
    }
    componentDidMount() {
        // console.log(routes)
    }
    // 生成侧边导航
    navlink() {
        return routes.map(ele => (
            <div key={ele.id} className="link" >
                <NavLink  exact activeClassName='on' to={ele.path}>{ele.text}</NavLink>
            </div>
        ))
    }
    // 生成视图
    router() {
        var res = []
        routes.map(ele => {
            res.push(
                <Route
                    exact
                    key={ele.id}
                    path={ele.path}
                    component={ele.component}
                ></Route>
            )
            if (ele.children) {
                ele.children.map(ele => {
                    res.push(
                        <Route
                            exact
                            key={ele.id}
                            path={ele.path}
                            component={ele.component}
                        ></Route>
                    )
                })
            }
        }
        )
        return res
    }

    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                <div className="app">
                    <div className="left">
                        {this.navlink()}
                    </div>
                    <div className="right">
                        <Switch>
                            {this.router()}
                            <Redirect from='/*' to='/home'></Redirect>
                        </Switch>
                    </div>
                </div>
                </Provider>
            </HashRouter>

        )
    }
}   