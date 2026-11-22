import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GlowingSeparator } from "@/components/site/GlowingSeparator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CALENDLY_URL =
  "https://calendly.com/hello-growenteam/30min?background_color=f1ece6&text_color=000000&primary_color=8f414d";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "14-Day Revenue Infrastructure Audit ($100) — Growen" },
      {
        name: "description",
        content:
          "Find where revenue signals get lost — and what to do next. A focused review of your revenue infrastructure, systems, data and workflows.",
      },
      { property: "og:url", content: "https://www.thegrowen.com/audit" },
      { property: "og:title", content: "14-Day Revenue Infrastructure Audit ($100) — Growen" },
      {
        property: "og:description",
        content:
          "Find where revenue signals get lost — and what to do next. $100 audit, 100% credited toward implementation.",
      },
      { name: "twitter:title", content: "14-Day Revenue Infrastructure Audit ($100) — Growen" },
      {
        name: "twitter:description",
        content:
          "Find where revenue signals get lost — and what to do next. $100 audit, 100% credited toward implementation.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.thegrowen.com/audit" },
    ],
    scripts: [
      {
        src: "https://assets.calendly.com/assets/external/widget.js",
        async: true,
      },
    ],
  }),
  component: Audit,
});

export const APPROACH_PHASES = [
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

const AUDIT_POINTS = [
  "Map your revenue systems and how they connect.",
  "Find the signals you're missing — and the ones getting lost.",
  "Expose broken handoffs and workflow gaps.",
  "Prioritize opportunities based on impact, effort and urgency.",
  "Leave with a clear blueprint and recommended next steps.",
];

const WHAT_IS_INCLUDED = [
  {
    number: "01",
    title: "System connectivity",
    description:
      "How your product, CRM, billing, support and marketing systems exchange information.",
  },
  {
    number: "02",
    title: "Customer signal coverage",
    description:
      "Which product and customer signals are captured, which are missing, and where useful context gets lost.",
  },
  {
    number: "03",
    title: "Data and workflow quality",
    description:
      "How reliably information moves between systems, teams and workflows.",
  },
  {
    number: "04",
    title: "Revenue handoffs",
    description:
      "How signals reach Sales, Customer Success and other teams — and whether the right actions happen at the right time.",
  },
  {
    number: "05",
    title: "Automation and expansion opportunities",
    description:
      "Where workflows could be improved to support better engagement, retention and expansion.",
  },
];

const WHAT_YOULL_GET = [
  {
    number: "01",
    title: "System Map",
    description:
      "A clear picture of how your product, CRM, billing, support and marketing data live — and how they currently connect (or fail to).",
  },
  {
    number: "02",
    title: "Signal & Leak Register",
    description:
      "A record of the important signals you're capturing, missing or losing between systems and teams.",
  },
  {
    number: "03",
    title: "Opportunity Prioritization",
    description:
      "A ranked list of highest-value gaps & opportunities based on potential revenue impact, effort and urgency.",
  },
  {
    number: "04",
    title: "Revenue Infrastructure Blueprint",
    description:
      "A practical plan of what should be connected, automated, rebuilt or left unchanged.",
  },
  {
    number: "05",
    title: "Execution Roadmap",
    description:
      "A prioritized path outlining what should happen first, what can wait and the recommended implementation sequence.",
  },
];

const AUDIT_PROCESS_STEPS = [
  {
    days: "Days 1–3",
    phase: "Discover",
    description:
      "Understand your business, systems, workflows and current challenges.",
  },
  {
    days: "Days 4–7",
    phase: "Investigate",
    description:
      "Review system connections, customer signals, data flows and revenue handoffs.",
  },
  {
    days: "Days 8–11",
    phase: "Prioritize",
    description:
      "Identify gaps, evaluate opportunities and develop the recommended blueprint.",
  },
  {
    days: "Days 12–14",
    phase: "Deliver",
    description:
      "Present the findings, prioritized roadmap and recommended next steps in a review session.",
  },
];

const AUDIT_FAQS = [
  {
    question: "Who is the 14-Day Revenue Audit for?",
    answer:
      "B2B technology companies with a working product, real customers and revenue that have moved beyond the early stages of growth and now have multiple systems, teams and customer workflows that aren't working as well as they should.",
  },
  {
    question: "Why does the discovery call come before payment?",
    answer:
      "The 20-minute call helps us understand your business, current systems and the problem you're trying to solve. It also lets us confirm whether the Audit is the right fit before you pay. We only take on audits where we know we can uncover meaningful pipeline improvements.",
  },
  {
    question: "What does Growen need from us?",
    answer:
      "Access to the people who understand your product, CRM, billing and customer workflows (usually 2–3 people). We also ask for view-only access to the relevant tools during the Audit so we can verify answers against real data. We never touch production code or live customer workflows.",
  },
  {
    question: "Do we need to give Growen access to all our systems?",
    answer:
      "No. We only need view-only access to the systems relevant to the investigation. We'll agree on the required access before the Audit begins. We never touch production code or live customer workflows.",
  },
  {
    question: "What happens to the $100 Audit fee?",
    answer:
      "The $100 covers the Audit and confirms executive commitment. If you proceed with implementation through Growen, the full $100 is credited toward your project. If you decide not to proceed, you keep the findings, blueprint and roadmap.",
  },
  {
    question: "What happens after the 14 days?",
    answer:
      "We'll walk you through the findings, explain the highest-priority opportunities and discuss possible next steps. You can implement the recommendations with your own team or explore working with Growen.",
  },
  {
    question: "Is the Audit an implementation project?",
    answer:
      "No. The Audit is a diagnostic engagement. It identifies what needs attention and provides a blueprint and roadmap. Implementation is scoped separately based on the findings.",
  },
];

function Audit() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const scriptId = "calendly-widget-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        (window as unknown as { Calendly?: { initInlineWidgets?: () => void } }).Calendly?.initInlineWidgets?.();
      };
    } else {
      (window as unknown as { Calendly?: { initInlineWidgets?: () => void } }).Calendly?.initInlineWidgets?.();
    }
  }, []);

  const scrollToHeroCalendar = () => {
    const el = document.getElementById("hero-calendly");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setIsPopupOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Left: Audit Info & $100 Framing | Right: Calendly)       */}
        {/* ========================================================================= */}
        <section className="bg-cream-deep px-6 py-8 sm:py-12 lg:py-14">
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-center lg:gap-14">
            {/* Left Side: Audit Info & $100 Framing */}
            <div className="py-2 lg:py-4">
              <p className="eyebrow text-oxblood">14-DAY REVENUE INFRASTRUCTURE AUDIT</p>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.25rem]">
                Find where revenue signals get lost —{" "}
                <span className="voice font-normal text-oxblood">
                  and what to do next.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A focused review of your revenue infrastructure, systems, data and workflows to identify where valuable customer signals get lost and what it would take to close the gaps.
              </p>

              <ul className="mt-8 space-y-3.5">
                {AUDIT_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-foreground sm:text-base">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-oxblood" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* $100 Framing Block */}
              <div className="mt-8 rounded-2xl border border-oxblood/25 bg-oxblood/[0.05] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">$100</span>
                  <span className="rounded-full bg-oxblood/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-oxblood">
                    14-Day Audit
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
                  Paid only after the scoping call, and <strong>100% credited</strong> if you build with Growen.
                </p>
              </div>
            </div>

            {/* Right Side: Calendly Widget & Step Tag */}
            <div id="hero-calendly" className="min-w-0">
              <div className="mb-3">
                <span className="inline-block rounded-full border border-oxblood/30 bg-oxblood/10 px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-oxblood">
                  STEP 1: 20-MIN SCOPING CALL · NO PAYMENT TODAY
                </span>
                <h2 className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-foreground">
                  20-Min Audit Scoping Call
                </h2>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border/80 bg-white shadow-sm">
                {/* Calendly inline widget */}
                <div
                  className="calendly-inline-widget"
                  data-url={CALENDLY_URL}
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>
          </div>
        </section>

        <GlowingSeparator />

        {/* ========================================================================= */}
        {/* 2. WHAT IS INCLUDED (5 Inspection Areas)                                  */}
        {/* ========================================================================= */}
        <section className="bg-cream px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-oxblood">What Is Included</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              What does the audit evaluate?
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We examine the systems and workflows behind your customer and revenue operations.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_IS_INCLUDED.map((item, idx) => (
                <div
                  key={item.title}
                  className={`interactive-lift flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:border-oxblood/40 ${
                    idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <span className="voice text-3xl font-normal text-oxblood sm:text-4xl">
                      {item.number}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GlowingSeparator />

        {/* ========================================================================= */}
        {/* 3. WHAT YOU'LL GET (5 Deliverables & The Credit)                          */}
        {/* ========================================================================= */}
        <section className="section-dark px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-oxblood-soft">What You'll Get</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-foreground sm:text-4xl lg:text-5xl">
              Concrete architectural assets,{" "}
              <span className="voice font-normal text-oxblood-soft">not just advice.</span>
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
              A clear picture of where your revenue infrastructure stands — and a practical plan for improving it.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_YOULL_GET.map((del) => (
                <div
                  key={del.title}
                  className="flex flex-col justify-between rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-7 transition-all hover:border-oxblood-soft/40"
                >
                  <div>
                    <p className="eyebrow text-xs text-oxblood-soft">{del.number}</p>
                    <h3 className="mt-3 font-display text-xl font-bold text-ink-foreground">
                      {del.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {del.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* The Credit Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-oxblood-soft/40 bg-oxblood/20 p-7">
                <div>
                  <p className="eyebrow text-xs text-oxblood-soft">THE CREDIT</p>
                  <h3 className="mt-3 font-display text-xl font-bold text-ink-foreground">
                    100% Credited Toward Implementation
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    If you move forward with Growen implementation, the full $100 is credited toward your project.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    If you don't, the audit, findings and blueprint are still yours.
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* 3B. THE 14-DAY PROCESS TIMELINE                                           */}
            {/* ========================================================================= */}
            <div className="mt-20 border-t border-ink-border/80 pt-16">
              <div className="flex flex-col gap-2">
                <p className="eyebrow text-oxblood-soft">Timeline</p>
                <h3 className="font-display text-2xl font-extrabold text-ink-foreground sm:text-3xl">
                  The 14-Day Process
                </h3>
                <p className="text-sm text-ink-muted sm:text-base">
                  A structured, low-overhead schedule designed for busy engineering and revenue leaders.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {AUDIT_PROCESS_STEPS.map((step, idx) => (
                  <div
                    key={step.phase}
                    className="relative rounded-2xl border border-ink-border bg-ink-foreground/[0.03] p-6 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-oxblood/30 px-2.5 py-0.5 text-xs font-bold text-oxblood-soft">
                        {step.days}
                      </span>
                      <span className="text-xs font-mono font-bold text-ink-muted">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 font-display text-lg font-bold text-ink-foreground">
                      {step.phase}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <GlowingSeparator />

        {/* ========================================================================= */}
        {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ)                                       */}
        {/* ========================================================================= */}
        <section className="bg-cream px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow text-oxblood">FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Everything you need to know about the 14-Day Revenue Infrastructure Audit.
            </p>

            <Accordion type="single" collapsible className="mt-12 divide-y divide-border border-y border-border">
              {AUDIT_FAQS.map((faq, i) => (
                <AccordionItem key={faq.question} value={`faq-${i}`} className="border-none py-2">
                  <AccordionTrigger className="py-4 text-left font-display text-base font-bold text-foreground hover:no-underline hover:text-oxblood sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <GlowingSeparator />

        {/* ========================================================================= */}
        {/* 5. PRE-FOOTER SECTION (Option A & Option B)                               */}
        {/* ========================================================================= */}
        <section className="bg-cream-deep px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Option A: Primary Audit CTA */}
              <div className="interactive-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-sm">
                <div>
                  <span className="rounded-full bg-oxblood/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-oxblood">
                    Option A · Direct Audit
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                    Ready to find where your revenue signals stall?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Book the 20-minute scoping call and we'll take it from there.
                  </p>
                </div>

                <div className="mt-8 pt-4">
                  <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        onClick={scrollToHeroCalendar}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-bold text-primary-foreground shadow transition-all hover:bg-oxblood-soft hover:scale-[1.02]"
                      >
                        <Calendar className="h-4 w-4" /> Get the 14-Day Audit
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-[calc(100vw-2rem)] max-w-4xl border-border bg-cream p-4 sm:p-6">
                      <DialogTitle className="pr-8 font-display text-xl font-bold text-foreground">
                        Book a 20-Min Audit Scoping Call
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
              </div>

              {/* Option B: Free Assessment Alternative */}
              <div className="interactive-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-sm">
                <div>
                  <span className="rounded-full bg-foreground/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Option B · Self-Evaluation
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                    Not ready for a Call or a 14-Day Audit?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Start with the free 3-minute assessment and get a directional snapshot of your revenue infrastructure.
                  </p>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    to="/assessment"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-cream px-7 py-3.5 font-display text-sm font-bold text-foreground shadow-sm transition-all hover:bg-cream-deep hover:border-oxblood/40"
                  >
                    Take the Free Assessment <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
