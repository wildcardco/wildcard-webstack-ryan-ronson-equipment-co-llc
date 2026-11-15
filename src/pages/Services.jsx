import { PageIntro } from "../components/PageIntro.jsx";
import { usePageTitle } from "./usePageTitle.js";

const links = [
  {
    href: "https://ronsonequipment.com/service-request/",
    title: "Service request",
    text: "The dealer describes field service from southwest Michigan through northeast Illinois, with technicians working on electronic and hydraulic diagnostics, oil sampling, and air conditioning. Brands named on that page include New Holland, Kobelco, Develon, Caterpillar, Kawasaki, Hitachi, Terex, ASV, and John Deere.",
  },
  {
    href: "https://ronsonequipment.com/parts/",
    title: "Parts request",
    text: "Parts requests are handled on the dealer site. This sample does not list individual part numbers beyond the three machine stock numbers in the catalog.",
  },
  {
    href: "https://ronsonequipment.com/rental-info/",
    title: "Rentals",
    text: "The dealer publishes rental guidelines. Those notes say commercial insurance is required and describe rates on an 8-hour day, 40-hour week basis. Rental rates themselves are not copied here.",
  },
  {
    href: "https://ronsonequipment.com/attachments-implements/",
    title: "Attachments and implements",
    text: "The homepage says the dealer stocks attachments for compact and utility tractors. The attachment catalog is not imported into this sample.",
  },
];

export function Services() {
  usePageTitle("Service");

  return (
    <div>
      <PageIntro eyebrow="Shop and field" title="Service, parts, and rentals">
        <p>
          Ronson’s about page says the company covers northwest Indiana, northeast Illinois, and southwest
          Michigan with service trucks, parts, hydraulic hose work, attachments, and a rental fleet. The service
          page lists counties in Indiana, Michigan, and Illinois and marks some of them as only partly in the
          service area. This page links to those surfaces instead of copying every county.
        </p>
      </PageIntro>
      <div className="wrap grid gap-8 py-12 md:grid-cols-2 md:pt-16">
        {links.map((item, index) => (
          <article
            key={item.href}
            data-reveal
            style={{ transitionDelay: `${index * 80}ms` }}
            className={`relative bg-white p-6 pt-8 shadow-[10px_10px_0_#3d3d3d] ${index % 2 === 1 ? "md:mt-12" : "md:-mt-6"}`}
          >
            <span className="absolute -top-4 left-5 bg-brand px-2 font-display text-2xl font-extrabold text-white" aria-hidden="true">
              0{index + 1}
            </span>
            <h2 className="font-display text-2xl font-extrabold uppercase">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed">{item.text}</p>
            <a href={item.href} className="btn btn-coal mt-5" rel="noreferrer" target="_blank">
              Open on ronsonequipment.com
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
