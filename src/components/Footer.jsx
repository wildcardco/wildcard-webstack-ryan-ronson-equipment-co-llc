import { Link } from "react-router-dom";
import { business, footerGroups } from "../data/site.js";

function FooterLink({ link }) {
  if (link.href) {
    return (
      <a href={link.href} className="inline-flex min-h-9 items-center hover:underline" rel="noreferrer" target="_blank">
        {link.label}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link to={link.to} className="inline-flex min-h-9 items-center hover:underline">
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-black text-white">
      <div className="h-1.5 bg-brand" />
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {footerGroups.map((group) => (
          <section key={group.title} className="border-t-2 border-brand pt-4">
            <h2 className="kicker text-white">{group.title}</h2>
            <ul className="mt-3 space-y-1 text-sm text-white/85">
              {group.links.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className="border-t-2 border-brand pt-4">
          <h2 className="kicker text-white">Locations</h2>
          <ul className="mt-3 space-y-4 text-sm text-white/85">
            {business.locations.map((location) => {
              const phone = business.phones[location.phoneKey];
              return (
                <li key={location.id}>
                  <Link to="/locations" className="font-display text-sm font-bold uppercase tracking-wide hover:underline">
                    {location.name}
                  </Link>
                  <p className="mt-1">
                    {location.street}
                    <br />
                    {location.city}, {location.region} {location.postal}
                  </p>
                  <p>
                    <a href={`tel:${phone.tel}`} className="hover:underline">
                      {phone.display}
                    </a>
                  </p>
                </li>
              );
            })}
            <li>
              Toll-free{" "}
              <a href={`tel:${business.phones.tollFree.tel}`} className="hover:underline">
                {business.phones.tollFree.display}
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="border-t border-white/15">
        <div className="wrap flex flex-col gap-4 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-white/75">
            {business.name}. Sample catalog only. No published email address was supplied.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {business.social.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="inline-flex min-h-11 items-center font-semibold hover:underline" rel="noreferrer" target="_blank">
                  {item.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
