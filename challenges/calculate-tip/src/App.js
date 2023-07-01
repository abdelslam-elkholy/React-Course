import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(10);
  const [tip, setTip] = useState(0);
  return (
    <div>
      <Bill setBill={setBill} />
      <Tip setTip={setTip} bill={bill}>
        How was You Satisfied
      </Tip>
      <Tip setTip={setTip} bill={bill}>
        How was Your Friend Satisfied
      </Tip>
      <Result tip={tip} bill={bill} />
    </div>
  );
}

function Bill({ setBill }) {
  return (
    <div>
      your bill is{" "}
      <input type="number" onChange={(e) => setBill(e.target.value)} />
    </div>
  );
}

function Tip({ setTip, children, bill }) {
  return (
    <div>
      {children}
      <select
        onChange={(e) =>
          setTip((tip) =>
            (((tip + Number(e.target.value)) / 200) * bill).toFixed(2)
          )
        }
      >
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
  return (
    <h3>
      your Bill is {bill} and tip {tip} , totla: {bill + tip}
    </h3>
  );
}
