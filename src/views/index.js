
//react懒加载  实现代码分割，让组件按需加载，实现项目性能优化，引入第三方库
import loadable from "@loadable/component"

import Oclick from "./student/onclick" 
import Student from "./student" 
import List from "./student/list" 
import Change from "./student/change" 
import Form from "./student/form" 
import Tolist from "./todolist"
import Comnit from "./student/commit"
import Life from "./student/life"
import Pian from "./student/pianduan"
import TestHoc from "./student/testhoc"
import TestHook from "./student/hook"



const Home =loadable(()=>import("./home"))
const HomeDetail =loadable(()=>import("./home/homedetail"))
const HomeLian =loadable(()=>import("./home/lianxi"))


export default [
    {
        id:1,
        path:"/home",
        component:Home,
        text:"首页",
        children:[
            {
                id:1-1,
                path:"/home/detail/:id/:name",
                component:HomeDetail,
                text:"首页", 
            },
            {
                id:1-2,
                path:"/home/lianxi",
                component:HomeLian,
                text:"练习", 
            }
        ]
    },
    {
        id:3,
        path:"/student",
        component:Student,
        text:"学习"
    },
    {
        id:4,
        path:"/list",
        component:List,
        text:"列表循环"
    },
    {
        id:5,
        path:"/change",
        component:Change,
        text:"改变子组件"
    },
    {
        id:6,
        path:"/form",
        component:Form,
        text:"表单"
    },
    {
        id:7,
        path:"/tolist",
        component:Tolist,
        text:"Tolist"
    },
    {
        id:8,
        path:"/comnit",
        component:Comnit,
        text:"组合"
    },
    {
        id:9,
        path:"/life",
        component:Life,
        text:"生命周期"
    },
    {
        id:10,
        path:"/pian",
        component:Pian,
        text:"片段"
    },
    {
        id:11,
        path:"/testHoc",
        component:TestHoc,
        text:"高阶组件"
    },
    {
        id:12,
        path:"/testHook",
        component:TestHook,
        text:"hook"
    },
    {
        id:13,
        path:"/click",
        component:Oclick,
        text:"click事件"
    }
]
