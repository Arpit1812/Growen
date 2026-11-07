import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "How It Works", hash: "how-it-works" },
  { label: "Solutions", hash: "solutions" },
  { label: "Our approach", hash: "insights" },
];

export function Logo({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-6 w-6 place-items-center rounded-full border border-current/40">
        <span className="h-2 w-2 rounded-full bg-oxblood-soft" />
      </span>
      <span
        className={`font-display text-lg font-extrabold tracking-tight ${
          tone === "cream" ? "text-ink-foreground" : "text-foreground"
        }`}
      >
        Growen
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-md">
        <div
          className={`mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
            scrolled ? "h-16" : "h-20 lg:h-24"
          }`}
        >
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to="/"
                hash={item.hash}
                className={`font-medium text-black transition-colors hover:text-foreground ${scrolled ? "text-base" : "text-lg"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/audit"
              className={`font-medium text-black transition-colors hover:text-foreground ${scrolled ? "text-base" : "text-lg"}`}
            >
              Audit
            </Link>
            <Link
              to="/pricing"
              className={`font-medium text-black transition-colors hover:text-foreground ${scrolled ? "text-base" : "text-lg"}`}
            >
              Pricing
            </Link>
          </nav>
          <Link
            to="/contact"
            className="inline-flex h-10 w-auto items-center justify-center rounded-full bg-primary px-4 font-display text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-oxblood-soft sm:h-12 sm:w-52 sm:px-6 sm:text-sm"
          >
            Book a call
          </Link>
          <button
            type="button"
            className="ml-2 grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-cream-deep lg:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          {mobileMenuOpen && (
            <nav id="mobile-navigation" className="basis-full border-t border-border py-3 lg:hidden">
              <ul className="space-y-1">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <Link
                      to="/"
                      hash={item.hash}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-cream-deep"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/audit"
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-cream-deep"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Audit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-cream-deep"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
      <div className="h-20 lg:h-24" aria-hidden="true" />
    </>
  );
}
