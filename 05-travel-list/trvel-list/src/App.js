import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴️ Far Away 👜️</h1>;
}

function Form() {
  const [desc, setDesc] = useState("");
  const [quant, setquant] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc) return;

    const newItem = { desc, quant, packed: false, id: Date.now() };
    console.log(newItem);
    setDesc("");
    setquant(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your form</h3>
      <select
        value={quant}
        onChange={(e) => {
          setquant(e.target.selectedIndex + 1);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((ele) => (
          <Item item={ele} key={ele.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button> ❌️ </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You Have x items</em>
    </footer>
  );
}
