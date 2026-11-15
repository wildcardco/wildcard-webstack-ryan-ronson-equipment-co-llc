import { Link } from "react-router-dom";
import { PageIntro } from "../components/PageIntro.jsx";
import { QuotedSum } from "../components/QuotedSum.jsx";
import { useCart } from "../context/CartContext.jsx";
import { formatUsd, productPath, quotedLineAmount } from "../data/catalog.js";
import { usePageTitle } from "./usePageTitle.js";

export function Cart() {
  const { lines, count, setQty, removeItem } = useCart();
  usePageTitle("Cart");

  return (
    <div>
      <PageIntro eyebrow="Saved in this browser" title="Cart">
        <p>
          {count} {count === 1 ? "item" : "items"} saved in this browser. Reloading keeps the cart. Unknown
          prices stay unquoted.
        </p>
      </PageIntro>
      <div className="wrap py-10">
        {lines.length === 0 ? (
          <p className="bg-white p-5 shadow-[8px_8px_0_#3d3d3d]">
            The cart is empty.{" "}
            <Link to="/catalog" className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-brand">
              Browse the sample catalog
            </Link>
            .
          </p>
        ) : (
          <div className="space-y-4">
            <ul className="space-y-4">
              {lines.map((line) => {
                const amount = quotedLineAmount(line.product, line.qty);
                return (
                  <li key={line.id} className="grid gap-4 bg-white p-3 shadow-[8px_8px_0_#3d3d3d] sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:p-4">
                    <Link to={productPath(line.product)} className="block bg-coal">
                      <img src={line.product.image} alt="" className="aspect-[4/3] w-full object-cover" />
                    </Link>
                    <div className="min-w-0">
                      <h2 className="font-display text-xl font-extrabold uppercase leading-tight">
                        <Link to={productPath(line.product)} className="hover:underline">
                          {line.product.name}
                        </Link>
                      </h2>
                      <p className="mt-1 break-all text-sm text-muted">Stock {line.product.stockNumber}</p>
                      <p className="mt-2 text-sm">
                        {line.product.price == null
                          ? "Not verified / Contact for quote"
                          : `${formatUsd(line.product.price)} listed unit price`}
                      </p>
                      {amount != null ? (
                        <p className="text-sm text-muted">Listed price × quantity: {formatUsd(amount)}</p>
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
                            className="field ml-2 mt-1 inline-block w-20"
                          />
                        </label>
                        <button
                          type="button"
                          className="btn btn-line disabled:opacity-40"
                          onClick={() => setQty(line.id, line.qty - 1)}
                          disabled={line.qty <= 1}
                        >
                          Decrease
                        </button>
                        <button
                          type="button"
                          className="btn btn-line disabled:opacity-40"
                          onClick={() => setQty(line.id, line.qty + 1)}
                          disabled={line.qty >= 9}
                        >
                          Increase
                        </button>
                        <button type="button" className="btn btn-coal" onClick={() => removeItem(line.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <QuotedSum lines={lines} />
            <Link to="/checkout" className="btn btn-brand">
              Continue to test checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
