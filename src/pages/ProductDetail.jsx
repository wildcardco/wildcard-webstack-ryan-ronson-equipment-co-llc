import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Price } from "../components/Price.jsx";
import { getCategory, getProductBySlug, priceObservedOn, productPath } from "../data/catalog.js";
import { useCart } from "../context/CartContext.jsx";
import { usePageTitle } from "./usePageTitle.js";

export function ProductDetail() {
  const { category: categorySlug, slug } = useParams();
  const product = getProductBySlug(slug);
  const category = getCategory(categorySlug);
  const { addItem, lines } = useCart();
  const [qty, setQty] = useState(1);
  const [notice, setNotice] = useState("");
  usePageTitle(product ? product.name : "Machine");

  if (!product || !category) {
    return (
      <div>
        <h1 className="text-3xl font-bold">Machine not in this sample</h1>
        <p className="mt-3">
          <Link to="/catalog" className="font-semibold underline">
            Return to the catalog
          </Link>
        </p>
      </div>
    );
  }

  if (product.categorySlug !== category.slug) {
    return (
      <div>
        <h1 className="text-3xl font-bold">That category does not match this machine</h1>
        <p className="mt-3">
          <Link to={productPath(product)} className="font-semibold underline">
            Open {product.name}
          </Link>
        </p>
      </div>
    );
  }

  const inCart = lines.find((line) => line.id === product.id);

  function onAdd() {
    addItem(product.id, qty);
    setNotice(`${product.name} is in the cart.`);
  }

  return (
    <article className="grid gap-8 lg:grid-cols-2">
      <img src={product.image} alt={product.imageAlt} className="w-full border border-line object-cover" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          <Link to={`/catalog/${category.slug}`} className="hover:underline">
            {product.category}
          </Link>
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">{product.name}</h1>
        <p className="mt-3 text-sm text-muted">
          {product.condition} · Stock {product.stockNumber} · Listing {product.listingId}
        </p>
        <div className="mt-4">
          <Price product={product} />
          <p className="mt-2 text-sm text-muted">{product.priceNote}</p>
          <p className="mt-1 text-sm text-muted">Price field read on {priceObservedOn}.</p>
        </div>
        <dl className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Location on the listing</dt>
            <dd>{product.location}</dd>
          </div>
          <div>
            <dt className="font-semibold">Movement</dt>
            <dd>{product.movement}</dd>
          </div>
          <div>
            <dt className="font-semibold">Hours</dt>
            <dd>
              {product.engineHours == null
                ? "Not verified"
                : product.engineHours.toLocaleString("en-US")}
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Availability</dt>
            <dd>{product.availability}</dd>
          </div>
          {product.size ? (
            <div>
              <dt className="font-semibold">Size on the listing</dt>
              <dd>{product.size}</dd>
            </div>
          ) : null}
        </dl>
        <p className="mt-3 text-sm text-muted">{product.engineHoursNote}</p>
        <p className="mt-4 leading-relaxed">{product.description}</p>
        <form
          className="mt-6 flex flex-wrap items-end gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            onAdd();
          }}
        >
          <label className="text-sm font-semibold">
            Quantity
            <input
              type="number"
              min="1"
              max="9"
              value={qty}
              onChange={(event) => {
                const next = Number(event.target.value);
                if (Number.isInteger(next)) setQty(Math.max(1, Math.min(9, next)));
              }}
              className="mt-1 block w-24 border border-line bg-surface px-3 py-2"
            />
          </label>
          <button type="submit" className="inline-flex min-h-11 items-center bg-brand px-4 font-semibold text-white">
            Add to cart
          </button>
          <Link to="/cart" className="inline-flex min-h-11 items-center border border-ink px-4 font-semibold">
            View cart
          </Link>
        </form>
        {inCart ? (
          <p className="mt-3 text-sm" role="status">
            In the cart: {inCart.qty}
          </p>
        ) : null}
        {notice ? (
          <p className="mt-2 text-sm" role="status">
            {notice}
          </p>
        ) : null}
        <p className="mt-6 text-sm">
          <a href={product.sourceUrl} className="font-semibold underline" rel="noreferrer" target="_blank">
            Listing on ronsonequipment.com
          </a>
        </p>
        <p className="mt-2 break-all text-xs text-muted">Photo source: {product.imageSourceUrl}</p>
      </div>
    </article>
  );
}
