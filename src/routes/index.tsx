import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { GlowingSeparator } from "@/components/site/GlowingSeparator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dashboard from "@/assets/dashboard.jpg";
import team from "@/assets/team.jpg";
import { APPROACH_PHASES } from "./audit";

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
    tip: "Find important activity.",
    subtitle: "Catch what your systems already know.",
    name: "CAPTURE",
    signal: "A trial account invites four teammates in 48 hours.",
    action: "Turn activity into an account-level signal.",
    outcome: "One account. One owner. Immediate visibility.",
  },
  {
    id: "score",
    tip: "Decide what matters.",
    subtitle: "Not every signal matters equally.",
    name: "SCORE",
    signal: "Usage jumps 3× while the champion reads your pricing page.",
    action: "Usage + firmographic score pushes it into high-intent — in real time, not on Monday.",
    outcome: "Your team works the accounts that matter — not the entire queue.",
  },
  {
    id: "route",
    tip: "Get it to the right person.",
    subtitle: "Right signal. Right person. Right moment.",
    name: "ROUTE",
    signal: "Nine users from the same company.",
    action: "Group the activity. Identify the account. Assign the owner.",
    outcome: "Nine leads become one deal. Days become minutes.",
  },
  {
    id: "engage",
    tip: "Trigger the next action.",
    subtitle: "Act while intent is still high.",
    name: "ENGAGE",
    signal: "Onboarding stalls at step two on a $40K account.",
    action: "A five-touch sequence fires automatically.",
    outcome: "Stalled deals restart. Nobody had to notice.",
  },
  {
    id: "expand",
    tip: "Turn activity into growth.",
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

const INDUSTRIES = [
  ["Developer Tools", "Product usage -> Account identification -> Intent scoring -> Sales action"],
  ["Fleet Software", "Usage change -> Account risk -> Customer response"],
  ["API-driven SaaS", "API adoption -> Expansion signal -> Owner alert"],
  ["Transportation Management", "Operational shift -> Buying signal -> Routed action"],
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
                      ? "border-oxblood-soft bg-oxblood-soft text-ink shadow-[0_0_0_4px_rgba(196,119,128,0.22)]"
                      : isPast
                        ? "border-oxblood-soft/50 bg-ink text-oxblood-soft"
                        : "border-ink-border bg-ink text-ink-muted group-hover:border-oxblood-soft/60"
                  }`}
                >
                  <span className="font-display text-xs font-extrabold">0{i + 1}</span>
                  {isActive && (
                    <span className="absolute -inset-1 animate-ping rounded-full border-2 border-oxblood-soft/80" />
                  )}
                </span>
                <span
                  className={`mt-4 block font-display text-sm font-extrabold tracking-[0.16em] transition-colors ${
                    isActive ? "scale-[1.08] text-ink-foreground" : "text-ink-muted group-hover:text-ink-foreground"
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
                ? "border-oxblood-soft/40 bg-oxblood/25 shadow-[0_0_22px_rgba(196,119,128,0.1)]"
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

function BuiltForStrip() {
  return (
    <div id="industries" className="scroll-mt-28 relative z-30 border-t border-ink-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-x-4 gap-y-4 px-6 py-5 md:grid-cols-[auto_repeat(4,minmax(0,1fr))] md:gap-x-8">
        <span className="eyebrow col-span-2 whitespace-nowrap text-ink-muted md:col-span-1">Built for</span>
        {INDUSTRIES.map(([name, journey], index) => {
          const alignment =
            index === 0
              ? "left-0"
              : index === 3
                ? "right-0 left-auto"
                : "left-0 md:left-1/2 md:-translate-x-1/2";
          return (
            <div key={name} className="group/industry relative min-w-0">
              <button
                type="button"
                aria-describedby={`industry-preview-${index}`}
                className="block min-h-8 w-full text-left"
              >
                <span className="eyebrow block text-pretty text-ink-foreground/70 transition-colors group-hover/industry:text-ink-foreground group-focus-visible/industry:text-ink-foreground">
                  {name}
                </span>
              </button>
              <span
                id={`industry-preview-${index}`}
                role="tooltip"
                className={`pointer-events-none absolute top-full z-50 mt-4 whitespace-nowrap rounded-xl border border-ink-border/80 bg-ink px-4 py-2.5 text-[11px] font-medium text-ink-foreground shadow-2xl transition-all duration-200 ease-out sm:text-xs shadow-[0_16px_36px_rgba(0,0,0,0.5)] -translate-y-1.5 opacity-0 group-hover/industry:pointer-events-auto group-hover/industry:translate-y-0 group-hover/industry:opacity-100 group-focus-within/industry:pointer-events-auto group-focus-within/industry:translate-y-0 group-focus-within/industry:opacity-100 ${alignment}`}
              >
                {journey}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ApproachSection() {
  const [activePhaseId, setActivePhaseId] = useState(APPROACH_PHASES[0]!.id);
  const activePhase = APPROACH_PHASES.find((phase) => phase.id === activePhaseId)!;
  return <section id="insights" className="section-dark px-6 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl">
      <p className="eyebrow text-oxblood-soft">Our approach</p>
      <h2 className="mt-5 max-w-4xl text-4xl leading-tight text-ink-foreground sm:text-5xl">
        Audit. Build. Optimize. <span className="voice font-normal">In that order, every time.</span>
      </h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-ink-muted">
        Every engagement follows the same three phases — because guessing is expensive, and skipping steps is how revenue systems turn into spaghetti.
        <br />We audit first. We build what the audit tells us to. We optimize what we built.
      </p>
      <div className="mt-12 grid grid-cols-3 border-y border-ink-border">
        {APPROACH_PHASES.map((phase) => { const isActive = activePhaseId === phase.id; return <button key={phase.id} type="button" aria-pressed={isActive} onClick={() => setActivePhaseId(phase.id)} onMouseEnter={() => setActivePhaseId(phase.id)} onFocus={() => setActivePhaseId(phase.id)} className={`group relative px-3 py-5 text-left transition-colors sm:px-6 sm:py-6 ${isActive ? "text-ink-foreground" : "text-ink-muted hover:text-ink-foreground"}`}><span className="eyebrow block text-oxblood-soft">{phase.number}</span><span className="mt-2 block font-display text-sm font-extrabold sm:text-lg">{phase.label}</span><span className="mt-1 hidden text-xs leading-relaxed text-ink-muted sm:block">{phase.intro}</span><span className={`absolute inset-x-3 bottom-0 h-0.5 transition-colors sm:inset-x-6 ${isActive ? "bg-oxblood-soft" : "bg-transparent group-hover:bg-ink-border"}`} /></button>; })}
      </div>
      <div key={activePhase.id} className="mt-8 grid gap-5 md:grid-cols-2" aria-live="polite">
        {activePhase.parts.map((part) => <article key={part.label} className="stage-card rounded-2xl border border-ink-border bg-ink-foreground/[0.035] p-6 sm:p-8"><p className="eyebrow text-oxblood-soft">{part.label}</p><h3 className="mt-3 text-2xl font-display font-extrabold text-ink-foreground">{part.title}</h3><p className="mt-4 leading-relaxed text-ink-muted">{part.body}</p>{part.lead && <p className="mt-5 font-display font-bold text-ink-foreground">{part.lead}</p>}<ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted">{part.items.map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-oxblood-soft" aria-hidden="true" /><span>{item}</span></li>)}</ul>{part.after && <p className="mt-5 leading-relaxed text-ink-muted">{part.after}</p>}<div className="mt-7 border-t border-ink-border pt-5"><p className="eyebrow text-oxblood-soft">Output</p><p className="mt-2 font-medium leading-relaxed text-ink-foreground">{part.output}</p></div></article>)}
      </div>
      <p className="mt-10 text-center font-display text-lg font-bold text-ink-foreground sm:text-xl">Understand → Prioritize → Architect → Engineer → Compound</p>
    </div>
  </section>;
}

function WhichPathSection() {
  return (
    <section className="bg-[#383533] px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow text-xs tracking-widest text-oxblood-soft sm:text-sm">Your starting point</p>
          <h2 className="mt-2.5 font-display text-2xl font-extrabold leading-tight text-ink-foreground sm:text-3xl lg:text-4xl">
            Which path is <span className="voice font-normal text-oxblood-soft">right for you?</span>
          </h2>
        </div>

        <div className="mt-8 divide-y divide-ink-border border-y border-ink-border sm:mt-10">
          {/* Path 1 */}
          <div className="group flex flex-col justify-between gap-5 py-6 transition-colors sm:py-7 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-xs tracking-wider text-oxblood-soft">Choose Path 01</span>
                <span className="h-1 w-1 rounded-full bg-ink-muted/40" />
                <span className="text-xs uppercase tracking-wider text-ink-muted">Direct conversation</span>
              </div>
              <h3 className="mt-2.5 font-display text-xl font-extrabold leading-snug text-ink-foreground sm:text-2xl">
                I already know something is wrong.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                30-minute conversation · No commitment. Talk through your systems and bottlenecks.
              </p>
            </div>
            <div className="shrink-0 pt-1 lg:pt-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-all hover:bg-oxblood-soft hover:translate-x-0.5"
              >
                Book a call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Path 2 */}
          <div className="group flex flex-col justify-between gap-5 py-6 transition-colors sm:py-7 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-xs tracking-wider text-oxblood-soft">Choose Path 02</span>
                <span className="h-1 w-1 rounded-full bg-ink-muted/40" />
                <span className="text-xs uppercase tracking-wider text-ink-muted">Diagnostic audit</span>
              </div>
              <h3 className="mt-2.5 font-display text-xl font-extrabold leading-snug text-ink-foreground sm:text-2xl">
                I want Growen to find the gaps.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                14-day diagnostic · Prioritized blueprint. We inspect your systems and tell you what to fix.
              </p>
            </div>
            <div className="shrink-0 pt-1 lg:pt-0">
              <Link
                to="/audit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-all hover:bg-oxblood-soft hover:translate-x-0.5"
              >
                Get the 14 Day Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Closing Banner */}
        <div className="mt-8 text-center sm:mt-10">
          <p className="font-display text-base font-bold text-ink-foreground sm:text-lg lg:text-xl">
            “We are not another tool.{" "}
            <span className="voice font-normal text-oxblood-soft">
              We are the team that connects the tools you already have.
            </span>”
          </p>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const impactRef = useRef<HTMLElement>(null);
  const [impactProgress, setImpactProgress] = useState(0);

  useEffect(() => {
    const element = impactRef.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting) {
        let progress = 0;
        const timer = window.setInterval(() => {
          progress = Math.min(progress + 0.08, 1);
          setImpactProgress(progress);
          if (progress === 1) window.clearInterval(timer);
        }, 35);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* HERO — dark: inside the system */}
      <section className="section-dark relative z-20 overflow-x-clip">
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
              <div className="flex flex-wrap items-start gap-3">
                <div>
                  <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display font-bold text-primary-foreground transition-colors hover:bg-oxblood-soft"
                >
                  Book a call <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="mt-2 text-center text-xs text-ink-muted">30-minute conversation</p>
                </div>
                <div>
                  <Link
                  to="/audit"
                  className="inline-flex items-center gap-2 rounded-full border border-oxblood-soft/60 px-7 py-4 font-display font-bold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                >
                  Get the 14-Day Audit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="mt-2 text-center text-xs text-ink-muted">14-day diagnostic</p>
                </div>
              </div>
              <p className="text-sm text-ink-muted">14-day diagnostic. Clear gaps. Prioritised blueprint.</p>
              <Link to="/" hash="how-it-works" className="text-sm underline underline-offset-4 text-ink-foreground/80">
                See How It Works ↓
              </Link>
            </div>
          </div>

          <div className="interactive-lift relative rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-2 shadow-2xl">
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
                <span className="mt-2 flex items-center gap-1" aria-label="Signal moving through the pipeline">
                  <span className="signal-flow-dot h-1.5 w-1.5 rounded-full bg-signal" />
                  <span className="signal-flow-dot h-1.5 w-1.5 rounded-full bg-signal" />
                  <span className="signal-flow-dot h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
              </span>
            </div>
          </div>
        </div>

        <BuiltForStrip />
      </section>

      <GlowingSeparator />
      <WhichPathSection />
      <GlowingSeparator />

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

            <div className="self-center rounded-2xl border border-oxblood/15 bg-white/40 p-6 shadow-sm sm:p-8">
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
              <p className="eyebrow text-oxblood">What we do</p>
              <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
                Revenue engineering for B2B teams.{" "}
                <span className="voice font-normal">Not another tool.</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                We build the missing layer between your systems and your revenue team.{" "}
                <strong className="font-bold text-oxblood">
                  We&apos;re engineers with commercial judgement.
                </strong>
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              defaultValue="01 — YOUR STACK"
              className="grid gap-4 sm:grid-cols-2"
            >
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
                <AccordionItem key={item.title} value={item.title} className="interactive-lift rounded-2xl border border-border bg-card px-7">
                  <AccordionTrigger className="py-6 text-lg font-display font-bold text-foreground hover:no-underline">
                    <span className="min-w-0 pr-4 text-left">
                      <span className="block">{item.title}</span>
                      <span className="mt-2 block text-sm font-medium text-oxblood">{item.meta}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* THE GAP — light */}
      <section ref={impactRef} className="bg-cream-deep px-6 py-14 sm:py-16 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-screen-2xl">
          {/* Left-aligned Title & Subtext — matching reference */}
          <div className="max-w-3xl">
            <p className="eyebrow text-xs text-oxblood">The gap</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] md:whitespace-nowrap">
              The signal arrives.{" "}
              <span className="voice font-normal text-oxblood">The action is missing.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Four signals your company generated this week. Nobody acted on them. These aren't hypotheticals.{" "}
              <span className="voice font-normal text-oxblood text-base sm:text-lg">This is a normal Tuesday.</span>
            </p>
          </div>

          {/* Horizontal Signal Flow Sequence Table */}
          <div className="mt-6 overflow-x-auto pb-2 sm:mt-7">
            {/* SVG filter for organic brush-stroke effect — defined once, referenced per row */}
            <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
              <defs>
                <filter id="brush-blur" x="-15%" y="-40%" width="130%" height="180%">
                  <feTurbulence
                    type="turbulence"
                    baseFrequency="0.04 0.07"
                    numOctaves="3"
                    seed="8"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="6"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displaced"
                  />
                  <feGaussianBlur in="displaced" stdDeviation="2.5" />
                </filter>
              </defs>
            </svg>
            <div className="min-w-[48rem] divide-y divide-border/60 border-y border-border/60">
              {GAP.map((g) => (
                <div
                  key={g.n}
                  className="grid grid-cols-[1.6fr_auto_1fr_auto_0.9fr_auto_1.4fr] items-center gap-x-5 py-5 transition-colors hover:bg-cream/40"
                >
                  {/* Column 1: Number + Pipe + Title */}
                  <div className="flex items-center gap-2.5 pr-2">
                    <span className="voice text-xl font-normal leading-none text-oxblood sm:text-2xl">
                      {g.n}
                    </span>
                    <span className="select-none text-base font-light leading-none text-border/80" aria-hidden="true">
                      |
                    </span>
                    <h3 className="font-display text-sm font-extrabold leading-tight text-foreground sm:text-base">
                      {g.title}
                    </h3>
                  </div>

                  {/* Organic curved arrow 1 */}
                  <svg
                    className="h-4 w-7 shrink-0 text-oxblood"
                    viewBox="0 0 32 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {/* Gently curved body */}
                    <path d="M 2 10 C 8 7, 18 7, 26 9" />
                    {/* Forked arrowhead — two separate strokes, no fill */}
                    <path d="M 21 5 L 26 9" />
                    <path d="M 21 13 L 26 9" />
                  </svg>

                  {/* Column 2: Step 1 */}
                  <p className="text-xs leading-snug text-foreground/90 sm:text-sm">
                    {g.points[0]}
                  </p>

                  {/* Organic curved arrow 2 */}
                  <svg
                    className="h-4 w-7 shrink-0 text-oxblood"
                    viewBox="0 0 32 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M 2 10 C 8 7, 18 7, 26 9" />
                    <path d="M 21 5 L 26 9" />
                    <path d="M 21 13 L 26 9" />
                  </svg>

                  {/* Column 3: Step 2 */}
                  <p className="text-xs leading-snug text-foreground/90 sm:text-sm">
                    {g.points[1]}
                  </p>

                  {/* Organic curved arrow 3 */}
                  <svg
                    className="h-4 w-7 shrink-0 text-oxblood"
                    viewBox="0 0 32 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M 2 10 C 8 7, 18 7, 26 9" />
                    <path d="M 21 5 L 26 9" />
                    <path d="M 21 13 L 26 9" />
                  </svg>

                  {/* Column 4: Outcome — organic brush-stroke background */}
                  <div className="relative pl-1">
                    {/* SVG brush blob behind the text */}
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      viewBox="0 0 200 56"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <ellipse
                        cx="100"
                        cy="28"
                        rx="96"
                        ry="22"
                        fill="rgb(196 119 128 / 0.22)"
                        style={{
                          filter: "url(#brush-blur)",
                          transform: "rotate(-1deg)",
                          transformOrigin: "center",
                        }}
                      />
                      {/* Slight second layer for organic, uneven feel */}
                      <ellipse
                        cx="98"
                        cy="30"
                        rx="88"
                        ry="17"
                        fill="rgb(185 100 112 / 0.12)"
                        style={{
                          filter: "url(#brush-blur)",
                          transform: "rotate(0.5deg)",
                          transformOrigin: "center",
                        }}
                      />
                    </svg>
                    <span className="relative text-xs font-medium leading-snug text-foreground sm:text-sm">
                      {g.points[2]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
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
            <div className="interactive-lift rounded-3xl border border-border bg-cream-deep/45 p-8 sm:p-12">
              <p className="inline-block bg-oxblood/10 px-2 py-1 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-oxblood sm:text-xl">Before</p>
              <ol className="mt-8 space-y-2">
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
                      <p className="mt-2 max-h-0 max-w-md overflow-hidden text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-200 group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0">
                        {d}
                      </p>
                    </div>
                    <span className="ml-auto mt-2 text-muted-foreground/60">→</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="interactive-lift rounded-3xl border border-[#b69c96] bg-[#c5b1ab] p-8 text-foreground sm:p-12">
              <p className="font-display text-lg font-extrabold uppercase tracking-[0.14em] text-oxblood sm:text-xl">After — with Growen</p>
              <ol className="mt-8 space-y-2">
                {[
                  ["Connected systems", "One account record joining product usage, billing, CRM and support."],
                  ["Automated signal flow", "Events stream in and score themselves against your ICP in real time."],
                  ["Prioritised action", "A ranked daily queue: who to contact, why, and with what evidence."],
                  ["Revenue impact", "Faster response, earlier expansion, fewer silent churns — measured on a dashboard."],
                ].map(([t, d]) => (
                  <li key={t} className="group flex items-start gap-4">
                    <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-oxblood text-ink-foreground"><Check className="h-5 w-5" /></span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg font-bold">{t}</p>
                      <p className="mt-2 max-h-0 max-w-md overflow-hidden text-sm leading-relaxed text-foreground opacity-0 transition-all duration-200 group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0">
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

      <GlowingSeparator />
      {/* SIGNAL ENGINE — dark: inside the system */}
      <section id="how-it-works" className="scroll-mt-28 section-dark px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-oxblood-soft">The Growen Signal Engine</p>
          <h2 className="mt-5 max-w-5xl text-4xl leading-tight text-ink-foreground sm:text-5xl">
            Five stages. One job: <span className="voice font-normal sm:whitespace-nowrap">turn signals into revenue.</span>
          </h2>
          <p className="mt-5 max-w-xl text-ink-muted">
            Every real signal gets a system action and a business outcome.
          </p>
          <StageBoard />
        </div>
      </section>
      <GlowingSeparator />

      {/* ILLUSTRATIVE IMPACT — light */}
      <section className="hidden" aria-hidden="true">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-oxblood">Illustrative</p>
              <h2 className="mt-5 max-w-xl text-4xl leading-tight">
                We don't just automate.
                <br />
                <span className="voice font-normal text-oxblood">We measure what changed.</span>
              </h2>
            </div>
            <Link to="/contact" className="text-sm underline underline-offset-4">
              Book a call
            </Link>
          </div>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Industry benchmarks move when systems talk to each other.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { category: "SIGNAL COVERAGE", target: 2, prefix: "", suffix: " million", detail: "signals captured", compact: false },
              { category: "RESPONSE TIME", target: 1, prefix: "<", suffix: "m", detail: "", compact: false },
              { category: "OPPORTUNITY", target: 80, prefix: "", suffix: "%", detail: "of the leads were invisible", compact: false },
              { category: "REVENUE", target: 30, prefix: "Increased by ", suffix: "% on an average.", detail: "", compact: true },
            ].map((metric) => (
              <div key={metric.category} className="interactive-lift bg-card p-8">
                <p className="eyebrow text-oxblood">{metric.category}</p>
                <p className={`font-display font-extrabold text-oxblood ${metric.compact ? "text-xl leading-snug sm:text-2xl" : "text-4xl"}`}>
                  {metric.prefix}{Math.round(metric.target * impactProgress)}{metric.suffix}
                </p>
                {metric.detail && <p className="mt-1 text-sm font-bold text-foreground">{metric.detail}</p>}
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

      <GlowingSeparator />
      <ApproachSection />
      <GlowingSeparator />
      <section className="hidden" aria-hidden="true">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-oxblood-soft">Our approach</p>
          <h2 className="mt-5 max-w-5xl text-4xl leading-tight text-ink-foreground sm:text-5xl">
            Audit. Build. Optimize. <span className="voice font-normal sm:whitespace-nowrap">In that order, every time.</span>
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-ink-muted">Every engagement follows the same three phases. We audit first, build what the audit tells us to, then optimize what we built.</p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-border bg-ink-border md:grid-cols-3">
            {[["01", "Audit", "Map your stack, signals and hand-offs. Find the leaks worth fixing first.", "Signal-to-revenue blueprint"], ["02", "Build", "Connect systems, define scoring and ship the workflow your team needs.", "Working revenue infrastructure"], ["03", "Optimize", "Monitor what changed, tune the system and compound the gains.", "Ongoing improvement plan"]].map(([number, title, body, output]) => <article key={title} className="bg-ink p-7 sm:p-8"><p className="eyebrow text-oxblood-soft">{number}</p><h3 className="mt-3 text-2xl text-ink-foreground">{title}</h3><p className="mt-4 text-sm leading-relaxed text-ink-muted">{body}</p><p className="mt-7 border-t border-ink-border pt-4 text-sm font-bold text-ink-foreground">{output}</p></article>)}
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
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
