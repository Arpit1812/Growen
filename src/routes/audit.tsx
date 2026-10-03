import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CALENDLY_URL = "https://calendly.com/arpitdogra418/30min?hide_event_type_details=1";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Get the 14-Day Revenue Infrastructure Audit — Growen" },
      {
        name: "description",
        content:
          "Book a conversation about Growen's 14-Day Revenue Infrastructure Audit: a cross-functional review of your systems, signal flow, and next steps.",
      },
    ],
  }),
  component: Audit,
});

const AUDIT_POINTS = [
  "Built for 10–100-person B2B teams",
  "Hear from Sales, Marketing, Customer Success and Tech",
  "Verify answers against CRM and tool data",
  "Trace signals across Capture, Score, Route, Engage and Expand",
  "Find signal leaks, scoring gaps and missed ownership",
  "Leave with scored findings, tier fit and next steps",
];

const APPROACH_PHASES = [
  {
    id: "audit",
    number: "PHASE 01",
    label: "AUDIT",
    intro: "Map the system. Find the leaks.",
    parts: [
      {
        label: "AUDIT",
        title: "Map the system. Find the leaks.",
        body: "We dig into your systems, data, workflows and teams to understand how revenue information actually moves through the business.",
        lead: "We look at:",
        items: ["Product → CRM → Billing → Support → Marketing → Data → Teams"],
        output: "A clear map of your current revenue infrastructure — and where signals disappear.",
      },
      {
        label: "DIAGNOSE",
        title: "Find the opportunities worth fixing.",
        body: "Not every gap deserves an engineering project. We identify the highest-value problems and separate:",
        items: ["Quick wins", "Structural fixes", "Future opportunities"],
        after: "Then prioritize them based on: Revenue impact × effort × urgency",
        output: "A prioritized opportunity register.",
      },
    ],
  },
  {
    id: "build",
    number: "PHASE 02",
    label: "BUILD",
    intro: "Understand the opportunity. Engineer the system.",
    parts: [
      {
        label: "DESIGN",
        title: "Turn the diagnosis into an architecture.",
        body: "We translate the highest-value opportunities into practical system design.",
        lead: "Signal → Decision → Action",
        items: [
          "What data moves and where it moves",
          "How accounts are scored",
          "Who receives the signal",
          "What happens next",
          "What should remain human",
        ],
        output: "Your Revenue Infrastructure Blueprint.",
      },
      {
        label: "BUILD",
        title: "Engineer the workflows.",
        body: "Now we build. We configure and connect the systems you already use — and introduce new infrastructure only where it is actually necessary.",
        lead: "CRM. APIs. Data. Automation. Scoring. Enrichment. AI. Workflows.",
        items: ["No unnecessary rebuilds.", "No “replace your entire stack” exercise."],
        output: "A working revenue system your team can actually use.",
      },
    ],
  },
  {
    id: "optimize",
    number: "PHASE 03",
    label: "OPTIMIZE",
    intro: "Measure. Improve. Repeat.",
    parts: [
      {
        label: "OPTIMIZE",
        title: "Measure. Improve. Repeat.",
        body: "Revenue infrastructure isn’t finished when the workflow goes live. We monitor what happens next.",
        items: [
          "Are the signals useful?",
          "Are the right people acting on them?",
          "Are workflows converting?",
          "Where is the system breaking?",
        ],
        after: "We use the results to improve scoring, workflows, routing and automation.",
        output: "A healthier system — and a team that knows how to operate it.",
      },
    ],
  },
];

function Audit() {
  const [activePhaseId, setActivePhaseId] = useState(APPROACH_PHASES[0]!.id);
  const activePhase = APPROACH_PHASES.find((phase) => phase.id === activePhaseId)!;

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <section className="bg-cream-deep px-6 py-3 sm:py-4 lg:py-5">
          <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-center lg:gap-10">
            <div className="min-w-0">
              <p className="eyebrow text-oxblood">Book a conversation</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-foreground">
                Choose a time to talk
              </h2>
              <div className="mt-3 overflow-hidden rounded-2xl border border-cream-deep bg-white shadow-sm">
                <iframe
                  title="Book a conversation about the 14-Day Audit"
                  src={CALENDLY_URL}
                  className="block h-[700px] w-full min-w-[320px] border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="py-1 lg:py-2">
              <p className="eyebrow text-oxblood">14-Day Revenue Infrastructure Audit</p>
              <h1 className="mt-3 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
                Find where revenue signals get lost—and what to do next.
              </h1>
              <ul className="mt-6 space-y-4">
                {AUDIT_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base leading-relaxed text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-oxblood" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-cream px-6 py-12 text-foreground sm:py-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">14-day audit</h2>
            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 font-display font-bold text-primary-foreground transition-colors hover:bg-oxblood-soft">
                  Book on Calendly
                </button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100vw-2rem)] max-w-4xl border-border bg-cream p-4 sm:p-6">
                <DialogTitle className="pr-8 font-display text-xl font-bold text-foreground">
                  Book a conversation
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Choose a time to discuss the 14-Day Revenue Infrastructure Audit.
                </DialogDescription>
                <div className="overflow-hidden rounded-xl border border-border bg-white">
                  <iframe
                    title="Calendly booking popup for the 14-Day Audit"
                    src={CALENDLY_URL}
                    className="block h-[min(68vh,700px)] min-h-[480px] w-full border-0"
                    loading="lazy"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section className="section-dark px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-oxblood-soft">Our approach</p>
            <h2 className="mt-5 max-w-4xl text-4xl leading-tight text-ink-foreground sm:text-5xl">
              Audit. Build. Optimize. <span className="voice font-normal">In that order, every time.</span>
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-ink-muted">
              Every engagement follows the same three phases — because guessing is expensive, and skipping steps is how revenue systems turn into spaghetti.
              <br />
              We audit first. We build what the audit tells us to. We optimize what we built.
            </p>

            <div className="mt-12 grid grid-cols-3 border-y border-ink-border">
              {APPROACH_PHASES.map((phase) => {
                const isActive = activePhaseId === phase.id;
                return (
                  <button
                    key={phase.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActivePhaseId(phase.id)}
                    onMouseEnter={() => setActivePhaseId(phase.id)}
                    onFocus={() => setActivePhaseId(phase.id)}
                    className={`group relative px-3 py-5 text-left transition-colors sm:px-6 sm:py-6 ${isActive ? "text-ink-foreground" : "text-ink-muted hover:text-ink-foreground"}`}
                  >
                    <span className="eyebrow block text-oxblood-soft">{phase.number}</span>
                    <span className="mt-2 block font-display text-sm font-extrabold sm:text-lg">{phase.label}</span>
                    <span className="mt-1 hidden text-xs leading-relaxed text-ink-muted sm:block">{phase.intro}</span>
                    <span className={`absolute inset-x-3 bottom-0 h-0.5 transition-colors sm:inset-x-6 ${isActive ? "bg-oxblood-soft" : "bg-transparent group-hover:bg-ink-border"}`} />
                  </button>
                );
              })}
            </div>

            <div key={activePhase.id} className="mt-8 grid gap-5 md:grid-cols-2" aria-live="polite">
              {activePhase.parts.map((part) => (
                <article key={part.label} className="stage-card rounded-2xl border border-ink-border bg-ink-foreground/[0.035] p-6 sm:p-8">
                  <p className="eyebrow text-oxblood-soft">{part.label}</p>
                  <h3 className="mt-3 text-2xl font-display font-extrabold text-ink-foreground">{part.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-muted">{part.body}</p>
                  {part.lead && <p className="mt-5 font-display font-bold text-ink-foreground">{part.lead}</p>}
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted">
                    {part.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-oxblood-soft" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {part.after && <p className="mt-5 leading-relaxed text-ink-muted">{part.after}</p>}
                  <div className="mt-7 border-t border-ink-border pt-5">
                    <p className="eyebrow text-oxblood-soft">Output</p>
                    <p className="mt-2 font-medium leading-relaxed text-ink-foreground">{part.output}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-10 text-center font-display text-lg font-bold text-ink-foreground sm:text-xl">
              Understand → Prioritize → Architect → Engineer → Compound
            </p>
          </div>
        </section>
        <div
          aria-hidden="true"
          className="h-0.5 w-full bg-oxblood shadow-[0_0_10px_2px_rgba(143,65,77,0.24),0_0_28px_8px_rgba(143,65,77,0.12)]"
        />
      </main>
      <Footer />
    </div>
  );
}
