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
      <h1 className="text-3xl font-bold">Service, parts, and rentals</h1>
      <p className="mt-3 max-w-3xl leading-relaxed">
        Ronson’s about page says the company covers northwest Indiana, northeast Illinois, and
        southwest Michigan with service trucks, parts, hydraulic hose work, attachments, and a
        rental fleet. The service page lists counties in Indiana, Michigan, and Illinois and marks
        some of them as only partly in the service area. This page links to those surfaces instead
        of copying every county.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {links.map((item) => (
          <article key={item.href} className="border border-line bg-surface p-4">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
            <a href={item.href} className="mt-3 inline-flex min-h-11 items-center font-semibold underline" rel="noreferrer" target="_blank">
              Open on ronsonequipment.com
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
