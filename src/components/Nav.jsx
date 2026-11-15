import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { business, primaryNav } from "../data/site.js";
import { useCart } from "../context/CartContext.jsx";

function itemClass(isActive) {
  return [
    "inline-flex min-h-11 items-center px-3 text-sm font-semibold",
    isActive ? "underline decoration-2 underline-offset-8" : "hover:underline",
  ].join(" ");
}

export function Nav() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuId = useId();
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    function onKey(event) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const cartLabel = count === 1 ? "Cart, 1 item" : `Cart, ${count} items`;

  return (
    <header className="bg-header text-white">
      <div className="mx-auto flex max-w-page flex-wrap items-center gap-x-2 gap-y-2 px-4 py-3">
        <Link to="/" className="mr-auto min-w-0 leading-tight">
          <span className="block text-base font-bold">Ronson Equipment</span>
          <span className="block text-xs text-white/80">Co., LLC · sample catalog</span>
        </Link>
        <a
          href={`tel:${business.phones.lowell.tel}`}
          className="inline-flex min-h-11 items-center px-2 text-sm font-semibold"
        >
          Call
        </a>
        <Link
          to="/cart"
          aria-label={cartLabel}
          className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold"
        >
          <span>Cart</span>
          <span className="inline-flex min-w-6 items-center justify-center bg-brand px-1.5 text-xs">
            {count}
          </span>
        </Link>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex min-h-11 items-center border border-white/40 px-3 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className="hidden w-full gap-1 md:flex md:w-auto" aria-label="Primary">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => itemClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <nav
        id={menuId}
        ref={panelRef}
        aria-label="Primary mobile"
        hidden={!open}
        className="border-t border-white/20 px-4 py-2 md:hidden"
      >
        <ul className="flex flex-col">
          {primaryNav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `${itemClass(isActive)} w-full`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
