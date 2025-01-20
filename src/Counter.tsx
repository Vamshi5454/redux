import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";
import { RootState, AppDispatch } from "./redux/store";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.count); // Typed state
  const dispatch = useDispatch<AppDispatch>(); // Typed dispatch

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Redux Counter (Toolkit + TypeScript)</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => dispatch(increment())}
        style={{ marginRight: "10px" }}
      >
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
