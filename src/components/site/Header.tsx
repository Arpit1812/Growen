import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-md">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to="/"
              hash={item.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>
        <Link
          to="/contact"
          className={`rounded-full bg-primary font-display font-bold text-primary-foreground transition-all hover:bg-oxblood-soft ${
            scrolled ? "px-5 py-2.5 text-sm" : "px-6 py-3 text-sm"
          }`}
        >
          Request Revenue Infra Audit
        </Link>
      </div>
    </header>
  );
}
