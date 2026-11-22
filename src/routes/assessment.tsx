import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GlowingSeparator } from "@/components/site/GlowingSeparator";
import { PreFooterClosingBanner } from "@/components/site/PreFooterClosingBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  advice,
  calculate,
  items,
  stages,
  type AssessmentSummary,
  type Stage,
} from "@/lib/assessment-data";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Free Revenue Infrastructure Assessment — Growen" },
      {
        name: "description",
        content:
          "Take the free 3-minute technical diagnostic to find where your revenue processes may be losing visibility, speed or opportunity across Capture, Score, Route, Engage, and Expand.",
      },
      { property: "og:url", content: "https://www.thegrowen.com/assessment" },
      { property: "og:title", content: "Free Revenue Infrastructure Assessment — Growen" },
      {
        property: "og:description",
        content:
          "Find the gaps in your revenue infrastructure across 5 stages with our 10-point technical diagnostic.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.thegrowen.com/assessment" }],
  }),
  component: Assessment,
});

const EVALUATION_STAGES = [
  {
    stage: "01. CAPTURE",
    question: "Are the right product, customer and account signals being collected?",
    focus: "Focus: Data collection and signal visibility.",
  },
  {
    stage: "02. SCORE",
    question: "Can your business identify meaningful customer activity and prioritize the signals that matter?",
    focus: "Focus: Qualification, prioritization and customer context.",
  },
  {
    stage: "03. ROUTE",
    question: "Do important signals reach the right teams, systems and people at the right time?",
    focus: "Focus: Integrations, handoffs and workflow routing.",
  },
  {
    stage: "04. ENGAGE",
    question: "Are teams taking timely, relevant action based on customer signals?",
    focus: "Focus: Sales, customer success and automated workflows.",
  },
  {
    stage: "05. EXPAND",
    question: "Are customer insights being used to identify opportunities for retention, expansion and long-term growth?",
    focus: "Focus: Retention, expansion opportunities and revenue growth.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Answer a few questions",
    description: "Tell us how signals currently move through your product, CRM and revenue workflows.",
  },
  {
    step: "02",
    title: "Get your assessment results",
    description: "See your overall score, five-stage breakdown and the areas that may need the most attention.",
  },
  {
    step: "03",
    title: "Understand what to improve",
    description: "Get a practical first recommendation and identify where to focus next. If you need a deeper investigation, you can explore Growen's 14-Day Revenue Audit.",
  },
];

const WHAT_YOU_GET = [
  {
    number: "01",
    title: "Five-Stage Maturity Scorecard",
    description: "See how your revenue infrastructure performs across Capture, Score, Route, Engage and Expand.",
  },
  {
    number: "02",
    title: "Your Primary Opportunity Area",
    description: "Identify the stage that appears to need the most attention and understand why it matters.",
  },
  {
    number: "03",
    title: "Recommended Next Steps",
    description: "Get practical actions to help you start addressing the gaps and prioritize what to improve first.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is the assessment really free?",
    answer: "Yes. The assessment is free and takes approximately three minutes to complete. There is no obligation to purchase a service.",
  },
  {
    question: "Do I need to connect my systems?",
    answer: "No. You only need to answer questions about your current processes. The free assessment does not require access to your CRM, product analytics or other systems.",
  },
  {
    question: "Will this identify every issue in my revenue infrastructure?",
    answer: "No. It provides an initial indication based on your answers. A deeper investigation is needed to validate system-level issues.",
  },
  {
    question: "What happens after I complete it?",
    answer: "You'll receive a result showing your primary area of concern, why it matters and a recommended first action. You can then decide whether you want to explore it further with Growen.",
  },
  {
    question: "What's the difference between the Free Assessment and the $100 Audit?",
    answer: "The assessment is a quick, directional evaluation based on your answers. The Audit is a paid and detailed investigation of your actual revenue systems, workflows and handoffs, followed by a prioritized blueprint.",
  },
];

function getMaturityInfo(overall: number | null) {
  const score = overall ?? 0;
  if (score < 25) {
    return {
      level: 1,
      name: "Disconnected",
      badge: "Stage 1: Disconnected (Foundation Stage)",
      description: "High optimization potential identified across foundational pipeline layers.",
    };
  } else if (score < 50) {
    return {
      level: 2,
      name: "Reactive",
      badge: "Stage 2: Reactive (Foundation Stage)",
      description: "High optimization potential identified across 4 pipeline layers.",
    };
  } else if (score < 70) {
    return {
      level: 3,
      name: "Automated",
      badge: "Stage 3: Automated (Developing Stage)",
      description: "Core signal handoffs active with targeted optimization opportunities.",
    };
  } else if (score < 85) {
    return {
      level: 4,
      name: "Intelligent",
      badge: "Stage 4: Intelligent (Advanced Stage)",
      description: "Strong signal orchestration with high-intent prioritization.",
    };
  } else {
    return {
      level: 5,
      name: "Compounding",
      badge: "Stage 5: Compounding (Mature Stage)",
      description: "Unified, high-velocity revenue engine operating continuously.",
    };
  }
}

function getStageStatus(val: number | null) {
  if (val === null) return "Pending";
  if (val < 40) return "Critical Gap";
  if (val < 67) return "Partial";
  if (val < 85) return "Functional";
  return "Optimized";
}

function getDynamicDiagnosis(summary: AssessmentSummary) {
  const validStages = stages.filter((s) => summary.stage[s] !== null);
  if (!validStages.length) {
    return {
      core: "Your answers suggest that important customer signals may not consistently reach the teams responsible for acting on them.",
      detail: "Complete the diagnostic questions to see a customized stage breakdown.",
      weakest: stages[0],
      strongest: stages[0],
    };
  }

  const sorted = [...validStages].sort(
    (a, b) => (summary.stage[a] ?? 0) - (summary.stage[b] ?? 0),
  );
  const weakest = sorted[0];
  const strongest = sorted[sorted.length - 1];
  const weakestScore = summary.stage[weakest] ?? 0;
  const strongestScore = summary.stage[strongest] ?? 0;

  const stageLabels: Record<Stage, string> = {
    CAPTURE: "Capture",
    SCORE: "Score",
    ROUTE: "Route",
    ENGAGE: "Engage",
    EXPAND: "Expand",
  };

  const contextMap: Record<Stage, string> = {
    CAPTURE: "High-value customer events are slipping by unrecorded, leaving downstream teams blind.",
    SCORE: "Reps lack a reliable way to prioritize accounts, spending equal effort on low and high-intent leads.",
    ROUTE: "Signals stall in manual handoffs between systems and reps instead of routing instantaneously.",
    ENGAGE: "High-intent accounts are likely cooling off before reps follow up with product context.",
    EXPAND: "Customer health and renewal risks are spotted reactively, leaving expansion revenue on the table.",
  };

  let detail = "";
  if (strongest !== weakest && strongestScore > weakestScore) {
    detail = `Your team captures and routes signals reasonably well (${strongestScore}%), but execution breaks down at the ${stageLabels[weakest]} layer (${weakestScore}%). ${contextMap[weakest]}`;
  } else {
    detail = `Execution is currently constrained at the ${stageLabels[weakest]} layer (${weakestScore}%). ${contextMap[weakest]}`;
  }

  return {
    core: "Your answers suggest that important customer signals may not consistently reach the teams responsible for acting on them.",
    detail,
    weakest,
    strongest,
  };
}

function AnimatedScoreDonut({ score }: { score: number | null }) {
  const [displayScore, setDisplayScore] = useState(0);
  const value = score ?? 0;
  const circumference = 326.73;
  useEffect(() => {
    const frame = requestAnimationFrame(() => setDisplayScore(value));
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return (
    <div
      className="relative grid h-36 w-36 shrink-0 place-items-center sm:h-40 sm:w-40"
      role="img"
      aria-label={
        score === null
          ? "Overall score unavailable due to insufficient coverage"
          : "Overall assessment score: " + score + "%"
      }
    >
      <svg className="-rotate-90" viewBox="0 0 120 120" aria-hidden="true">
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="rgb(241 236 230 / 14%)"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="var(--oxblood-soft)"
          strokeLinecap="round"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - displayScore / 100)}
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
      <span className="absolute font-display text-3xl font-extrabold text-ink-foreground sm:text-4xl">
        {score === null ? "—" : score + "%"}
      </span>
    </div>
  );
}

function Assessment() {
  const [page, setPage] = useState<"start" | "questions" | "preview">("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [email, setEmail] = useState("");
  const [requestState, setRequestState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [requestError, setRequestError] = useState("");
  const advanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentItem = items[questionIndex];
  const currentStage = currentItem ? currentItem.stage : stages[0];
  const currentStageIndex = stages.indexOf(currentStage);

  const summary = calculate(answers);
  const maturity = getMaturityInfo(summary.overall);
  const diagnosis = getDynamicDiagnosis(summary);

  // Auto-scroll utility
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const finish = () => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    try {
      localStorage.setItem(
        "growen-assessment",
        JSON.stringify({ answers, expiresAt: Date.now() + 86400000 }),
      );
    } catch {
      // localStorage may fail in private mode
    }
    setPage("preview");
    scrollToTop();
  };

  const handleSelect = (choiceIndex: number | null) => {
    if (!currentItem) return;
    const newAnswers = { ...answers, [currentItem.id]: choiceIndex };
    setAnswers(newAnswers);

    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);

    advanceTimerRef.current = setTimeout(() => {
      if (questionIndex < items.length - 1) {
        setQuestionIndex((prev) => prev + 1);
        scrollToTop();
      } else {
        finish();
      }
    }, 300);
  };

  // Keyboard shortcut listener (A, B, C, D)
  useEffect(() => {
    if (page !== "questions" || !currentItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      const key = e.key.toUpperCase();
      if (key === "A") handleSelect(0);
      else if (key === "B") handleSelect(1);
      else if (key === "C") handleSelect(2);
      else if (key === "D") handleSelect(3);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, [page, questionIndex, currentItem]);

  const sendReport = async () => {
    if (!email.trim()) return;
    setRequestState("sending");
    setRequestError("");

    // Ensure all 10 question IDs are present for backend validation
    const completeAnswers: Record<string, number | null> = { ...answers };
    items.forEach((item) => {
      if (!(item.id in completeAnswers)) {
        completeAnswers[item.id] = null;
      }
    });

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ answers: completeAnswers, email: email.trim() }),
      });
      if (!response.ok) {
        const result: unknown = await response.json().catch(() => null);
        const message =
          result &&
          typeof result === "object" &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "Your report request failed. Please try again.";
        setRequestError(message);
        setRequestState("error");
        return;
      }
      setRequestState("sent");
    } catch {
      setRequestError(
        "We couldn’t reach the report service. Please try again shortly.",
      );
      setRequestState("error");
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        {/* ========================================================================= */}
        {/* 1. LANDING SCREEN (page === "start")                                      */}
        {/* ========================================================================= */}
        {page === "start" && (
          <>
            {/* Hero Header & CTA */}
            <section className="section-dark px-6 py-20 sm:py-28">
              <div className="mx-auto max-w-4xl">
                <p className="eyebrow text-oxblood-soft">Free assessment</p>
                <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] text-ink-foreground sm:text-6xl lg:text-7xl">
                  Find the gaps in your{" "}
                  <span className="voice font-normal text-oxblood-soft">
                    revenue infrastructure.
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                  Your product, CRM, billing and customer systems contain valuable signals. But are those signals reaching the people and workflows that can turn them into revenue? Take the free assessment to identify where your revenue processes may be losing visibility, speed or opportunity.
                </p>

                {/* 3 Quick Highlights */}
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-3.5 rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-4 text-left">
                    <Clock className="h-5 w-5 shrink-0 text-oxblood-soft" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">Duration</p>
                      <p className="font-display text-sm font-bold text-ink-foreground">Average completion time: 3 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-4 text-left">
                    <BarChart3 className="h-5 w-5 shrink-0 text-oxblood-soft" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">Diagnostic</p>
                      <p className="font-display text-sm font-bold text-ink-foreground">10-Point Technical Diagnostic with directional result</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-4 text-left">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-oxblood-soft" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">Benchmark</p>
                      <p className="font-display text-sm font-bold text-ink-foreground">Benchmarked against 200+ scaling B2B revenue architectures</p>
                    </div>
                  </div>
                </div>

                {/* CTA & Micro-text */}
                <div className="mt-10 flex flex-col items-start gap-3">
                  <button
                    onClick={() => {
                      setQuestionIndex(0);
                      setPage("questions");
                      scrollToTop();
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-bold text-primary-foreground shadow-lg transition-all hover:bg-oxblood-soft hover:scale-[1.02] sm:text-base"
                  >
                    Start Free Assessment <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-ink-muted">
                    (Free. No commitment. No technical setup required.)
                  </p>
                </div>
              </div>
            </section>

            <GlowingSeparator />

            {/* Section 1: What does the assessment evaluate? */}
            <section className="bg-cream px-6 py-20 sm:py-24">
              <div className="mx-auto max-w-7xl">
                <p className="eyebrow text-oxblood">Diagnostic scope</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
                  What does the assessment evaluate?
                </h2>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">
                  Your business generates valuable customer signals every day. The challenge is making sure those signals are captured, understood and turned into the right actions. This assessment evaluates five stages of your revenue infrastructure:
                </p>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                  {EVALUATION_STAGES.map((s) => (
                    <div
                      key={s.stage}
                      className="interactive-lift flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-oxblood/40"
                    >
                      <div>
                        <p className="eyebrow text-xs text-oxblood">{s.stage}</p>
                        <h3 className="mt-3 font-display text-base font-bold leading-snug text-foreground">
                          {s.question}
                        </h3>
                      </div>
                      <p className="mt-6 border-t border-border/70 pt-4 text-xs font-medium text-muted-foreground">
                        {s.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <GlowingSeparator />

            {/* Section 2: How it works */}
            <section className="bg-cream-deep px-6 py-20 sm:py-24">
              <div className="mx-auto max-w-7xl">
                <p className="eyebrow text-oxblood">Process</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
                  How it works
                </h2>
                <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                  A clearer picture in three simple steps.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {HOW_IT_WORKS_STEPS.map((step) => (
                    <div
                      key={step.step}
                      className="interactive-lift rounded-2xl border border-border bg-card p-8 shadow-sm"
                    >
                      <span className="voice text-4xl font-normal text-oxblood">
                        {step.step}
                      </span>
                      <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <GlowingSeparator />

            {/* Section 3: What You Get */}
            <section className="bg-cream px-6 py-20 sm:py-24">
              <div className="mx-auto max-w-7xl">
                <p className="eyebrow text-oxblood">Deliverables</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
                  What You Get
                </h2>
                <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                  More than a score. A clearer view of where your revenue infrastructure needs attention.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {WHAT_YOU_GET.map((item) => (
                    <div
                      key={item.number}
                      className="interactive-lift rounded-2xl border border-border bg-card p-8 shadow-sm"
                    >
                      <p className="eyebrow text-xs text-oxblood">{item.number}</p>
                      <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-xl border border-border/80 bg-cream-deep/50 p-4 text-center text-xs font-medium text-muted-foreground">
                  This is a self-reported snapshot. The $100 Audit verifies it against your actual systems.
                </div>
              </div>
            </section>

            <GlowingSeparator />

            {/* Section 5: Frequently Asked Questions */}
            <section className="section-dark px-6 py-20 sm:py-24">
              <div className="mx-auto max-w-4xl">
                <p className="eyebrow text-oxblood-soft">FAQ</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-foreground sm:text-4xl lg:text-5xl">
                  Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="mt-10 divide-y divide-ink-border border-y border-ink-border">
                  {FAQ_ITEMS.map((faq, i) => (
                    <AccordionItem key={faq.question} value={`faq-${i}`} className="border-none py-2">
                      <AccordionTrigger className="py-4 text-left font-display text-base font-bold text-ink-foreground hover:no-underline hover:text-oxblood-soft sm:text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Pre-Footer Closing Banner */}
            <PreFooterClosingBanner />
          </>
        )}

        {/* ========================================================================= */}
        {/* 2. QUIZ SCREEN (page === "questions") - 1 Question Per Screen             */}
        {/* ========================================================================= */}
        {page === "questions" && currentItem && (
          <section className="min-h-[80vh] px-6 py-10 sm:py-16">
            <div className="mx-auto max-w-3xl">
              {/* Stage Category & Question Counters */}
              <div className="flex items-center justify-between">
                <p className="eyebrow text-xs text-oxblood sm:text-sm">
                  {currentStage}
                </p>
                <div className="text-right">
                  <p className="text-xs font-medium text-muted-foreground">
                    Section {currentStageIndex + 1} of 5
                  </p>
                  <p className="text-xs font-bold text-foreground">
                    Question {questionIndex + 1} of 10
                  </p>
                </div>
              </div>

              {/* 5-Stage Stepper Bar */}
              <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-4 border-b border-border/70 pb-3">
                {stages.map((stage, idx) => {
                  const isActive = idx === currentStageIndex;
                  const isCompleted = idx < currentStageIndex;
                  return (
                    <div key={stage} className="relative flex flex-col items-center">
                      <span
                        className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-colors ${
                          isActive
                            ? "text-oxblood"
                            : isCompleted
                              ? "text-foreground"
                              : "text-muted-foreground/60"
                        }`}
                      >
                        0{idx + 1} {stage}
                      </span>
                      <div
                        className={`mt-2.5 h-[3px] w-full rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-oxblood"
                            : isCompleted
                              ? "bg-oxblood/40"
                              : "bg-border/60"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Question Heading */}
              <div className="mt-10 sm:mt-12">
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-normal leading-[1.2] tracking-tight text-ink">
                  {currentItem.text}
                </h1>
              </div>

              {/* 4 Choice Cards Stack */}
              <div className="mt-8 space-y-3 sm:space-y-3.5">
                {currentItem.choices.map((choice, index) => {
                  const isSelected = answers[currentItem.id] === index;
                  const letter = String.fromCharCode(65 + index);
                  return (
                    <button
                      type="button"
                      key={choice}
                      onClick={() => handleSelect(index)}
                      className={`group flex w-full items-center justify-between rounded-2xl p-4 sm:p-5 text-left transition-all duration-150 ${
                        isSelected
                          ? "border-2 border-oxblood bg-oxblood/[0.06] text-ink font-medium shadow-sm"
                          : "border border-border/90 bg-card text-foreground hover:border-oxblood/40 hover:bg-cream-deep/40"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-bold font-mono transition-colors ${
                            isSelected
                              ? "border-oxblood bg-oxblood/15 text-oxblood"
                              : "border-border bg-cream text-muted-foreground group-hover:border-oxblood/30 group-hover:text-foreground"
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed">
                          {choice}
                        </span>
                      </div>

                      {/* RHS Selection Checkmark */}
                      <div className="ml-3 shrink-0">
                        {isSelected ? (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-oxblood text-white shadow-sm">
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="h-5 w-5 rounded-full border border-border/60 group-hover:border-border" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Sub-actions: Not sure text link + Keyboard Hint */}
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs">
                <button
                  type="button"
                  onClick={() => handleSelect(null)}
                  className={`text-left font-medium transition-colors ${
                    answers[currentItem.id] === null
                      ? "text-oxblood font-bold underline underline-offset-4"
                      : "text-muted-foreground hover:text-foreground underline underline-offset-4"
                  }`}
                >
                  Not sure or Skip question
                </button>
                <span className="text-muted-foreground/75 text-[11px] sm:text-xs">
                  Tip: Press A-D to select · Auto-advances
                </span>
              </div>

              {/* Navigation Footer */}
              <div className="mt-10 sm:mt-12 flex items-center justify-between border-t border-border/60 pt-6">
                <button
                  type="button"
                  onClick={() => {
                    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
                    if (questionIndex > 0) {
                      setQuestionIndex((prev) => prev - 1);
                      scrollToTop();
                    } else {
                      setPage("start");
                      scrollToTop();
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 font-display text-sm font-bold text-foreground transition-all hover:bg-cream-deep hover:border-oxblood/30"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
                    if (questionIndex < items.length - 1) {
                      setQuestionIndex((prev) => prev + 1);
                      scrollToTop();
                    } else {
                      finish();
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-oxblood-soft hover:scale-[1.02]"
                >
                  {questionIndex === items.length - 1 ? "See my snapshot" : "Next"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 3. RESULTS / SNAPSHOT PAGE (page === "preview")                           */}
        {/* ========================================================================= */}
        {page === "preview" && (
          <>
            <section className="px-6 py-14 sm:py-20">
              <div className="mx-auto max-w-5xl">
                {/* Header Section */}
                <p className="eyebrow text-xs text-oxblood sm:text-sm">
                  YOUR REVENUE INFRASTRUCTURE SNAPSHOT
                </p>
                <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
                  Where your pipeline is{" "}
                  <span className="voice font-normal text-oxblood">
                    leaking today.
                  </span>
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Self-reported architectural baseline across 10 diagnostic checkpoints. Use this to pinpoint where signals stall.
                </p>

                {/* Dark Maturity Overview Card */}
                <div className="mt-10 overflow-hidden rounded-3xl bg-ink p-7 sm:p-10 text-ink-foreground shadow-xl">
                  <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                    <AnimatedScoreDonut score={summary.overall} />

                    <div className="flex-1">
                      <p className="eyebrow text-xs text-oxblood-soft">
                        OVERALL MATURITY
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                        {maturity.badge}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-ink-muted">
                        {maturity.description}
                      </p>

                      {/* 5-Level Maturity Meter Visual Scale */}
                      <div className="mt-6 flex flex-col gap-2">
                        <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-ink-muted">
                          <span className={maturity.level === 1 ? "text-oxblood-soft" : ""}>L1 Disconnected</span>
                          <span className={maturity.level === 2 ? "text-oxblood-soft" : ""}>L2 Reactive</span>
                          <span className={maturity.level === 3 ? "text-oxblood-soft" : ""}>L3 Automated</span>
                          <span className={maturity.level === 4 ? "text-oxblood-soft" : ""}>L4 Intelligent</span>
                          <span className={maturity.level === 5 ? "text-oxblood-soft" : ""}>L5 Compounding</span>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5">
                          {[1, 2, 3, 4, 5].map((lvl) => (
                            <div
                              key={lvl}
                              className={`h-2 rounded-full transition-all duration-500 ${
                                lvl <= maturity.level
                                  ? "bg-oxblood-soft"
                                  : "bg-ink-foreground/15"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Dynamic Diagnosis in Card */}
                      <div className="mt-6 border-t border-ink-border pt-4">
                        <p className="text-sm leading-relaxed text-ink-muted">
                          {diagnosis.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5-Stage Maturity Scorecard Grid */}
                <div className="mt-10">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-3.5">
                    {stages.map((stage) => {
                      const score = summary.stage[stage];
                      const isWeakest = stage === diagnosis.weakest;
                      const isStrongest = stage === diagnosis.strongest && diagnosis.strongest !== diagnosis.weakest;
                      const status = getStageStatus(score);

                      return (
                        <div
                          key={stage}
                          className={`relative flex flex-col justify-between rounded-2xl p-5 transition-all ${
                            isWeakest
                              ? "border-2 border-oxblood bg-card shadow-md ring-2 ring-oxblood/10"
                              : isStrongest
                                ? "border-2 border-primary/40 bg-card shadow-sm"
                                : "border border-border bg-card shadow-sm"
                          }`}
                        >
                          {/* Weakest Stage Floating Badge */}
                          {isWeakest && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-oxblood px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase text-white shadow">
                              PRIMARY BOTTLENECK
                            </span>
                          )}

                          {isStrongest && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary/20 border border-primary/30 px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase text-foreground">
                              STRONGEST LAYER
                            </span>
                          )}

                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-oxblood">
                              {stage}
                            </p>
                            <p className="mt-2 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                              {score === null ? "—" : `${score}%`}
                            </p>
                          </div>

                          <div className="mt-4 border-t border-border/60 pt-2 text-xs font-semibold text-muted-foreground">
                            {score === null ? "Pending" : status}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section: Your Biggest Opportunity */}
                <div className="mt-8 rounded-2xl border border-border bg-cream-deep/60 p-6 sm:p-8">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-oxblood" />
                    <p className="eyebrow text-xs text-oxblood">YOUR BIGGEST OPPORTUNITY</p>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
                    Focus on the {diagnosis.weakest} Layer
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground font-medium">
                    {diagnosis.core}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {diagnosis.detail}
                  </p>
                  <div className="mt-4 rounded-xl border border-border bg-card p-4 text-xs font-semibold text-oxblood">
                    Recommended First Action: {advice[diagnosis.weakest]}
                  </div>
                </div>

                {/* ========================================================================= */}
                {/* 4. FULL DIAGNOSTIC REPORT OPT-IN CARD & AUDIT BRIDGE                      */}
                {/* ========================================================================= */}
                <div className="mt-12 overflow-hidden rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-lg">
                  <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                    {/* Left Column: Details & Form */}
                    <div className="lg:col-span-7">
                      <p className="eyebrow text-xs text-oxblood">FULL DIAGNOSTIC REPORT</p>
                      <h2 className="mt-3 font-display text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
                        Get your stage-by-stage action plan.
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Your snapshot shows where your revenue infrastructure stands. Your full report goes deeper.
                      </p>

                      {/* Bullet List */}
                      <ul className="mt-6 space-y-2.5 text-sm font-medium text-foreground">
                        <li className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 shrink-0 text-oxblood stroke-[3]" />
                          <span>Stage-by-stage gap breakdown</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 shrink-0 text-oxblood stroke-[3]" />
                          <span>A closer look at your strongest and weakest areas</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 shrink-0 text-oxblood stroke-[3]" />
                          <span>Your primary opportunity areas</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 shrink-0 text-oxblood stroke-[3]" />
                          <span>Recommended CRM & webhook fixes</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 shrink-0 text-oxblood stroke-[3]" />
                          <span>30-day quick-win roadmap</span>
                        </li>
                      </ul>

                      {/* Form or Confirmation State */}
                      <div className="mt-8">
                        {requestState !== "sent" ? (
                          <div>
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                sendReport();
                              }}
                              className="flex flex-col gap-3 sm:flex-row sm:items-center"
                            >
                              <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                  setRequestError("");
                                  setRequestState("idle");
                                }}
                                placeholder="Work email"
                                className="w-full flex-1 rounded-full border border-border bg-cream px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-oxblood focus:outline-none focus:ring-1 focus:ring-oxblood"
                              />
                              <button
                                type="submit"
                                disabled={!email.trim() || requestState === "sending"}
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-display text-sm font-bold text-primary-foreground shadow transition-all hover:bg-oxblood-soft disabled:opacity-50"
                              >
                                {requestState === "sending" ? (
                                  "Preparing report…"
                                ) : (
                                  <>
                                    <Mail className="h-4 w-4" /> Email my PDF report
                                  </>
                                )}
                              </button>
                            </form>
                            <p className="mt-2 text-xs text-muted-foreground">
                              (We'll send your personalized report to your inbox. No obligation to purchase anything.)
                            </p>
                            {requestState === "error" && (
                              <p className="mt-3 text-xs font-semibold text-destructive">
                                {requestError}
                              </p>
                            )}
                          </div>
                        ) : (
                          <div className="rounded-2xl border border-oxblood/30 bg-oxblood/10 p-5 text-left">
                            <div className="flex items-center gap-2 text-oxblood">
                              <CheckCircle2 className="h-5 w-5" />
                              <h4 className="font-display text-base font-bold text-foreground">
                                Your report is on its way.
                              </h4>
                            </div>
                            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
                              We've prepared your personalized Revenue Infrastructure Report. Check your inbox for the PDF.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Stacked PDF Report Document Mockup */}
                    <div className="relative flex justify-center lg:col-span-5">
                      <div className="relative w-full max-w-sm">
                        {/* Background Document 3 */}
                        <div className="absolute right-0 top-6 h-72 w-52 translate-x-4 rotate-6 rounded-xl border border-border/80 bg-cream shadow-sm opacity-60" />

                        {/* Background Document 2 */}
                        <div className="absolute right-4 top-3 h-72 w-52 translate-x-2 rotate-3 rounded-xl border border-border/80 bg-card shadow-md opacity-85" />

                        {/* Foreground Document 1 */}
                        <div className="relative mx-auto h-80 w-60 rounded-xl border border-border bg-white p-5 shadow-xl sm:w-64">
                          <div className="flex items-center justify-between border-b border-border/60 pb-3">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-oxblood">
                              Growen
                            </span>
                            <span className="rounded bg-cream px-1.5 py-0.5 text-[9px] font-bold text-muted-foreground">
                              Executive PDF report
                            </span>
                          </div>

                          <div className="mt-4 h-2.5 w-3/4 rounded-full bg-border/80" />
                          <div className="mt-2 h-1.5 w-1/2 rounded-full bg-border/50" />

                          {/* Mini Stat Circles & Visual Bars */}
                          <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-lg border border-border/60 bg-cream/40 p-2 text-center">
                              <div className="mx-auto h-7 w-7 rounded-full border-2 border-oxblood flex items-center justify-center text-[9px] font-bold text-oxblood">
                                {summary.overall ?? 53}%
                              </div>
                              <span className="mt-1 block text-[8px] font-bold text-muted-foreground">
                                Maturity
                              </span>
                            </div>
                            <div className="rounded-lg border border-border/60 bg-cream/40 p-2 text-center">
                              <div className="mx-auto h-7 w-7 rounded-full border-2 border-foreground flex items-center justify-center text-[9px] font-bold text-foreground">
                                5
                              </div>
                              <span className="mt-1 block text-[8px] font-bold text-muted-foreground">
                                Stages
                              </span>
                            </div>
                          </div>

                          {/* Mock Content Lines */}
                          <div className="mt-5 space-y-2">
                            <div className="h-1.5 w-full rounded-full bg-border/40" />
                            <div className="h-1.5 w-5/6 rounded-full bg-border/40" />
                            <div className="h-1.5 w-4/6 rounded-full bg-border/40" />
                          </div>

                          {/* Mini Bar Chart Mockup */}
                          <div className="mt-5 flex items-end gap-1.5 border-t border-border/60 pt-3">
                            <div className="h-5 w-1/5 rounded-t bg-oxblood/50" />
                            <div className="h-8 w-1/5 rounded-t bg-oxblood" />
                            <div className="h-7 w-1/5 rounded-t bg-foreground/70" />
                            <div className="h-4 w-1/5 rounded-t bg-oxblood/30" />
                            <div className="h-6 w-1/5 rounded-t bg-oxblood/70" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audit Bridge Banner Link (matching Screenshot 2) */}
                <div className="mt-8 text-center">
                  <Link
                    to="/audit"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-oxblood"
                  >
                    Want our engineers to verify these numbers inside your live CRM and product database? Book a 14-Day Revenue Audit ($100) →
                  </Link>
                </div>

                {/* Deep-Dive Audit Bridge Expanded Card */}
                <div className="mt-8 rounded-3xl border border-oxblood/30 bg-oxblood/[0.04] p-8 sm:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                      <p className="eyebrow text-xs text-oxblood">DEEP-DIVE AUDIT BRIDGE</p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                        Want to investigate the gaps more deeply?
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Your assessment provides an initial view based on your answers. Growen's 14-Day Revenue Audit takes the next step by examining your actual systems, workflows and handoffs to identify what needs attention.
                      </p>
                      <p className="mt-3 text-xs font-bold text-oxblood">
                        $100 · 14-Day Audit (The full Audit fee is credited toward implementation if you proceed with Growen.)
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-2 md:items-end">
                      <Link
                        to="/audit"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-bold text-primary-foreground shadow transition-all hover:bg-oxblood-soft hover:scale-[1.02]"
                      >
                        Explore the 14-Day Audit <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-[11px] text-muted-foreground">
                        (No obligation. Your assessment report is yours to keep.)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pre-Footer Closing Banner */}
            <PreFooterClosingBanner />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
