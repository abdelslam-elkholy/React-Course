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
      <h3>what do you need for your form</h3>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You Have x items</em>
    </footer>
  );
}
