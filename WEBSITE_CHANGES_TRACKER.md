# Website Change Tracker

Status key: `Done` = implemented and validated; `In progress` = currently being edited; `Pending input` = the request does not include the required copy or destination; `Not started` = queued.

## 1. Typography, Colors & Key Text Styling
- [x] Increase all eyebrow text by 2px. — Done
- [x] Match dark-background accents to the hero eyebrow color (Signal example, System action, After title, retainer titles). — Done: dark sections use the `text-oxblood-soft` hero accent; light After title retains dark `text-oxblood` for contrast.
- [ ] Apply requested strict line breaks. — Pending input: phrases to break onto new lines were not included after the colon.

## 2. Navigation & Hero Section
- [x] Increase expanded navbar link size, preserve current compact size, and make links black. — Done
- [x] Make the Built For labels a stable horizontal row; reveal only the hovered/focused industry’s compact card beneath its title, with in/out motion over the following section’s empty top padding. — Done
- [x] Set Signal Engine subtitle to “Five stages. One job: turn signals into revenue.” — Done

## 3. Core Section Rewrites & Content Tightening
- [x] Update Our Approach subtext to “Every engagement follows the same three phases — because guessing is expensive, and shortcuts create fragile systems.” — Done
- [x] Frame Illustrative Impact around SIGNAL COVERAGE, RESPONSE TIME, OPPORTUNITY, and REVENUE with the supplied values: 2 million captured, <1m response, 80% invisible leads, and 30% average revenue increase; remove question-style subtext. — Done
- [x] Enlarge and bold Before and After — With Growen card titles. — Done

## 4. Pricing & Retainer Cards
- [x] Update tier starting-price headers to Starter: Starting at $5,000; Growth: Starting at $10,000; Scale: Starting at $30,000. — Done
- [x] Add disclaimer below tier cards: “Final scope depends on systems, signal volume and implementation complexity.” — Done
- [ ] Apply requested pricing cleanups. — Pending input: no cleanup details were included.
- [x] Convert retainer tiers into accordion/dropdown cards. — Done
- [x] Limit each Pricing Includes list to six rows by combining related Growth and Scale features without dropping any capability. — Done

## 5. Capability Comparison Table
- [x] Polish “&” typography. — Done
- [x] Darken check, partial, and dash icons by one shade. — Done
- [x] Set legend indicator colors to red, green, and yellow. — Done (full=green, partial=yellow, none=red)
- [x] Change partial legend label to “Semi-automated (Human checkpoint)”. — Done
- [x] Keep capability group names and the tier columns aligned without wrapping. — Done: wider scrollable table, fixed tier tracks, and non-wrapping labels.

## 6. Interactive Contact & Audit Form
- [x] Accept plain domains and valid URLs without requiring `https://` or `www.`. — Done (normalizes to `https://` for validation)
- [x] Use branded inline validation instead of browser popups. — Done (includes work-email format validation)
- [x] Style closing reassurance as regular italic and remove the divider/padding before the deliverables. — Done

## 7. Footer & Social Launchers
- [x] Replace static response-time sentence with per-icon hover tooltips. — Done
- [x] Add “Book a Conversation” calendar launcher first. — Done (routes to the existing Contact page; dedicated scheduler URL was not provided)
- [x] Add LinkedIn and Instagram icons in a second row. — Icons added; profile URLs are pending, so icons remain non-clickable until destinations are provided.

## Validation
- [x] Run diagnostics on changed files — no errors found.
- [x] Run `npm run build` — passed.

## Follow-up Emphasis Styling
- [x] Bold “The action is missing.” in The Gap. — Done
- [x] Bold and underline “This is a normal Tuesday.” in The Gap. — Done
- [x] Bold, underline, and color “We’re engineers with commercial judgement.” redwood in What Growen Is. — Done
- [x] Bold “The retainer is not an IT helpdesk fee” in white. — Done
- [x] Bold “Signal coverage ≠ tasks automated.” in black below Pricing cards. — Done

## Strict Line Breaks
- [x] Break before “This is a normal Tuesday.” and “The action is missing.” in The Gap. — Done
- [x] Set the Signal Engine heading to “Five stages. One job: turn signals into revenue.” and keep “Every real signal gets a system action and a business outcome.” as supporting copy. — Done
- [x] Break before “We measure what changed.” in Illustrative. — Done
- [x] Break before “Trigger the next action.” and “Surface expansion before renewal.” in Growth and Scale pricing cards. — Done
- [x] Break before the Signal coverage explanation below Pricing cards. — Done

## Remaining Inputs
- Exact phrases requiring strict line breaks.
- The unspecified “Pricing Cleanups”.
- LinkedIn and Instagram profile URLs to activate the footer social icons.
- Dedicated scheduling URL if “Book a Conversation” should open a calendar rather than the Contact page.

## Deployment Security
- [x] Upgrade Vercel-flagged `@tanstack/react-start` to advisory-patched `1.168.60`, with compatible `@tanstack/react-router@1.170.41` and `@tanstack/router-plugin@1.168.42`; synchronize `package-lock.json` and `bun.lock`. — Done
- [x] Resolve the remaining `brace-expansion` advisory through compatible transitive updates. `npm audit` reports 0 vulnerabilities. — Done
- [x] Verify production build after dependency updates. — Done

## 14-Day Audit Page
- [x] Add `/audit` page with the supplied Calendly booking widget and six concise fit/process/outcome points. — Done
- [x] Reduce excess surrounding space in the first Audit section while preserving the supplied 700px calendar widget. — Done
- [x] Add a second Audit section with a large “14-day audit” title and a Calendly modal trigger. — Done
- [x] Migrate the homepage Our Approach process into a third Audit section with three horizontal phase selectors and phase-specific cards; remove the former homepage process block. — Done
- [x] Add homepage “Get 14-Day Audit” CTA linking to `/audit`. — Done
- [x] Rename audit-request CTAs to “Book a call”. — Done; existing booking links continue to `/contact`.

## 8. Free Assessment & Pre-Footer Updates
- [x] **1. Landing Screen (Before Starting)**
  - [x] Navbar: "Free Assessment" styled button in desktop nav and mobile drawer.
  - [x] Hero Header, Sub-text, and 3 Quick Highlights (3 min, 10-Point Technical Diagnostic, 200+ Benchmark).
  - [x] Hero CTA ("Start Free Assessment") with micro-text ("Free. No commitment. No technical setup required.").
  - [x] New Section: "What does the assessment evaluate?" (5 stages: CAPTURE, SCORE, ROUTE, ENGAGE, EXPAND with focus notes).
  - [x] New Section: "How it works" (3 simple steps: Answer questions, Get results, Understand what to improve).
  - [x] New Section: "What You Get" (Scorecard, Opportunity Area, Recommended Next Steps, snapshot micro-text).
  - [x] Hide all landing sections as soon as the quiz starts for a distraction-free experience.
- [x] **2. Quiz Screen & Interaction Overhaul**
  - [x] Horizontal 5-stage stepper (`01 CAPTURE` to `05 EXPAND`) with oxblood active bar and section/question counters.
  - [x] 1 Question Per Screen (Zero vertical scrolling).
  - [x] Instant selection with brand highlight, checkmark badge, and 300ms auto-advance.
  - [x] Keyboard shortcut support (A, B, C, D) to select and advance.
  - [x] Separate "Not sure or Skip question" subtle text link below choice stack.
  - [x] Smooth auto-scroll to top on question transition and Back/Next navigation.
- [x] **3. Results / Snapshot Page Upgrades**
  - [x] Heading: "Where your pipeline is leaking today." (with voice accent italic text) and architectural baseline subtext.
  - [x] Revenue Maturity Meter: Visual 5-level scale (Disconnected, Reactive, Automated, Intelligent, Compounding).
  - [x] Constructive low-score phrasing (e.g. Stage 2: Reactive (Foundation Stage) — High optimization potential).
  - [x] Visual spotlight for both Strongest and Weakest stage (including `PRIMARY BOTTLENECK` floating badge and status tags `Critical Gap`, `Partial`, `Functional`).
  - [x] New Section: "Your biggest opportunity" with core takeaway, dynamic 2-sentence score-based diagnosis, and recommended first action.
- [x] **4. Full PDF Report Opt-In & Audit Bridge**
  - [x] "Get your stage-by-stage action plan" diagnostic report card with 5 bullet deliverables, work email capture, document visual mockup, and inline confirmation state (no browser alerts).
  - [x] Deep-Dive Audit Bridge card ($100 · 14-Day Audit credited toward implementation + "Explore the 14-Day Audit" CTA) and one-line audit verification link.
- [x] **5. Frequently Asked Questions (FAQ)**
  - [x] Interactive 5-item FAQ accordion on the Free Assessment landing screen.
- [x] **6. Pre-Footer Closing Banner (Dual-CTA)**
  - [x] Compact closing band above the main footer on `/assessment` (landing and snapshot screens) with dual actions: "Get the $100 Audit" + "Book a Call".

## 9. Audit Page Updates (`/audit`)
- [x] **1. Hero Section (Flip Left & Right Sides)**
  - [x] Swap sides: Audit info on the left, Calendly booking on the right.
  - [x] Left side: Eyebrow `14-DAY REVENUE INFRASTRUCTURE AUDIT`, headline *"Find where revenue signals get lost — and what to do next."*, supporting text, 5 key bullets, and $100 framing (paid only after scoping call, 100% credited toward implementation).
  - [x] Right side: Step Tag (`STEP 1: 20-MIN SCOPING CALL · NO PAYMENT TODAY`), Calendly event heading *"20-Min Audit Scoping Call"*, and inline Calendly widget.
- [x] **2. What Is Included Section**
  - [x] Eyebrow/Heading: "What Is Included" with sub-text: *"We examine the systems and workflows behind your customer and revenue operations."*
  - [x] 5 Inspection Areas: System connectivity, Customer signal coverage, Data and workflow quality, Revenue handoffs, Automation and expansion opportunities.
- [x] **3. What You'll Get Section**
  - [x] Heading: "What You'll Get" with sub-text: *"A clear picture of where your revenue infrastructure stands — and a practical plan for improving it."*
  - [x] 5 Deliverables: System Map, Signal & Leak Register, Opportunity Prioritization, Revenue Infrastructure Blueprint, Execution Roadmap, plus The Credit callout.
- [x] **3B. Sub-Section: The 14-Day Process Timeline**
  - [x] 4-step horizontal process timeline directly below deliverables:
    - Days 1–3 — Discover
    - Days 4–7 — Investigate
    - Days 8–11 — Prioritize
    - Days 12–14 — Deliver
- [x] **4. Frequently Asked Questions (FAQ)**
  - [x] 7-question accordion addressing audience, discovery call before payment, requirements, access scope, $100 credit, post-14-day next steps, and diagnostic vs. implementation nature.
- [x] **5. Pre-Footer Dual-Option Section**
  - [x] Option A (Primary Audit CTA): *"Ready to find where your revenue signals stall?"* with 20-min scoping call sub-text and *"Get the 14-Day Audit"* button triggering Calendly.
  - [x] Option B (Free Assessment Alternative): *"Not ready for a Call or a 14-Day Audit?"* with 3-minute assessment sub-text and *"Take the Free Assessment"* button linking to `/assessment`.

## 10. Website Polish: Homepage, Pricing, Contact & Footer
- [x] **1. "What We Do" (4 Core Cards)**
  - [x] Add body text to Card 4 (The Result): *“Your team spends less time chasing information and more time closing revenue."* below *"Less manual work. Faster action. More visibility."*.
  - [x] Tighten spacing inside expanded cards: remove awkward blank gap between subtitle and body text when opened.
  - [x] Paired card expansion: clicking a card opens its horizontal pair (Cards 1 & 2 pair, Cards 3 & 4 pair) so both cards stay clean and even in height.
- [x] **2. "The Core Problem", "The Gap" & "The Transformation"**
  - [x] The Core Problem: Move the 7× supporting sentence to the right side of the giant 7× stat number, keeping `~ Harvard Business Review` along the bottom.
  - [x] The Transformation: Line up bullet icons directly with the first line of text inside Before & After cards.
  - [x] The Gap: Bump up font size in columns 2, 3, and 4 so signal flow is bigger and easier to read.
- [x] **3. The Growen Signal Engine**
  - [x] Fix stage alignment: line up each of the 5 stage names directly with its short subtext right next to/below it.
- [x] **4. Pricing Page (Capability Comparison Table)**
  - [x] Balance section lengths: add 2 rows to *Engagement & Automation* and 2 rows to *AI & Intelligence* so every section has the exact same row count.
- [x] **5. Contact Us Form**
  - [x] Update right-side helper text to: *"Start with a few quick details. We'll tell you whether a deeper audit is worth doing."*.
- [x] **6. "Which Path Is Right For You?" & Footer**
  - [x] Add self-assessment link below the two decision cards: *"Not ready for a full audit? Run our 3-minute self-assessment →"* linking to `/assessment`.
  - [x] Fix footer link styling: change *"Take a Free Assessment today"* from sub-heading style to normal body/link text.
