export type Stage = "CAPTURE" | "SCORE" | "ROUTE" | "ENGAGE" | "EXPAND";
export type AssessmentItem = {
  id: string;
  stage: Stage;
  text: string;
  choices: string[];
};

export const stages: Stage[] = [
  "CAPTURE",
  "SCORE",
  "ROUTE",
  "ENGAGE",
  "EXPAND",
];

export const items: AssessmentItem[] = [
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

export const advice: Record<Stage, string> = {
  CAPTURE: "Make important customer and product signals reliably visible.",
  SCORE: "Define a shared way to distinguish high-fit, high-intent activity.",
  ROUTE: "Clarify ownership, handoffs and expected response times.",
  ENGAGE: "Make follow-up consistent and context-aware.",
  EXPAND:
    "Create a repeatable review of customer health, risk and expansion signals.",
};

export type AssessmentSummary = {
  stage: Record<Stage, number | null>;
  scored: number;
  overall: number | null;
  category: "Foundational" | "Developing" | "Established" | null;
  coverageLabel: "Insufficient coverage" | "High coverage" | "Limited coverage";
  lowest: Stage[];
  strongest: Stage[];
};

export function calculate(
  answers: Record<string, number | null>,
): AssessmentSummary {
  const stage = {} as Record<Stage, number | null>;
  stages.forEach((currentStage) => {
    const values = items
      .filter((item) => item.stage === currentStage && item.id in answers)
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
