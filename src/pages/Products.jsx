// src/pages/Products.jsx
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // Fetch data dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Gunakan useMemo untuk filter agar performa bagus
  const filteredProducts = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.category === filter);
  }, [products, filter]);

  // Gunakan useCallback agar tidak re-render terus
  const handleAddToCart = useCallback(
    (product) => {
      addToCart(product);
      alert(`${product.title} telah ditambahkan ke keranjang!`);
    },
    [addToCart]
  );

  if (loading) return <p>Loading produk...</p>;

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className="products-page">
      <h2>🛍️ Daftar Produk</h2>

      <label>
        Filter kategori:{" "}
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </label>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p className="category">{product.category}</p>
            <p className="price">Rp {(product.price * 16000).toLocaleString()}</p>
            <button onClick={() => handleAddToCart(product)}>Tambah ke Keranjang</button>
          </div>
        ))}
      </div>
    </div>
  );
}
