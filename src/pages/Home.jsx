import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard.jsx";
import { products } from "../data/catalog.js";
import { business } from "../data/site.js";
import { usePageTitle } from "./usePageTitle.js";

export function Home() {
  usePageTitle("Home");
  const hero = business.homepageMedia[0];
  const yard = business.homepageMedia[1];

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
        <img src={hero.src} alt={hero.alt} className="aspect-[4/5] w-full object-cover sm:aspect-[16/10]" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            {business.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{business.name}</h1>
          <p className="mt-4 text-base leading-relaxed">
            Construction equipment dealer with yards in Lowell and Westville, Indiana. The shop
            sells and services Kobelco excavators, Develon heavy equipment, ASV compact equipment,
            and Kioti tractors, and stocks attachments for compact and utility tractors.
          </p>
          <p className="mt-3 text-sm text-muted">
            Supplied rating: {business.rating.value} from {business.rating.count}. This page does
            not reprint individual reviews.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/catalog"
              className="inline-flex min-h-11 items-center bg-brand px-4 font-semibold text-white"
            >
              Browse the sample catalog
            </Link>
            <a
              href={`tel:${business.phones.lowell.tel}`}
              className="inline-flex min-h-11 items-center border border-ink px-4 font-semibold"
            >
              Call Lowell {business.phones.lowell.display}
            </a>
          </div>
        </div>
      </section>

      <section className="border border-line bg-surface p-4 sm:p-6">
        <h2 className="text-2xl font-bold">Three machines in this sample</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          The supplied discovery did not include product records. These three identities are public
          listings on {business.website}. This is not the dealer’s full inventory, and machines
          without a listed price stay unquoted.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <img src={yard.src} alt={yard.alt} className="aspect-[4/3] w-full object-cover" />
        <div>
          <h2 className="text-2xl font-bold">Two Indiana yards</h2>
          <p className="mt-3 leading-relaxed">
            Lowell is at 18030 Wicker Ave, Lowell, IN 46356. Westville is at 10761 West Coulter
            Road, Westville, IN 46391. Published shop hours were not in the supplied facts.
          </p>
          <p className="mt-3 text-sm text-muted">
            {hero.credit}. {yard.credit}. No logo file or homepage banner was supplied with this
            build, so the header uses the business name and the hero uses these profile photos.
          </p>
          <Link to="/locations" className="mt-4 inline-flex min-h-11 items-center font-semibold underline">
            Locations and phones
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Lines the dealer represents</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {business.brands.map((brand) => (
            <li key={brand.name} className="border border-line bg-surface">
              <a
                href={brand.href}
                className="flex min-h-11 items-center px-4 font-semibold hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                {brand.name}
              </a>
            </li>
          ))}
          <li className="border border-line bg-surface">
            <Link to="/services" className="flex min-h-11 items-center px-4 font-semibold hover:underline">
              Parts, service, and rentals
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
