import React, { useState, useCallback } from "react";

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
    </div>
  );
};

export default Parent;

