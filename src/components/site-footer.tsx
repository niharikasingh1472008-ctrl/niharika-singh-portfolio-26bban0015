import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">
              Niharika Singh<span className="text-copper-soft">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              BBA student in New Age Digital Marketing, exploring AI visual
              creation and advertising.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow !text-copper-soft">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow !text-copper-soft">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:niharikasingh1472008@gmail.com"
                  className="inline-flex items-center gap-1.5 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Mail size={14} aria-hidden="true" />
                  niharikasingh1472008@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/niharika-singh-625ba8389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <ArrowUpRight size={14} aria-hidden="true" />
                  LinkedIn profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Niharika Singh. All rights reserved.</p>
          <p>Built as a personal portfolio · JECRC University</p>
        </div>
      </div>
    </footer>
  );
}
