import React, { useState, useEffect } from "react";
import dummyItems from "../dummyItems";
import { CartContext } from "../cartContext";
import { Link } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      // const response = await fetch('http://localhost:3001/items');
      // const data = await response.json();
      const data = dummyItems();
      setItems(data);
    };
    fetchItems();
  }, []);
  const { cartItems, setCartItems, totalPrice, setTotalPrice } =
    React.useContext(CartContext);
  return (
    <div>
      <h1>Home</h1>
      <Link to="/cart">Cart</Link>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {/* <h2>{item.name}</h2> */}
            <h2>
              <Link to={`/item/${item.id}`}>{item.name}</Link>
            </h2>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <p>Volume: {item.volume}</p>
            <ul>
              {item.images.map((image, index) => (
                <li key={index}>
                  <img src={image} alt={item.name} />
                </li>
              ))}
            </ul>
            {/* create a button to add to cart. use jotai */}
            <button
              onClick={() => {
                setCartItems([...cartItems, item]);
                setTotalPrice(totalPrice + item.price);
                console.log("cartItems:", cartItems);
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
