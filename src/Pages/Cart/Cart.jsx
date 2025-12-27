import React from "react";
import "./Cart.css";
import { FaTrash, FaPlus, FaMinus, FaLock } from "react-icons/fa";

const Cart = ({ cartItems = [], setCartItems, onClose }) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 10 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  const increaseQty = id => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = id => {
    setCartItems(items =>
      items
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeItem = id => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="item-info">
                  <h4>{item.name}</h4>

                  <div className="qty-controls">
                    <FaMinus onClick={() => decreaseQty(item.id)} />
                    <span>{item.quantity}</span>
                    <FaPlus onClick={() => increaseQty(item.id)} />
                  </div>
                </div>

                <div className="item-right">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <FaTrash
                    className="delete-icon"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-summary">
          <div><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
          <div><span>Tax</span><span>${tax.toFixed(2)}</span></div>

          <h3>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </h3>

          <div className="promo">
            <input placeholder="Gift or promo code" />
            <button>Apply</button>
          </div>

          <button className="checkout-btn">Checkout</button>

          <p className="secure">
            <FaLock /> Secure Checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
