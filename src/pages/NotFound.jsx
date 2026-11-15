import { Link } from "react-router-dom";
import { PageIntro } from "../components/PageIntro.jsx";
import { usePageTitle } from "./usePageTitle.js";

export function NotFound() {
  usePageTitle("Not found");
  return (
    <div>
      <PageIntro eyebrow="Missing page" title="Page not in this sample">
        <p>
          <Link to="/" className="btn btn-brand">
            Go to the home page
          </Link>
        </p>
      </PageIntro>
    </div>
  );
}
