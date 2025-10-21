// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  console.log(">>> DEBUG useAuth:", useAuth); // cek apakah hook-nya undefined

  let user = null;
  try {
    const auth = useAuth?.(); // kalau useAuth undefined, dia gak akan crash
    console.log(">>> DEBUG auth:", auth);
    if (auth && auth.user) user = auth.user;
  } catch (e) {
    console.error(">>> ERROR saat pakai useAuth:", e);
  }

  if (!user) {
    console.warn(">>> User belum login, redirect ke /login");
    return <Navigate to="/login" replace />;
  }

  console.log(">>> User ditemukan:", user);
  return children;
}
