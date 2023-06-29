import { useState } from "react";

export default function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  //   const incrementSteps = function () {
  //     setSteps((step) => step + 1);
  //   };
  //   const decrementSteps = function () {
  //     steps > 1 && setSteps((step) => step - 1);
  //   };

  const incrementCount = function () {
    setCount((c) => c + steps);
  };

  const decrementCount = function () {
    setCount((c) => (c - steps > 0 ? c - steps : 0));
  };

  const getDays = function () {
    const date = new Date();
    date.setDate(date.getDate() + count);
    return date.toDateString();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
        alignItems: "center",
      }}
    >
      {/* <div>
        <button
          style={{ padding: ".2rem", fontSize: "1.5rem", margin: ".5rem" }}
          onClick={decrementSteps}
        >
          -
        </button>
        {steps}
        <button
          style={{ padding: ".2rem", fontSize: "1.5rem", margin: ".5rem" }}
          onClick={incrementSteps}
        >
          +
        </button>
    </div> */}

      <input
        type="range"
        min={0}
        max={10}
        value={steps}
        onChange={(e) => setSteps(+e.target.value)}
      />
      <div>
        <button
          style={{ padding: ".2rem", fontSize: "1.5rem", margin: ".5rem" }}
          onClick={decrementCount}
        >
          -
        </button>
        <input
          type="number"
          min={0}
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button
          style={{ padding: ".2rem", fontSize: "1.5rem", margin: ".5rem" }}
          onClick={incrementCount}
        >
          +
        </button>
      </div>

      <p>
        {count > 0 && `${count} days from now is: `} {getDays()}
      </p>

      {(count !== 0 || steps !== 1) && (
        <button
          onClick={() => {
            setCount(0);
            setSteps(1);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
