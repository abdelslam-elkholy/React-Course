import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const addNewItem = (item) => setItems([...items, item]);
  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));
  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackingList items={items} deleteItem={deleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴️ Far Away 👜️</h1>;
}

function Form({ addNewItem }) {
  const [description, setDesciption] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    addNewItem(newItem);
    setDesciption("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your form</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.selectedIndex + 1);
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
        value={description}
        onChange={(e) => {
          setDesciption(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, deleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((ele) => (
          <Item item={ele} key={ele.id} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, deleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}> ❌️ </button>
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
