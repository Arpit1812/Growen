import { n as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Check, o as CircleDot, r as Minus, s as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as Header$1, t as Footer } from "./Footer-DGQcU_GH.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-DTPrZkMw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var TIERS = [
	{
		name: "Starter",
		coverage: "50% signal coverage",
		blurb: "The foundation and first scoring layer of your revenue signal engine.",
		price: "From $5K",
		sub: "one-time build · $500–800/mo retainer",
		roi: "3.5×+",
		timeline: "5–7 week build",
		popular: false,
		features: [
			"CRM setup & migration as system of record",
			"Automated signal capture & routing",
			"Rules-based PQL / lead scoring (v1)",
			"5-touch automated follow-up",
			"Light domain clustering",
			"Scored pipeline reporting dashboard",
			"1 ICP / persona definition",
			"Team training & playbook handover"
		]
	},
	{
		name: "Growth",
		coverage: "75% signal coverage",
		blurb: "Complete the intelligence layer and put it to work automatically.",
		price: "From $10K",
		sub: "one-time build · $1,200–1,500/mo retainer",
		roi: "5×+",
		timeline: "10–14 week build",
		popular: true,
		features: [
			"Everything in Starter, plus:",
			"Firmographic & contact enrichment",
			"Full domain clustering",
			"AI-assisted outreach (human checkpoint)",
			"Referral program automation",
			"Account health & expansion detection",
			"2–3 ICP / persona definitions",
			"Attribution & pipeline forecasting"
		]
	},
	{
		name: "Scale",
		coverage: "100% signal coverage",
		blurb: "The complete Growen Revenue Signal Engine — all five layers as one.",
		price: "From $30K",
		sub: "one-time build · $2,500–4,000/mo retainer",
		roi: "10×+",
		timeline: "18–24 week engagement",
		popular: false,
		features: [
			"Everything in Growth, plus:",
			"Data warehouse & Customer 360",
			"AI SDR / autonomous outbound agent",
			"Buying committee mapping",
			"Multi-method forecasting model",
			"Conversation intelligence integration",
			"Commercial ops automation (CPQ)"
		]
	}
];
var RETAINERS = {
	Starter: [
		"10–12 hours of system administration",
		"Monthly performance and scoring review",
		"Two minor automation adjustments",
		"2-business-day email and Slack support"
	],
	Growth: [
		"15–20 hours of revenue-systems engineering",
		"Scoring and enrichment tuning",
		"One sequence test each month",
		"1-business-day priority support"
	],
	Scale: [
		"30+ hours of fractional systems-team support",
		"All-layer health and AI-agent monitoring",
		"Quarterly executive business review",
		"Same-business-day dedicated Slack support"
	]
};
var GROUPS = [
	{
		group: "Foundation & data",
		rows: [
			[
				"CRM setup / cleanup as system of record",
				"full",
				"full",
				"full"
			],
			[
				"Automated signal capture & routing",
				"full",
				"full",
				"full"
			],
			[
				"Domain clustering / account grouping",
				"partial",
				"full",
				"full"
			],
			[
				"Firmographic enrichment",
				"none",
				"full",
				"full"
			],
			[
				"Data warehouse & Customer 360",
				"none",
				"none",
				"full"
			]
		]
	},
	{
		group: "Scoring & intelligence",
		rows: [
			[
				"Rules-based PQL / lead scoring (v1)",
				"full",
				"full",
				"full"
			],
			[
				"Account health scoring",
				"none",
				"partial",
				"full"
			],
			[
				"Expansion signal detection",
				"none",
				"partial",
				"full"
			],
			[
				"Multi-method forecasting model",
				"none",
				"none",
				"full"
			],
			[
				"Buying committee mapping",
				"none",
				"none",
				"full"
			]
		]
	},
	{
		group: "Engagement & automation",
		rows: [
			[
				"5-touch automated follow-up sequences",
				"full",
				"full",
				"full"
			],
			[
				"AI-assisted outreach drafting",
				"none",
				"full",
				"full"
			],
			[
				"Referral program automation",
				"none",
				"partial",
				"full"
			],
			[
				"AI SDR / autonomous outbound agent",
				"none",
				"none",
				"full"
			],
			[
				"Conversation intelligence",
				"none",
				"none",
				"full"
			],
			[
				"Commercial ops automation (CPQ)",
				"none",
				"none",
				"full"
			]
		]
	}
];
function Mark({ level }) {
	if (level === "full") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto h-4 w-4 text-signal" });
	if (level === "partial") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDot, { className: "mx-auto h-4 w-4 text-oxblood" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground/50" });
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-dark px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-oxblood-soft",
							children: "Productized tiers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 max-w-3xl text-5xl leading-[0.98] text-ink-foreground sm:text-6xl",
							children: [
								"Choose how much of the engine",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "voice font-normal",
									children: "you install."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl leading-relaxed text-ink-muted",
							children: "Starter, Growth and Scale install 50%, 75% or 100% of your Growen Revenue Signal Engine, packaged with stated price, timeline and ROI."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-xl text-sm text-ink-foreground/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display font-bold",
									children: "Note:"
								}),
								" 50% / 75% / 100% describe",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display font-bold",
									children: "signal coverage, and not tasks automated"
								}),
								" ",
								"— how much of your revenue signal surface the engine sees and acts on."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "hidden",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-[0.8fr_1.2fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-oxblood",
								children: "Ongoing partnership"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 text-4xl leading-tight sm:text-5xl",
								children: ["A retainer keeps the engine ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "voice font-normal text-oxblood",
									children: "earning its place."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md leading-relaxed text-muted-foreground",
								children: "A defined block of engineering and revenue-strategy time keeps the signal engine tuned as your market, product and pipeline change."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3",
							children: [
								[
									"Starter",
									"$500–800/mo",
									"10–12 hrs/month · monthly performance and scoring review · two minor automation adjustments · CRM hygiene · 2-business-day email/Slack support."
								],
								[
									"Growth",
									"$1,200–1,500/mo",
									"15–20 hrs/month · scoring and enrichment tuning · weekly active-account refresh · one sequence test/month · quarterly ICP refinement · 1-business-day priority support."
								],
								[
									"Scale",
									"$1,500–2,500/mo",
									"30+ hrs/month · all-layer health monitoring · AI-agent and forecast tuning · buying-committee refresh · quarterly EBR · same-day Slack support."
								]
							].map(([tier, price, detail]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-oxblood",
										children: tier
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-xl font-extrabold",
										children: price
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-sm leading-relaxed text-muted-foreground",
										children: detail
									})
								]
							}, tier))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "Available add-ons: personas ($500–600 each), conversation intelligence ($1K–2K), AI SDR ($4K–6K), Customer 360 ($6K–10K), and specialised referral integrations ($1.2K–2K)."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-3",
					children: TIERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative flex h-full flex-col rounded-2xl border p-8 ${t.popular ? "border-oxblood bg-ink text-ink-foreground shadow-2xl lg:-mt-6 lg:pb-12" : "border-border bg-card"}`,
						children: [
							t.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3 left-8 rounded-full bg-signal px-4 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-ink",
								children: "Most popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: `text-xl ${t.popular ? "text-ink-foreground" : ""}`,
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `eyebrow rounded-full px-3 py-1 ${t.popular ? "bg-ink-foreground/10 text-ink-foreground" : "bg-muted"}`,
									children: t.coverage
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-4 text-sm leading-relaxed ${t.popular ? "text-ink-muted" : "text-muted-foreground"}`,
								children: t.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 font-display text-4xl font-extrabold text-oxblood-soft",
								children: t.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-xs ${t.popular ? "text-ink-muted" : "text-muted-foreground"}`,
								children: t.sub
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mt-6 flex gap-10 border-t pt-5 ${t.popular ? "border-ink-border" : "border-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow opacity-60",
									children: "Year-1 ROI"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-lg font-extrabold",
									children: t.roi
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow opacity-60",
									children: "Timeline"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-lg font-extrabold",
									children: t.timeline
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-7 space-y-3 text-sm",
								children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-signal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: t.popular ? "text-ink-foreground/90" : "",
										children: f
									})]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mt-7 border-t pt-5 ${t.popular ? "border-ink-border" : "border-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow opacity-60",
									children: "Ongoing retainer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2 text-xs leading-relaxed",
									children: RETAINERS[t.name].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" }), item]
									}, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: `mt-9 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-display font-bold transition-colors ${t.popular ? "bg-primary text-primary-foreground hover:bg-oxblood-soft" : "border border-foreground/20 hover:bg-muted"}`,
								children: "Request an audit"
							})
						]
					}, t.name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-8 max-w-7xl text-sm text-muted-foreground",
					children: "Not sure which tier? The standalone Month 1 Diagnostic ($2,500–$5,000) is creditable toward any tier."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream-deep px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl",
							children: "Capability comparison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Every division in one clear comparison."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 overflow-x-auto rounded-2xl border border-border bg-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-[680px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[1fr_100px_100px_100px] items-center border-b border-border bg-muted/40 px-7 py-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow text-muted-foreground",
											children: "Capability"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow text-center",
											children: "Starter 50%"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow text-center",
											children: "Growth 75%"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow text-center",
											children: "Scale 100%"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
									type: "single",
									collapsible: true,
									defaultValue: "Foundation & data",
									children: GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: g.group,
										className: "border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "bg-cream-deep/45 px-7 py-5 font-display text-lg font-extrabold hover:no-underline",
											children: g.group
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "pb-0",
											children: g.rows.map(([label, s, gr, sc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-[1fr_100px_100px_100px] items-center border-b border-border/60 px-7 py-4 text-sm last:border-b-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { level: s }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { level: gr }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { level: sc })
												]
											}, label))
										})]
									}, g.group))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-6 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-signal" }), " Fully included"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDot, { className: "h-4 w-4 text-oxblood" }), " Lighter / checkpointed"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }), " Not at this tier"]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl",
						children: ["Questions, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "voice font-normal",
							children: "answered."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "mt-10",
						children: [
							["Why is Starter more than a basic CRM setup?", "Starter installs the system of record plus the first scoring and routing layer — the plumbing that makes every later layer possible, not a tool configuration."],
							["Can we just start with Starter and see?", "Yes. Every tier is a step in the same architecture, so Growth and Scale build on what Starter installed. No rework."],
							["What if we don't know which tier we need?", "Start with the diagnostic audit. We map your signal coverage today and tell you which tier is honest for your stage — including if the answer is 'not yet'."],
							["Are these prices final?", "They're stated starting points tied to scope. Final price, timeline and ROI target are fixed in writing before any build begins."]
						].map(([q, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: q,
							className: "border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
								className: "text-left font-display font-bold hover:no-underline",
								children: q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
								className: "text-muted-foreground",
								children: a
							})]
						}, q))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Pricing as component };
