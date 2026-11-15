import { Outlet } from "react-router-dom";
import { Footer } from "./Footer.jsx";
import { Nav } from "./Nav.jsx";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Nav />
      <main id="content" className="mx-auto w-full max-w-page flex-1 px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
