import { business } from "../data/site.js";
import { usePageTitle } from "./usePageTitle.js";

export function Locations() {
  usePageTitle("Locations");

  return (
    <div>
      <h1 className="text-3xl font-bold">Locations</h1>
      <p className="mt-3 max-w-3xl leading-relaxed">
        Ronson Equipment Co., LLC lists two Indiana yards. Shop hours were not included in the
        supplied facts. The dealer publishes a map and hours page on its own site.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {business.locations.map((location) => {
          const phone = business.phones[location.phoneKey];
          return (
            <article key={location.id} className="border border-line bg-surface p-4">
              <h2 className="text-xl font-bold">{location.name}</h2>
              <p className="mt-2">
                {location.street}
                <br />
                {location.city}, {location.region} {location.postal}
              </p>
              <p className="mt-3">
                <a href={`tel:${phone.tel}`} className="font-semibold underline">
                  {phone.display}
                </a>
              </p>
              <p className="text-sm text-muted">Fax {location.fax}</p>
              <p className="mt-3 text-sm text-muted">{location.note}</p>
              <p className="mt-3">
                <a href={location.mapUrl} className="text-sm font-semibold underline" rel="noreferrer" target="_blank">
                  Map search
                </a>
              </p>
            </article>
          );
        })}
      </div>
      <p className="mt-6 text-sm">
        Toll-free{" "}
        <a href={`tel:${business.phones.tollFree.tel}`} className="font-semibold underline">
          {business.phones.tollFree.display}
        </a>
        .{" "}
        <a
          href="https://ronsonequipment.com/map-hours/"
          className="font-semibold underline"
          rel="noreferrer"
          target="_blank"
        >
          Map and hours on the dealer site
        </a>
      </p>
    </div>
  );
}
