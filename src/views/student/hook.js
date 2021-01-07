import React, { useState, useEffect } from "react";

// useState
// useEffect（副作用）:开启长连接、调接口、DOM操作、定时器等
// useContext
// 自定义Hooks

// 解决问题：类组件  函数组件（无状态组件）
// Hooks，让函数式组件可以拥有state、生命周
export default function TestHook(props) {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState(2);
  function change() {
    setCount(count + 1);
  }
  var timer = null;
  // componentDidMount   mounted
  // componentDidUpdate  updated
  // componentWillUnmount  beforeDestroyed
  // 使用定时器
  //useEffect相当于那三个生命周期
  //   页面初始化
  useEffect(() => {
    // 调接口，开启长连接、开启定时
    // 做其它初始化的业务逻辑
    console.log("1111");
    // timer=setInterval(function(){
    //     setCount(count+1)
    // },1000)
    //  // 一定要清除长连接、清除定时器
    // return ()=>{
    //     clearInterval(timer)
    //   }
    // 是个开关,只要一个数据发生变化，就会执行一次
  }, []);

  useEffect(() => {
    document.title = "nihao";
    document.getElementById("box").style.color = "red";
    return undefined;
  });
  return (
    <div>
      <p>{count}</p>
      <button onClick={change}>按钮</button>
      <p id="box">aa</p>
    </div>
  );
}
