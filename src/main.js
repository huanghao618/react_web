import "@/stess/index.css"
import "@/stess/01.scss"
// import "./views/index.scss"
// import {fn1,fn2} from "@/utils/fetch"
// fn1()
// fn2()
// //引入图片
// import img from "../public/images/1.jpg"
// console.log("img",img)



import React from "react"
//渲染页面
import ReactDom from "react-dom"

import App from "./app"
ReactDom.render(<App/>,document.querySelector("#app"))