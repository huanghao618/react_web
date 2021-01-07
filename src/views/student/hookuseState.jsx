import { remove } from "mobx";
import React, { useState, useEffect, useRef } from "react";

export default function HookuseState() {
  const [state, setState] = useState("");
  const [list, setList] = useState([]);
  const add = () => {
    setState("");
    setList([...list, state]);
  };
  const remove = (e) => {
    list.splice(e, 1);
    setList([...list]);
  };
  return (
    <div>
      <h1>useState</h1>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={add}>添加</button>

      <div>
        {list.map((item, index) => (
          <div key={index}>
            <span>{item}</span>

            <span onClick={(e) => remove(index)}>删除</span>

            <span>修改</span>
          </div>
        ))}
      </div>
    </div>
  );
}
