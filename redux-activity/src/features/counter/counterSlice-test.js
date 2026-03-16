import counterReducer, { increment } from "./counterSlice";

describe("counter reducer", () => {

  test("increment adds 1 to the counter", () => {
    const initialState = { value: 0 };

    const newState = counterReducer(initialState, increment());

    expect(newState.value).toBe(1);
  });

});