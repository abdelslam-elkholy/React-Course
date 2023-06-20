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
  return <h1>Far Away</h1>;
}

function Form() {
  return <div className="add-form"> what do you need for your form</div>;
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((ele) => (
          <Item item={ele} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
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
