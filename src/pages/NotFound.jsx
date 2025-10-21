import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <h2>404 - Mau kemana njir? 🤨</h2>
      <Link to="/">Kembali ke Home</Link>
    </div>
  );
}
