import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 20, quantity: 2, image: "item1.png" },
    { id: 2, name: "Item 2", price: 15, quantity: 1, image: "item2.png" },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} onRemove={removeItem} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




