import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/assessment")({ component: Assessment });
type Stage = "CAPTURE" | "SCORE" | "ROUTE" | "ENGAGE" | "EXPAND";
type Item = { id: string; stage: Stage; text: string; choices: string[] };
const stages: Stage[] = ["CAPTURE", "SCORE", "ROUTE", "ENGAGE", "EXPAND"];
const items: Item[] = [
  {
    id: "CAP-01",
    stage: "CAPTURE",
    text: "Where do important customer or product signals usually get recorded?",
    choices: [
      "They are often missed or not recorded",
      "They are recorded manually in separate places",
      "Most are recorded in tools, but the tools are not fully connected",
      "Key signals are captured reliably in a shared system or connected workflow",
    ],
  },
  {
    id: "CAP-02",
    stage: "CAPTURE",
    text: "When a meaningful customer event happens, how reliably does your team see it?",
    choices: [
      "We usually find out late or not at all",
      "Someone has to check or pass it along manually",
      "Some important events create alerts, but coverage is incomplete",
      "Important events are consistently captured and visible to the people who need them",
    ],
  },
  {
    id: "SCO-01",
    stage: "SCORE",
    text: "How does your team decide which leads or customer signals deserve attention first?",
    choices: [
      "There is no consistent approach",
      "It mostly depends on individual judgment",
      "We use shared criteria, but apply them inconsistently or manually",
      "We use clear, repeatable criteria that are applied consistently",
    ],
  },
  {
    id: "SCO-02",
    stage: "SCORE",
    text: "How well can your team distinguish a high-intent, good-fit opportunity from a low-priority one?",
    choices: [
      "We generally cannot tell until someone investigates",
      "Experienced team members can often tell, but it is informal",
      "We combine several signals or fields, but gaps remain",
      "Fit and intent are assessed consistently using defined signals or rules",
    ],
  },
  {
    id: "ROU-01",
    stage: "ROUTE",
    text: "When a priority signal appears, how does it reach the person responsible for acting on it?",
    choices: [
      "There is no clear owner or handoff",
      "Someone notices it and forwards it manually",
      "Some signals are assigned or alerted automatically, but not all",
      "Priority signals reliably reach a clear owner through a defined workflow",
    ],
  },
  {
    id: "ROU-02",
    stage: "ROUTE",
    text: "How reliably does your team respond within an expected timeframe after an important signal appears?",
    choices: [
      "Timing is unpredictable and not actively tracked",
      "People try to respond quickly, but it depends on the individual",
      "We have expectations or reminders, but follow-through varies",
      "Response expectations are clear and performance is tracked or enforced",
    ],
  },
  {
    id: "ENG-01",
    stage: "ENGAGE",
    text: "How does your team follow up with a promising lead or important customer signal?",
    choices: [
      "Follow-up is often missed or entirely reactive",
      "Follow-up is mostly manual and varies by person",
      "We have templates or sequences for some situations",
      "Follow-up is timely and uses relevant context through defined workflows",
    ],
  },
  {
    id: "ENG-02",
    stage: "ENGAGE",
    text: "How consistently is follow-up adapted to a person’s needs, behavior, or stage?",
    choices: [
      "Most people receive the same generic response",
      "Personalization depends on an individual’s effort",
      "Some segments or signals trigger different follow-up, but coverage is partial",
      "Follow-up paths consistently reflect relevant context and customer behavior",
    ],
  },
  {
    id: "EXP-01",
    stage: "EXPAND",
    text: "How do you spot customers ready to grow—or at risk?",
    choices: [
      "We usually notice only when a renewal or problem is close",
      "People spot opportunities or risks through manual check-ins",
      "We review usage, health, or renewal indicators, but not consistently",
      "Relevant changes are monitored and surfaced early through a defined process",
    ],
  },
  {
    id: "EXP-02",
    stage: "EXPAND",
    text: "What happens when a customer shows an expansion signal or declining engagement?",
    choices: [
      "There is no consistent next step",
      "Someone follows up when they notice it",
      "Some signals create tasks or reviews, but follow-through varies",
      "Signals trigger a clear owner, next action, and follow-up process",
    ],
  },
];
const advice: Record<Stage, string> = {
  CAPTURE: "Make important customer and product signals reliably visible.",
  SCORE: "Define a shared way to distinguish high-fit, high-intent activity.",
  ROUTE: "Clarify ownership, handoffs and expected response times.",
  ENGAGE: "Make follow-up consistent and context-aware.",
  EXPAND:
    "Create a repeatable review of customer health, risk and expansion signals.",
};

function AnimatedScoreDonut({ score }: { score: number | null }) {
  const [displayScore, setDisplayScore] = useState(0);
  const value = score ?? 0;
  const circumference = 326.73;
  useEffect(() => {
    const frame = requestAnimationFrame(() => setDisplayScore(value));
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return (
    <div className="relative grid h-40 w-40 shrink-0 place-items-center" role="img" aria-label={score === null ? "Overall score unavailable due to insufficient coverage" : "Overall assessment score: " + score + "%"}>
      <svg className="-rotate-90" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" fill="none" stroke="rgb(241 236 230 / 14%)" strokeWidth="10" />
        <circle cx="60" cy="60" r="52" fill="none" stroke="var(--oxblood-soft)" strokeLinecap="round" strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={circumference * (1 - displayScore / 100)} className="transition-[stroke-dashoffset] duration-1000 ease-out" />
      </svg>
      <span className="absolute font-display text-3xl font-extrabold text-ink-foreground">{score === null ? "—" : score + "%"}</span>
    </div>
  );
}
function Assessment() {
  const [page, setPage] = useState<
    "start" | "questions" | "preview" | "report"
  >("start");
  const [section, setSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [email, setEmail] = useState("");
  const qs = items.filter((item) => item.stage === stages[section]);
  const done = qs.every((q) => q.id in answers);
  const summary = calculate(answers);
  const choose = (id: string, value: number | null) =>
    setAnswers({ ...answers, [id]: value });
  const finish = () => {
    localStorage.setItem(
      "growen-assessment",
      JSON.stringify({ answers, expiresAt: Date.now() + 86400000 }),
    );
    setPage("preview");
  };
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        {page === "start" && (
          <section className="section-dark px-6 py-24">
            <div className="mx-auto max-w-4xl">
              <p className="eyebrow text-oxblood-soft">Free assessment</p>
              <h1 className="mt-6 text-5xl leading-[.98] text-ink-foreground sm:text-6xl">
                Find the gaps in your{" "}
                <span className="voice text-oxblood-soft">
                  revenue infrastructure.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
                Take this short assessment to see how your team captures
                signals, prioritizes opportunities, routes them to the right
                people, follows up, and identifies ways to grow existing
                accounts. Get an instant, directional result in about 2–4
                minutes.
              </p>
              <p className="mt-6 border-l-2 border-oxblood-soft pl-4 text-sm text-ink-foreground/80">
                Your result is based on your answers. It does not involve access
                to or verification of your systems.
              </p>
              <div className="mt-6 rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 p-5 text-sm text-ink-foreground/85">
                <p className="font-display font-bold text-ink-foreground">
                  How scoring works
                </p>
                <p className="mt-2 leading-relaxed">
                  Every response counts: A = 0, B = 1, C = 2 and D = 3. If
                  you select “Not sure”, it counts as a completed response with
                  a score of 0.
                </p>
              </div>
              <button
                onClick={() => setPage("questions")}
                className="mt-10 rounded-full bg-primary px-7 py-4 font-display font-bold text-primary-foreground"
              >
                Start free assessment
              </button>
            </div>
          </section>
        )}
        {page === "questions" && (
          <section className="px-6 py-16">
            <div className="mx-auto max-w-3xl">
              <div className="flex justify-between">
                <p className="eyebrow text-oxblood">{stages[section]}</p>
                <p className="text-sm text-muted-foreground">
                  Section {section + 1} of 5
                </p>
              </div>
              <div className="mt-3 h-1 bg-border">
                <div
                  className="h-full bg-oxblood"
                  style={{ width: (section + 1) * 20 + "%" }}
                />
              </div>
              <div className="mt-12 space-y-10">
                {qs.map((q) => (
                  <fieldset key={q.id}>
                    <legend className="font-display text-xl font-bold">
                      {q.text}
                    </legend>
                    <div className="mt-4 grid gap-3">
                      {q.choices.map((choice, index) => (
                        <button
                          type="button"
                          key={choice}
                          onClick={() => choose(q.id, index)}
                          className={
                            (answers[q.id] === index
                              ? "border-oxblood bg-oxblood/10"
                              : "border-border bg-card") +
                            " rounded-xl border p-4 text-left text-sm"
                          }
                        >
                          <span className="mr-3 text-oxblood">
                            {String.fromCharCode(65 + index)}
                          </span>
                          {choice}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => choose(q.id, null)}
                        className={
                          (answers[q.id] === null && q.id in answers
                            ? "border-oxblood bg-oxblood/10"
                            : "border-border bg-card") +
                          " rounded-xl border p-4 text-left text-sm"
                        }
                      >
                        Not sure
                      </button>
                    </div>
                  </fieldset>
                ))}
              </div>
              <div className="mt-12 flex justify-between">
                <button
                  onClick={() =>
                    section ? setSection(section - 1) : setPage("start")
                  }
                  className="rounded-full border border-border px-6 py-3 font-display font-bold"
                >
                  <ArrowLeft className="mr-2 inline h-4 w-4" />
                  Back
                </button>
                <button
                  disabled={!done}
                  onClick={() =>
                    section === 4 ? finish() : setSection(section + 1)
                  }
                  className="rounded-full bg-primary px-6 py-3 font-display font-bold text-primary-foreground disabled:opacity-50"
                >
                  {section === 4 ? "See my snapshot" : "Next"}
                  <ArrowRight className="ml-2 inline h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        )}
        {(page === "preview" || page === "report") && (
          <section className="px-6 py-16">
            <div className="mx-auto max-w-5xl">
              <p className="eyebrow text-oxblood">
                Your revenue infrastructure snapshot
              </p>
              <h1 className="mt-5 text-5xl">
                A directional{" "}
                <span className="voice text-oxblood">starting point.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                This is based on your responses—not a verified audit. Use it to
                decide where to investigate first.
              </p>
              <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-ink p-8 text-ink-foreground sm:flex-row sm:items-center">
                <AnimatedScoreDonut score={summary.overall} />
                <div>
                  <p className="eyebrow text-oxblood-soft">Overall</p>
                  <p className="mt-2 font-display text-3xl font-extrabold">
                    {summary.category || "Limited coverage"}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                    {summary.coverageLabel} · {summary.scored} of 10 questions scored. This is an initial self-reported snapshot, not a verified audit.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-5">
                {stages.map((stage) => (
                  <div
                    key={stage}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <p className="eyebrow text-oxblood">{stage}</p>
                    <p className="mt-2 text-2xl font-bold">
                      {summary.stage[stage] === null
                        ? "—"
                        : summary.stage[stage] + "%"}
                    </p>
                  </div>
                ))}
              </div>
              {page === "preview" && (
                <div className="mt-10 rounded-2xl border border-oxblood/30 bg-oxblood/10 p-7">
                  <p className="eyebrow text-oxblood">Full report</p>
                  <h2 className="mt-3 text-3xl">
                    Get your personalized PDF report.
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Provide your email to receive the full stage-level report
                    and practical next steps.
                  </p>
                  <button
                    onClick={() => setPage("report")}
                    className="mt-6 rounded-full bg-primary px-6 py-3 font-display font-bold text-primary-foreground"
                  >
                    <Mail className="mr-2 inline h-4 w-4" />
                    Get full report
                  </button>
                </div>
              )}
              {page === "report" && (
                <div className="mt-10 rounded-2xl border border-border bg-card p-7">
                  <h2 className="text-3xl">Email your report</h2>
                  <p className="mt-3 text-muted-foreground">
                    We’ll use this only to deliver your report.
                  </p>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work email"
                    className="mt-6 w-full rounded-xl border border-border bg-cream px-4 py-3"
                  />
                  <button
                    disabled={!email}
                    onClick={() => {
                      localStorage.setItem("growen-assessment-email", email);
                      alert(
                        "Your report request has been prepared. Gmail delivery will activate once credentials are connected.",
                      );
                    }}
                    className="mt-4 rounded-full bg-primary px-6 py-3 font-display font-bold text-primary-foreground disabled:opacity-50"
                  >
                    Email my PDF report
                  </button>
                  <div className="mt-10 border-t border-border pt-6">
                    <p className="eyebrow text-oxblood">
                      Your full-report priorities
                    </p>
                    {summary.lowest.map((stage) => (
                      <p key={stage} className="mt-4 leading-relaxed">
                        <strong>{stage}:</strong> {advice[stage]}
                      </p>
                    ))}
                    <Link
                      to="/audit"
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-display font-bold text-ink-foreground"
                    >
                      Explore the 14-Day Audit{" "}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
export function calculate(answers: Record<string, number | null>) {
  const stage = {} as Record<Stage, number | null>;
  stages.forEach((currentStage) => {
    const values = items
      .filter((item) => item.stage === currentStage && item.id in answers)
      // A "Not sure" response is stored as null, but intentionally counts as
      // a completed zero-score response rather than being excluded.
      .map((item) => answers[item.id] ?? 0);
    stage[currentStage] = values.length
      ? Math.round(
          (values.reduce((sum, value) => sum + value, 0) /
            (values.length * 3)) *
            100,
        )
      : null;
  });
  const valid = stages.filter((currentStage) => stage[currentStage] !== null);
  const scored = Object.keys(answers).length;
  const overall =
    scored >= 5 && valid.length >= 4
      ? Math.round(
          valid.reduce(
            (sum, currentStage) => sum + (stage[currentStage] || 0),
            0,
          ) / valid.length,
        )
      : null;
  const lowestValue = valid.length
    ? Math.min(...valid.map((currentStage) => stage[currentStage] || 0))
    : null;
  const highestValue = valid.length
    ? Math.max(...valid.map((currentStage) => stage[currentStage] || 0))
    : null;
  const highCoverage = scored >= 8 && valid.length === 5;
  const limitedCoverage = overall !== null && !highCoverage;
  return {
    stage,
    scored,
    overall,
    category:
      overall === null
        ? null
        : overall < 40
          ? "Foundational"
          : overall < 70
            ? "Developing"
            : "Established",
    coverageLabel:
      overall === null
        ? "Insufficient coverage"
        : highCoverage
          ? "High coverage"
          : limitedCoverage
            ? "Limited coverage"
            : "Insufficient coverage",
    lowest:
      lowestValue === null
        ? []
        : valid.filter((currentStage) => stage[currentStage] === lowestValue),
    strongest:
      highestValue === null
        ? []
        : valid.filter((currentStage) => stage[currentStage] === highestValue),
  };
}
