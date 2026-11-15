import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { business, primaryNav } from "../data/site.js";

function itemClass(isActive, mobile = false) {
  return [
    "inline-flex min-h-11 items-center px-3 font-display text-[0.78rem] font-bold uppercase tracking-[0.12em]",
    mobile ? "w-full" : "",
    isActive ? "bg-brand text-white" : "text-white hover:bg-white/10",
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
    <header className="sticky top-0 z-50 bg-header text-white">
      <div className="bg-coal">
        <ul className="wrap flex flex-wrap items-center gap-x-4 gap-y-1 py-1.5 text-xs font-semibold">
          {Object.values(business.phones).map((phone) => (
            <li key={phone.tel}>
              <a href={`tel:${phone.tel}`} className="inline-flex items-center gap-1.5 py-1 hover:underline">
                <span className="text-white/55">{phone.label}</span>
                <span>{phone.display}</span>
              </a>
            </li>
          ))}
          <li className="font-display text-[0.65rem] uppercase tracking-[0.16em] text-white/50 sm:ml-auto">
            Sample catalog
          </li>
        </ul>
      </div>
      <div className="wrap flex items-center gap-2 py-2.5">
        <Link to="/" className="mr-auto flex min-w-0 items-center gap-2.5">
          <span className="h-9 w-1.5 shrink-0 bg-brand" aria-hidden="true" />
          <span className="min-w-0 leading-none">
            <span className="block font-display text-[1.35rem] font-extrabold uppercase tracking-tight">
              Ronson
            </span>
            <span className="mt-1 block font-display text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/70">
              <span className="sm:hidden">Equipment</span>
              <span className="hidden sm:inline">Equipment Co., LLC</span>
            </span>
          </span>
        </Link>
        <Link
          to="/cart"
          aria-label={cartLabel}
          className="inline-flex min-h-11 items-center gap-2 px-2 font-display text-[0.78rem] font-bold uppercase tracking-[0.12em]"
        >
          <span>Cart</span>
          <span className="inline-flex min-h-6 min-w-6 items-center justify-center bg-brand px-1.5 text-xs">
            {count}
          </span>
        </Link>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex min-h-11 items-center border border-white/40 px-3 font-display text-[0.78rem] font-bold uppercase tracking-[0.12em] md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className="ml-2 hidden items-center gap-0.5 md:flex" aria-label="Primary">
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
        className="border-t border-white/15 bg-coal px-4 py-2 md:hidden"
      >
        <ul className="flex flex-col">
          {primaryNav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => itemClass(isActive, true)}
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
