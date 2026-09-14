import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Privacy & Terms — Growen Revenue Infrastructure" },
      {
        name: "description",
        content:
          "How Growen handles your data under GDPR, plus the terms that govern our revenue infrastructure engagements.",
      },
      { property: "og:title", content: "Privacy & Terms — Growen" },
      {
        property: "og:description",
        content: "GDPR-compliant data handling and engagement terms for Growen clients.",
      },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <section className="section-dark px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-oxblood-soft">Legal</p>
          <h1 className="mt-5 text-5xl leading-tight text-ink-foreground">
            Privacy & <span className="voice font-normal">terms.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-14">
          <div id="privacy" className="scroll-mt-28">
            <h2 className="text-3xl">Privacy — GDPR compliant</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Growen processes personal data as a data processor on behalf of our clients and as a
              controller for our own marketing contacts. We collect only the information you submit
              through the audit request form: name, company, work email and the commercial context
              you choose to share.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>· Lawful basis: legitimate interest for B2B contact, consent for marketing.</li>
              <li>· Data is stored inside the EU and retained for 24 months from last contact.</li>
              <li>· We never sell data or share it with advertising networks.</li>
              <li>
                · You may request access, correction, export or erasure at any time via our contact
                form; we respond within 30 days.
              </li>
              <li>
                · Client engagements are covered by a Data Processing Agreement with standard
                contractual clauses where relevant.
              </li>
            </ul>
          </div>

          <div id="terms" className="scroll-mt-28">
            <h2 className="text-3xl">Terms</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Engagements begin with a paid diagnostic audit, creditable toward any tier. Scope,
              timeline and price are fixed in a written statement of work before build begins.
              Deliverables, documentation and dashboards are owned by the client on final payment.
              Illustrative figures shown on this site are models, not guarantees of results.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
