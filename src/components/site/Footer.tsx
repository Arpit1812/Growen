import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo tone="cream" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              Revenue infrastructure for B2B tech. We build the systems that turn your signals
              into revenue.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-ink-muted">Navigate</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/85">
              <li>
                <Link to="/" className="hover:text-ink-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" hash="how-it-works" className="hover:text-ink-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-ink-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink-foreground">
                  Request Audit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-ink-muted">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/85">
              <li>
                <Link to="/" hash="about" className="hover:text-ink-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink-foreground">
                  Contact
                </Link>
              </li>
            </ul>
            <h3 className="eyebrow mt-8 text-ink-muted">Legal</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/85">
              <li>
                <Link to="/legal" hash="privacy" className="hover:text-ink-foreground">
                  Privacy — GDPR compliant
                </Link>
              </li>
              <li>
                <Link to="/legal" hash="terms" className="hover:text-ink-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div className="p-1">
            <p className="eyebrow text-ink-muted">Contact us</p>
            <div className="mt-4 flex gap-3">
              {[
                [PhoneCall, "Callback"],
                [MessageCircle, "WhatsApp"],
                [Mail, "Email"],
              ].map(([Icon, label]) => <Link key={label as string} to="/contact" className="group grid h-10 w-10 place-items-center rounded-full border border-ink-border text-ink-muted transition-colors hover:border-oxblood-soft hover:text-ink-foreground" aria-label={label as string}><Icon className="h-4 w-4" /></Link>)}
            </div>
            <p className="mt-4 text-xs text-ink-muted">Request a callback, WhatsApp or email reply within 2 business days.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-border pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Growen. Revenue Infrastructure.</p>
          <p className="tracking-[0.2em]">CAPTURE · SCORE · ROUTE · ENGAGE · EXPAND</p>
        </div>
      </div>
    </footer>
  );
}
