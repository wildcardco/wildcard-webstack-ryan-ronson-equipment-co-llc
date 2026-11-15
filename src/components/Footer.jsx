import { Link } from "react-router-dom";
import { business, footerGroups } from "../data/site.js";

function FooterLink({ link }) {
  if (link.href) {
    return (
      <a href={link.href} className="hover:underline" rel="noreferrer" target="_blank">
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.to} className="hover:underline">
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-header text-white">
      <div className="mx-auto grid max-w-page gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {footerGroups.map((group) => (
          <section key={group.title}>
            <h2 className="text-sm font-bold uppercase tracking-wide">{group.title}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wide">Locations</h2>
          <ul className="mt-3 space-y-3 text-sm">
            {business.locations.map((location) => {
              const phone = business.phones[location.phoneKey];
              return (
                <li key={location.id}>
                  <Link to="/locations" className="font-semibold hover:underline">
                    {location.name}
                  </Link>
                  <p>
                    {location.street}, {location.city}, {location.region} {location.postal}
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
        <div className="mx-auto flex max-w-page flex-col gap-3 px-4 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            {business.name}. Sample catalog only. No published email address was supplied.
          </p>
          <ul className="flex flex-wrap gap-3">
            {business.social.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:underline" rel="noreferrer" target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
