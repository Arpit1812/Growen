import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import dashboard from "@/assets/dashboard.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Growen — Revenue Signal Infrastructure for B2B Tech" },
      {
        name: "description",
        content:
          "Growen connects your product, customer and operating systems, automates the right actions, and turns more of your signals into revenue.",
      },
      { property: "og:title", content: "Growen — Revenue Signal Infrastructure" },
      {
        property: "og:description",
        content:
          "We connect your systems, automate signal flow and prioritise the actions that produce revenue.",
      },
    ],
  }),
  component: Index,
});

const STAGES = [
  {
    id: "capture",
    tip: "Collect signals from product usage, website activity, billing events and support tickets.",
    name: "CAPTURE",
    signal: "A trial account invites 4 teammates in 48 hours.",
    action: "Product events unify into one account record in the CRM.",
    outcome: "No expansion moment is invisible to Sales again.",
  },
  {
    id: "score",
    tip: "Prioritise leads by behaviour: high usage, rapid growth or key events.",
    name: "SCORE",
    signal: "Usage climbs 3× while the champion opens the pricing page.",
    action: "The account is scored PQL-high and flagged in the pipeline.",
    outcome: "Reps work the 12 accounts that matter, not 400.",
  },
  {
    id: "route",
    tip: "Auto-assign hot leads to an AE or trigger a CSM alert.",
    name: "ROUTE",
    signal: "An enterprise domain has 9 self-serve users across 3 teams.",
    action: "Domain clustering merges them and routes one owner instantly.",
    outcome: "Lead response drops from days to minutes.",
  },
  {
    id: "engage",
    tip: "Engage prospects with timely email, in-app messages or Slack notifications.",
    name: "ENGAGE",
    signal: "Onboarding stalls at step 2 for a $40K account.",
    action: "A five-touch sequence fires with a human checkpoint before send.",
    outcome: "Stalled deals restart without a rep noticing manually.",
  },
  {
    id: "expand",
    tip: "Flag an account ready for an upsell, renewal or referral.",
    name: "EXPAND",
    signal: "Seat usage exceeds contract 60 days before renewal.",
    action: "An expansion task with the usage evidence lands on the AM's desk.",
    outcome: "Renewals are negotiated early, from a position of data.",
  },
];

const GAP = [
  {
    n: "01",
    title: "A trial team hits 80% of plan limits",
    body: "The event lands in the product database. Nobody in Sales ever sees it, and the upgrade conversation never happens.",
  },
  {
    n: "02",
    title: "A champion changes jobs",
    body: "Your best user shows up at a new company. No alert, no play — a warm account is treated as cold outbound six months later.",
  },
  {
    n: "03",
    title: "Support logs three angry tickets",
    body: "Churn risk is written down in a tool the renewal owner doesn't open. The signal arrives after the cancellation email.",
  },
  {
    n: "04",
    title: "Nine users share one email domain",
    body: "They're nine separate leads in the CRM instead of one enterprise account worth a real conversation.",
  },
];

const INDUSTRIES = ["Developer Tools", "Fleet Software", "API-driven SaaS", "Transportation Management"];

function StageBoard() {
  const [active, setActive] = useState(STAGES[0]!.id);
  const stage = STAGES.find((s) => s.id === active)!;
  const index = STAGES.findIndex((s) => s.id === active);

  return (
    <div className="mt-14">
      {/* Stage rail */}
      <div className="relative overflow-x-auto pb-2">
        <div className="absolute left-0 right-0 top-[1.35rem] h-px bg-ink-border" />
        <div className="relative grid min-w-[42rem] grid-cols-5">
          {STAGES.map((s, i) => {
            const isActive = active === s.id;
            const isPast = i <= index;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                onMouseEnter={() => setActive(s.id)}
                className="group px-2 text-left"
              >
                <span
                  className={`relative grid h-11 w-11 place-items-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-oxblood-soft bg-oxblood-soft text-ink"
                      : isPast
                        ? "border-oxblood-soft/50 bg-ink text-oxblood-soft"
                        : "border-ink-border bg-ink text-ink-muted group-hover:border-oxblood-soft/60"
                  }`}
                >
                  <span className="font-display text-xs font-extrabold">0{i + 1}</span>
                  {isActive && (
                    <span className="absolute inset-0 animate-ping rounded-full border border-oxblood-soft/60" />
                  )}
                </span>
                <span
                  className={`mt-4 block font-display text-sm font-extrabold tracking-[0.16em] transition-colors ${
                    isActive ? "text-ink-foreground" : "text-ink-muted group-hover:text-ink-foreground"
                  }`}
                >
                  {s.name}
                </span>
                <span
                  className={`mt-2 block max-w-[13rem] text-xs leading-snug text-ink-muted transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                >
                  {s.tip}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Signal → Action → Outcome */}
      <div className="mt-12 grid gap-4 md:grid-cols-3" aria-live="polite">
        {[
          { label: "Signal example", value: stage.signal },
          { label: "System action", value: stage.action },
          { label: "Business outcome", value: stage.outcome },
        ].map((col, i) => (
          <div
            key={`${stage.id}-${col.label}`}
            style={{ animationDelay: `${i * 90}ms` }}
            className={`stage-card relative rounded-2xl border p-7 ${
              i === 2
                ? "border-oxblood-soft/40 bg-oxblood/25"
                : "border-ink-border bg-ink-foreground/[0.04]"
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="eyebrow text-oxblood-soft">{col.label}</p>
              <span className="voice text-sm text-ink-muted">0{i + 1}</span>
            </div>
            <p
              className={`mt-5 text-lg leading-snug text-ink-foreground ${
                i === 2 ? "font-display font-extrabold" : ""
              }`}
            >
              {col.value}
            </p>
            {i < 2 && (
              <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-oxblood-soft md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* HERO — dark: inside the system */}
      <section className="section-dark relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1fr_1.05fr] lg:py-28">
          <div>
            <p className="eyebrow text-oxblood-soft">
              Revenue infrastructure · For B2B tech
            </p>
            <h1 className="mt-6 text-5xl leading-[0.95] text-ink-foreground sm:text-6xl lg:text-7xl">
              Build the infrastructure connecting{" "}
              <span className="voice font-normal text-oxblood-soft">signals</span> to revenue.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
              Your product, customer and operating systems already generate valuable signals. We
              connect them, automate the right actions and help turn more of them into revenue.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display font-bold text-primary-foreground transition-colors hover:bg-oxblood-soft"
              >
                Request Revenue Infra Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-2 shadow-2xl">
            <img
              src={dashboard}
              alt="Growen revenue signal dashboard showing pipeline, at-risk revenue and signal trends"
              width={1408}
              height={960}
              className="w-full rounded-xl"
            />
            <div className="absolute right-5 top-5 hidden w-52 rounded-xl border border-ink-border bg-ink/95 p-3 shadow-2xl lg:block">
              <div className="flex items-center justify-between border-b border-ink-border pb-2">
                <span className="eyebrow text-ink-muted">Signal inbox</span><MessageCircle className="h-3.5 w-3.5 text-signal" />
              </div>
              <div className="mt-3 flex gap-2"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-oxblood-soft text-[9px] font-bold">AM</span><p className="rounded-lg bg-ink-foreground/10 px-2 py-1.5 text-[10px] leading-relaxed text-ink-foreground">New team activity — worth a look?</p></div>
              <div className="mt-2 ml-8 rounded-lg bg-primary/70 px-2 py-1.5 text-[10px] text-primary-foreground">Routed to Sam with context.</div>
            </div>
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-xl border border-oxblood-soft/50 bg-ink px-4 py-3 shadow-xl sm:left-6">
              <span className="relative grid h-8 w-8 place-items-center rounded-full bg-signal/20 text-signal">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-signal/50" />
                <Sparkles className="relative h-4 w-4" />
              </span>
              <span>
                <span className="eyebrow block text-oxblood-soft">Account high intent</span>
                <span className="mt-1 block text-xs text-ink-foreground">Trial activity + pricing visit</span>
              </span>
            </div>
          </div>
        </div>

        <div id="industries" className="scroll-mt-28 border-t border-ink-border">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-3 px-6 py-5">
            <span className="eyebrow text-ink-muted">Built for</span>
            {INDUSTRIES.map((i) => (
              <span key={i} className="eyebrow text-ink-foreground/70">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT — light */}
      <section className="hidden" aria-hidden="true">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow text-oxblood">The problem</p>
              <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">
                Nothing is missing.{" "}
                <span className="voice font-normal text-oxblood">
                  Except the thing that joins it all up.
                </span>
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
                Most teams assume they have a data problem. They don't. They have a connection
                problem — and it shows up as pipeline that quietly never arrives.
              </p>
            </div>

            <div>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
                {[
                  ["The data exists.", "Product events, billing, tickets, sessions — all captured, all day."],
                  ["The tools exist.", "CRM, warehouse, analytics, support desk. Paid for and switched on."],
                  ["The teams exist.", "Sales, CS and growth are ready to act the moment they know."],
                ].map(([t, d]) => (
                  <li key={t} className="bg-card p-7">
                    <p className="font-display text-xl font-extrabold leading-snug">{t}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-oxblood/30 bg-oxblood/[0.07] p-8 sm:flex-row sm:items-center">
                <p className="font-display text-2xl font-extrabold leading-snug text-oxblood sm:text-3xl">
                  The connection doesn't.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:max-w-sm">
                  So a buying signal born in your product dies in a database, and the person who
                  could have closed it never hears about it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO / WHAT / WHY — light */}
      <section className="bg-cream-deep px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-oxblood">The core problem</p>
          <h2 className="mt-12 text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            The data exists.<br />The tools exist.<br />The teams exist.<br />
            <span className="voice text-oxblood">The connection doesn't.</span>
          </h2>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Growen is the revenue infrastructure layer for B2B tech. We engineer the system that
            connects your product, CRM and operating tools — <strong className="text-foreground">so every buying signal turns into action, and more of it turns into revenue.</strong>
          </p>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-28 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-oxblood">What Growen is</p>
              <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
                Revenue engineering for B2B teams.{" "}
                <span className="voice font-normal">Not another tool.</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                We're engineers with commercial judgement. We map your stack, wire your systems
                together and ship the automations that put the right account in front of the right
                person at the right moment.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {[
                {
                  q: "Who is Growen for?",
                  a: "B2B tech companies from $500K to $20M ARR with 10–100 employees running a product-led or expansion-led motion, with data spread across product, CRM, billing and support.",
                },
                {
                  q: "What do we build?",
                  a: "CRM as system of record, product-event pipelines, PQL scoring, domain clustering, routing rules, automated follow-up, health and expansion alerting, reporting dashboards.",
                },
                {
                  q: "What problem do we solve?",
                  a: "Your signals never reach the people who can act on them — so revenue leaks quietly through manual gaps and slow response.",
                },
                {
                  q: "Why should you care?",
                  a: "Every week a buying signal sits unread is pipeline you already paid to create and then lost. This is recovered revenue, not new spend.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-card p-8">
                  <h3 className="text-lg">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE GAP — light */}
      <section className="bg-cream-deep px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-oxblood">The gap</p>
            <h2 className="mt-5 text-4xl leading-tight">
              Four signals your company generated this week.{" "}
              <span className="voice font-normal text-oxblood">Nobody acted on them.</span>
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {GAP.map((g) => (
              <div key={g.n} className="border-t border-border pt-5">
                <p className="voice text-xl text-oxblood">{g.n}</p>
                <h3 className="mt-3 text-lg">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER — light */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-oxblood">The transformation</p>
          <h2 className="mt-5 max-w-4xl text-5xl leading-[1.05] sm:text-6xl">
            From scattered tools to a system that <span className="voice font-normal text-oxblood">compounds.</span>
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-cream-deep/45 p-8 sm:p-12">
              <p className="eyebrow inline-block bg-oxblood/10 px-2 py-1 text-oxblood">Before</p>
              <ol className="mt-8 space-y-4">
                {[
                  ["Fragmented data", "Product events in one warehouse, deals in the CRM, tickets somewhere else."],
                  ["Manual workflows", "A rep exports a CSV every Monday to guess who to call."],
                  ["Missed signals", "Upgrade intent and churn risk are discovered after the fact."],
                  ["Slow action", "Days between a buying moment and the first human response."],
                ].map(([t, d]) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-oxblood/20 text-lg text-oxblood">×</span>
                    <div>
                      <p className="font-display text-lg font-bold">{t}</p>
                    </div>
                    <span className="ml-auto text-muted-foreground/60">→</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl border border-[#e9dfdb] bg-[#e9dfdb] p-8 text-foreground sm:p-12">
              <p className="eyebrow text-oxblood-soft">After — with Growen</p>
              <ol className="mt-8 space-y-4">
                {[
                  ["Connected systems", "One account record joining product usage, billing, CRM and support."],
                  ["Automated signal flow", "Events stream in and score themselves against your ICP in real time."],
                  ["Prioritised action", "A ranked daily queue: who to contact, why, and with what evidence."],
                  ["Revenue impact", "Faster response, earlier expansion, fewer silent churns — measured on a dashboard."],
                ].map(([t, d]) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-oxblood-soft text-ink-foreground"><Check className="h-5 w-5" /></span>
                    <div>
                      <p className="font-display text-lg font-bold">{t}</p>
                    </div>
                    <span className="ml-auto text-ink-muted">→</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNAL ENGINE — dark: inside the system */}
      <section id="how-it-works" className="scroll-mt-28 section-dark px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-oxblood-soft">The Growen Signal Engine</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-tight text-ink-foreground sm:text-5xl">
            One architecture. Five stages.{" "}
            <span className="voice font-normal">From signal to revenue.</span>
          </h2>
          <p className="mt-5 max-w-xl text-ink-muted">
            Every stage does the same thing: take a real signal, apply a system action, produce a
            business outcome.
          </p>
          <StageBoard />
        </div>
      </section>

      {/* ILLUSTRATIVE IMPACT — light */}
      <section className="bg-cream-deep px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-oxblood">Illustrative impact</p>
              <h2 className="mt-5 max-w-xl text-4xl leading-tight">
                We don't just automate.{" "}
                <span className="voice font-normal text-oxblood">We measure.</span>
              </h2>
            </div>
            <Link to="/contact" className="text-sm underline underline-offset-4">
              Request the audit that proves it
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["42%", "Faster lead response", "Typical opportunity identified in audit"],
              ["$400K", "Pipeline from renewals", "Modelled from current usage data"],
              ["10–27×", "Illustrative Year-1 ROI", "Same-tier build, modelled"],
              ["30%", "Churn reduction", "Example outcome, early-warning scoring"],
            ].map(([stat, label, note]) => (
              <div key={label} className="bg-card p-8">
                <p className="font-display text-4xl font-extrabold text-oxblood">{stat}</p>
                <p className="mt-3 font-display font-bold">{label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Figures are illustrative models based on typical B2B benchmarks, not verified customer
            results.
          </p>
        </div>
      </section>

      <Marquee />

      {/* INSIGHTS / ABOUT — dark */}
      <section id="insights" className="scroll-mt-28 section-dark px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div id="about">
            <p className="eyebrow text-oxblood-soft">Our approach</p>
            <h2 className="mt-5 text-4xl leading-tight text-ink-foreground">
              Engineers with business sense —{" "}
              <span className="voice font-normal">we architect your revenue engine.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
              Every engagement starts with a focused 14 Day Revenue Infra Audit. We move from
              diagnostic to design, build, activation and expansion with a clear blueprint at every
              hand-off.
            </p>
            <ol className="mt-12 space-y-9">
              {[
                ["01", "Diagnose", "We map your product, CRM, billing, support and marketing signals, then document where data is captured and where the hand-offs break."],
                ["02", "Design", "We trace the signal-to-revenue journey, define the account and scoring model, and identify the highest-leverage system connections."],
                ["03", "Prioritise", "We score the gaps by revenue impact, effort and urgency, turning a messy stack into a ranked plan your team can act on."],
                ["04", "Blueprint", "You receive the prioritised 14 Day Audit blueprint, recommended tier, timeline and next actions for the build, activation and expansion phases."],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-6">
                  <span className="voice text-2xl text-oxblood-soft">{n}</span>
                  <div>
                    <h3 className="text-lg text-ink-foreground">{t}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <img
              src={team}
              alt="Growen engineers working on revenue system architecture"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-2xl object-cover"
            />
            <blockquote className="voice mt-6 rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-7 text-xl leading-snug text-ink-foreground">
              "You could build it yourself. But hiring an architect means fewer mistakes and a
              stronger foundation."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA — oxblood */}
      <section className="hidden" aria-hidden="true">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-oxblood">Ongoing partnership</p>
              <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">A retainer keeps the engine <span className="voice font-normal text-oxblood">earning its place.</span></h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">After the build, Growen remains your fractional revenue-systems team: tuning what is live, measuring what changed, and planning the next highest-leverage improvement.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {[
                ["Starter", "$500–800/mo", "10–12 hrs/month · monthly performance and scoring review · two minor automation adjustments · CRM hygiene · 2-business-day email/Slack support."],
                ["Growth", "$1,200–1,500/mo", "15–20 hrs/month · scoring and enrichment tuning · weekly active-account refresh · one sequence test/month · quarterly ICP refinement · 1-business-day priority support."],
                ["Scale", "$1,500–2,500/mo", "30+ hrs/month · health monitoring across all layers · AI-agent and forecast tuning · buying-committee refresh · quarterly EBR · dedicated same-day Slack support."],
              ].map(([tier, price, detail]) => (
                <div key={tier} className="bg-card p-7">
                  <p className="eyebrow text-oxblood">{tier}</p><p className="mt-3 font-display text-xl font-extrabold">{price}</p><p className="mt-5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Extras are scoped separately: additional personas ($500–600 each), conversation intelligence ($1K–2K), AI SDR ($4K–6K), Customer 360 ($6K–10K), and specialised referral integrations ($1.2K–2K).</p>
        </div>
      </section>

      <section className="hidden" aria-hidden="true">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow text-oxblood">FAQ</p><h2 className="mt-5 text-4xl">Questions, <span className="voice font-normal">by topic.</span></h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              ["The audit", "What happens in two weeks? We map signal sources, system hand-offs and revenue leaks, then deliver a prioritised blueprint and a practical next-step recommendation."],
              ["Tiers & scope", "Can we start smaller? Yes. Every tier is a compatible part of the same architecture, and upgrades are priced as the delta for infrastructure already built."],
              ["Retainers & support", "Is this just maintenance? No. The retainer funds a defined block of engineering and revenue-strategy time for tuning, review, support and ongoing optimisation."],
              ["Tools & ownership", "Who pays for software? Clients hold their own vendor accounts and data. Tooling costs are separate and stated up front; Growen configures and operates the system."],
            ].map(([heading, answer]) => <div key={heading} className="border-t border-border pt-5"><h3 className="text-lg">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-4xl leading-tight text-primary-foreground sm:text-5xl">
                Ready to stop <span className="voice font-normal">leaking revenue?</span>
              </h2>
              <p className="mt-5 max-w-xl text-primary-foreground/80">Start with a focused <strong className="text-primary-foreground">Revenue Infra Audit</strong>. We map your signal sources, score the gaps between systems, identify revenue leaks, and give you a prioritised blueprint with the right tier, timeline and next actions.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-4 font-display font-bold text-ink-foreground transition-transform hover:-translate-y-0.5"
            >
              Request Revenue Infra Audit <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
