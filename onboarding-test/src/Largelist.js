import React, { useState, useMemo } from "react";

const LargeList = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Large list of numbers
  const numbers = useMemo(() => {
    console.log("Generating large list...");

    return Array.from({ length: 10000 }, (_, i) => i + number);
  }, [number]);

  // Expensive calculation example
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");

    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += number;
    }

    return total;
  }, [number]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "10px",
    marginTop: "10px"
  };

  return (
    <div>
      <h1>useMemo Example</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <div style={themeStyle}>
        Expensive Result: {expensiveCalculation}
      </div>

      <h3>Large List:</h3>
      <ul>
        {numbers.slice(0, 10).map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

    </div>
  );
};

export default LargeList;