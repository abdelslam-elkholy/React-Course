import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menue />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Welcome to our React Header</h1>
    </header>
  );
}
function Menue() {
  const pizzas = pizzaData;
  const piizzasLen = pizzas.length;
  return (
    <main className="menue">
      <h2>Our Menue</h2>

      {piizzasLen > 0 && (
        <ul className="pizzas">
          {pizzaData.map((ele) => (
            <Pizza pizzaobj={ele} key={ele.name} />
          ))}
        </ul>
      )}
    </main>
  );
}
function Footer() {
  const openHours = 8;
  const closeHours = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHours && hour < closeHours;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are currently open until {closeHours}:00</p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>
          we are close come again between {openHours}:00 and {closeHours}:00
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "we are currently open");
}
function Pizza({ pizzaobj }) {
  return (
    <li className="pizza">
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h2>{pizzaobj.name}</h2>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.price}</span>
      </div>
    </li>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
