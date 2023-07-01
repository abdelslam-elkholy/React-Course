import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(10);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  return (
    <div>
      <Bill setBill={setBill} bill={bill} />
      <Tip setTip={setTip1} tip={tip1}>
        How was You Satisfied
      </Tip>
      <Tip setTip={setTip2} tip={tip2}>
        How was Your Friend Satisfied
      </Tip>
      <Result tip={tip1 + tip2} bill={bill} />

      <button
        onClick={() => {
          setBill(10);
          setTip1(0);
          setTip2(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

function Bill({ setBill, bill }) {
  return (
    <div>
      your bill is{" "}
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ setTip, tip, children }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0}>not satisfied 0%</option>
        <option value={5}>fair (5%)</option>
        <option value={10}>good(10%)</option>
        <option value={15}>v good (15&)</option>
        <option value={20}>Exellent (20%)</option>
      </select>
    </div>
  );
}

function Result({ tip, bill }) {
  let tiping = ((tip / 200) * bill).toFixed(2);
  return (
    <h3>
      your Bill is {bill} and tip {tiping} , total: {+tiping + bill}
    </h3>
  );
}
