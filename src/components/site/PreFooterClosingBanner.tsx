import { Link } from "@tanstack/react-router";
import { ArrowRight, PhoneCall } from "lucide-react";

export function PreFooterClosingBanner() {
  return (
    <section className="border-t border-ink-border bg-ink px-6 py-16 text-ink-foreground sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-xs tracking-wider text-oxblood-soft sm:text-sm">
              Next steps
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink-foreground sm:text-4xl lg:text-5xl">
              Ready to make your revenue infrastructure{" "}
              <span className="voice font-normal text-oxblood-soft">work better?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              Find out where your revenue signals get lost — and what to do about it.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch lg:max-w-xl lg:flex-1 lg:justify-end">
            {/* Primary Action Block */}
            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-oxblood-soft/40 bg-ink-foreground/[0.04] p-6">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wider text-oxblood-soft">
                  Primary Action
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink-foreground">
                  Get the 14-Day Revenue Audit
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted sm:text-sm">
                  A focused review of your systems, workflows and handoffs, with a clear plan for what to improve.
                </p>
              </div>
              <div className="mt-5 pt-2">
                <Link
                  to="/audit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 font-display text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-oxblood-soft"
                >
                  Get the $100 Audit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Secondary Action Block */}
            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-ink-border bg-ink-foreground/[0.02] p-6 sm:max-w-[15rem]">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wider text-ink-muted">
                  Questions?
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink-foreground">
                  Prefer to talk first?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted sm:text-sm">
                  Have a quick conversation with our engineering team.
                </p>
              </div>
              <div className="mt-5 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-ink-border px-5 font-display text-sm font-bold text-ink-foreground transition-all hover:border-oxblood-soft hover:bg-ink-foreground/5"
                >
                  <PhoneCall className="h-4 w-4" /> Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
