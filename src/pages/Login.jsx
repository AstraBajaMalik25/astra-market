import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("1234");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    if (!user) navigate("/products");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Silahkan Login 🙏</h2>
        <p className="login-subtitle">
          Belum punya Akun? Silakan masuk menggunakan akun demo (user / 1234)
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Masuk</button>
        </form>

        <p className="login-note">
          Gunakan nama pengguna dan kata sandi di atas untuk masuk ke sistem.
        </p>
      </div>
    </div>
  );
}