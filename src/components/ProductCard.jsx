import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { productPath } from "../data/catalog.js";
import { Price } from "./Price.jsx";

export function ProductCard({ product, headingLevel = 2 }) {
  const { addItem } = useCart();
  const [note, setNote] = useState("");
  const Title = headingLevel === 3 ? "h3" : "h2";

  return (
    <article className="flex h-full flex-col bg-white text-ink shadow-[8px_8px_0_#3d3d3d]">
      <Link to={productPath(product)} className="relative block bg-coal">
        <span className="absolute left-0 top-0 z-10 bg-brand px-2 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">
          {product.condition}
        </span>
        <span className="block aspect-[4/3] overflow-hidden">
          <img src={product.image} alt={product.imageAlt} className="h-full w-full object-cover" />
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
          <Link to={`/catalog/${product.categorySlug}`} className="hover:underline">
            {product.category}
          </Link>
        </p>
        <Title className="font-display text-xl font-extrabold uppercase leading-tight tracking-tight">
          <Link to={productPath(product)} className="hover:underline">
            {product.name}
          </Link>
        </Title>
        <p className="break-all text-sm text-muted">Stock {product.stockNumber}</p>
        <Price product={product} compact />
        <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap">
          <Link to={productPath(product)} className="btn btn-line">
            View machine
          </Link>
          <button
            type="button"
            className="btn btn-brand"
            onClick={() => {
              addItem(product.id, 1);
              setNote(`${product.name} added to cart.`);
            }}
          >
            Add to cart
          </button>
        </div>
        {note ? (
          <p className="text-sm" role="status">
            {note}
          </p>
        ) : null}
      </div>
    </article>
  );
}
