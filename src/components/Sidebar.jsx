import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        ✖
      </button>
      <nav>
        <NavLink to="/">🏠 Home</NavLink>
        <NavLink to="/about">ℹ️ About</NavLink>
        <NavLink to="/products">🛍️ Products</NavLink>
        <NavLink to="/checkout">🧾 Checkout</NavLink>
      </nav>
    </aside>
  );
}
