import { n as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as Check, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Header, t as Footer } from "./Footer-DGQcU_GH.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CcaotdIP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ARR = [
	"<500k",
	"500k-2M",
	"2M-8M",
	"8M-20M",
	"20M+"
];
var MATURITY = [
	"Unsure",
	"Mostly manual",
	"Fragmented Automations",
	"Partially Connected Systems",
	"Strong Systems, with Gaps"
];
function Contact() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [data, setData] = (0, import_react.useState)({});
	const [maturity, setMaturity] = (0, import_react.useState)();
	const set = (key, value) => setData({
		...data,
		[key]: value
	});
	const choose = (key, options, required = false) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
		className: "eyebrow",
		children: [key.replaceAll("_", " "), required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-oxblood",
			children: " *"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 flex flex-wrap gap-2",
		children: options.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => set(key, x),
			className: `rounded-full border px-4 py-2 text-sm ${data[key] === x ? "border-oxblood bg-primary text-primary-foreground" : "border-border bg-card"}`,
			children: x
		}, x))
	})] });
	const field = (key, label, required = false, type = "text") => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "eyebrow",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-oxblood",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			required,
			type,
			value: data[key] || "",
			onChange: (e) => set(key, e.target.value),
			className: "mt-2 w-full rounded-xl border border-border bg-card px-4 py-3.5 outline-none focus:border-oxblood"
		})]
	});
	const next = (e) => {
		e.preventDefault();
		if (!data.arr || !maturity) return toast.error("Please complete the required fields.");
		setStep(2);
	};
	const submit = (e) => {
		e.preventDefault();
		console.info("Revenue infra audit request", {
			screen1: data,
			revenue_systems_maturity: maturity
		});
		toast.success("Request received — we'll respond within 2 business days.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "grid lg:grid-cols-[.82fr_1.18fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-dark px-6 py-16 lg:px-14 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-md lg:ml-auto lg:mr-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow text-oxblood-soft",
								children: [
									"Request Revenue Infra Audit · ",
									step,
									" of 2"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-5xl leading-[.98] text-ink-foreground",
								children: ["Let's diagnose ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "voice font-normal",
									children: "your system."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 leading-relaxed text-ink-muted",
								children: "Your product, customer and operating systems already generate valuable signals. We’ll look at where they are getting lost and where better infrastructure could create more revenue."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-12 space-y-3 border-t border-ink-border pt-7 text-sm text-ink-foreground/90",
								children: [
									"Signal-to-revenue map",
									"Prioritised leak and opportunity register",
									"Infrastructure blueprint and next steps"
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 shrink-0 text-signal" }), x]
								}, x))
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-cream-deep px-6 py-16 lg:px-14 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-2xl lg:mr-auto",
						children: step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: next,
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [field("full_name", "Name", true), field("title", "Title")]
								}),
								field("company_name", "Company Name", true),
								field("product_url", "Link to your product / website", true, "url"),
								field("work_email", "Work Email", true, "email"),
								choose("employees", [
									"1-10",
									"11-25",
									"26-50",
									"51-100",
									"100+"
								], true),
								choose("arr", ARR, true),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
									className: "eyebrow",
									children: ["How would you describe your current revenue systems? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-oxblood",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid grid-cols-5 gap-2",
									children: MATURITY.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMaturity(i + 1),
										className: `rounded-xl border p-2 text-left text-xs ${maturity === i + 1 ? "border-oxblood bg-primary text-primary-foreground" : "border-border bg-card"}`,
										children: [
											"0",
											i + 1,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-2 block",
												children: x
											})
										]
									}, x))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display font-bold text-primary-foreground",
									children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "space-y-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-oxblood",
									children: "A few details about your system"
								}),
								choose("signal_visibility", [
									"Automatically in our CRM",
									"A spreadsheet or dashboard",
									"Nowhere formal yet",
									"Not sure"
								], true),
								choose("priority", [
									"Generate new revenue",
									"Convert trials / leads",
									"Increase expansion",
									"Reduce churn",
									"Connect systems"
								], true),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "Is there a specific problem or opportunity you've noticed?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: data.specific_problem || "",
										onChange: (e) => set("specific_problem", e.target.value),
										rows: 5,
										className: "mt-2 w-full rounded-xl border border-border bg-card px-4 py-3.5 outline-none focus:border-oxblood"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display font-bold text-primary-foreground",
									children: ["Request Revenue Infra Audit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Contact as component };
