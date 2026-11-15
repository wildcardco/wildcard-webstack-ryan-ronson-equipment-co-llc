import { formatUsd } from "../data/catalog.js";

export function Price({ product, compact = false }) {
  if (product.price == null) {
    return (
      <p className={compact ? "text-sm" : ""}>
        <span className="block font-semibold text-ink">Not verified / Contact for quote</span>
        <span className="mt-1 block text-sm text-muted">
          Source qualifier: {product.priceQualifier}
        </span>
      </p>
    );
  }

  return (
    <p className={compact ? "text-sm" : ""}>
      <span className="block text-xl font-semibold text-ink">{formatUsd(product.price)}</span>
      <span className="mt-1 block text-sm text-muted">
        Listed unit price. Source qualifier: {product.priceQualifier}.
      </span>
    </p>
  );
}
