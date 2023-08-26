import { useState } from "react";
import { getFizzBuzzValue } from "./getFizzBuzzValue";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const subtract = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <h1>Fizz Buzz</h1>
      <input type="button" value="add" onClick={add} />
      <input
        type="button"
        value="subtract"
        onClick={subtract}
        style={{ marginLeft: "1rem" }}
      />
      <div style={{ margin: "1rem 0" }}>
        <span>Current Number:</span>
        {count === 0 ? null : <span>{count}</span>}
      </div>
      <div>
        <span>Result:</span>
        <span>{getFizzBuzzValue(count)}</span>
      </div>
    </>
  );
}

export default App;
