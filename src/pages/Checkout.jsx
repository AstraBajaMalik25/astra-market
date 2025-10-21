import React from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Keranjang</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Keranjangmu masih kosong? Ayo mulai berbelanja!</p>
      ) : (
        <div className="checkout-content">
          <ul className="checkout-list">
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={item.image} alt={item.title} />
                <div className="checkout-info">
                  <h4>{item.title}</h4>
                  <p>Rp {(item.price * 16000).toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="checkout-summary">
            <h3>Total: Rp {(total * 16000).toLocaleString()}</h3>
            <button className="pay-btn" onClick={clearCart}>
              Bayar Sekarang 💳
            </button>
          </div>
        </div>
      )}
    </div>
  );
}