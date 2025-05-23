import React from "react";
import { useCart } from "../../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  if (cartItems.length === 0)
    return <p className="cart-empty">Your cart is empty</p>;

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cartItems.map(({ id, name, price, quantity, image }) => (
        <div key={id} className="cart-item">
          <img src={image} alt={name} />
          <div className="item-details">
            <h3>{name}</h3>
            <p>₦{price.toLocaleString()}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="cart-actions">
            <button onClick={() => decreaseQuantity(id)}>-</button>
            <button onClick={() => increaseQuantity(id)}>+</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <p>Total Items: {getTotalItems()}</p>
        <p>Total Price: ₦{getTotalPrice().toLocaleString()}</p>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
