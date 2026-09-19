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
    subtitle: "Catch what your systems already know.",
    name: "CAPTURE",
    signal: "A trial account invites four teammates in 48 hours.",
    action: "Turn activity into an account-level signal.",
    outcome: "One account. One owner. Immediate visibility.",
  },
  {
    id: "score",
    tip: "Prioritise leads by behaviour: high usage, rapid growth or key events.",
    subtitle: "Not every signal matters equally.",
    name: "SCORE",
    signal: "Usage jumps 3× while the champion reads your pricing page.",
    action: "Usage + firmographic score pushes it into high-intent — in real time, not on Monday.",
    outcome: "Your team works the accounts that matter — not the entire queue.",
  },
  {
    id: "route",
    tip: "Auto-assign hot leads to an AE or trigger a CSM alert.",
    subtitle: "Right signal. Right person. Right moment.",
    name: "ROUTE",
    signal: "Nine users from the same company.",
    action: "Group the activity. Identify the account. Assign the owner.",
    outcome: "Nine leads become one deal. Days become minutes.",
  },
  {
    id: "engage",
    tip: "Engage prospects with timely email, in-app messages or Slack notifications.",
    subtitle: "Act while intent is still high.",
    name: "ENGAGE",
    signal: "Onboarding stalls at step two on a $40K account.",
    action: "A five-touch sequence fires automatically.",
    outcome: "Stalled deals restart. Nobody had to notice.",
  },
  {
    id: "expand",
    tip: "Flag an account ready for an upsell, renewal or referral.",
    subtitle: "Don't wait for renewal to discover growth.",
    name: "EXPAND",
    signal: "Usage crosses the contracted limit 60 days before renewal.",
    action: "Expansion task with usage evidence lands on the AM's desk.",
    outcome: "Renewal becomes an expansion conversation.",
  },
];

const GAP = [
  {
    n: "01",
    title: "Trial team hits 80% of plan limits",
    points: [
      "Event lands in the product database.",
      "Sales never sees it.",
      "Upgrade conversation never happens.",
    ],
  },
  {
    n: "02",
    title: "Champion changes jobs",
    points: [
      "Your best user appears at a new company.",
      "No alert. No play.",
      "A warm account becomes cold outbound six months later.",
    ],
  },
  {
    n: "03",
    title: "Support tickets spike on one account",
    points: [
      "Health is dropping in real time.",
      "CS and Sales stay in separate tools.",
      "You find out via the cancellation email.",
    ],
  },
  {
    n: "04",
    title: "Nine users share one email domain",
    points: [
      "Clear buying-committee signal.",
      "Your CRM still sees nine separate leads.",
      "You're pitching individuals instead of an enterprise.",
    ],
  },
];

const INDUSTRIES = ["Developer Tools", "Fleet Software", "API-driven SaaS", "Transportation Management"];

const APPROACH_PHASES = [
  {
    id: "audit",
    number: "PHASE 01",
    label: "AUDIT",
    intro: "Map the system. Find the leaks.",
    points: [
      "We dig into your systems, data, workflows and teams to understand how revenue information actually moves through the business.",
      "We look at product, CRM, billing, support, marketing, data and teams.",
      "We identify the highest-value opportunities based on revenue impact, effort and urgency.",
    ],
    output: "A clear map of your current revenue infrastructure — and where signals disappear.",
  },
  {
    id: "build",
    number: "PHASE 02",
    label: "BUILD",
    intro: "Turn the diagnosis into an architecture.",
    points: [
      "We define what data moves, where it moves, how accounts are scored and who receives the signal.",
      "We decide what should be automated, what should remain human and what needs to be built.",
      "We configure and connect the systems you already use without unnecessary rebuilds.",
    ],
    output: "Your Revenue Infrastructure Blueprint and a working revenue system your team can actually use.",
  },
  {
    id: "optimize",
    number: "PHASE 03",
    label: "OPTIMIZE",
    intro: "Measure. Improve. Repeat.",
    points: [
      "We monitor whether your signals are useful, whether the right people are acting and where the system breaks.",
      "We improve scoring, routing, workflows and automation using actual operating results.",
      "We keep the engine compounding as the market, product and pipeline evolve.",
    ],
    output: "A healthier system — and a team that knows how to operate it.",
  },
];

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
                  {s.subtitle}
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
  const [activeApproach, setActiveApproach] = useState(APPROACH_PHASES[0]!.id);
  const activePhase = APPROACH_PHASES.find((phase) => phase.id === activeApproach)!;

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
              Build the infrastructure that turns{" "}
              <span className="voice font-normal text-oxblood-soft">signals</span> into revenue.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
              Your systems already generate the signals. We connect them to action — and revenue.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display font-bold text-primary-foreground transition-colors hover:bg-oxblood-soft"
                >
                  Request a Diagnostic Audit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-ink-muted">14-day diagnostic. Clear gaps. Prioritised blueprint.</p>
              <Link to="/" hash="how-it-works" className="text-sm underline underline-offset-4 text-ink-foreground/80">
                See How It Works ↓
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
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

            <div className="rounded-2xl border border-oxblood/15 bg-white/40 p-6 shadow-sm sm:p-8">
              <p className="eyebrow text-oxblood">Signal leak</p>
              <p className="mt-5 text-4xl font-extrabold leading-none text-oxblood sm:text-5xl">
                73%
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                of the signals your stack produces are never seen by a human.
              </p>
            </div>
          </div>
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
                We build the missing layer between your systems and your revenue team. We're
                engineers with commercial judgement.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {[
                {
                  title: "01 — YOUR STACK",
                  meta: "Keep your tools. Fix the gaps.",
                  body: "CRM. Product analytics. Billing. Support. Marketing. We connect what you already have before asking you to buy something new.",
                },
                {
                  title: "02 — YOUR SIGNALS",
                  meta: "This is revenue you already paid for.",
                  body: "Usage spikes. New users. Champion changes. Buying intent. Account risk. We turn those signals into something your team can actually use.",
                },
                {
                  title: "03 — YOUR TEAM",
                  meta: "Your engineers build the product. We build the revenue layer.",
                  body: "No unnecessary rebuilds. No endless manual workflows. Just the infrastructure your commercial teams need.",
                },
                {
                  title: "04 — THE RESULT",
                  meta: "Less chasing. More knowing.",
                  body: "Know which account matters. Why it matters. Who should act. And what should happen next.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-card p-8">
                  <h3 className="text-lg font-display font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium text-oxblood">{item.meta}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
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
              The signal arrives.{" "}
              <span className="voice font-normal text-oxblood">The action is missing.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Four signals your company generated this week. Nobody acted on them. These aren't
              hypotheticals. <span className="voice text-lg font-normal text-oxblood">This is a normal Tuesday.</span>
            </p>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {GAP.map((g) => (
              <div key={g.n} className="border-t border-border pt-5">
                <p className="voice text-xl text-oxblood">{g.n}</p>
                <h3 className="mt-3 text-lg">{g.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {g.points.map((point) => (
                    <li key={point} className="list-disc pl-5 marker:text-oxblood">
                      {point}
                    </li>
                  ))}
                </ul>
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
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Same stack. Same team. Completely different outcome.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-cream-deep/45 p-8 sm:p-12">
              <p className="inline-block bg-oxblood/10 px-2 py-1 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-oxblood">Before</p>
              <ol className="mt-8 space-y-4">
                {[
                  ["Fragmented data", "Product events in one warehouse, deals in the CRM, tickets somewhere else."],
                  ["Manual workflows", "A rep exports a CSV every Monday to guess who to call."],
                  ["Missed signals", "Upgrade intent and churn risk are discovered after the fact."],
                  ["Slow action", "Days between a buying moment and the first human response."],
                ].map(([t, d]) => (
                  <li key={t} className="group flex items-start gap-4">
                    <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-oxblood/20 text-lg text-oxblood">×</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg font-bold">{t}</p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                        {d}
                      </p>
                    </div>
                    <span className="ml-auto mt-2 text-muted-foreground/60">→</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl border border-[#cdb9b4] bg-[#d7c8c3] p-8 text-foreground sm:p-12">
              <p className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-oxblood">After — with Growen</p>
              <ol className="mt-8 space-y-4">
                {[
                  ["Connected systems", "One account record joining product usage, billing, CRM and support."],
                  ["Automated signal flow", "Events stream in and score themselves against your ICP in real time."],
                  ["Prioritised action", "A ranked daily queue: who to contact, why, and with what evidence."],
                  ["Revenue impact", "Faster response, earlier expansion, fewer silent churns — measured on a dashboard."],
                ].map(([t, d]) => (
                  <li key={t} className="group flex items-start gap-4">
                    <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-oxblood-soft text-ink-foreground"><Check className="h-5 w-5" /></span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg font-bold">{t}</p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-foreground/80 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                        {d}
                      </p>
                    </div>
                    <span className="ml-auto mt-2 text-ink-muted">→</span>
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
            Five stages. One job:{" "}
            <span className="voice font-normal">turn signals into action.</span>
          </h2>
          <p className="mt-5 max-w-xl text-ink-muted">
            One architecture. Five stages. Every real signal gets a system action and a business
            outcome.
          </p>
          <StageBoard />
        </div>
      </section>

      {/* ILLUSTRATIVE IMPACT — light */}
      <section className="bg-cream-deep px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-oxblood">Illustrative</p>
              <h2 className="mt-5 max-w-xl text-4xl leading-tight">
                We don't just automate.{" "}
                <span className="voice font-normal text-oxblood">We measure what changed.</span>
              </h2>
            </div>
            <Link to="/contact" className="text-sm underline underline-offset-4">
              Request the audit that proves it
            </Link>
          </div>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Industry benchmarks move when systems talk to each other.
          </p>

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
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-oxblood-soft">Our approach</p>
          <h2 className="mt-5 text-4xl leading-tight text-ink-foreground">
            Audit. Build. Optimize.{" "}
            <span className="voice font-normal">In that order, every time.</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
            Every engagement follows the same three phases — because guessing is expensive, and
            skipping steps is how revenue systems turn into spaghetti.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-3 lg:self-center" id="about">
              {APPROACH_PHASES.map((phase) => {
                const isActive = activeApproach === phase.id;

                return (
                  <button
                    key={phase.id}
                    type="button"
                    onMouseEnter={() => setActiveApproach(phase.id)}
                    onFocus={() => setActiveApproach(phase.id)}
                    className={`w-full rounded-2xl border p-5 text-left transition-colors duration-300 ease-out ${
                      isActive
                        ? "border-oxblood-soft/60 bg-ink-foreground/[0.06]"
                        : "border-ink-border bg-transparent hover:border-oxblood-soft/40 hover:bg-ink-foreground/[0.03]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="voice text-xl text-oxblood-soft">{phase.number}</span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-display font-bold text-ink-foreground">
                          {phase.label}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{phase.intro}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-3xl border border-ink-border bg-ink/95 p-7 text-ink-foreground shadow-xl lg:min-h-[31rem]">
              <p className="eyebrow text-oxblood-soft">{activePhase.number}</p>
              <h3 className="mt-5 text-3xl font-display font-extrabold text-ink-foreground">
                {activePhase.label}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-muted">{activePhase.intro}</p>

              <ul className="mt-7 space-y-4 text-sm leading-relaxed text-ink-muted">
                {activePhase.points.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-oxblood-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-4">
                <p className="eyebrow text-oxblood-soft">Output</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{activePhase.output}</p>
              </div>
            </div>
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
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-4 font-display font-bold text-ink-foreground transition-transform hover:-translate-y-0.5 lg:w-1/2 lg:justify-center"
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
