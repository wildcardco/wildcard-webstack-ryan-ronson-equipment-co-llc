import { formatUsd, quotedCartSum } from "../data/catalog.js";

export function QuotedSum({ lines }) {
  if (lines.length === 0) return null;
  const { sum, quotedLines, unquotedLines } = quotedCartSum(lines);

  if (quotedLines === 0) {
    return (
      <p className="border-t-4 border-brand bg-white p-4 text-sm">
        No listed prices are in this cart. Totals, tax, freight, and discounts are not calculated.
      </p>
    );
  }

  return (
    <div className="border-t-4 border-brand bg-white p-4 text-sm">
      <p className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
        Sum of listed unit prices: {formatUsd(sum)}
      </p>
      <p className="mt-2 text-muted">
        Arithmetic of quoted lines only ({quotedLines}). This is not tax, freight, a discount, or a payable
        order total.
        {unquotedLines > 0
          ? ` ${unquotedLines} line${unquotedLines === 1 ? "" : "s"} with an unquoted price ${
              unquotedLines === 1 ? "is" : "are"
            } left out of the sum.`
          : ""}
      </p>
    </div>
  );
}
