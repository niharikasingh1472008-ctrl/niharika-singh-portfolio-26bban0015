import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="glass-panel border-b border-border/80"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between sm:px-8">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="Niharika Singh — home"
          >
            <span className="font-display truncate text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              Niharika Singh
              <span className="text-copper">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  data-active={isActive(link.to)}
                  className={`link-underline text-[0.82rem] font-semibold tracking-wide transition-colors ${
                    isActive(link.to)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="rounded-full bg-primary px-4.5 py-2 text-[0.82rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get in touch
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open ? (
          <div
            id="mobile-menu"
            className="border-t border-border/70 bg-card/95 px-5 pb-5 pt-2 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block border-b border-border/60 py-3 text-[0.95rem] font-semibold ${
                      isActive(link.to)
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  to="/contact"
                  className="block rounded-full bg-primary px-5 py-3 text-center text-[0.9rem] font-semibold text-primary-foreground"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
