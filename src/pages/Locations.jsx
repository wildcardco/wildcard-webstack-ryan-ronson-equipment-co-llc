import { PageIntro } from "../components/PageIntro.jsx";
import { business } from "../data/site.js";
import { usePageTitle } from "./usePageTitle.js";

export function Locations() {
  usePageTitle("Locations");
  const photo = business.homepageMedia[0];

  return (
    <div>
      <PageIntro eyebrow="Two yards" title="Locations" image={photo}>
        <p>
          Ronson Equipment Co., LLC lists two Indiana yards. Shop hours were not included in the supplied facts.
          The dealer publishes a map and hours page on its own site.
        </p>
      </PageIntro>
      <div className="wrap grid gap-5 py-12 lg:grid-cols-2">
        {business.locations.map((location, index) => {
          const phone = business.phones[location.phoneKey];
          return (
            <article
              key={location.id}
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
              className={`bg-white p-6 shadow-[10px_10px_0_#3d3d3d] ${index === 0 ? "lg:-mt-16" : "lg:mt-8"}`}
            >
              <h2 className="display text-4xl">{location.name}</h2>
              <p className="mt-3">
                {location.street}
                <br />
                {location.city}, {location.region} {location.postal}
              </p>
              <p className="mt-3">
                <a href={`tel:${phone.tel}`} className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-brand">
                  {phone.display}
                </a>
              </p>
              <p className="text-sm text-muted">Fax {location.fax}</p>
              <p className="mt-3 text-sm text-muted">{location.note}</p>
              <p className="mt-4">
                <a href={location.mapUrl} className="btn btn-coal" rel="noreferrer" target="_blank">
                  Map search
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </article>
          );
        })}
      </div>
      <div className="wrap pb-14 text-sm">
        <p>
          Toll-free{" "}
          <a href={`tel:${business.phones.tollFree.tel}`} className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-brand">
            {business.phones.tollFree.display}
          </a>
          .{" "}
          <a
            href="https://ronsonequipment.com/map-hours/"
            className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-brand"
            rel="noreferrer"
            target="_blank"
          >
            Map and hours on the dealer site
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
        <p className="mt-3 text-xs text-muted">{photo.credit}.</p>
      </div>
    </div>
  );
}
