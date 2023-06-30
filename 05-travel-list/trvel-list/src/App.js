import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);
  const addNewItem = (item) => setItems([...items, item]);
  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));
  const deleteItems = () => setItems([]);

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
        deletItems={deleteItems}
      />
      <Stats items={items} />
    </div>
  );
}
