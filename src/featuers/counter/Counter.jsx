import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("counter", count);
  return (
    <div>
      counter {count}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>
        incrementBY Five
      </button>
      <button onClick={() => dispatch(decrement())}>deccrement</button>
    </div>
  );
};

export default Counter;
