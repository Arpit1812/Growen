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
