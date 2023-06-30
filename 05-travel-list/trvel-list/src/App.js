import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const addNewItem = (item) => setItems([...items, item]);
  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));
  const changeCkeck = (id) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} />

      <PackingList
        items={items}
        deleteItem={deleteItem}
        changeCkeck={changeCkeck}
      />
      <Stats items={items} />
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

function PackingList({ items, deleteItem, changeCkeck }) {
  const [sortBy, setSortBy] = useState("input");
  let sorteItems;

  if (sortBy === "input") sorteItems = items;

  if (sortBy === "packed")
    sorteItems = items.slice().sort((a, b) => a.packed - b.packed);

  if (sortBy === "description")
    sorteItems = items
      .slice()
      .sort((a, b) => a.description.localCompare(b.description));
  return (
    <div className="list">
      <ul>
        {sorteItems.map((ele) => (
          <Item
            item={ele}
            key={ele.id}
            deleteItem={deleteItem}
            changeCkeck={changeCkeck}
          />
        ))}
      </ul>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value={"input"}>Sort By Input order</option>
        <option value={"description"}>Sort By description</option>
        <option value={"packed"}>Sort By Packed</option>
      </select>
    </div>
  );
}
function Item({ item, deleteItem, changeCkeck }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => changeCkeck(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}> ❌️ </button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Please Enter Some items on your list</em>
      </p>
    );

  const length = items.length;
  const packed = items.filter((item) => item.packed === true).length;
  const perecentage = Math.round((packed / length) * 100);
  return (
    <footer className="stats">
      {perecentage === 100 ? (
        <em>You Have Everything You need</em>
      ) : (
        <em>
          You Have {length} items on your list , and you already packed {packed}{" "}
          ({perecentage}%)
        </em>
      )}
    </footer>
  );
}
