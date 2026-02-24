import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    
  };

  return (
    <div>

      <h2>Counter Program</h2>

        <p>Current Count: {count} </p>

        <button onClick = {handleIncrement}> Click to Increase Number </button>
        <button onClick = {handleDecrement}> Click to Decrease Number </button>

    </div>
  );
};

export default Counter;