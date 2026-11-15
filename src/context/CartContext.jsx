import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProduct } from "../data/catalog.js";

const STORAGE_KEY = "ronson-sample-cart-v1";
const CartContext = createContext(null);

function readCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const lines = [];
    for (const entry of parsed) {
      if (!entry || typeof entry.id !== "string") continue;
      if (!getProduct(entry.id)) continue;
      const qty = Number(entry.qty);
      if (!Number.isInteger(qty) || qty < 1) continue;
      lines.push({ id: entry.id, qty: Math.min(qty, 9) });
    }
    return lines;
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(readCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* persistence is best-effort in this demo */
    }
  }, [lines]);

  const api = useMemo(() => {
    const detailed = lines
      .map((line) => {
        const product = getProduct(line.id);
        return product ? { ...line, product } : null;
      })
      .filter(Boolean);
    const count = detailed.reduce((sum, line) => sum + line.qty, 0);

    function addItem(id, qty = 1) {
      if (!getProduct(id)) return;
      const addQty = Math.max(1, Math.min(9, Number(qty) || 1));
      setLines((current) => {
        const existing = current.find((line) => line.id === id);
        if (!existing) return [...current, { id, qty: addQty }];
        return current.map((line) =>
          line.id === id ? { ...line, qty: Math.min(9, line.qty + addQty) } : line,
        );
      });
    }

    function setQty(id, qty) {
      const next = Number(qty);
      if (!Number.isInteger(next)) return;
      setLines((current) =>
        current.map((line) =>
          line.id === id ? { ...line, qty: Math.max(1, Math.min(9, next)) } : line,
        ),
      );
    }

    function removeItem(id) {
      setLines((current) => current.filter((line) => line.id !== id));
    }

    function clearCart() {
      setLines([]);
    }

    return { lines: detailed, count, addItem, setQty, removeItem, clearCart };
  }, [lines]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}
