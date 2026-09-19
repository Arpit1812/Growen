import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
export const Route = createFileRoute("/contact")({ component: Contact });
const ARR = ["<500k", "500k-2M", "2M-8M", "8M-20M", "20M+"];
const MATURITY = [
  "Not sure",
  "Mostly manual",
  "Some automation, disconnected",
  "Connected, underused",
];
const ARR_FOLLOW_UPS: Record<string, { questions: { prompt: string; options: string[] }[] }> = {
  "<500k": {
    questions: [
      { prompt: "What would make your next stage of growth easier?", options: ["Capture more demand", "Follow up consistently", "Understand which accounts matter"] },
      { prompt: "Where does your team lose the most time today?", options: ["Finding account context", "Deciding who to contact", "Following up consistently"] },
    ],
  },
  "500k-2M": {
    questions: [
      { prompt: "Where is your current revenue motion getting stuck?", options: ["Lead follow-up", "Account prioritisation", "Connecting product and CRM data"] },
      { prompt: "Which signal would you most like your team to act on?", options: ["Product usage", "Buying intent", "Expansion or churn risk"] },
    ],
  },
  "2M-8M": {
    questions: [
      { prompt: "What would make your revenue team more proactive?", options: ["Better scoring", "Account and contact context", "Automated next actions"] },
      { prompt: "Where is revenue context hardest to connect?", options: ["Product and CRM", "CRM and customer success", "Billing and expansion"] },
    ],
  },
  "8M-20M": {
    questions: [
      { prompt: "Where do your teams lose the most revenue context?", options: ["Between systems", "Between teams", "Before renewal or expansion"] },
      { prompt: "What needs the clearest operating workflow?", options: ["Signal routing", "Account ownership", "Expansion and renewal action"] },
    ],
  },
  "20M+": {
    questions: [
      { prompt: "What needs to become more measurable across your revenue system?", options: ["Signal coverage", "Forecasting and expansion", "Cross-team operating visibility"] },
      { prompt: "Where would better infrastructure create the most leverage?", options: ["Revenue intelligence", "Automation and routing", "Buying-committee and account insight"] },
    ],
  },
};
function Contact() {
  const [data, setData] = useState<Record<string, string | string[]>>({});
  const [maturity, setMaturity] = useState<number>();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const selectedArr = typeof data.arr === "string" ? data.arr : undefined;
  const set = (key: string, value: string) => {
    setData({ ...data, [key]: value });
    if (errors[key]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[key];
        return next;
      });
    }
  };
  const choose = (key: string, options: string[], required = false) => (
    <fieldset>
      <legend className={`eyebrow ${errors[key] ? "text-red-700" : ""}`}>
        {key.replaceAll("_", " ")}
        {required && <span className="text-oxblood"> *</span>}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((x) => (
          <button
            type="button"
            key={x}
            onClick={() => set(key, x)}
            aria-invalid={Boolean(errors[key])}
            className={`rounded-full border px-4 py-2 text-sm ${data[key] === x ? "border-oxblood bg-primary text-primary-foreground" : errors[key] ? "border-red-700 bg-card" : "border-border bg-card"}`}
          >
            {x}
          </button>
        ))}
      </div>
      {errors[key] && <p className="mt-2 text-xs font-medium text-red-700">{errors[key]}</p>}
    </fieldset>
  );
  const field = (
    key: string,
    label: string,
    required = false,
    type = "text",
  ) => (
    <label className="block">
      <span className={`eyebrow ${errors[key] ? "text-red-700" : ""}`}>
        {label}
        {required && <span className="text-oxblood"> *</span>}
      </span>
      <input
        required={false}
        type={type}
        aria-invalid={Boolean(errors[key])}
        value={(data[key] as string) || ""}
        onChange={(e) => set(key, e.target.value)}
        className={`mt-2 w-full rounded-xl border bg-card px-4 py-3.5 outline-none focus:border-oxblood ${errors[key] ? "border-red-700" : "border-border"}`}
      />
      {errors[key] && <p className="mt-2 text-xs font-medium text-red-700">{errors[key]}</p>}
    </label>
  );
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    const requiredFields: [string, string][] = [
      ["full_name", "Please enter your name."],
      ["company_name", "Please enter your company name."],
      ["work_email", "Please enter your work email."],
      ["employees", "Please select your team size."],
      ["arr", "Please select your ARR range."],
      ["signal_visibility", "Please select how your signals are currently tracked."],
      ["priority", "Please select your highest priority."],
    ];
    requiredFields.forEach(([key, message]) => {
      if (!data[key]) nextErrors[key] = message;
    });
    const productUrl = String(data.product_url || "").trim();
    if (!productUrl) {
      nextErrors.product_url = "Please add your product or website link.";
    } else {
      try {
        const normalizedUrl = /^https?:\/\//i.test(productUrl) ? productUrl : `https://${productUrl}`;
        const parsedUrl = new URL(normalizedUrl);
        if (!parsedUrl.hostname.includes(".")) throw new Error("invalid host");
      } catch {
        nextErrors.product_url = "Enter a valid website link, such as yourcompany.com.";
      }
    }
    if (!maturity) nextErrors.maturity = "Please select how connected your system is.";
    if (selectedArr) {
      ARR_FOLLOW_UPS[selectedArr].questions.forEach((_, index) => {
        if (!data[`arr_follow_up_${index}`]) nextErrors[`arr_follow_up_${index}`] = "Choose one option.";
      });
    }
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error("Please review the highlighted fields.");
      return;
    }
    console.info("Revenue infra audit request", {
      screen1: data,
      revenue_systems_maturity: maturity,
    });
    toast.success("Request received — we'll respond within 2 business days.");
  };
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="grid lg:grid-cols-[.82fr_1.18fr]">
        <section className="section-dark px-6 py-16 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-md lg:ml-auto lg:mr-14">
            <p className="eyebrow text-oxblood-soft">Request a Revenue Audit</p>
            <h1 className="mt-6 text-5xl leading-[.98] text-ink-foreground">
              Your systems already know where revenue is hiding.{" "}
              <span className="voice font-normal">We&apos;ll find it.</span>
            </h1>
            <p className="mt-6 leading-relaxed text-ink-muted">
              Your systems are already generating the signals. We&apos;ll map where they go, where
              they die, and what it&apos;s costing you.
            </p>
            <p className="mt-10 border-t border-ink-border pt-7 text-sm font-bold text-ink-foreground">
              If we don&apos;t find anything worth fixing, we&apos;ll tell you that too.
            </p>
            <ul className="mt-12 space-y-3 border-t border-ink-border pt-7 text-sm text-ink-foreground/90">
              {[
                "Signal-to-revenue map — every source, every hand-off, every break",
                "Prioritized leak register — what's leaking, what's worth fixing, what can wait",
                "Infrastructure blueprint — what to connect, what to automate, what to build first",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <Check className="h-4 w-4 shrink-0 text-signal" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="bg-cream-deep px-6 py-16 lg:h-full lg:overflow-hidden lg:px-14 lg:py-24">
          <div className="mx-auto max-w-2xl lg:mr-auto lg:h-full lg:overflow-y-auto">
            <form noValidate onSubmit={submit} className="space-y-6">
                <div>
                  <p className="eyebrow text-oxblood">Form intro</p>
                  <h2 className="mt-3 text-3xl">Let&apos;s see what&apos;s happening inside your system.</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Start with a few quick details. We&apos;ll take it from there.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {field("full_name", "Name", true)}
                  {field("title", "Title")}
                </div>
                {field("company_name", "Company Name", true)}
                {field(
                  "product_url",
                  "Link to your product / website",
                  true,
                  "url",
                )}
                {field("work_email", "Work Email", true, "email")}
                {choose(
                  "employees",
                  ["1-10", "11-25", "26-50", "51-100", "100+"],
                  true,
                )}
                {choose("arr", ARR, true)}
                {selectedArr && (
                  <div>
                    <p className="eyebrow text-oxblood">A question for your stage</p>
                    <div className="mt-4 space-y-6">
                      {ARR_FOLLOW_UPS[selectedArr].questions.map((question, questionIndex) => (
                        <fieldset key={question.prompt}>
                          <legend className="text-sm font-medium text-foreground">
                            {question.prompt}
                            <span className="text-oxblood"> *</span>
                          </legend>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {question.options.map((option) => (
                              <button
                                type="button"
                                key={option}
                                onClick={() => set(`arr_follow_up_${questionIndex}`, option)}
                                aria-invalid={Boolean(errors[`arr_follow_up_${questionIndex}`])}
                                className={`rounded-full border px-4 py-2 text-sm ${data[`arr_follow_up_${questionIndex}`] === option ? "border-oxblood bg-primary text-primary-foreground" : errors[`arr_follow_up_${questionIndex}`] ? "border-red-700 bg-card" : "border-border bg-card"}`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                          {errors[`arr_follow_up_${questionIndex}`] && <p className="mt-2 text-xs font-medium text-red-700">{errors[`arr_follow_up_${questionIndex}`]}</p>}
                        </fieldset>
                      ))}
                      <label className="block">
                        <span className="text-sm font-medium text-foreground">
                          Is there anything specific you&apos;d like us to look at?
                        </span>
                        <textarea
                          value={(data.arr_context as string) || ""}
                          onChange={(e) => set("arr_context", e.target.value)}
                          rows={4}
                          placeholder="Tell us about the problem, opportunity, or workflow you have in mind."
                          className="mt-3 w-full resize-y rounded-xl border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-oxblood"
                        />
                      </label>
                    </div>
                  </div>
                )}
                <fieldset>
                  <legend className={`eyebrow ${errors.maturity ? "text-red-700" : ""}`}>
                    How connected is your system?{" "}
                    <span className="text-oxblood">*</span>
                  </legend>
                  <div className="mt-3 grid gap-2 sm:grid-cols-4">
                    {MATURITY.map((x, i) => (
                      <button
                        type="button"
                        key={x}
                        onClick={() => setMaturity(i + 1)}
                        className={`rounded-xl border p-2 text-left text-xs ${maturity === i + 1 ? "border-oxblood bg-primary text-primary-foreground" : "border-border bg-card"}`}
                      >
                        0{i + 1}
                        <span className="mt-2 block">{x}</span>
                      </button>
                    ))}
                  </div>
                  {errors.maturity && <p className="mt-2 text-xs font-medium text-red-700">{errors.maturity}</p>}
                </fieldset>
                <p className="eyebrow text-oxblood">
                  A few details about your system
                </p>
                {choose(
                  "signal_visibility",
                  [
                    "Automatically in our CRM",
                    "A spreadsheet or dashboard",
                    "Nowhere formal yet",
                    "Not sure",
                  ],
                  true,
                )}
                {choose(
                  "priority",
                  [
                    "Generate new revenue",
                    "Convert trials / leads",
                    "Increase expansion",
                    "Reduce churn",
                    "Connect systems",
                  ],
                  true,
                )}
                <label className="block">
                  <span className="eyebrow">
                    Is there a specific problem or opportunity you've noticed?
                  </span>
                  <textarea
                    value={(data.specific_problem as string) || ""}
                    onChange={(e) => set("specific_problem", e.target.value)}
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3.5 outline-none focus:border-oxblood"
                  />
                </label>
                <button className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display font-bold text-primary-foreground">
                  Request Revenue Audit <ArrowRight className="h-4 w-4" />
                </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
