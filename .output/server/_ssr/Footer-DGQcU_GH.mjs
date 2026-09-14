import { n as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, i as MessageCircle, l as ArrowUpRight, n as PhoneCall } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-DGQcU_GH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		label: "How It Works",
		hash: "how-it-works"
	},
	{
		label: "Solutions",
		hash: "solutions"
	},
	{
		label: "Industries",
		hash: "industries"
	},
	{
		label: "Insights",
		hash: "insights"
	}
];
function Logo({ tone = "ink" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-6 w-6 place-items-center rounded-full border border-current/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-oxblood-soft" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-display text-lg font-extrabold tracking-tight ${tone === "cream" ? "text-ink-foreground" : "text-foreground"}`,
			children: "Growen"
		})]
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${scrolled ? "h-16" : "h-24"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: item.hash,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: item.label
					}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: "Pricing"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: `rounded-full bg-primary font-display font-bold text-primary-foreground transition-all hover:bg-oxblood-soft ${scrolled ? "px-5 py-2.5 text-sm" : "px-6 py-3 text-sm"}`,
					children: "Request Revenue Infra Audit"
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "section-dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { tone: "cream" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-ink-muted",
						children: "Revenue infrastructure for B2B tech. We build the systems that turn your signals into revenue."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "eyebrow text-ink-muted",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm text-ink-foreground/85",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-ink-foreground",
								children: "Home"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "how-it-works",
								className: "hover:text-ink-foreground",
								children: "How It Works"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "hover:text-ink-foreground",
								children: "Pricing"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-ink-foreground",
								children: "Request Audit"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow text-ink-muted",
							children: "Company"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-ink-foreground/85",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "about",
								className: "hover:text-ink-foreground",
								children: "About"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-ink-foreground",
								children: "Contact"
							}) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow mt-8 text-ink-muted",
							children: "Legal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-ink-foreground/85",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/legal",
								hash: "privacy",
								className: "hover:text-ink-foreground",
								children: "Privacy — GDPR compliant"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/legal",
								hash: "terms",
								className: "hover:text-ink-foreground",
								children: "Terms"
							}) })]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "eyebrow text-ink-muted",
								children: "Get started"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "mt-6 inline-flex items-center gap-2 rounded-full border border-ink-border px-6 py-4 font-display text-base font-bold text-ink-foreground transition-colors hover:bg-ink-foreground/10",
								children: ["Request Revenue Infra Audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 eyebrow text-ink-muted",
								children: "Contact us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex gap-3",
								children: [
									[PhoneCall, "Callback"],
									[MessageCircle, "WhatsApp"],
									[Mail, "Email"]
								].map(([Icon, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "group grid h-10 w-10 place-items-center rounded-full border border-ink-border text-ink-muted transition-colors hover:border-oxblood-soft hover:text-ink-foreground",
									"aria-label": label,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs text-ink-muted",
								children: "Request a callback, WhatsApp or email reply within 2 business days."
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-4 border-t border-ink-border pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Growen. Revenue Infrastructure." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tracking-[0.2em]",
					children: "CAPTURE · SCORE · ROUTE · ENGAGE · EXPAND"
				})]
			})]
		})
	});
}
//#endregion
export { Header as n, Footer as t };
