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
    <div>
      <section>
        <div className="relative h-[24rem] bg-coal sm:h-[32rem] lg:h-[44rem] [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)]">
          <img
            src={hero.src}
            alt={hero.alt}
            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
          />
        </div>
        <div className="wrap relative z-10 -mt-24 grid items-end gap-6 lg:-mt-48 lg:grid-cols-12">
          <div
            data-reveal
            className="bg-header px-5 py-6 text-white shadow-[14px_14px_0_#da2343] sm:px-8 sm:py-8 lg:col-span-6 lg:px-10 lg:py-10"
          >
            <p className="kicker flex items-center gap-3 text-white">
              <span className="inline-block h-3 w-8 bg-brand" aria-hidden="true" />
              {business.category}
            </p>
            <h1 className="display mt-4 text-[3.15rem] text-white sm:text-7xl lg:text-[5.4rem]">
              Ronson
              <span className="mt-2 block text-[1.55rem] tracking-[0.08em] sm:text-4xl">Equipment Co.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
              Construction equipment dealer with yards in Lowell and Westville, Indiana. The shop sells and
              services Kobelco excavators, Develon heavy equipment, ASV compact equipment, and Kioti tractors,
              and stocks attachments for compact and utility tractors.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/70">
              Supplied rating: {business.rating.value} from {business.rating.count}. This page does not reprint
              individual reviews.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/catalog" className="btn btn-brand">
                Browse the sample catalog
              </Link>
              <a href={`tel:${business.phones.lowell.tel}`} className="btn btn-line btn-line-light">
                Call Lowell {business.phones.lowell.display}
              </a>
            </div>
          </div>
          <figure data-reveal style={{ transitionDelay: "120ms" }} className="lg:col-span-5 lg:col-start-8">
            <img
              src={yard.src}
              alt={yard.alt}
              className="aspect-[16/10] w-full object-cover shadow-[14px_14px_0_#3d3d3d]"
            />
            <figcaption className="mt-3 bg-white px-3 py-3 text-xs leading-relaxed text-ink">
              {hero.credit}. {yard.credit}. No logo file or homepage banner was supplied with this build, so the
              header uses the business name and the hero uses these profile photos.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mt-10 bg-coal pb-16 pt-12 text-white lg:mt-16">
        <div className="wrap grid gap-6 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7">
            <p className="kicker flex items-center gap-3 text-white">
              <span className="inline-block h-3 w-8 bg-brand" aria-hidden="true" />
              Sample of three
            </p>
            <h2 className="display mt-3 text-4xl sm:text-6xl">Three machines in this sample</h2>
          </div>
          <p data-reveal className="text-sm leading-relaxed text-white/80 lg:col-span-5 lg:pt-10">
            The supplied discovery did not include product records. These three identities are public listings
            on {business.website}. This is not the dealer’s full inventory, and machines without a listed price
            stay unquoted.
          </p>
        </div>
        <div className="wrap mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:items-start">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={index === 1 ? "xl:-mt-8" : index === 2 ? "xl:mt-8" : ""}
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <ProductCard product={product} headingLevel={3} />
            </div>
          ))}
        </div>
      </section>

      <section className="wrap grid items-start gap-8 py-16 lg:grid-cols-12 lg:py-24">
        <div data-reveal className="lg:col-span-5">
          <p className="kicker flex items-center gap-3 text-ink">
            <span className="inline-block h-3 w-8 bg-brand" aria-hidden="true" />
            Indiana
          </p>
          <h2 className="display mt-3 text-5xl text-ink sm:text-6xl">Two Indiana yards</h2>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">
            Lowell is at 18030 Wicker Ave, Lowell, IN 46356. Westville is at 10761 West Coulter Road, Westville,
            IN 46391. Published shop hours were not in the supplied facts.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/locations" className="btn btn-coal">
              Locations and phones
            </Link>
            <Link to="/about" className="btn btn-line">
              About this sample
            </Link>
          </div>
        </div>
        <div className="grid gap-4 lg:col-span-7">
          {business.locations.map((location, index) => {
            const phone = business.phones[location.phoneKey];
            return (
              <article
                key={location.id}
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
                className={`bg-white p-5 shadow-[10px_10px_0_#3d3d3d] ${index === 1 ? "lg:ml-14" : ""}`}
              >
                <h3 className="font-display text-2xl font-extrabold uppercase">{location.name}</h3>
                <p className="mt-2 text-sm">
                  {location.street}
                  <br />
                  {location.city}, {location.region} {location.postal}
                </p>
                <p className="mt-3">
                  <a href={`tel:${phone.tel}`} className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-brand">
                    {phone.display}
                  </a>
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-header text-white">
        <div className="wrap py-14 lg:py-20">
          <h2 className="kicker flex items-center gap-3 text-white">
            <span className="inline-block h-3 w-8 bg-brand" aria-hidden="true" />
            Lines the dealer represents
          </h2>
          <ul className="mt-6 border-t border-white/20">
            {business.brands.map((brand) => (
              <li key={brand.name} className="border-b border-white/20">
                <a
                  href={brand.href}
                  className="flex min-h-16 items-center justify-between gap-4 py-3 font-display text-3xl font-extrabold uppercase leading-none tracking-tight hover:bg-brand sm:text-5xl"
                  rel="noreferrer"
                  target="_blank"
                >
                  {brand.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <Link to="/services" className="btn btn-brand mt-8">
            Parts, service, and rentals
          </Link>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="wrap flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="display max-w-xl text-3xl sm:text-5xl">
            This sample is three machines. The dealer inventory is larger.
          </p>
          <a
            href="https://ronsonequipment.com/inventory/"
            className="btn btn-coal shrink-0"
            rel="noreferrer"
            target="_blank"
          >
            Full inventory
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </div>
  );
}
