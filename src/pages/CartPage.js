
import React from "react";
import Footer from '../components/Footer';
import "./CartPage.css";

const CartPage = ({ cartItems = [], onRemove }) => {
  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-header">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => onRemove(item.id)} className="cart-remove-button">
                Remove
              </button>
            </div>
          ))}
          <h3 className="cart-total">Total: ${getTotal().toFixed(2)}</h3>
        </div>
      ) : (
        <p className="cart-empty-message">Your cart is empty!</p>
      )}
      <Footer/>
    </div>
  );
};

export default CartPage;
