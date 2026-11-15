import { Link } from "react-router-dom";
import { usePageTitle } from "./usePageTitle.js";

export function NotFound() {
  usePageTitle("Not found");
  return (
    <div>
      <h1 className="text-3xl font-bold">Page not in this sample</h1>
      <p className="mt-3">
        <Link to="/" className="font-semibold underline">
          Go to the home page
        </Link>
      </p>
    </div>
  );
}
