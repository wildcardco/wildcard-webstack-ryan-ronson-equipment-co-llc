import { Link } from "react-router-dom";
import { QuotedSum } from "../components/QuotedSum.jsx";
import { formatUsd, productPath, quotedLineAmount } from "../data/catalog.js";
import { useCart } from "../context/CartContext.jsx";
import { usePageTitle } from "./usePageTitle.js";

export function Cart() {
  const { lines, count, setQty, removeItem } = useCart();
  usePageTitle("Cart");

  return (
    <div>
      <h1 className="text-3xl font-bold">Cart</h1>
      <p className="mt-2 text-sm text-muted">
        {count} {count === 1 ? "item" : "items"} saved in this browser. Reloading keeps the cart.
        Unknown prices stay unquoted.
      </p>
      {lines.length === 0 ? (
        <p className="mt-8 border border-line bg-surface p-4">
          The cart is empty.{" "}
          <Link to="/catalog" className="font-semibold underline">
            Browse the sample catalog
          </Link>
          .
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          <ul className="space-y-4">
            {lines.map((line) => {
              const amount = quotedLineAmount(line.product, line.qty);
              return (
                <li key={line.id} className="grid gap-4 border border-line bg-surface p-4 sm:grid-cols-[8rem_minmax(0,1fr)]">
                  <img src={line.product.image} alt="" className="aspect-[4/3] w-full object-cover" />
                  <div>
                    <h2 className="text-lg font-semibold">
                      <Link to={productPath(line.product)} className="hover:underline">
                        {line.product.name}
                      </Link>
                    </h2>
                    <p className="mt-1 text-sm text-muted">Stock {line.product.stockNumber}</p>
                    <p className="mt-2 text-sm">
                      {line.product.price == null
                        ? "Not verified / Contact for quote"
                        : `${formatUsd(line.product.price)} listed unit price`}
                    </p>
                    {amount != null ? (
                      <p className="text-sm text-muted">
                        Listed price × quantity: {formatUsd(amount)}
                      </p>
                    ) : null}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <label className="text-sm font-semibold">
                        Quantity
                        <input
                          type="number"
                          min="1"
                          max="9"
                          value={line.qty}
                          aria-label={`Quantity for ${line.product.name}`}
                          onChange={(event) => setQty(line.id, Number(event.target.value))}
                          className="ml-2 w-20 border border-line px-2 py-2"
                        />
                      </label>
                      <button
                        type="button"
                        className="inline-flex min-h-11 items-center border border-ink px-3 text-sm font-semibold disabled:opacity-40"
                        onClick={() => setQty(line.id, line.qty - 1)}
                        disabled={line.qty <= 1}
                      >
                        Decrease
                      </button>
                      <button
                        type="button"
                        className="inline-flex min-h-11 items-center border border-ink px-3 text-sm font-semibold disabled:opacity-40"
                        onClick={() => setQty(line.id, line.qty + 1)}
                        disabled={line.qty >= 9}
                      >
                        Increase
                      </button>
                      <button
                        type="button"
                        className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-brand"
                        onClick={() => removeItem(line.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <QuotedSum lines={lines} />
          <Link
            to="/checkout"
            className="inline-flex min-h-11 items-center bg-brand px-4 font-semibold text-white"
          >
            Continue to test checkout
          </Link>
        </div>
      )}
    </div>
  );
}
