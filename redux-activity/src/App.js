import React from "react";
import Counter from "./components/Counter";
import CounterMessage from "./components/CounterMessage";

function App() {
  return (
    <div>
      <h1>Redux Toolkit Counter Activity</h1>
      <Counter />
      <CounterMessage />
    </div>
  );
}

export default App;