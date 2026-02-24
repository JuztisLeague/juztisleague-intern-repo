import React, { useState } from "react";

const SimpleForm = () => {

  // 1. Store the current input text
  const [inputText, setInputText] = useState("");

  // 2. Store the list of items
  const [items, setItems] = useState([]);

  // 3. Function to handle adding item
  const handleAddItem = () => {

    // prevent empty input
    if (inputText.trim() === "") return;

    // add new item to list
    setItems([...items, inputText]);

    // clear input box
    setInputText("");
  };

  return (
    <div>

      <h2>List you Names</h2>

      {/* Input Field */}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
      />

      {/* Button */}
      <button onClick={handleAddItem}>
        Add
      </button>

      {/* Display List */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default SimpleForm;