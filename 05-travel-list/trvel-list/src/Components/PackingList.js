import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  deleteItem,
  changeCkeck,
  deletItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sorteItems;

  if (sortBy === "input") sorteItems = items;

  if (sortBy === "packed")
    sorteItems = items.slice().sort((a, b) => a.packed - b.packed);

  if (sortBy === "description")
    sorteItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
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
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>Sort By Input order</option>
          <option value={"description"}>Sort By description</option>
          <option value={"packed"}>Sort By Packed</option>
        </select>

        <button onClick={deletItems}>Clear List</button>
      </div>
    </div>
  );
}
