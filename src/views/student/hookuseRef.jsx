import React, { useState, useEffect, useRef } from "react";

export default function HookuseRef() {
  const [name, setName] = useState("");
  const ref1 = useRef();
  const add = (e) => {
    setName("");
    ref1.current.value = name;
  };
  return (
    <div>
      <h1>useRef</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={add}>dianji</button>
      <br />
      <input type="text" ref={ref1} />
    </div>
  );
}
