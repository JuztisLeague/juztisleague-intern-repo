import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCount } from "../features/counter/counterSlice";

const Counter = () => {

  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  return (
    <div>

      <h2>Counter Value: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

    </div>
  );
};

export default Counter;