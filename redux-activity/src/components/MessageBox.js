import React, { useState } from "react";

const MessageBox = () => {

  const [message, setMessage] = useState("Hello, Welcome to Focus Bear!");

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );

};

export default MessageBox;