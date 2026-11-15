import { PageIntro } from "../components/PageIntro.jsx";
import { business } from "../data/site.js";
import { usePageTitle } from "./usePageTitle.js";

export function About() {
  usePageTitle("About");
  const photo = business.homepageMedia[1];

  return (
    <div>
      <PageIntro eyebrow="About this sample" title="About this sample" image={photo}>
        <p>
          {business.name} is a construction machine dealer. The company site says the staff serves customers
          from the shop and in the field, with salespeople and service technicians at the Lowell and Westville
          yards.
        </p>
      </PageIntro>
      <div className="wrap grid gap-6 py-12 lg:grid-cols-12">
        <div data-reveal className="bg-white p-6 shadow-[10px_10px_0_#3d3d3d] lg:col-span-7 lg:-mt-16">
          <p className="leading-relaxed">
            Their about page states that the team has over 150 years of combined experience. This sample does
            not add awards, founding years, or review quotes.
          </p>
          <p className="mt-3 leading-relaxed">
            Lines named on the homepage are Kobelco excavators, Develon heavy equipment, ASV compact equipment,
            and Kioti tractors. Supplied rating: {business.rating.value} from {business.rating.count}.
          </p>
          <p className="mt-3 leading-relaxed">
            Checkout on this site is a local test review. It is not a way to buy a machine. Login, registration,
            and password reset exist only as a CMS sign-in on the dealer’s vendor admin and are not part of this
            storefront.
          </p>
          <p className="mt-5">
            <a
              href="https://ronsonequipment.com/about-us/"
              className="btn btn-coal"
              rel="noreferrer"
              target="_blank"
            >
              About page on ronsonequipment.com
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
        <p data-reveal className="text-xs leading-relaxed text-muted lg:col-span-4 lg:col-start-9 lg:pt-4">
          {photo.credit}. Photo shows the yard activity described on the dealer site; it is not a portrait of the
          staff.
        </p>
      </div>
    </div>
  );
}
