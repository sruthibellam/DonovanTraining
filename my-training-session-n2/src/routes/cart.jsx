import React from "react";
import { CartContext } from "../cartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, setCartItems, totalPrice, setTotalPrice } =
    React.useContext(CartContext);
  const cartItemsWithCount = cartItems.reduce((acc, item) => {
    const found = acc.find((_item) => _item.id === item.id);
    if (found) {
      found.count++;
    } else {
      acc.push({
        ...item,
        count: 1,
      });
    }
    return acc;
  }, []);

  cartItemsWithCount.sort((a, b) => a.id - b.id);

  return (
    <div>
      <h1>Cart</h1>
      <Link to="/">Home</Link>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      <ul>
        {cartItemsWithCount.map((item) => (
          <li key={item.id}>
            <h2>
              {item.name} x {item.count}
            </h2>
            {/* add two buttons to increment and decrement count */}
            <button
              onClick={() => {
                const myitem = cartItems.find(
                  (cartItem) => cartItem.id === item.id,
                );
                setCartItems([...cartItems, myitem]);
                setTotalPrice(totalPrice + item.price);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                const myitem = cartItems.find(
                  (cartItem) => cartItem.id === item.id,
                );
                var flag = false;
                const newCartItems = cartItems.map((cartItem) => {
                  if (cartItem.id === item.id) {
                    if (!flag) {
                      flag = true;
                      return;
                    }
                  }
                  return cartItem;
                });
                const newCartItems2 = newCartItems.filter(
                  (cartItem) => cartItem !== undefined,
                );
                setCartItems(newCartItems2);
                setTotalPrice(totalPrice - item.price);
              }}
            >
              -
            </button>
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
          </li>
        ))}
      </ul>
      <h2>Total Price: {totalPrice}</h2>
      <button
        onClick={() => {
          setCartItems([]);
          setTotalPrice(0);
        }}
      >
        Clear Cart
      </button>
      <button
        onClick={() => {
          setCartItems([]);
          setTotalPrice(0);
          alert(
            "Thank you, for choosing us. Your Cart will arrive in 2 days",
            window.location.replace("/"),
          );
        }}
      >
        Checkout
      </button>
    </div>
  );
}
