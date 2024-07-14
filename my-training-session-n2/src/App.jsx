import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./routes/cart";
import Home from "./routes/home";
import Item from "./routes/item";
import { CartContext } from "./cartContext";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/item/:id",
      element: <Item />,
    },
  ]);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, totalPrice, setTotalPrice }}
    >
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}
