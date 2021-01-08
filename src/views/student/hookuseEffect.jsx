import React, { useState, useEffect, useRef } from "react";

export default function HookuseEffect() {
  const [na, setNa] = useState(1);
  const edit = () => {
    setNa(na + 1);
  };
  useEffect(() => {
    console.log("初始化");
  }, []);
  return (
    <div>
      <h1>useEffect</h1>
      <p>{na}</p>
      <button onClick={edit}>改变</button>
    </div>
  );
}
