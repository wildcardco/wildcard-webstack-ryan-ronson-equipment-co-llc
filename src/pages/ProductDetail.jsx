import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Price } from "../components/Price.jsx";
import { useCart } from "../context/CartContext.jsx";
import { getCategory, getProductBySlug, priceObservedOn, productPath } from "../data/catalog.js";
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
      <div className="wrap py-16">
        <h1 className="display text-5xl">Machine not in this sample</h1>
        <p className="mt-4">
          <Link to="/catalog" className="btn btn-coal">
            Return to the catalog
          </Link>
        </p>
      </div>
    );
  }

  if (product.categorySlug !== category.slug) {
    return (
      <div className="wrap py-16">
        <h1 className="display text-4xl sm:text-5xl">That category does not match this machine</h1>
        <p className="mt-4">
          <Link to={productPath(product)} className="btn btn-coal">
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

  const facts = [
    ["Location on the listing", product.location],
    ["Movement", product.movement],
    ["Hours", product.engineHours == null ? "Not verified" : product.engineHours.toLocaleString("en-US")],
    ["Availability", product.availability],
  ];
  if (product.size) facts.push(["Size on the listing", product.size]);

  return (
    <article>
      <div className="bg-coal">
        <div className="wrap grid lg:grid-cols-12 lg:items-start">
          <div className="relative h-72 sm:h-96 lg:col-span-7 lg:h-auto lg:min-h-[40rem]">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <p className="absolute left-3 top-3 bg-brand px-2 py-1 font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white">
              {product.condition}
            </p>
          </div>
          <div
            data-reveal
            className="relative z-10 -mt-10 bg-white p-5 text-ink shadow-[14px_14px_0_#da2343] sm:p-8 lg:col-span-5 lg:-ml-16 lg:my-12 lg:mt-16"
          >
            <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-wide text-muted">
              <Link to="/catalog" className="hover:underline">
                Catalog
              </Link>
              <span aria-hidden="true"> / </span>
              <Link to={`/catalog/${category.slug}`} className="hover:underline">
                {product.category}
              </Link>
            </nav>
            <h1 className="display mt-3 text-4xl sm:text-5xl">{product.name}</h1>
            <p className="mt-3 break-all text-sm text-muted">
              {product.condition} · Stock {product.stockNumber} · Listing {product.listingId}
            </p>
            <div className="mt-5 border-t-4 border-brand pt-4">
              <Price product={product} />
              <p className="mt-2 text-sm text-muted">{product.priceNote}</p>
              <p className="mt-1 text-sm text-muted">Price field read on {priceObservedOn}.</p>
            </div>
            <dl className="mt-6 border-t border-line text-sm">
              {facts.map(([label, value]) => (
                <div key={label} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[11rem_1fr] sm:gap-3">
                  <dt className="font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted">
                    {label}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-muted">{product.engineHoursNote}</p>
            <p className="mt-4 text-sm leading-relaxed sm:text-base">{product.description}</p>
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
                  className="field mt-1 w-24"
                />
              </label>
              <button type="submit" className="btn btn-brand">
                Add to cart
              </button>
              <Link to="/cart" className="btn btn-line">
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
              <a
                href={product.sourceUrl}
                className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-brand"
                rel="noreferrer"
                target="_blank"
              >
                Listing on ronsonequipment.com
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
            <p className="mt-2 break-all text-xs text-muted">Photo source: {product.imageSourceUrl}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
