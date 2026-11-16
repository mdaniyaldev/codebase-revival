import { r as __toESM } from "../_runtime.mjs";
import { a as IMG, i as GALLERY, n as EVENTS, o as NAV, r as EVENT_TYPES, s as SOCIAL, t as BARS } from "./site-data-uR2y6NAL.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Check, c as ArrowDown, i as CircleCheck, n as Menu, o as ArrowUpRight, r as Info, s as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DDJQ3Zz1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var variants = {
	gold: "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
	outline: "border border-foreground/40 text-foreground hover:border-primary hover:text-primary",
	ghost: "text-foreground underline-offset-8 hover:text-primary hover:underline"
};
function LuxButton({ variant = "gold", className, ...props }) {
	const cls = cn("group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-medium tracking-[0.14em] uppercase transition-all duration-500 disabled:opacity-60", variants[variant], className);
	if (props.href !== void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: cls,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cls,
		...props
	});
}
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
		NAV.forEach((n) => {
			const el = document.getElementById(n.id);
			if (el) io.observe(el);
		});
		return () => {
			window.removeEventListener("scroll", onScroll);
			io.disconnect();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "border-b hairline bg-background/90 py-3 backdrop-blur-md" : "py-6"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main",
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "leading-none",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block font-display text-2xl italic text-foreground",
						children: ["Booze Babies ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Atl"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase",
						children: "Luxury Mobile Bar"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-8 lg:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						"aria-current": active === n.id ? "true" : void 0,
						className: cn("relative text-sm tracking-wide transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-500", active === n.id ? "text-foreground after:w-full" : "text-muted-foreground after:w-0 hover:after:w-full"),
						children: n.label
					}) }, n.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
						href: "#contact",
						className: "hidden px-5 py-3 sm:inline-flex",
						children: "Book Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "p-2 text-foreground lg:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						"aria-controls": "mobile-menu",
						onClick: () => setOpen((o) => !o),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "mobile-menu",
			hidden: !open,
			className: "h-[calc(100dvh-4.5rem)] overflow-y-auto bg-background px-5 pt-10 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: NAV.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "animate-rise",
					style: { animationDelay: `${i * 50}ms` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${n.id}`,
						onClick: () => setOpen(false),
						className: "flex items-baseline gap-4 border-b hairline py-4 font-display text-4xl text-foreground hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-sans text-xs text-primary",
							children: ["0", i + 1]
						}), n.label]
					})
				}, n.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
				href: "#contact",
				onClick: () => setOpen(false),
				className: "mt-10 w-full",
				children: "Book Now"
			})]
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "grain relative flex min-h-[100svh] items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMG.hero,
				alt: "Luxury cocktail bar with premium spirits and atmospheric lighting",
				className: "absolute inset-0 size-full scale-105 object-cover",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-7xl gap-12 px-5 pt-36 pb-16 md:px-10 md:pb-24 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow animate-rise",
							children: "Luxury Mobile Bartending · Metro Atlanta & Georgia"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display-xl mt-6 text-foreground animate-rise",
							style: { animationDelay: "120ms" },
							children: [
								"More Than ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-primary",
									children: "a Bar."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"It's an Experience."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground animate-rise",
							style: { animationDelay: "240ms" },
							children: "Crafted cocktails for the grown-ups, lemonade magic for the little ones, and sophisticated zero-proof drinks for everyone in between — delivered to your event, beautifully."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4 animate-rise",
							style: { animationDelay: "360ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
								href: "#contact",
								children: ["Book Your Event ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
								href: "#services",
								variant: "outline",
								children: "Explore the Experience"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					"aria-label": "The Triple-Bar Experience",
					className: "self-end border-l hairline pl-6 lg:col-span-4 animate-rise",
					style: { animationDelay: "480ms" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "One Event · Three Bars"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-5 space-y-4",
						children: [
							[
								"01",
								"Craft Cocktail Bar",
								"bg-gold"
							],
							[
								"02",
								"Kids' Lemonade Bar",
								"bg-citrus"
							],
							[
								"03",
								"Zero-Proof Mocktail Bar",
								"bg-sage"
							]
						].map(([n, label, dot]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-4 font-display text-xl text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `size-2 rounded-full ${dot}`,
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-xs text-muted-foreground",
									children: n
								}),
								label
							]
						}, n))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#about",
				className: "absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-[0.3em] text-muted-foreground uppercase hover:text-primary md:flex",
				children: ["Scroll ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5 animate-bounce" })]
			})
		]
	});
}
/** Adds data-shown="true" when the element scrolls into view (pairs with the `reveal` utility). */
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				el.setAttribute("data-shown", "true");
				io.disconnect();
			}
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return ref;
}
function Reveal({ children, className, delay = 0 }) {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "band-ivory py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "img-zoom aspect-[4/5]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.about,
						alt: "Bartender crafting premium cocktails at an elegant mobile bar",
						loading: "lazy",
						className: "size-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -right-4 -bottom-8 bg-ink px-7 py-6 text-ivory shadow-[var(--shadow-lux)] md:-right-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-5xl italic text-gold",
						children: "ATL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[0.65rem] tracking-[0.3em] uppercase",
						children: "Metro Atlanta & Georgia"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6 lg:col-start-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "About Booze Babies Atl"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-lg mt-5",
							children: ["We show up and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-primary",
								children: "raise the bar."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						className: "mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Booze Babies Atl is a luxury mobile bartending experience built for people who refuse to settle for average. We bring the bar to you — fully set up, beautifully presented, and staffed by bartenders who know their craft." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We specialize in events where every guest deserves a moment: the adults at the cocktail bar, the kids at their own lemonade station, and everyone in between at our zero-proof bar. No one gets left out." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 300,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-12 grid grid-cols-3 border-t hairline pt-8",
							children: [
								["Georgia", "Statewide service"],
								["3 Bars", "One setup"],
								["Every", "Guest included"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-r hairline pr-4 last:border-0 [&:not(:first-child)]:pl-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-2xl md:text-3xl",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-xs tracking-wider text-muted-foreground uppercase",
									children: v
								})]
							}, k))
						})
					})
				]
			})]
		})
	});
}
var accent = {
	cocktail: {
		text: "text-gold",
		bg: "bg-gold",
		border: "border-gold",
		tag: "Adults · 21+"
	},
	lemonade: {
		text: "text-citrus",
		bg: "bg-citrus",
		border: "border-citrus",
		tag: "For the little ones"
	},
	mocktail: {
		text: "text-sage",
		bg: "bg-sage",
		border: "border-sage",
		tag: "Zero proof · Full craft"
	}
};
function TripleBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 border-b hairline pb-14 lg:grid-cols-12 lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Triple-Bar Experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-lg mt-5",
						children: [
							"One Event. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-primary",
								children: "Three Unforgettable"
							}),
							" Bar Experiences."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground",
						children: "Most mobile bars serve the adults. We serve the whole guest list — three complementary bars, each with its own identity, all under one booking."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: BARS.map((bar, i) => {
					const a = accent[bar.key];
					const flip = i % 2 === 1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid items-center gap-10 border-b hairline py-16 md:py-24 lg:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: cn("relative lg:col-span-6", flip && "lg:order-2 lg:col-start-7"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "img-zoom aspect-[5/4]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: bar.img,
									alt: bar.alt,
									loading: "lazy",
									className: "size-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("absolute top-0 h-full w-1", flip ? "-right-3" : "-left-3", a.bg),
								"aria-hidden": true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 120,
							className: cn("lg:col-span-5", flip ? "lg:order-1" : "lg:col-start-8"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("font-display text-7xl italic leading-none md:text-8xl", a.text),
										children: bar.num
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("border px-3 py-1 text-[0.65rem] tracking-[0.25em] uppercase", a.border, a.text),
										children: a.tag
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 text-sm tracking-[0.2em] text-muted-foreground uppercase",
									children: bar.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
									children: bar.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 leading-relaxed text-muted-foreground",
									children: bar.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 grid gap-3 sm:grid-cols-2",
									children: bar.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: cn("mt-0.5 size-4 shrink-0", a.text),
											"aria-hidden": true
										}), p]
									}, p))
								})
							]
						})]
					}, bar.key);
				})
			})]
		})
	});
}
function Events() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "band-ivory py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Services & Portfolio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-lg mt-5",
						children: ["Events we ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-primary",
							children: "elevate."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						className: "max-w-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-muted-foreground",
							children: "From intimate private parties to large-scale corporate events — we bring the experience to you."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3",
					children: EVENTS.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "bg-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 3 * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "group img-zoom relative block aspect-[4/3]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: e.img,
										alt: e.alt,
										loading: "lazy",
										className: "size-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-ivory",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs tracking-[0.25em] text-gold",
											children: ["0", i + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-display text-2xl md:text-3xl",
											children: e.name
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											className: "size-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1",
											"aria-hidden": true
										})]
									})
								]
							})
						})
					}, e.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-28 grid gap-4 md:grid-cols-12 md:items-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "md:col-span-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "The Setup Speaks for Itself"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 mb-8 font-display text-3xl md:text-4xl",
									children: "A look behind the bar."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "img-zoom aspect-[4/5]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: GALLERY[0].img,
										alt: GALLERY[0].alt,
										loading: "lazy",
										className: "size-full object-cover"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-4 md:col-span-7",
							children: GALLERY.slice(1, 5).map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 70,
								className: cn("img-zoom", i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: g.img,
									alt: g.alt,
									loading: "lazy",
									className: "size-full object-cover"
								})
							}, g.img))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "img-zoom aspect-[21/9] md:col-span-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: GALLERY[5].img,
								alt: GALLERY[5].alt,
								loading: "lazy",
								className: "size-full object-cover"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
						href: "#contact",
						variant: "outline",
						children: "Inquire About Your Event"
					})
				})
			]
		})
	});
}
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
/**
* Add-on prices are PENDING CLIENT CONFIRMATION. Kept at $0 on purpose —
* do not invent a price. Update here once the client confirms.
*/
var ADDON_PRICES = {
	lemonade: 0,
	mocktail: 0
};
function clampGuests(n) {
	if (!Number.isFinite(n)) return 100;
	return Math.min(300, Math.max(25, Math.round(n)));
}
function calculateEstimate(guests, addons) {
	const g = clampGuests(guests);
	const guestTotal = g * 6;
	const addonTotal = (addons.lemonade ? ADDON_PRICES.lemonade : 0) + (addons.mocktail ? ADDON_PRICES.mocktail : 0);
	return {
		guests: g,
		base: 500,
		guestTotal,
		addonTotal,
		total: 500 + guestTotal + addonTotal
	};
}
var formatUSD = (n) => new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
}).format(n);
var ADDONS = [{
	key: "lemonade",
	label: "Kids' Lemonade Bar",
	dot: "bg-citrus"
}, {
	key: "mocktail",
	label: "Zero-Proof Mocktail Bar",
	dot: "bg-sage"
}];
var addonPriceLabel = (k) => "Price TBC";
function RatesCalculator({ guests, addons, onGuests, onAddons, onLockIn }) {
	const est = calculateEstimate(guests, addons);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rates",
		className: "relative overflow-hidden py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Rates"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-lg mt-5",
							children: ["Get a quick ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-primary",
								children: "estimate."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						className: "mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Base pricing starts at ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "font-medium text-foreground",
									children: formatUSD(500)
								}),
								" plus",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
									className: "font-medium text-foreground",
									children: [formatUSD(6), " per guest"]
								}),
								". Add the bars that suit your guest list."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex gap-3 border-l-2 border-primary pl-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									className: "mt-0.5 size-4 shrink-0 text-primary",
									"aria-hidden": true
								}), "Add-on pricing is pending confirmation. Estimates reflect base pricing only until finalized."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base",
								children: "Ready for a personalized quote? Lock in your estimate and we'll follow up with exact pricing."
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 150,
				className: "lg:col-span-6 lg:col-start-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border hairline bg-card p-6 shadow-[var(--shadow-lux)] md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								id: "guest-label",
								className: "text-sm tracking-[0.2em] text-muted-foreground uppercase",
								children: "Guest Count"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("output", {
								"aria-live": "polite",
								className: "font-display text-5xl text-primary tabular-nums",
								children: [est.guests, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 font-sans text-sm text-muted-foreground",
									children: "guests"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							"aria-labelledby": "guest-label",
							className: "mt-8 [&_[role=slider]]:size-6 [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary [&_[role=slider]]:bg-background [&_[role=slider]]:transition-transform [&_[role=slider]:hover]:scale-110",
							min: 25,
							max: 300,
							step: 1,
							value: [est.guests],
							onValueChange: ([v]) => onGuests(v ?? guests)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: 25 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: 300 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "mt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-sm tracking-[0.2em] text-muted-foreground uppercase",
								children: "Add-on Experiences"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-3",
								children: ADDONS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: cn("flex cursor-pointer items-center justify-between border p-4 transition-colors", addons[a.key] ? "border-primary bg-primary/5" : "hairline hover:border-foreground/30"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("size-2.5 rounded-full", a.dot),
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block",
											children: a.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: addonPriceLabel(a.key)
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: addons[a.key],
										onCheckedChange: (c) => onAddons({
											...addons,
											[a.key]: c
										}),
										"aria-label": a.label
									})]
								}, a.key))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-10 space-y-3 border-t hairline pt-6 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Base fee"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "tabular-nums",
										children: formatUSD(est.base)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "text-muted-foreground",
										children: [
											"Guests (",
											est.guests,
											" × ",
											formatUSD(6),
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "tabular-nums",
										children: formatUSD(est.guestTotal)
									})]
								}),
								ADDONS.filter((a) => addons[a.key]).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: a.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "TBC" })]
								}, a.key))
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-end justify-between border-t hairline pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm tracking-[0.2em] uppercase",
								children: "Estimated Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-live": "polite",
								className: "font-display text-5xl text-primary tabular-nums md:text-6xl",
								children: formatUSD(est.total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
							type: "button",
							onClick: onLockIn,
							className: "mt-8 w-full",
							children: ["Lock In Estimate & Book Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
						})
					]
				})
			})]
		})
	});
}
var emptyInquiry = {
	fullName: "",
	email: "",
	phone: "",
	eventType: "",
	eventDate: "",
	guestCount: "",
	services: ["cocktail"],
	budget: "",
	details: ""
};
function validateInquiry(d, today = /* @__PURE__ */ new Date()) {
	const e = {};
	if (d.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) e.email = "Please enter a valid email address.";
	if (d.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a valid phone number.";
	if (!d.eventType) e.eventType = "Please select an event type.";
	const t = new Date(today);
	t.setHours(0, 0, 0, 0);
	if (!d.eventDate || /* @__PURE__ */ new Date(d.eventDate + "T00:00:00") < t) e.eventDate = "Please select a future event date.";
	if (!(Number(d.guestCount) >= 1)) e.guestCount = "Please enter a guest count of at least 1.";
	if (d.services.length === 0) e.services = "Please select at least one service.";
	return e;
}
/**
* Submission hook. No delivery service is connected yet, so this never claims
* the inquiry was sent. Replace the body with an API/email call to go live.
*/
async function submitInquiry(data) {
	console.info("[Booze Babies Atl] Inquiry prepared (no delivery service connected):", data);
	return { delivered: false };
}
var inputCls = "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-destructive";
function Field({ id, label, required, error, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: id,
				className: "text-xs tracking-[0.2em] text-muted-foreground uppercase",
				children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					"aria-hidden": true,
					children: " *"
				})]
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${id}-err`,
				role: "alert",
				className: "mt-2 text-sm text-destructive",
				children: error
			})
		]
	});
}
function BookingForm({ prefill }) {
	const uid = (0, import_react.useId)();
	const [data, setData] = (0, import_react.useState)(emptyInquiry);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [fromCalc, setFromCalc] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!prefill) return;
		setData((d) => ({
			...d,
			guestCount: prefill.guestCount,
			services: prefill.services,
			budget: prefill.budget
		}));
		setErrors((e) => ({
			...e,
			guestCount: void 0,
			services: void 0
		}));
		setFromCalc(true);
		setStatus("idle");
	}, [prefill]);
	const set = (k, v) => {
		setData((d) => ({
			...d,
			[k]: v
		}));
		if (errors[k]) setErrors((e) => ({
			...e,
			[k]: void 0
		}));
	};
	const toggleService = (k) => set("services", data.services.includes(k) ? data.services.filter((s) => s !== k) : [...data.services, k]);
	const onSubmit = async (e) => {
		e.preventDefault();
		const errs = validateInquiry(data);
		setErrors(errs);
		const first = Object.keys(errs)[0];
		if (first) {
			document.getElementById(`${uid}-${first}`)?.focus();
			return;
		}
		setStatus("submitting");
		await submitInquiry(data);
		setStatus("ready");
	};
	const f = (k) => ({
		id: `${uid}-${k}`,
		"aria-invalid": errors[k] ? true : void 0,
		"aria-describedby": errors[k] ? `${uid}-${k}-err` : void 0
	});
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "band-ivory py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Booking Inquiry"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-lg mt-5",
							children: ["Let's make your event ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-primary",
								children: "unforgettable."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg leading-relaxed text-muted-foreground",
							children: "Tell us about your event and we'll be in touch within 24–48 hours to discuss details and confirm availability."
						}), fromCalc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 border-l-2 border-primary pl-4 text-sm",
							children: "Your calculator estimate has been added below. You can still adjust any field."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7 lg:col-start-6",
				children: status === "ready" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "status",
					className: "border hairline bg-card p-8 md:p-12 animate-rise",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-10 text-primary",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-4xl",
							children: "Your inquiry details are ready."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: [
								"Thank you, ",
								data.fullName.split(" ")[0],
								". Online delivery isn't connected yet, so this inquiry has not been sent. For now, reach us on Instagram or TikTok at ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "@BoozeBabies.Atl"
								}),
								" with the details below."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 grid gap-4 border-t hairline pt-6 text-sm sm:grid-cols-2",
							children: [
								["Event", data.eventType],
								["Date", data.eventDate],
								["Guests", data.guestCount],
								["Services", data.services.map((s) => BARS.find((b) => b.key === s)?.name).join(", ")],
								["Budget", data.budget || "—"],
								["Email", data.email]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-[0.2em] text-muted-foreground uppercase",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: v
							})] }, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
							type: "button",
							variant: "outline",
							className: "mt-10",
							onClick: () => setStatus("idle"),
							children: "Edit Details"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					noValidate: true,
					onSubmit,
					className: "grid gap-x-8 gap-y-8 sm:grid-cols-2",
					"aria-label": "Booking inquiry",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: `${uid}-fullName`,
							label: "Full Name",
							required: true,
							error: errors.fullName,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								...f("fullName"),
								className: inputCls,
								autoComplete: "name",
								placeholder: "Your full name",
								value: data.fullName,
								onChange: (e) => set("fullName", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: `${uid}-email`,
							label: "Email Address",
							required: true,
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								...f("email"),
								type: "email",
								className: inputCls,
								autoComplete: "email",
								placeholder: "you@example.com",
								value: data.email,
								onChange: (e) => set("email", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: `${uid}-phone`,
							label: "Phone Number",
							required: true,
							error: errors.phone,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								...f("phone"),
								type: "tel",
								className: inputCls,
								autoComplete: "tel",
								placeholder: "(404) 555-0100",
								value: data.phone,
								onChange: (e) => set("phone", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: `${uid}-eventType`,
							label: "Event Type",
							required: true,
							error: errors.eventType,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								...f("eventType"),
								className: cn(inputCls, "cursor-pointer [&>option]:text-ink"),
								value: data.eventType,
								onChange: (e) => set("eventType", e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select event type"
								}), EVENT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: `${uid}-eventDate`,
							label: "Event Date",
							required: true,
							error: errors.eventDate,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								...f("eventDate"),
								type: "date",
								min: today,
								className: inputCls,
								value: data.eventDate,
								onChange: (e) => set("eventDate", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: `${uid}-guestCount`,
							label: "Estimated Guest Count",
							required: true,
							error: errors.guestCount,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								...f("guestCount"),
								type: "number",
								inputMode: "numeric",
								min: 1,
								className: inputCls,
								placeholder: "e.g. 100",
								value: data.guestCount,
								onChange: (e) => set("guestCount", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "sm:col-span-2",
							"aria-describedby": errors.services ? `${uid}-services-err` : void 0,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
									className: "text-xs tracking-[0.2em] text-muted-foreground uppercase",
									children: ["Interested Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										"aria-hidden": true,
										children: " *"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-3",
									children: BARS.map((b, i) => {
										const on = data.services.includes(b.key);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: cn("flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring", on ? "border-foreground bg-foreground text-background" : "hairline hover:border-foreground/40"),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: i === 0 ? `${uid}-services` : void 0,
													type: "checkbox",
													className: "sr-only",
													checked: on,
													onChange: () => toggleService(b.key)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("size-2 rounded-full", b.key === "cocktail" ? "bg-gold" : b.key === "lemonade" ? "bg-citrus" : "bg-sage"),
													"aria-hidden": true
												}),
												b.name
											]
										}, b.key);
									})
								}),
								errors.services && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: `${uid}-services-err`,
									role: "alert",
									className: "mt-2 text-sm text-destructive",
									children: errors.services
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: `${uid}-budget`,
							label: "Estimated Budget",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								...f("budget"),
								className: inputCls,
								placeholder: "e.g. $1,500",
								value: data.budget,
								onChange: (e) => set("budget", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: `${uid}-details`,
							label: "Additional Event Details",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								...f("details"),
								rows: 4,
								className: cn(inputCls, "resize-y"),
								placeholder: "Venue, timing, theme, special requests…",
								value: data.details,
								onChange: (e) => set("details", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
								type: "submit",
								disabled: status === "submitting",
								className: "w-full sm:w-auto",
								children: status === "submitting" ? "Preparing…" : "Submit Inquiry"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "*"
								}), " Required fields"]
							})]
						})
					]
				})
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t hairline",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border-b hairline py-8",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max animate-marquee gap-12 font-display text-5xl whitespace-nowrap italic text-foreground/15 md:text-7xl",
					children: Array.from({ length: 2 }).flatMap((_, k) => [
						"Craft Cocktails",
						"Kids' Lemonade",
						"Zero-Proof Mocktails",
						"Metro Atlanta"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						t,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary/40",
							children: "✦"
						})
					] }, `${k}${t}`)))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-4xl italic",
							children: ["Booze Babies ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Atl"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-muted-foreground",
							children: [
								"Luxury Mobile Bartending",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Metro Atlanta & Georgia"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer",
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid grid-cols-2 gap-3 text-sm",
							children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${n.id}`,
								className: "text-muted-foreground transition-colors hover:text-primary",
								children: n.label
							}) }, n.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Follow Along"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SOCIAL.instagram.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-primary",
								children: ["Instagram — ", SOCIAL.instagram.handle]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SOCIAL.tiktok.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-primary",
								children: ["TikTok — ", SOCIAL.tiktok.handle]
							}) })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t hairline px-5 py-6 text-xs text-muted-foreground md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Booze Babies Atl. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Metro Atlanta & Georgia — Available for travel" })]
			})
		]
	});
}
function Index() {
	const [guests, setGuests] = (0, import_react.useState)(100);
	const [addons, setAddons] = (0, import_react.useState)({
		lemonade: false,
		mocktail: false
	});
	const [prefill, setPrefill] = (0, import_react.useState)(null);
	const lockIn = () => {
		const est = calculateEstimate(guests, addons);
		const services = [
			"cocktail",
			...addons.lemonade ? ["lemonade"] : [],
			...addons.mocktail ? ["mocktail"] : []
		];
		setPrefill({
			guestCount: String(est.guests),
			services,
			budget: `${formatUSD(est.total)} (calculator estimate)`,
			stamp: Date.now()
		});
		document.getElementById("contact")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripleBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Events, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatesCalculator, {
				guests,
				addons,
				onGuests: setGuests,
				onAddons: setAddons,
				onLockIn: lockIn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, { prefill })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { Index as component };
