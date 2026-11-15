import { Link } from "react-router-dom";
import { productPath } from "../data/catalog.js";
import { useCart } from "../context/CartContext.jsx";
import { Price } from "./Price.jsx";

export function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="flex h-full flex-col border border-line bg-surface">
      <Link to={productPath(product)} className="block bg-paper">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="aspect-[4/3] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {product.condition} · {product.category}
        </p>
        <h2 className="text-lg font-semibold leading-snug">
          <Link to={productPath(product)} className="hover:text-brand">
            {product.name}
          </Link>
        </h2>
        <p className="text-sm text-muted">Stock {product.stockNumber}</p>
        <Price product={product} compact />
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Link
            to={productPath(product)}
            className="inline-flex min-h-11 items-center border border-ink px-3 text-sm font-semibold"
          >
            View machine
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 items-center bg-brand px-3 text-sm font-semibold text-white"
            onClick={() => addItem(product.id, 1)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
