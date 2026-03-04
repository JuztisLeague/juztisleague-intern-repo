import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counter/counterSlice";

const CounterMessage = () => {

  const count = useSelector(selectCount);

  let message = "";

  if (count === 0) {

    message = "Counter is zero";

  } else if (count > 0 && count < 5) {

    message = "Counter is small";

  } else if (count >= 5) {

    message = "Counter is large";

  } else {

    message = "Counter is negative";

  }

  return (

    <div>

      <h3>{message}</h3>

    </div>

  );

};

export default CounterMessage;