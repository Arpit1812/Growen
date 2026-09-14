import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus, CircleDot } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Growen Revenue Signal Engine" },
      {
        name: "description",
        content:
          "Starter, Growth and Scale: 50%, 75% or 100% signal coverage of the Growen Revenue Signal Engine, with stated price, timeline and ROI.",
      },
      { property: "og:title", content: "Pricing — Growen Revenue Signal Engine" },
      {
        property: "og:description",
        content: "Three productized tiers with stated price, timeline and step-up ROI.",
      },
    ],
  }),
  component: Pricing,
});

const TIERS = [
  {
    name: "Starter",
    coverage: "50% signal coverage",
    blurb: "The foundation and first scoring layer of your revenue signal engine.",
    price: "From $5K",
    sub: "one-time build · $500–800/mo retainer",
    roi: "3.5×+",
    timeline: "5–7 week build",
    popular: false,
    features: [
      "CRM setup & migration as system of record",
      "Automated signal capture & routing",
      "Rules-based PQL / lead scoring (v1)",
      "5-touch automated follow-up",
      "Light domain clustering",
      "Scored pipeline reporting dashboard",
      "1 ICP / persona definition",
      "Team training & playbook handover",
    ],
  },
  {
    name: "Growth",
    coverage: "75% signal coverage",
    blurb: "Complete the intelligence layer and put it to work automatically.",
    price: "From $10K",
    sub: "one-time build · $1,200–1,500/mo retainer",
    roi: "5×+",
    timeline: "10–14 week build",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Firmographic & contact enrichment",
      "Full domain clustering",
      "AI-assisted outreach (human checkpoint)",
      "Referral program automation",
      "Account health & expansion detection",
      "2–3 ICP / persona definitions",
      "Attribution & pipeline forecasting",
    ],
  },
  {
    name: "Scale",
    coverage: "100% signal coverage",
    blurb: "The complete Growen Revenue Signal Engine — all five layers as one.",
    price: "From $30K",
    sub: "one-time build · $2,500–4,000/mo retainer",
    roi: "10×+",
    timeline: "18–24 week engagement",
    popular: false,
    features: [
      "Everything in Growth, plus:",
      "Data warehouse & Customer 360",
      "AI SDR / autonomous outbound agent",
      "Buying committee mapping",
      "Multi-method forecasting model",
      "Conversation intelligence integration",
      "Commercial ops automation (CPQ)",
    ],
  },
];

const RETAINERS: Record<string, string[]> = {
  Starter: ["10–12 hours of system administration", "Monthly performance and scoring review", "Two minor automation adjustments", "2-business-day email and Slack support"],
  Growth: ["15–20 hours of revenue-systems engineering", "Scoring and enrichment tuning", "One sequence test each month", "1-business-day priority support"],
  Scale: ["30+ hours of fractional systems-team support", "All-layer health and AI-agent monitoring", "Quarterly executive business review", "Same-business-day dedicated Slack support"],
};

type Level = "full" | "partial" | "none";
const GROUPS: { group: string; rows: [string, Level, Level, Level][] }[] = [
  {
    group: "Foundation & data",
    rows: [
      ["CRM setup / cleanup as system of record", "full", "full", "full"],
      ["Automated signal capture & routing", "full", "full", "full"],
      ["Domain clustering / account grouping", "partial", "full", "full"],
      ["Firmographic enrichment", "none", "full", "full"],
      ["Data warehouse & Customer 360", "none", "none", "full"],
    ],
  },
  {
    group: "Scoring & intelligence",
    rows: [
      ["Rules-based PQL / lead scoring (v1)", "full", "full", "full"],
      ["Account health scoring", "none", "partial", "full"],
      ["Expansion signal detection", "none", "partial", "full"],
      ["Multi-method forecasting model", "none", "none", "full"],
      ["Buying committee mapping", "none", "none", "full"],
    ],
  },
  {
    group: "Engagement & automation",
    rows: [
      ["5-touch automated follow-up sequences", "full", "full", "full"],
      ["AI-assisted outreach drafting", "none", "full", "full"],
      ["Referral program automation", "none", "partial", "full"],
      ["AI SDR / autonomous outbound agent", "none", "none", "full"],
      ["Conversation intelligence", "none", "none", "full"],
      ["Commercial ops automation (CPQ)", "none", "none", "full"],
    ],
  },
];

function Mark({ level }: { level: Level }) {
  if (level === "full") return <Check className="mx-auto h-4 w-4 text-signal" />;
  if (level === "partial") return <CircleDot className="mx-auto h-4 w-4 text-oxblood" />;
  return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />;
}

function Pricing() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <section className="section-dark px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-oxblood-soft">Productized tiers</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[0.98] text-ink-foreground sm:text-6xl">
            Choose how much of the engine{" "}
            <span className="voice font-normal">you install.</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
            Starter, Growth and Scale install 50%, 75% or 100% of your Growen Revenue Signal
            Engine, packaged with stated price, timeline and ROI.
          </p>
          <p className="mt-4 max-w-xl text-sm text-ink-foreground/70">
            <span className="font-display font-bold">Note:</span> 50% / 75% / 100% describe{" "}
            <span className="font-display font-bold">signal coverage, and not tasks automated</span>{" "}
            — how much of your revenue signal surface the engine sees and acts on.
          </p>
        </div>
      </section>

      <section className="hidden" aria-hidden="true">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="eyebrow text-oxblood">Ongoing partnership</p><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">A retainer keeps the engine <span className="voice font-normal text-oxblood">earning its place.</span></h2><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">A defined block of engineering and revenue-strategy time keeps the signal engine tuned as your market, product and pipeline change.</p></div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">{[["Starter", "$500–800/mo", "10–12 hrs/month · monthly performance and scoring review · two minor automation adjustments · CRM hygiene · 2-business-day email/Slack support."], ["Growth", "$1,200–1,500/mo", "15–20 hrs/month · scoring and enrichment tuning · weekly active-account refresh · one sequence test/month · quarterly ICP refinement · 1-business-day priority support."], ["Scale", "$1,500–2,500/mo", "30+ hrs/month · all-layer health monitoring · AI-agent and forecast tuning · buying-committee refresh · quarterly EBR · same-day Slack support."]].map(([tier, price, detail]) => <div key={tier} className="bg-card p-7"><p className="eyebrow text-oxblood">{tier}</p><p className="mt-3 font-display text-xl font-extrabold">{price}</p><p className="mt-5 text-sm leading-relaxed text-muted-foreground">{detail}</p></div>)}</div>
          </div><p className="mt-6 text-sm text-muted-foreground">Available add-ons: personas ($500–600 each), conversation intelligence ($1K–2K), AI SDR ($4K–6K), Customer 360 ($6K–10K), and specialised referral integrations ($1.2K–2K).</p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                t.popular
                  ? "border-oxblood bg-ink text-ink-foreground shadow-2xl lg:-mt-6 lg:pb-12"
                  : "border-border bg-card"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-signal px-4 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-ink">
                  Most popular
                </span>
              )}
              <div className="flex items-center justify-between">
                <h2 className={`text-xl ${t.popular ? "text-ink-foreground" : ""}`}>{t.name}</h2>
                <span
                  className={`eyebrow rounded-full px-3 py-1 ${
                    t.popular ? "bg-ink-foreground/10 text-ink-foreground" : "bg-muted"
                  }`}
                >
                  {t.coverage}
                </span>
              </div>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  t.popular ? "text-ink-muted" : "text-muted-foreground"
                }`}
              >
                {t.blurb}
              </p>

              <p className="mt-8 font-display text-4xl font-extrabold text-oxblood-soft">
                {t.price}
              </p>
              <p className={`mt-1 text-xs ${t.popular ? "text-ink-muted" : "text-muted-foreground"}`}>
                {t.sub}
              </p>

              <div
                className={`mt-6 flex gap-10 border-t pt-5 ${
                  t.popular ? "border-ink-border" : "border-border"
                }`}
              >
                <div>
                  <p className="eyebrow opacity-60">Year-1 ROI</p>
                  <p className="mt-1 font-display text-lg font-extrabold">{t.roi}</p>
                </div>
                <div>
                  <p className="eyebrow opacity-60">Timeline</p>
                  <p className="mt-1 font-display text-lg font-extrabold">{t.timeline}</p>
                </div>
              </div>

              <ul className="mt-7 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                    <span className={t.popular ? "text-ink-foreground/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={`mt-7 border-t pt-5 ${t.popular ? "border-ink-border" : "border-border"}`}>
                <p className="eyebrow opacity-60">Ongoing retainer</p>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed">
                  {RETAINERS[t.name].map((item) => (
                    <li key={item} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />{item}</li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`mt-9 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-display font-bold transition-colors ${
                  t.popular
                    ? "bg-primary text-primary-foreground hover:bg-oxblood-soft"
                    : "border border-foreground/20 hover:bg-muted"
                }`}
              >
                Request an audit
              </Link>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-7xl text-sm text-muted-foreground">
          Not sure which tier? The standalone Month 1 Diagnostic ($2,500–$5,000) is creditable
          toward any tier.
        </p>
      </section>

      <section className="bg-cream-deep px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl">Capability comparison</h2>
          <p className="mt-3 text-muted-foreground">Every division in one clear comparison.</p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card">
            <div className="min-w-[680px]">
              <div className="grid grid-cols-[1fr_100px_100px_100px] items-center border-b border-border bg-muted/40 px-7 py-5">
                <span className="eyebrow text-muted-foreground">Capability</span><span className="eyebrow text-center">Starter 50%</span><span className="eyebrow text-center">Growth 75%</span><span className="eyebrow text-center">Scale 100%</span>
              </div>
              <Accordion type="single" collapsible defaultValue="Foundation & data">
                {GROUPS.map((g) => <AccordionItem key={g.group} value={g.group} className="border-border">
                  <AccordionTrigger className="bg-cream-deep/45 px-7 py-5 font-display text-lg font-extrabold hover:no-underline">{g.group}</AccordionTrigger>
                  <AccordionContent className="pb-0">
                    {g.rows.map(([label, s, gr, sc]) => <div key={label} className="grid grid-cols-[1fr_100px_100px_100px] items-center border-b border-border/60 px-7 py-4 text-sm last:border-b-0"><span>{label}</span><Mark level={s} /><Mark level={gr} /><Mark level={sc} /></div>)}
                  </AccordionContent>
                </AccordionItem>)}
              </Accordion>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-signal" /> Fully included
            </span>
            <span className="flex items-center gap-2">
              <CircleDot className="h-4 w-4 text-oxblood" /> Lighter / checkpointed
            </span>
            <span className="flex items-center gap-2">
              <Minus className="h-4 w-4" /> Not at this tier
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl">
            Questions, <span className="voice font-normal">answered.</span>
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {[
              [
                "Why is Starter more than a basic CRM setup?",
                "Starter installs the system of record plus the first scoring and routing layer — the plumbing that makes every later layer possible, not a tool configuration.",
              ],
              [
                "Can we just start with Starter and see?",
                "Yes. Every tier is a step in the same architecture, so Growth and Scale build on what Starter installed. No rework.",
              ],
              [
                "What if we don't know which tier we need?",
                "Start with the diagnostic audit. We map your signal coverage today and tell you which tier is honest for your stage — including if the answer is 'not yet'.",
              ],
              [
                "Are these prices final?",
                "They're stated starting points tied to scope. Final price, timeline and ROI target are fixed in writing before any build begins.",
              ],
            ].map(([q, a]) => (
              <AccordionItem key={q} value={q as string} className="border-border">
                <AccordionTrigger className="text-left font-display font-bold hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
