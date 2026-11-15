import { Link, useNavigate } from "react-router-dom";
import { QuotedSum } from "../components/QuotedSum.jsx";
import { formatUsd, productPath, quotedLineAmount } from "../data/catalog.js";
import { useCart } from "../context/CartContext.jsx";
import { usePageTitle } from "./usePageTitle.js";

const REVIEW_KEY = "ronson-test-review-v1";

export function Checkout() {
  const { lines, clearCart } = useCart();
  const navigate = useNavigate();
  usePageTitle("Test checkout");

  function confirmReview() {
    if (lines.length === 0) return;
    const review = {
      id: `TEST-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      transmitted: false,
      payment: false,
      orderPlaced: false,
      items: lines.map((line) => ({
        id: line.product.id,
        name: line.product.name,
        qty: line.qty,
        price: line.product.price,
        stockNumber: line.product.stockNumber,
      })),
    };
    sessionStorage.setItem(REVIEW_KEY, JSON.stringify(review));
    clearCart();
    navigate("/checkout/confirmation");
  }

  return (
    <div>
      <p className="inline-block bg-brand px-3 py-1 text-sm font-bold tracking-wide text-white">
        TEST / NO PAYMENT / NO REAL ORDER
      </p>
      <h1 className="mt-4 text-3xl font-bold">Test checkout</h1>
      <p className="mt-3 max-w-3xl leading-relaxed">
        This page reviews the sample cart in your browser. It does not take payment, collect
        customer details, call an order API, or notify the dealer. Nothing you see here is an
        order.
      </p>
      {lines.length === 0 ? (
        <p className="mt-8 border border-line bg-surface p-4">
          There is nothing to review.{" "}
          <Link to="/catalog" className="font-semibold underline">
            Add a machine from the catalog
          </Link>
          .
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          <ul className="divide-y divide-line border border-line bg-surface">
            {lines.map((line) => {
              const amount = quotedLineAmount(line.product, line.qty);
              return (
                <li key={line.id} className="flex flex-wrap items-baseline justify-between gap-2 p-4">
                  <span>
                    <Link to={productPath(line.product)} className="font-semibold hover:underline">
                      {line.product.name}
                    </Link>
                    <span className="text-sm text-muted"> × {line.qty}</span>
                  </span>
                  <span className="text-sm">
                    {amount == null ? "Not verified / Contact for quote" : formatUsd(amount)}
                  </span>
                </li>
              );
            })}
          </ul>
          <QuotedSum lines={lines} />
          <button
            type="button"
            className="inline-flex min-h-11 items-center bg-ink px-4 font-semibold text-white"
            onClick={confirmReview}
          >
            Save a local test review
          </button>
          <p className="text-sm text-muted">
            The button writes a confirmation in this browser and clears the local cart. It does not
            submit a form.
          </p>
        </div>
      )}
    </div>
  );
}

export function CheckoutConfirmation() {
  usePageTitle("Test review");
  let review = null;
  try {
    review = JSON.parse(sessionStorage.getItem(REVIEW_KEY) || "null");
  } catch {
    review = null;
  }

  if (!review || !Array.isArray(review.items)) {
    return (
      <div>
        <h1 className="text-3xl font-bold">No test review in this browser</h1>
        <p className="mt-3">
          <Link to="/cart" className="font-semibold underline">
            Return to the cart
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="inline-block bg-brand px-3 py-1 text-sm font-bold tracking-wide text-white">
        TEST / NO PAYMENT / NO REAL ORDER
      </p>
      <h1 className="mt-4 text-3xl font-bold">Local test review saved</h1>
      <p className="mt-3 max-w-3xl leading-relaxed">
        Reference {review.id}. Created {review.createdAt}. Payment was not taken. No order was
        placed. No customer data was collected or sent.
      </p>
      <ul className="mt-6 divide-y divide-line border border-line bg-surface">
        {review.items.map((item) => (
          <li key={item.id} className="flex flex-wrap justify-between gap-2 p-4 text-sm">
            <span>
              {item.name} × {item.qty}
              <span className="block text-muted">Stock {item.stockNumber}</span>
            </span>
            <span>{item.price == null ? "Not verified / Contact for quote" : formatUsd(item.price * item.qty)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <Link to="/catalog" className="font-semibold underline">
          Back to the sample catalog
        </Link>
      </p>
    </div>
  );
}
