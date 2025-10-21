import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Custom hook supaya gampang pake context
export const useCart = () => {
  return useContext(CartContext);
};