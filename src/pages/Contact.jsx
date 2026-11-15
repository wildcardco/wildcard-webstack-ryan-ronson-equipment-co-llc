import { useState } from "react";
import { PageIntro } from "../components/PageIntro.jsx";
import { business } from "../data/site.js";
import { usePageTitle } from "./usePageTitle.js";

export function Contact() {
  const [status, setStatus] = useState("");
  usePageTitle("Contact");

  function onSubmit(event) {
    event.preventDefault();
    setStatus("This demo form is not connected. Nothing was sent, stored, or forwarded.");
    event.currentTarget.reset();
  }

  return (
    <div>
      <PageIntro eyebrow="Yards" title="Contact">
        <p>
          No email address was published in the supplied facts. Call a yard or use the dealer’s own contact form
          on ronsonequipment.com. The form on this page is a static mock.
        </p>
      </PageIntro>
      <div className="wrap relative z-10 -mt-6 grid gap-8 pb-14 lg:grid-cols-12">
        <div data-reveal className="lg:col-span-5">
          <ul className="space-y-2 bg-white p-5 text-sm shadow-[10px_10px_0_#3d3d3d]">
            {Object.values(business.phones).map((phone) => (
              <li key={phone.tel}>
                <span className="font-semibold">{phone.label}: </span>
                <a href={`tel:${phone.tel}`} className="underline decoration-ink/30 underline-offset-4 hover:decoration-brand">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>Lowell fax: {business.faxes.lowell}</li>
            <li>Westville fax: {business.faxes.westville}</li>
          </ul>
          <p className="mt-4 text-sm">
            <a
              href="https://ronsonequipment.com/contact/"
              className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-brand"
              rel="noreferrer"
              target="_blank"
            >
              Dealer contact page
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="space-y-4 bg-white p-5 shadow-[12px_12px_0_#da2343] lg:col-span-7 lg:-mt-16"
          noValidate
        >
          <p className="text-sm font-semibold">
            Demo only. Do not enter real personal information. This form has no backend.
          </p>
          <label className="block text-sm font-semibold">
            Name
            <input name="name" autoComplete="off" className="field mt-1 font-normal" />
          </label>
          <label className="block text-sm font-semibold">
            Phone
            <input name="phone" autoComplete="off" className="field mt-1 font-normal" />
          </label>
          <label className="block text-sm font-semibold">
            Message
            <textarea name="message" rows="4" className="field mt-1 font-normal" />
          </label>
          <button type="submit" className="btn btn-coal">
            Submit demo form
          </button>
          {status ? (
            <p role="status" className="text-sm">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
