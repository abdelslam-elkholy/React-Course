export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  return <div className="add-form"> what do you need for your form</div>;
}

function packingList() {
  return (
    <div className="list">
      <h3>what do you need for your form</h3>
    </div>
  );
}

function stats() {
  return (
    <footer>
      <em>You Have x items</em>
    </footer>
  );
}
