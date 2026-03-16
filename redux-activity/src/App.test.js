import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import App from "./App";

test("renders learn react link", () => {

  const store = configureStore({
    reducer: { counter: counterReducer },
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/Redux Toolkit Counter Activity/i)).toBeInTheDocument();

});