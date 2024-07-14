import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import dummyItems from "../dummyItems";
import { CartContext } from "../cartContext";

export default function Item() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { cartItems, setCartItems, totalPrice, setTotalPrice } =
    React.useContext(CartContext);
  useEffect(() => {
    const fetchItem = async () => {
      // const response = await fetch(`http://localhost:3001/items/${id}`);
      // const data = await response.json();
      const data = dummyItems().find((item) => item.id === id);
      setItem(data);
    };
    fetchItem();
  }, [id]);
  if (!item) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
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
      {/* create a button to add to cart */}
      <button
        onClick={() => {
          setCartItems([...cartItems, item]);
          setTotalPrice(totalPrice + item.price);
          console.log("cartItems:", cartItems);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
