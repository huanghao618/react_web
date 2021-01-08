import { remove } from "mobx";
import React, { useState, useEffect, useRef } from "react";

export default function HookuseState() {
  const [n, setN] = useState(1);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "lifa",
    age: 18,
    habits: ["小改改", "明星"],
  });
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const addNum = () => {
    setUser({
      ...user,
      age: user.age + 1,
      habits: [...user.habits, "Lifa"],
    });
  };
  const minusNum = () => {
    const newHabits = user.habits.splice(1, 1);
    setUser({
      ...user,
      age: user.age - 1,
      habits: newHabits,
    });
  };
  const onClick = () => {
    //   每次让他加一，可实际上他只会变一次，因为n本身是不会变的，而是每次生成一个新的n
    setN(n + 1);
    setN(n + 1);
    //   i是一个占位符，随便什么都可以，就是我们传一个值给setN，每次返回当前的值+1，所以最后会加2
    // setN((i) => i + 1);
    // setN((i) => i + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
      <div>
        {user.name}, {user.age} <br />
        {user.habits.join(",")}
      </div>
      <button onClick={addNum}>变大</button>
      <button onClick={minusNum}>减少</button>
      <div />
      <h2 onClick={onClick}>{n}</h2>
    </div>
  );
}
