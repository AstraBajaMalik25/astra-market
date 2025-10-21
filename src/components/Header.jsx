// src/components/Header.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../hooks/useCart"; // pastikan ini dari /hooks

export default function Header() {
  const navigate = useNavigate();

  // amanin biar gak error walau context belum siap
  let user = null;
  let logout = () => {};
  let cartItems = [];

  try {
    const auth = useAuth?.();
    if (auth) {
      user = auth.user;
      logout = auth.logout;
    }
  } catch (e) {
    console.warn("Auth context belum siap:", e);
  }

  try {
    const cart = useCart?.();
    if (cart) {
      cartItems = cart.cartItems;
    }
  } catch (e) {
    console.warn("Cart context belum siap:", e);
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <h1 className="logo">Astra Market</h1>

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/checkout">Checkout ({cartItems.length})</NavLink>
          
        {!user ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <button onClick={handleLogout}>Logout ({user.name})</button>
        )}
              <a
  href="https://github.com/AstraBajaMalik25/astra-market"
  target="_blank"
  rel="noopener noreferrer"
  className="header-btn"
>
  GitHub 💻
</a>
        
      </nav>
      

    </header>
  );
}
