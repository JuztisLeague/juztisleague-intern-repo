import React, { useState, useCallback } from "react";
import LargeList from "./Largelist.js";
import EffectExample from "./EffectsSample.js";

// Child component (memoized)
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <Child onClick={handleClick} />
      <EffectExample/>
      <LargeList/>
    </div>
  );
};

export default Parent;

