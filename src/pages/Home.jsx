import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>Welcome to Astra Market!</h2>
      <p>Temukan barang terbaik dengan harga terjangkau! 😋</p>
      <button onClick={() => navigate("/products")}>Start Shopping Now 🚀</button>
    </div>
  );
}
