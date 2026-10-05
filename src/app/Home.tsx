import { SiteNav } from "./components/SiteNav";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Globe2,
  Zap,
  Award,
  Clock,
} from "lucide-react";
import { Link } from "react-router";
import { useSeo } from "./seo";
import { MarketsProject } from "./components/MarketsProject";

// ── DATA ─────────────────────────────────────────────────────────────────────

const work = [
  { title: "Oakline Residences", category: "Web Experiences", type: "Real estate platform", img: "1613490493576-7fde63acd811", year: "2025" },
  { title: "Mysa Hotel", category: "Brand Identity", type: "Hospitality identity system", img: "1621293954908-907159247fc8", year: "2025" },
  { title: "Nexus Analytics", category: "Digital Products", type: "Operational dashboard", img: "1460925895917-afdab827c52f", year: "2024" },
  { title: "Foundry Goods", category: "Creative Campaigns", type: "Retail launch system", img: "1441984904996-e0b6ba687e04", year: "2024" },
  { title: "Studio Craft Co.", category: "Brand Identity", type: "Visual identity & print", img: "1572044162444-ad60f128bdea", year: "2024" },
  { title: "Apex Intelligence", category: "Digital Products", type: "Data intelligence UI", img: "1674027444485-cec3da58eef4", year: "2023" },
];

const serviceCards = [
  { label: "Web & Digital Products", body: "Websites, e-commerce, apps and bespoke web builds.", tag: "Development", to: "/services/web-development" },
  { label: "Brand & Visual Design", body: "Identity systems, campaign assets and creative direction.", tag: "Creative", to: "/services/branding" },
  { label: "Growth & Visibility", body: "SEO, GEO, AEO and AI search, alongside marketing and reputation.", tag: "Growth", to: "/services/seo" },
  { label: "AI & Business Systems", body: "Automation, CRM, APIs, data and smarter workflows.", tag: "Technology", to: "/services/ai" },
];

const faqs = [
  ["What services do you offer?", "Web development, UI/UX design, graphic design, branding, landing pages, business websites, e-commerce, SEO, AI integrations and complete digital solutions."],
  ["Do you work with international clients?", "Yes. We work remotely with clients from any country, currently serving businesses across 22 global markets."],
  ["How long does a website take?", "Most website projects take one to six weeks, depending on scope and the speed of feedback cycles."],
  ["Can you redesign my existing website?", "Yes. We redesign, modernize, optimize and substantially improve existing websites and digital products."],
  ["Do you provide website maintenance?", "Yes. Ongoing updates, bug fixes, security improvements and performance optimization are all available post-launch."],
  ["Do you provide custom solutions?", "Yes. Every project is tailored to your specific business goals, technical requirements and timeline."],
  ["How can I start a project?", "Contact us through the form, WhatsApp or email. We discuss the project in detail before preparing your quotation."],
];

const whyPillars = [
  { icon: Award, title: "Purpose driven", body: "Every design decision connects directly to a business outcome. No decoration for decoration's sake." },
  { icon: Zap, title: "Craft led", body: "Every interaction, layout and word earns its place. Quality is the baseline, not the exception." },
  { icon: Globe2, title: "Built to last", body: "Modern stacks that support what comes next—not just what exists today." },
  { icon: Clock, title: "Human partnership", body: "Clear communication from first call to post-launch support. Always available, always honest." },
];

// ── HELPERS ──────────────────────────────────────────────────────────────────

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`font-['DM_Mono'] text-[10px] uppercase tracking-[.14em] ${light ? "text-white/55" : "text-[#6b8c72]"}`}>
      {children}
    </span>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState("All Projects");
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useSeo({
    title: "MBK.GLOBAL | Creative Digital Agency for Websites, Branding & AI",
    description: "MBK.GLOBAL is an independent creative digital agency providing website development, UI/UX, branding, e-commerce, AI automation, SEO and digital growth services worldwide.",
    pathname: "/",
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.timeline()
        .from("[data-hero-label]", { autoAlpha: 0, y: 10, duration: 0.45 })
        .fromTo(
          "[data-hero-word]",
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", clearProps: "all" },
          "-=0.2"
        )
        .from(
          "[data-hero-media]",
          { clipPath: "inset(0 0 100% 0)", duration: 1.15, ease: "power3.inOut", clearProps: "clipPath" },
          "-=0.9"
        );
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el => {
        gsap.from(el, {
          y: 36, opacity: 0, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const shown = filter === "All Projects" ? work : work.filter(p => p.category === filter);

  const sendInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = [
      "*MBK.GLOBAL project inquiry*", "",
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Budget: ${d.get("budget")}`,
      `Business: ${d.get("business")}`,
      `Goals: ${d.get("goals")}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/923200276941?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main id="main-content" tabIndex={-1}
      ref={pageRef}
      className="overflow-x-hidden bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a] selection:bg-[#1c5f3d] selection:text-white"
    >
      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <SiteNav />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        id="top"
        className="relative isolate flex items-center overflow-hidden border-b border-[#0e2b1a]/10 px-5 py-14 md:px-10 md:py-20 lg:min-h-[calc(100svh-76px)]"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_65%_at_82%_22%,rgba(28,95,61,0.10),transparent_65%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-[53%] hidden w-px bg-[#0e2b1a]/06 lg:block" />
        <div className="pointer-events-none absolute left-6 top-28 hidden h-20 w-px bg-gradient-to-b from-[#c9a124]/50 to-transparent lg:block" />

        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16">

          {/* LEFT */}
          <div className="relative z-10">
            <div data-hero-label className="mb-8">
              <Label>Independent creative digital agency · Global</Label>
            </div>

            <h1 className="font-['Fraunces'] text-[clamp(2.65rem,7.1vw,7rem)] font-semibold leading-[.98] tracking-[-.025em]">
              <span data-hero-word className="block">Digital clarity</span>
              <span data-hero-word className="block">for brands</span>
              <span data-hero-word className="block">
                ready to{" "}
                <i className="font-medium italic text-[#1c5f3d]">grow.</i>
              </span>
            </h1>

            <p data-hero-word className="mt-8 max-w-lg text-base leading-7 text-[#527060]">
              MBK.GLOBAL brings strategy, design and technology into one focused studio partnership—so your next digital move feels credible, distinct and built to last.
            </p>

            <div data-hero-word className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group flex min-h-12 items-center gap-3 bg-[#1c5f3d] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(28,95,61,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0e2b1a] hover:shadow-[0_8px_32px_rgba(14,43,26,0.25)]"
              >
                Explore projects{" "}
                <ArrowRight size={15} className="transition duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="flex min-h-12 items-center gap-2 border border-[#0e2b1a]/22 px-6 py-3.5 text-sm font-semibold transition hover:border-[#1c5f3d] hover:text-[#1c5f3d]"
              >
                Start a project
              </a>
            </div>

            <div data-hero-word className="mt-12 grid grid-cols-3 divide-x divide-[#0e2b1a]/10 border-t border-[#0e2b1a]/10 pt-6">
              {[["05+", "Years of craft"], ["70+", "Projects shaped"], ["22", "Global markets"]].map(([n, l]) => (
                <div key={l} className="px-4 first:pl-0">
                  <b className="block font-['Fraunces'] text-2xl font-semibold tracking-[-.03em] sm:text-3xl">{n}</b>
                  <span className="mt-1 block font-['DM_Mono'] text-[8px] uppercase tracking-[.12em] text-[#6b8c72]">{l}</span>
                </div>
              ))}
            </div>

            <div data-hero-word className="mt-8 flex flex-wrap gap-x-6 gap-y-1 font-['DM_Mono'] text-[9px] uppercase tracking-[.13em] text-[#6b8c72]">
              <span>Strategy-led</span><span>·</span><span>Remote-ready</span><span>·</span><span>Built around outcomes</span>
            </div>
          </div>

          {/* RIGHT — image collage */}
          <div data-hero-media className="relative">
            <div className="absolute -right-3 -top-3 hidden size-20 border border-[#c9a124]/55 lg:block" />
            <div className="absolute -right-5 top-10 hidden h-28 w-px bg-gradient-to-b from-[#c9a124]/70 to-transparent lg:block" />

            <div
              className="grid grid-cols-2 grid-rows-[140px_140px] gap-3 sm:grid-rows-[215px_215px]"
            >
              {/* top-left */}
              <div className="overflow-hidden bg-[#e4ede6]">
                <img
                  fetchPriority="high"
                  src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=700&h=430&fit=crop&auto=format&q=85"
                  alt="Designer creating a visual identity system"
                  className="h-full w-full object-cover opacity-90 mix-blend-multiply transition duration-700 hover:scale-105"
                />
              </div>
              {/* right — spans 2 rows */}
              <div className="row-span-2 overflow-hidden bg-[#e4ede6]">
                <img
                  fetchPriority="high"
                  src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=560&h=760&fit=crop&auto=format&q=85"
                  alt="Refined boutique hospitality interior"
                  className="h-full w-full object-cover opacity-90 mix-blend-multiply transition duration-700 hover:scale-105"
                />
              </div>
              {/* bottom-left */}
              <div className="overflow-hidden bg-[#e4ede6]">
                <img
                  fetchPriority="high"
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=700&h=430&fit=crop&auto=format&q=85"
                  alt="Creative strategy workspace"
                  className="h-full w-full object-cover opacity-90 mix-blend-multiply transition duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* caption strip */}
            <div className="grid grid-cols-3 divide-x divide-[#0e2b1a]/12 border-t-2 border-[#c9a124] bg-[#f6f5ed]">
              {[["Creative", "Systems"], ["Studio", "2026"], ["Strategy", "Visible"]].map(([a, b]) => (
                <div key={a} className="p-3">
                  <span className="block font-['Fraunces'] text-sm font-semibold">{a}</span>
                  <span className="block font-['DM_Mono'] text-[8px] uppercase tracking-widest text-[#6b8c72]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="font-['DM_Mono'] text-[8px] uppercase tracking-[.2em] text-[#6b8c72]">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-[#6b8c72]/80 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES WITH IMAGES ─────────────────────────────────────────────── */}
      <section id="services" data-reveal className="px-5 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Label>Products & services</Label>
              <h2 className="mt-3 font-['Fraunces'] text-[clamp(2.8rem,5.5vw,6rem)] font-semibold leading-[.9] tracking-[-.04em]">
                The right capabilities,<br />
                <i className="font-medium italic text-[#1c5f3d]">in one studio.</i>
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex min-h-12 items-center gap-2 bg-[#0e2b1a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1c5f3d]"
            >
              All 23 services <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid overflow-hidden border border-[#0e2b1a]/12 lg:grid-cols-[.72fr_1.28fr]">
            <div className="flex min-h-80 flex-col justify-between bg-[#0e2b1a] p-7 text-white md:p-9">
              <div>
                <Label light>One studio, many useful moves</Label>
                <h3 className="mt-5 max-w-sm font-['Fraunces'] text-4xl font-semibold leading-[.95] tracking-[-.035em] md:text-5xl">
                  Start with the decision that changes <i className="font-medium text-[#8cc9a8]">everything next.</i>
                </h3>
              </div>
              <div className="flex items-end justify-between gap-5 border-t border-white/15 pt-5">
                <p className="max-w-56 text-sm leading-6 text-white/60">Strategy, craft and technology arranged around the outcome—not a fixed package.</p>
                <span className="font-['DM_Mono'] text-[10px] uppercase tracking-[.15em] text-[#c9a124]">MBK / 23</span>
              </div>
            </div>
            <div className="grid gap-px bg-[#0e2b1a]/12 sm:grid-cols-2">
              {serviceCards.map(({ label, body, tag, to }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <Link
                  to={to}
                  className="group flex min-h-40 flex-col justify-between bg-[#f6f5ed] p-5 transition duration-300 hover:bg-[#dce8df] sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="border border-[#1c5f3d]/25 px-2.5 py-1 font-['DM_Mono'] text-[9px] uppercase tracking-widest text-[#1c5f3d]">
                      {tag}
                    </span>
                    <span className="font-['DM_Mono'] text-[9px] uppercase tracking-widest text-[#6b8c72]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-['Fraunces'] text-xl font-semibold leading-[1.15] sm:text-2xl">{label}</h3>
                    <p className="mt-2 max-w-xs text-xs leading-5 text-[#527060]">{body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#1c5f3d] transition duration-200 group-hover:gap-3">
                      Explore services <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section aria-labelledby="search-overview-heading" className="border-t border-border bg-secondary px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <Label>SEO & AI discovery</Label>
            <h2 id="search-overview-heading" className="mt-4 font-['Fraunces'] text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.08]">Be easier to find.</h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-muted-foreground">Help customers discover your business through search engines, AI answers and relevant platforms. Our SEO work covers technical health, content, entities and brand trust, with GEO, AEO and LLM SEO considered where they fit your goals.</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">From international and e-commerce SEO to structured data, Core Web Vitals and conversion optimisation, we start with an audit and prioritise the work that matters. AI visibility and search rankings cannot be guaranteed.</p>
            <Link to="/services/seo" className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-primary">Explore all 50 SEO methods <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── WORK (dark) ──────────────────────────────────────────────────────── */}
      <section id="work" aria-labelledby="selected-work-heading" className="scroll-mt-20 bg-[#0e2b1a] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 border-t border-white/20 pt-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <span className="font-['DM_Mono'] text-[10px] uppercase tracking-[.16em] text-[#8cc9a8]">Portfolio / Selected work</span>
              <h2 id="selected-work-heading" className="mt-5 font-['Fraunces'] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.04] tracking-[-.02em]">
                Ideas made <i className="font-medium italic text-[#8cc9a8]">real.</i>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/75 lg:justify-self-end">Live platforms, considered websites and distinctive brands. Explore a selection of digital work from MBK.GLOBAL.</p>
          </div>
          <div className="mt-9 flex flex-col gap-5 border-y border-white/15 py-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter selected projects">
              {["All Projects", "Live Markets / Finance", "Web Experiences", "Digital Products", "Brand Identity", "Creative Campaigns"].map(x => (
                <button
                  key={x}
                  onClick={() => setFilter(x)}
                  aria-pressed={filter === x}
                  className={`min-h-11 border px-4 py-2 text-xs font-medium transition duration-200 ${filter === x ? "border-[#c9a124] bg-[#c9a124] font-semibold text-[#0e2b1a]" : "border-white/20 text-white/80 hover:border-[#8cc9a8] hover:text-white"}`}
                >
                  {x}
                </button>
              ))}
            </div>
            <p aria-live="polite" aria-atomic="true" className="font-['DM_Mono'] text-[10px] uppercase tracking-[.12em] text-white/65">{String(shown.length + (["All Projects", "Live Markets / Finance", "Digital Products"].includes(filter) ? 1 : 0)).padStart(2, "0")} projects / {filter}</p>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-10 md:mt-16 md:grid-cols-2 md:gap-y-16">
            {(filter === "All Projects" || filter === "Live Markets / Finance" || filter === "Digital Products") && <MarketsProject dark />}
            {shown.map((p, i) => (
              <article key={p.title} className="group min-w-0">
                <Link to="/work" aria-label={`Explore our work: ${p.title}`} className="block">
                <div className="relative overflow-hidden bg-[#1c5f3d]/20">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={`https://images.unsplash.com/photo-${p.img}?w=1200&h=880&fit=crop&auto=format&q=80`}
                    className="aspect-[1.4] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    alt={`${p.title} — ${p.type}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2b1a]/65 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 border-t border-white/20 pt-4">
                  <div>
                    <span className="font-['DM_Mono'] text-[10px] uppercase tracking-[.12em] text-[#8cc9a8]">
                      {p.category} · {p.year}
                    </span>
                    <h3 className="mt-2 font-['Fraunces'] text-2xl font-semibold leading-tight sm:text-3xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{p.type}</p>
                  </div>
                  <span className="mt-1 shrink-0 font-['DM_Mono'] text-xs text-white/55">
                    {String(work.indexOf(p) + 2).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 flex min-h-11 items-center gap-3 border-t border-white/10 pt-4 text-sm font-semibold text-[#c9a124]">Explore work <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-5 border-t border-white/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/70">Have something in mind? Let's make it happen.</p>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 border border-white/22 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#c9a124] hover:text-[#c9a124]"
            >
              View all projects <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section data-reveal aria-labelledby="process-heading" className="border-b border-border px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div>
              <Label>How we work / 01—04</Label>
              <h2 id="process-heading" className="mt-4 font-['Fraunces'] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08]">A clear path to launch.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">You know what comes next, what needs your input, and what we are working on. No guessing between milestones.</p>
          </div>
          <ol className="mt-10 grid border-t border-border md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Listen", "We learn about your business, your customers and what needs to change.", "A shared brief"],
              ["Plan", "We agree on the scope, priorities and timeline before design begins.", "A clear direction"],
              ["Make", "You see the work early. We design, build and refine it with your feedback.", "Regular reviews"],
              ["Launch", "We test across devices, help with handover and plan the next steps.", "Ready for real use"],
            ].map(([title, body, outcome], index) => (
              <li key={title} className="border-b border-border py-7 md:pr-8 lg:py-9">
                <span className="font-['DM_Mono'] text-xs text-[#826719]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-['Fraunces'] text-2xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">{body}</p>
                <p className="mt-6 font-['DM_Mono'] text-[10px] uppercase tracking-[.1em] text-primary">{outcome}</p>
              </li>
            ))}
          </ol>
          <Link to="/process" className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-primary">See the full process <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section data-reveal aria-labelledby="remote-heading" className="bg-secondary px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <Label>Across borders</Label>
            <h2 id="remote-heading" className="mt-4 max-w-md font-['Fraunces'] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08]">Different time zones.<br /><i className="font-medium text-primary">One shared direction.</i></h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Good collaboration does not depend on sharing an office. We work with teams worldwide, with a rhythm that makes room for your working day.</p>
            <Link to="/global" className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-primary">Working together, worldwide <ArrowUpRight size={16} /></Link>
          </div>
          <div className="border-t border-foreground/15">
            {[
              ["A working rhythm", "We agree on meeting times, review dates and a practical way to share feedback."],
              ["Everything in view", "Briefs, progress updates and decisions stay documented so your whole team can follow along."],
              ["A useful handover", "You receive the agreed files, access and guidance to keep your website or brand moving after launch."],
            ].map(([title, body], index) => (
              <div key={title} className="grid grid-cols-[28px_1fr] gap-4 border-b border-foreground/15 py-7 sm:gap-6">
                <span className="pt-1 font-['DM_Mono'] text-[10px] text-muted-foreground">0{index + 1}</span>
                <div><h3 className="text-base font-semibold">{title}</h3><p className="mt-2 max-w-lg text-sm leading-7 text-muted-foreground">{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MBK ──────────────────────────────────────────────────────────── */}
      <section data-reveal className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.45fr_.55fr]">
          <div>
            <Label>Why MBK.GLOBAL</Label>
            <h2 className="mt-5 font-['Fraunces'] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.04em]">
              Good work has a<br />
              <i className="font-medium italic text-[#1c5f3d]">point of view.</i>
            </h2>
            <div className="mt-10 overflow-hidden bg-[#e4ede6]">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=440&fit=crop&auto=format&q=80"
                alt="Creative team collaborating in a studio"
                className="w-full object-cover opacity-80 mix-blend-multiply transition duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div className="self-center">
            {whyPillars.map(({ icon: Icon, title, body }) => (
              <div className="group border-t border-[#0e2b1a]/12 py-6" key={title}>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 grid size-9 place-items-center border border-[#1c5f3d]/20 text-[#1c5f3d] transition group-hover:bg-[#1c5f3d] group-hover:text-white">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="font-semibold transition group-hover:text-[#1c5f3d]">{title}</p>
                    <p className="mt-1.5 text-sm leading-6 text-[#527060]">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────────── */}
      <section data-reveal className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <Label>How we work</Label>
            <h2 className="mt-5 font-['Fraunces'] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-.04em]">
              A clear route from challenge to{" "}
              <i className="font-medium italic text-[#1c5f3d]">outcome.</i>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#527060]">
              Five focused stages. Every project runs through the same disciplined framework, adapted around your specific goals.
            </p>
          </div>
          <div>
            {[
              ["Challenge", "Clarify what needs to change and why it matters to the business."],
              ["Strategy", "Find the clearest route to a meaningful, measurable outcome."],
              ["Design", "Shape a visual system and experience with genuine purpose."],
              ["Build", "Bring approved work to life with reliable, responsive development."],
              ["Outcome", "Launch something your team can use, measure and grow with confidence."],
            ].map(([title, desc], i) => (
              <div className="group border-t border-[#0e2b1a]/12 py-5" key={title}>
                <div className="flex items-start gap-5">
                  <span className="mt-0.5 shrink-0 font-['DM_Mono'] text-[9px] uppercase tracking-[.1em] text-[#6b8c72]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold transition group-hover:text-[#1c5f3d]">{title}</p>
                    <p className="mt-1.5 text-sm leading-6 text-[#527060]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#e4ede6] px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.45fr_.55fr]">
          <div>
            <Label>Meet the founder</Label>
            <h2 className="mt-5 font-['Fraunces'] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-.04em]">
              Muhammad<br />
              <i className="font-medium italic text-[#1c5f3d]">Bakhtawar Khan.</i>
            </h2>
            <div className="relative mt-10 max-w-md">
              <div className="absolute -left-3 -top-3 hidden size-14 border border-[#c9a124]/55 sm:block" />
              <div className="grid grid-cols-2 grid-rows-[130px_130px] gap-3 sm:grid-rows-[160px_160px]">
                <div className="overflow-hidden bg-[#d4e1d5]">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1614779603758-8d6d2b240e39?w=640&h=360&fit=crop&auto=format&q=85"
                    alt="Creative professional in a studio"
                    className="h-full w-full object-cover opacity-85 mix-blend-multiply transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="row-span-2 overflow-hidden bg-[#d4e1d5]">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1768471125958-78556538fadc?w=520&h=720&fit=crop&auto=format&q=85"
                    alt="Designer working in a green creative studio"
                    className="h-full w-full object-cover opacity-85 mix-blend-multiply transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden bg-[#d4e1d5]">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=640&h=360&fit=crop&auto=format&q=85"
                    alt="Hands developing a design concept on a tablet"
                    className="h-full w-full object-cover opacity-85 mix-blend-multiply transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-[#0e2b1a]/12 border-t-2 border-[#c9a124] bg-[#e4ede6]">
                {[["Direction", "Clear"], ["Craft", "Daily"], ["Thinking", "Global"]].map(([title, detail]) => (
                  <div key={title} className="p-2.5">
                    <span className="block font-['Fraunces'] text-xs font-semibold">{title}</span>
                    <span className="block font-['DM_Mono'] text-[7px] uppercase tracking-widest text-[#6b8c72]">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="self-center">
            <p className="text-lg leading-8 text-[#527060]">
              Founder & Creative Designer. Strategy, visual clarity and technical care come together so brands can move forward with real confidence.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#0e2b1a]/12 pt-6">
              {[["05+", "Years"], ["70+", "Projects"], ["22", "Markets"]].map(([n, l]) => (
                <div key={l}>
                  <b className="block font-['Fraunces'] text-2xl font-semibold">{n}</b>
                  <Label>{l}</Label>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1c5f3d] transition hover:text-[#0e2b1a]"
              >
                About MBK <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal aria-labelledby="scope-heading" className="border-y border-border px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <Label>Before the brief</Label>
            <h2 id="scope-heading" className="mt-4 font-['Fraunces'] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08]">Start where you are.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">You do not need a finished brief. A goal, an existing website or an idea is enough to start a useful conversation.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link to="/packages" className="group flex flex-col items-start border border-border bg-card p-6 transition-colors hover:border-primary sm:p-8">
              <Label>A defined starting point</Label>
              <h3 className="mt-5 font-['Fraunces'] text-2xl font-semibold">Explore packages</h3>
              <p className="mb-7 mt-3 text-sm leading-7 text-muted-foreground">Compare focused options for your next website, brand or digital project.</p>
              <span className="mt-auto inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-primary">View options <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
            </Link>
            <Link to="/project-planner" className="group flex flex-col items-start border border-border p-6 transition-colors hover:border-primary sm:p-8">
              <Label>Room for your own idea</Label>
              <h3 className="mt-5 font-['Fraunces'] text-2xl font-semibold">Shape your brief</h3>
              <p className="mb-7 mt-3 text-sm leading-7 text-muted-foreground">Use our project planner to share your goals, priorities and budget.</p>
              <span className="mt-auto inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-primary">Open planner <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.38fr_.62fr]">
          <div>
            <Label>FAQ / clear answers</Label>
            <h2 className="mt-5 font-['Fraunces'] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-.04em]">
              Everything before we{" "}
              <i className="font-medium italic text-[#1c5f3d]">begin.</i>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#527060]">
              Every project receives a custom quotation based on scope, features and technical complexity.
            </p>
            <Link
              to="/faq"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1c5f3d] transition hover:text-[#0e2b1a]"
            >
              View all 100+ answers <ArrowRight size={14} />
            </Link>
          </div>
          <div>
            {faqs.map(([q, a], i) => (
              <div key={q} className="border-t border-[#0e2b1a]/12">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={openFaq === i}
                  aria-controls={`home-faq-${i}`}
                >
                  <span className="font-semibold transition hover:text-[#1c5f3d]">{q}</span>
                  {openFaq === i
                    ? <Minus size={16} className="shrink-0 text-[#1c5f3d]" />
                    : <Plus size={16} className="shrink-0 text-[#6b8c72]" />
                  }
                </button>
                <div
                  id={`home-faq-${i}`}
                  className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  aria-hidden={openFaq !== i}
                >
                  <div className="overflow-hidden"><p className="pb-5 text-sm leading-6 text-[#527060]">{a}</p></div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#0e2b1a]/12" />
          </div>
        </div>
      </section>

      {/* ── CONTACT (dark green) ─────────────────────────────────────────────── */}
      <section id="contact" className="relative overflow-hidden bg-[#1c5f3d] px-5 py-16 text-white md:px-10 md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border-[20px] border-white/5" />
        <div className="pointer-events-none absolute -left-12 bottom-12 size-52 rounded-full border-[14px] border-[#c9a124]/12" />
        <div className="pointer-events-none absolute right-1/4 top-0 h-full w-px bg-white/04" />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.55fr_.45fr]">
          <div>
            <Label light>Start a conversation</Label>
            <h2 className="mt-6 font-['Fraunces'] text-[clamp(3rem,6vw,7rem)] font-semibold leading-[.84] tracking-[-.04em]">
              Have an idea?<br />
              <i className="font-medium italic">{"Let's build it."}</i>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-6 text-white/70">
              Accepting a limited number of new projects for the next studio cycle. Get in touch early.
            </p>
            <div className="mt-10 grid gap-5 border-t border-white/20 pt-8 text-sm">
              <a href="https://wa.me/923200276941" className="group flex items-center gap-4">
                <span className="font-['DM_Mono'] text-[9px] uppercase tracking-[.14em] text-white/40 w-20 shrink-0">WhatsApp</span>
                <span className="font-semibold transition group-hover:text-[#c9a124]">+92 320 027 6941</span>
              </a>
              <a href="mailto:mbkglobalinternational@gmail.com" className="group flex items-center gap-4">
                <span className="font-['DM_Mono'] text-[9px] uppercase tracking-[.14em] text-white/40 w-20 shrink-0">Email</span>
                <span className="break-all font-semibold transition group-hover:text-[#c9a124]">mbkglobalinternational@gmail.com</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={sendInquiry}
            className="grid gap-4 border border-white/15 bg-white/[.05] p-6 backdrop-blur-sm sm:p-8"
          >
            <input
              required name="name" placeholder="Your name" aria-label="Your name" autoComplete="name"
              className="min-h-12 border-b border-white/30 bg-transparent py-3 text-sm outline-none placeholder:text-white/45 focus:border-white transition-colors"
            />
            <input
              required name="email" type="email" placeholder="Email address" aria-label="Email address" autoComplete="email"
              className="min-h-12 border-b border-white/30 bg-transparent py-3 text-sm outline-none placeholder:text-white/45 focus:border-white transition-colors"
            />
            <select
              required name="budget" defaultValue="" aria-label="Budget range"
              className="min-h-12 border-b border-white/30 bg-transparent py-3 text-sm text-white outline-none focus:border-white transition-colors"
            >
              <option value="" disabled className="text-[#0e2b1a]">Your budget range</option>
              <option className="text-[#0e2b1a]">Under $500</option>
              <option className="text-[#0e2b1a]">$500 – $1,500</option>
              <option className="text-[#0e2b1a]">$1,500 – $3,000</option>
              <option className="text-[#0e2b1a]">$3,000+</option>
              <option className="text-[#0e2b1a]">{"Let's discuss"}</option>
            </select>
            <select
              required name="business" defaultValue="" aria-label="Business type"
              className="min-h-12 border-b border-white/30 bg-transparent py-3 text-sm text-white outline-none focus:border-white transition-colors"
            >
              <option value="" disabled className="text-[#0e2b1a]">Business type</option>
              <option className="text-[#0e2b1a]">Startup</option>
              <option className="text-[#0e2b1a]">Small business</option>
              <option className="text-[#0e2b1a]">Corporate / enterprise</option>
              <option className="text-[#0e2b1a]">Personal brand</option>
            </select>
            <textarea
              required name="goals" rows={4} placeholder="What would you like to create?" aria-label="Project goals"
              className="resize-none border-b border-white/30 bg-transparent py-3 text-sm outline-none placeholder:text-white/45 focus:border-white transition-colors"
            />
            <button className="group mt-2 flex min-h-12 items-center justify-center gap-3 bg-white px-5 py-4 text-sm font-semibold text-[#1c5f3d] transition hover:bg-[#c9a124] hover:text-[#0e2b1a]">
              {sent ? "Open WhatsApp again" : "Send via WhatsApp"}{" "}
              <ArrowUpRight size={16} />
            </button>
            <p className="font-['DM_Mono'] text-[9px] uppercase tracking-[.12em] text-white/45">
              Details open in WhatsApp · Reply within one business day
            </p>
          </form>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0e2b1a] px-5 py-16 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_.75fr_.75fr_1.1fr] lg:gap-12">
            <div>
              <p className="font-['Fraunces'] text-4xl font-semibold tracking-[-.04em]">
                MBK<span className="text-[#c9a124]">.</span>GLOBAL
              </p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                Independent creative digital agency for thoughtful brands, useful products and stronger digital growth.
              </p>
              <p className="mt-7 font-['DM_Mono'] text-[9px] uppercase tracking-[.14em] text-[#8cc9a8]">
                Global / Remote-ready
              </p>
            </div>
            <div>
              <Label light>Explore</Label>
              <nav className="mt-5 grid gap-3 text-sm text-white/60">
                {[["About", "/about"], ["Services", "/services"], ["Work", "/work"], ["Global", "/global"], ["Process", "/process"], ["Industries", "/industries"], ["Insights", "/insights"], ["FAQs", "/faq"], ["Packages", "/packages"], ["Project planner", "/project-planner"], ["Contact", "/contact"]].map(([label, to]) => (
                  <Link key={to} className="transition hover:text-[#c9a124]" to={to}>{label}</Link>
                ))}
              </nav>
            </div>
            <div>
              <Label light>Capabilities</Label>
              <div className="mt-5 grid gap-3 text-sm text-white/60">
                {["Web Development", "UI/UX Design", "Brand Identity", "Digital Marketing", "AI & Automation", "E-Commerce"].map(x => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
            <div>
              <Label light>Start a conversation</Label>
              <div className="mt-5 grid gap-5 text-sm">
                <a className="group flex flex-col gap-1" href="https://wa.me/923200276941">
                  <span className="font-['DM_Mono'] text-[9px] uppercase tracking-[.12em] text-white/35">Call / WhatsApp</span>
                  <span className="font-semibold transition group-hover:text-[#c9a124]">03200276941</span>
                </a>
                <a className="group flex flex-col gap-1" href="mailto:mbkglobalinternational@gmail.com">
                  <span className="font-['DM_Mono'] text-[9px] uppercase tracking-[.12em] text-white/35">Email</span>
                  <span className="break-all font-semibold transition group-hover:text-[#c9a124]">mbkglobalinternational@gmail.com</span>
                </a>
              </div>
              <div className="mt-8">
                <Label light>Connect</Label>
                <div className="mt-3 flex gap-4 font-['DM_Mono'] text-[9px] uppercase tracking-widest text-white/45">
                  <a className="inline-flex min-h-11 items-center transition hover:text-[#c9a124]" href="https://wa.me/923200276941">WhatsApp</a>
                  <a className="inline-flex min-h-11 items-center transition hover:text-[#c9a124]" href="mailto:mbkglobalinternational@gmail.com">Email</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-5">
            <Label light>© 2026 MBK GLOBAL. All rights reserved.</Label>
            <Label light>Built with intention</Label>
          </div>
        </div>
      </footer>
    </main>
  );
}
