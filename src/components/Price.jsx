import { formatUsd } from "../data/catalog.js";

export function Price({ product, compact = false }) {
  if (product.price == null) {
    return (
      <p className={compact ? "text-sm" : ""}>
        <span className={`block font-display font-extrabold uppercase leading-tight text-ink ${compact ? "text-base" : "text-2xl"}`}>
          Not verified / Contact for quote
        </span>
        <span className="mt-1 block text-sm text-muted">Source qualifier: {product.priceQualifier}</span>
      </p>
    );
  }

  return (
    <p className={compact ? "text-sm" : ""}>
      <span className={`block font-display font-extrabold leading-none text-ink ${compact ? "text-2xl" : "text-4xl"}`}>
        {formatUsd(product.price)}
      </span>
      <span className="mt-1 block text-sm text-muted">
        Listed unit price. Source qualifier: {product.priceQualifier}.
      </span>
    </p>
  );
}
