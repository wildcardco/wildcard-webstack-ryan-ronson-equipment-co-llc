import { useState } from "react";
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
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-3 leading-relaxed">
          No email address was published in the supplied facts. Call a yard or use the dealer’s own
          contact form on ronsonequipment.com. The form on this page is a static mock.
        </p>
        <ul className="mt-5 space-y-2 text-sm">
          {Object.values(business.phones).map((phone) => (
            <li key={phone.tel}>
              <span className="font-semibold">{phone.label}: </span>
              <a href={`tel:${phone.tel}`} className="underline">
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
            className="font-semibold underline"
            rel="noreferrer"
            target="_blank"
          >
            Dealer contact page
          </a>
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 border border-line bg-surface p-4" noValidate>
        <p className="text-sm font-semibold">
          Demo only. Do not enter real personal information. This form has no backend.
        </p>
        <label className="block text-sm font-semibold">
          Name
          <input name="name" autoComplete="off" className="mt-1 w-full border border-line px-3 py-2 font-normal" />
        </label>
        <label className="block text-sm font-semibold">
          Phone
          <input name="phone" autoComplete="off" className="mt-1 w-full border border-line px-3 py-2 font-normal" />
        </label>
        <label className="block text-sm font-semibold">
          Message
          <textarea name="message" rows="4" className="mt-1 w-full border border-line px-3 py-2 font-normal" />
        </label>
        <button type="submit" className="inline-flex min-h-11 items-center bg-ink px-4 font-semibold text-white">
          Submit demo form
        </button>
        {status ? (
          <p role="status" className="text-sm">
            {status}
          </p>
        ) : null}
      </form>
    </div>
  );
}
