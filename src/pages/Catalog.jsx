import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard.jsx";
import { categories, getCategory, getProductsByCategory } from "../data/catalog.js";
import { usePageTitle } from "./usePageTitle.js";

export function Catalog() {
  const { category: categorySlug } = useParams();
  const category = categorySlug ? getCategory(categorySlug) : null;
  const unknown = Boolean(categorySlug) && !category;
  const visible = unknown ? [] : getProductsByCategory(category?.slug);
  usePageTitle(category ? category.name : "Catalog");

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">Sample catalog</p>
      <h1 className="mt-2 text-3xl font-bold">{category ? category.name : "Equipment sample"}</h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
        Three machines only. Category labels follow the listing records. The dealer’s full
        inventory stays on the source site.
      </p>
      <div className="mt-5 flex flex-wrap gap-2" aria-label="Categories">
        <Link
          to="/catalog"
          className={`inline-flex min-h-11 items-center border px-3 text-sm font-semibold ${
            !categorySlug ? "border-ink bg-ink text-white" : "border-line bg-surface"
          }`}
        >
          All
        </Link>
        {categories.map((item) => (
          <Link
            key={item.slug}
            to={`/catalog/${item.slug}`}
            className={`inline-flex min-h-11 items-center border px-3 text-sm font-semibold ${
              item.slug === categorySlug ? "border-ink bg-ink text-white" : "border-line bg-surface"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {unknown ? (
        <p className="mt-8 border border-line bg-surface p-4">
          This sample does not include that category.{" "}
          <Link to="/catalog" className="font-semibold underline">
            Back to the catalog
          </Link>
          .
        </p>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <p className="mt-8 text-sm">
        <a
          href="https://ronsonequipment.com/inventory/"
          className="font-semibold underline"
          rel="noreferrer"
          target="_blank"
        >
          Open the full inventory on ronsonequipment.com
        </a>
      </p>
    </div>
  );
}
