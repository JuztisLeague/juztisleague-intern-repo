import React from "react";
import Counter from "./components/Counter";
import CounterMessage from "./components/CounterMessage";
import MessageBox from "./components/MessageBox";

function App() {
  return (
    <div>
      <h1>Redux Toolkit Counter Activity</h1>
      <Counter />
      <CounterMessage />
      <MessageBox />
    </div>
  );
}

export default App;