import { n as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Check, i as MessageCircle, l as ArrowUpRight, t as Sparkles, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Header, t as Footer } from "./Footer-DGQcU_GH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C0uCRKIZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WORDS = [
	"Capture",
	"Score",
	"Route",
	"Engage",
	"Expand",
	"Build Infrastructure"
];
function Marquee() {
	const items = [
		...WORDS,
		...WORDS,
		...WORDS,
		...WORDS
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream-deep px-6 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl overflow-hidden rounded-full border border-border bg-cream py-4 shadow-[inset_0_1px_0_oklch(1_0_0/60%)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track flex w-max items-center gap-10 whitespace-nowrap px-6",
				children: items.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "voice text-xl text-foreground/80",
						children: word
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-oxblood-soft" })]
				}, `${word}-${i}`))
			})
		})
	});
}
var dashboard_default = "/assets/dashboard-Hz99KM2n.jpg";
var team_default = "/assets/team-BIbpZEYp.jpg";
var STAGES = [
	{
		id: "capture",
		tip: "Collect signals from product usage, website activity, billing events and support tickets.",
		name: "CAPTURE",
		signal: "A trial account invites 4 teammates in 48 hours.",
		action: "Product events unify into one account record in the CRM.",
		outcome: "No expansion moment is invisible to Sales again."
	},
	{
		id: "score",
		tip: "Prioritise leads by behaviour: high usage, rapid growth or key events.",
		name: "SCORE",
		signal: "Usage climbs 3× while the champion opens the pricing page.",
		action: "The account is scored PQL-high and flagged in the pipeline.",
		outcome: "Reps work the 12 accounts that matter, not 400."
	},
	{
		id: "route",
		tip: "Auto-assign hot leads to an AE or trigger a CSM alert.",
		name: "ROUTE",
		signal: "An enterprise domain has 9 self-serve users across 3 teams.",
		action: "Domain clustering merges them and routes one owner instantly.",
		outcome: "Lead response drops from days to minutes."
	},
	{
		id: "engage",
		tip: "Engage prospects with timely email, in-app messages or Slack notifications.",
		name: "ENGAGE",
		signal: "Onboarding stalls at step 2 for a $40K account.",
		action: "A five-touch sequence fires with a human checkpoint before send.",
		outcome: "Stalled deals restart without a rep noticing manually."
	},
	{
		id: "expand",
		tip: "Flag an account ready for an upsell, renewal or referral.",
		name: "EXPAND",
		signal: "Seat usage exceeds contract 60 days before renewal.",
		action: "An expansion task with the usage evidence lands on the AM's desk.",
		outcome: "Renewals are negotiated early, from a position of data."
	}
];
var GAP = [
	{
		n: "01",
		title: "A trial team hits 80% of plan limits",
		body: "The event lands in the product database. Nobody in Sales ever sees it, and the upgrade conversation never happens."
	},
	{
		n: "02",
		title: "A champion changes jobs",
		body: "Your best user shows up at a new company. No alert, no play — a warm account is treated as cold outbound six months later."
	},
	{
		n: "03",
		title: "Support logs three angry tickets",
		body: "Churn risk is written down in a tool the renewal owner doesn't open. The signal arrives after the cancellation email."
	},
	{
		n: "04",
		title: "Nine users share one email domain",
		body: "They're nine separate leads in the CRM instead of one enterprise account worth a real conversation."
	}
];
var INDUSTRIES = [
	"Developer Tools",
	"Fleet Software",
	"API-driven SaaS",
	"Transportation Management"
];
function StageBoard() {
	const [active, setActive] = (0, import_react.useState)(STAGES[0].id);
	const stage = STAGES.find((s) => s.id === active);
	const index = STAGES.findIndex((s) => s.id === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-x-auto pb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-[1.35rem] h-px bg-ink-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative grid min-w-[42rem] grid-cols-5",
				children: STAGES.map((s, i) => {
					const isActive = active === s.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActive(s.id),
						onMouseEnter: () => setActive(s.id),
						className: "group px-2 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `relative grid h-11 w-11 place-items-center rounded-full border transition-all duration-300 ${isActive ? "border-oxblood-soft bg-oxblood-soft text-ink" : i <= index ? "border-oxblood-soft/50 bg-ink text-oxblood-soft" : "border-ink-border bg-ink text-ink-muted group-hover:border-oxblood-soft/60"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-extrabold",
									children: ["0", i + 1]
								}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full border border-oxblood-soft/60" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-4 block font-display text-sm font-extrabold tracking-[0.16em] transition-colors ${isActive ? "text-ink-foreground" : "text-ink-muted group-hover:text-ink-foreground"}`,
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-2 block max-w-[13rem] text-xs leading-snug text-ink-muted transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`,
								children: s.tip
							})
						]
					}, s.id);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-4 md:grid-cols-3",
			"aria-live": "polite",
			children: [
				{
					label: "Signal example",
					value: stage.signal
				},
				{
					label: "System action",
					value: stage.action
				},
				{
					label: "Business outcome",
					value: stage.outcome
				}
			].map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: { animationDelay: `${i * 90}ms` },
				className: `stage-card relative rounded-2xl border p-7 ${i === 2 ? "border-oxblood-soft/40 bg-oxblood/25" : "border-ink-border bg-ink-foreground/[0.04]"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-oxblood-soft",
							children: col.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "voice text-sm text-ink-muted",
							children: ["0", i + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-5 text-lg leading-snug text-ink-foreground ${i === 2 ? "font-display font-extrabold" : ""}`,
						children: col.value
					}),
					i < 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "absolute -right-5 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-oxblood-soft md:block" })
				]
			}, `${stage.id}-${col.label}`))
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-dark relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1fr_1.05fr] lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-oxblood-soft",
							children: "Revenue infrastructure · For B2B tech"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-5xl leading-[0.95] text-ink-foreground sm:text-6xl lg:text-7xl",
							children: [
								"Build the infrastructure connecting",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "voice font-normal text-oxblood-soft",
									children: "signals"
								}),
								" to revenue."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-xl text-lg leading-relaxed text-ink-muted",
							children: "Your product, customer and operating systems already generate valuable signals. We connect them, automate the right actions and help turn more of them into revenue."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 flex flex-wrap items-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display font-bold text-primary-foreground transition-colors hover:bg-oxblood-soft",
								children: ["Request Revenue Infra Audit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-2 shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: dashboard_default,
								alt: "Growen revenue signal dashboard showing pipeline, at-risk revenue and signal trends",
								width: 1408,
								height: 960,
								className: "w-full rounded-xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-5 top-5 hidden w-52 rounded-xl border border-ink-border bg-ink/95 p-3 shadow-2xl lg:block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-ink-border pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow text-ink-muted",
											children: "Signal inbox"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5 text-signal" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-oxblood-soft text-[9px] font-bold",
											children: "AM"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "rounded-lg bg-ink-foreground/10 px-2 py-1.5 text-[10px] leading-relaxed text-ink-foreground",
											children: "New team activity — worth a look?"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 ml-8 rounded-lg bg-primary/70 px-2 py-1.5 text-[10px] text-primary-foreground",
										children: "Routed to Sam with context."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-5 -left-3 flex items-center gap-3 rounded-xl border border-oxblood-soft/50 bg-ink px-4 py-3 shadow-xl sm:left-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative grid h-8 w-8 place-items-center rounded-full bg-signal/20 text-signal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute h-3 w-3 animate-ping rounded-full bg-signal/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "relative h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow block text-oxblood-soft",
									children: "Account high intent"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-ink-foreground",
									children: "Trial activity + pricing visit"
								})] })]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "industries",
					className: "border-t border-ink-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-3 px-6 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-ink-muted",
							children: "Built for"
						}), INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-ink-foreground/70",
							children: i
						}, i))]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "hidden",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-14 lg:grid-cols-[0.85fr_1.15fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-oxblood",
								children: "The problem"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 text-4xl leading-[1.05] sm:text-5xl",
								children: [
									"Nothing is missing.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "voice font-normal text-oxblood",
										children: "Except the thing that joins it all up."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-sm leading-relaxed text-muted-foreground",
								children: "Most teams assume they have a data problem. They don't. They have a connection problem — and it shows up as pipeline that quietly never arrives."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3",
							children: [
								["The data exists.", "Product events, billing, tickets, sessions — all captured, all day."],
								["The tools exist.", "CRM, warehouse, analytics, support desk. Paid for and switched on."],
								["The teams exist.", "Sales, CS and growth are ready to act the moment they know."]
							].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "bg-card p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-extrabold leading-snug",
									children: t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: d
								})]
							}, t))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-4 rounded-2xl border border-oxblood/30 bg-oxblood/[0.07] p-8 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-extrabold leading-snug text-oxblood sm:text-3xl",
								children: "The connection doesn't."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground sm:max-w-sm",
								children: "So a buying signal born in your product dies in a database, and the person who could have closed it never hears about it."
							})]
						})] })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream-deep px-6 py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-oxblood",
							children: "The core problem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-12 text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl",
							children: [
								"The data exists.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"The tools exist.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"The teams exist.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "voice text-oxblood",
									children: "The connection doesn't."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-12 max-w-3xl text-lg leading-relaxed text-muted-foreground",
							children: ["Growen is the revenue infrastructure layer for B2B tech. We engineer the system that connects your product, CRM and operating tools — ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "so every buying signal turns into action, and more of it turns into revenue."
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "solutions",
				className: "px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-14 lg:grid-cols-[0.9fr_1.1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-oxblood",
								children: "What Growen is"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 text-4xl leading-tight sm:text-5xl",
								children: [
									"Revenue engineering for B2B teams.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "voice font-normal",
										children: "Not another tool."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md leading-relaxed text-muted-foreground",
								children: "We're engineers with commercial judgement. We map your stack, wire your systems together and ship the automations that put the right account in front of the right person at the right moment."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2",
							children: [
								{
									q: "Who is Growen for?",
									a: "B2B tech companies from $500K to $20M ARR with 10–100 employees running a product-led or expansion-led motion, with data spread across product, CRM, billing and support."
								},
								{
									q: "What do we build?",
									a: "CRM as system of record, product-event pipelines, PQL scoring, domain clustering, routing rules, automated follow-up, health and expansion alerting, reporting dashboards."
								},
								{
									q: "What problem do we solve?",
									a: "Your signals never reach the people who can act on them — so revenue leaks quietly through manual gaps and slow response."
								},
								{
									q: "Why should you care?",
									a: "Every week a buying signal sits unread is pipeline you already paid to create and then lost. This is recovered revenue, not new spend."
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg",
									children: item.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: item.a
								})]
							}, item.q))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream-deep px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl grid gap-14 lg:grid-cols-[0.8fr_1.2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-oxblood",
						children: "The gap"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 text-4xl leading-tight",
						children: [
							"Four signals your company generated this week.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "voice font-normal text-oxblood",
								children: "Nobody acted on them."
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-x-12 gap-y-10 sm:grid-cols-2",
						children: GAP.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "voice text-xl text-oxblood",
									children: g.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-lg",
									children: g.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: g.body
								})
							]
						}, g.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-oxblood",
							children: "The transformation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 max-w-4xl text-5xl leading-[1.05] sm:text-6xl",
							children: ["From scattered tools to a system that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "voice font-normal text-oxblood",
								children: "compounds."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 grid gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-cream-deep/45 p-8 sm:p-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow inline-block bg-oxblood/10 px-2 py-1 text-oxblood",
									children: "Before"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-8 space-y-4",
									children: [
										["Fragmented data", "Product events in one warehouse, deals in the CRM, tickets somewhere else."],
										["Manual workflows", "A rep exports a CSV every Monday to guess who to call."],
										["Missed signals", "Upgrade intent and churn risk are discovered after the fact."],
										["Slow action", "Days between a buying moment and the first human response."]
									].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-oxblood/20 text-lg text-oxblood",
												children: "×"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-lg font-bold",
												children: t
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-auto text-muted-foreground/60",
												children: "→"
											})
										]
									}, t))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-[#e9dfdb] bg-[#e9dfdb] p-8 text-foreground sm:p-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-oxblood-soft",
									children: "After — with Growen"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-8 space-y-4",
									children: [
										["Connected systems", "One account record joining product usage, billing, CRM and support."],
										["Automated signal flow", "Events stream in and score themselves against your ICP in real time."],
										["Prioritised action", "A ranked daily queue: who to contact, why, and with what evidence."],
										["Revenue impact", "Faster response, earlier expansion, fewer silent churns — measured on a dashboard."]
									].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-oxblood-soft text-ink-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-lg font-bold",
												children: t
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-auto text-ink-muted",
												children: "→"
											})
										]
									}, t))
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "how-it-works",
				className: "section-dark px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-oxblood-soft",
							children: "The Growen Signal Engine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 max-w-3xl text-4xl leading-tight text-ink-foreground sm:text-5xl",
							children: [
								"One architecture. Five stages.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "voice font-normal",
									children: "From signal to revenue."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-ink-muted",
							children: "Every stage does the same thing: take a real signal, apply a system action, produce a business outcome."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageBoard, {})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream-deep px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-oxblood",
								children: "Illustrative impact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 max-w-xl text-4xl leading-tight",
								children: [
									"We don't just automate.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "voice font-normal text-oxblood",
										children: "We measure."
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "text-sm underline underline-offset-4",
								children: "Request the audit that proves it"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
							children: [
								[
									"42%",
									"Faster lead response",
									"Typical opportunity identified in audit"
								],
								[
									"$400K",
									"Pipeline from renewals",
									"Modelled from current usage data"
								],
								[
									"10–27×",
									"Illustrative Year-1 ROI",
									"Same-tier build, modelled"
								],
								[
									"30%",
									"Churn reduction",
									"Example outcome, early-warning scoring"
								]
							].map(([stat, label, note]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-4xl font-extrabold text-oxblood",
										children: stat
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display font-bold",
										children: label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: note
									})
								]
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xs text-muted-foreground",
							children: "Figures are illustrative models based on typical B2B benchmarks, not verified customer results."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "insights",
				className: "section-dark px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl grid gap-14 lg:grid-cols-[1.1fr_0.9fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "about",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-oxblood-soft",
								children: "Our approach"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 text-4xl leading-tight text-ink-foreground",
								children: [
									"Engineers with business sense —",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "voice font-normal",
										children: "we architect your revenue engine."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl leading-relaxed text-ink-muted",
								children: "Every engagement starts with a focused 14 Day Revenue Infra Audit. For $100, we move from diagnostic to design, build, activation and expansion with a clear blueprint at every hand-off."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-12 space-y-9",
								children: [
									[
										"01",
										"Days 1–3 · Diagnose",
										"We map your product, CRM, billing, support and marketing signals, then document where data is captured and where the hand-offs break."
									],
									[
										"02",
										"Days 4–7 · Design",
										"We trace the signal-to-revenue journey, define the account and scoring model, and identify the highest-leverage system connections."
									],
									[
										"03",
										"Days 8–11 · Prioritise",
										"We score the gaps by revenue impact, effort and urgency, turning a messy stack into a ranked plan your team can act on."
									],
									[
										"04",
										"Days 12–14 · Blueprint",
										"You receive the prioritised 14 Day Audit blueprint, recommended tier, timeline and next actions for the build, activation and expansion phases."
									]
								].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "voice text-2xl text-oxblood-soft",
										children: n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg text-ink-foreground",
										children: t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-lg text-sm leading-relaxed text-ink-muted",
										children: d
									})] })]
								}, n))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: team_default,
						alt: "Growen engineers working on revenue system architecture",
						loading: "lazy",
						width: 1200,
						height: 900,
						className: "w-full rounded-2xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "voice mt-6 rounded-2xl border border-ink-border bg-ink-foreground/[0.04] p-7 text-xl leading-snug text-ink-foreground",
						children: "\"You could build it yourself. But hiring an architect means fewer mistakes and a stronger foundation.\""
					})] })]
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
								children: "After the build, Growen remains your fractional revenue-systems team: tuning what is live, measuring what changed, and planning the next highest-leverage improvement."
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
									"30+ hrs/month · health monitoring across all layers · AI-agent and forecast tuning · buying-committee refresh · quarterly EBR · dedicated same-day Slack support."
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
						children: "Extras are scoped separately: additional personas ($500–600 each), conversation intelligence ($1K–2K), AI SDR ($4K–6K), Customer 360 ($6K–10K), and specialised referral integrations ($1.2K–2K)."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "hidden",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-oxblood",
							children: "FAQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 text-4xl",
							children: ["Questions, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "voice font-normal",
								children: "by topic."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-8 sm:grid-cols-2",
							children: [
								["The audit", "What happens in two weeks? We map signal sources, system hand-offs and revenue leaks, then deliver a prioritised blueprint and a practical next-step recommendation."],
								["Tiers & scope", "Can we start smaller? Yes. Every tier is a compatible part of the same architecture, and upgrades are priced as the delta for infrastructure already built."],
								["Retainers & support", "Is this just maintenance? No. The retainer funds a defined block of engineering and revenue-strategy time for tuning, review, support and ongoing optimisation."],
								["Tools & ownership", "Who pays for software? Clients hold their own vendor accounts and data. Tooling costs are separate and stated up front; Growen configures and operates the system."]
							].map(([heading, answer]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg",
									children: heading
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: answer
								})]
							}, heading))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "max-w-3xl text-4xl leading-tight text-primary-foreground sm:text-5xl",
							children: ["Ready to stop ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "voice font-normal",
								children: "leaking revenue?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-xl text-primary-foreground/80",
							children: [
								"Start with a focused ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-primary-foreground",
									children: "Revenue Infra Audit"
								}),
								". We map your signal sources, score the gaps between systems, identify revenue leaks, and give you a prioritised blueprint with the right tier, timeline and next actions."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-4 font-display font-bold text-ink-foreground transition-transform hover:-translate-y-0.5",
							children: ["Request Revenue Infra Audit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
