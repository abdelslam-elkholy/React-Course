import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [steps, setSteps] = useState(1);
  const [isOpen, setOpen] = useState(true);
  const handelNext = () => {
    steps < 3 && setSteps((step) => step + 1);
  };
  const handelPrev = () => {
    steps > 1 && setSteps((step) => step - 1);
  };
  return (
    <>
      <button className="close" onClick={() => setOpen((open) => !open)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {steps}: {messages[steps - 1]}
          </p>
          <div className="buttons">
            <Button handle={handelPrev}>Prev</Button>
            <Button handle={handelNext}>Next</Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ handle, children }) {
  return (
    <button
      onClick={handle}
      style={{ backgroundColor: "#7950f2", color: "#fff" }}
    >
      {children}
    </button>
  );
}
