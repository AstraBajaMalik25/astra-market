// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./components/PrivateRoute";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import "./index.css"; // atau ./App.css tergantung nama file kamu

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <main className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/products/*"
                element={
                  <PrivateRoute>
                    <Products />
                  </PrivateRoute>
                }
              />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
