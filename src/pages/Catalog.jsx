import { Link, useParams } from "react-router-dom";
import { PageIntro } from "../components/PageIntro.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import { categories, getCategory, getProductsByCategory } from "../data/catalog.js";
import { usePageTitle } from "./usePageTitle.js";

function chipClass(active) {
  return [
    "inline-flex min-h-11 items-center border px-3 font-display text-[0.75rem] font-bold uppercase tracking-[0.12em]",
    active ? "border-brand bg-brand text-white" : "border-white/40 text-white hover:bg-white/10",
  ].join(" ");
}

export function Catalog() {
  const { category: categorySlug } = useParams();
  const category = categorySlug ? getCategory(categorySlug) : null;
  const unknown = Boolean(categorySlug) && !category;
  const visible = unknown ? [] : getProductsByCategory(category?.slug);
  usePageTitle(category ? category.name : "Catalog");

  return (
    <div>
      <PageIntro eyebrow="Sample catalog" title={category ? category.name : unknown ? "Not in this sample" : "Equipment sample"}>
        <p>
          {category
            ? category.summary
            : "Three machines only. Category labels follow the listing records. The dealer’s full inventory stays on the source site."}
        </p>
        <nav className="flex flex-wrap gap-2" aria-label="Categories">
          <Link to="/catalog" className={chipClass(!categorySlug)} aria-current={!categorySlug ? "page" : undefined}>
            All
          </Link>
          {categories.map((item) => (
            <Link
              key={item.slug}
              to={`/catalog/${item.slug}`}
              className={chipClass(item.slug === categorySlug)}
              aria-current={item.slug === categorySlug ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </PageIntro>
      <div className="wrap py-12">
        {unknown ? (
          <p className="bg-white p-5 shadow-[8px_8px_0_#3d3d3d]">
            This sample does not include that category.{" "}
            <Link to="/catalog" className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-brand">
              Back to the catalog
            </Link>
            .
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:items-start">
            {visible.map((product, index) => (
              <div
                key={product.id}
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
                className={index === 1 ? "xl:-mt-6" : ""}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
        <p className="mt-10 text-sm">
          <a
            href="https://ronsonequipment.com/inventory/"
            className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-brand"
            rel="noreferrer"
            target="_blank"
          >
            Open the full inventory on ronsonequipment.com
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </div>
  );
}
