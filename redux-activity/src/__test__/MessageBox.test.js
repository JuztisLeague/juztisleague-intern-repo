import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MessageBox from "../components/MessageBox";

// Test 1 — checks if the component renders correctly
test("renders the welcome message", () => {

  render(<MessageBox />);

  expect(screen.getByText("Hello, Welcome to Focus Bear!")).toBeInTheDocument();

});

// Test 2 — checks if clicking the button changes the message
test("changes message when button is clicked", () => {

  render(<MessageBox />);

  // Find the button and click it
  const button = screen.getByText("Click Me");
  fireEvent.click(button);

  // Check if the message changed
  expect(screen.getByText("Button was clicked!")).toBeInTheDocument();

});