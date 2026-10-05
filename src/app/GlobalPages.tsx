import { SiteFooter } from "./components/SiteFooter";
import { SiteNav as SharedSiteNav } from "./components/SiteNav";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Clock3, Globe2, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { applySeo } from "./seo";

const Label = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <span className={`font-['DM_Mono'] text-[10px] uppercase tracking-[.14em] ${light ? "text-white/55" : "text-[#6b8c72]"}`}>{children}</span>
);

const allNavLinks = [
  ["/about", "About"], ["/services", "Services"], ["/work", "Work"], ["/global", "Global"],
  ["/process", "Process"], ["/industries", "Industries"], ["/insights", "Insights"], ["/faq", "FAQs"], ["/contact", "Contact"],
];

function Nav() {
  return <SharedSiteNav />;
}

function Footer() {
  return <SiteFooter />;
}

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    applySeo({ title, description });
  }, [title, description]);
}

// Exactly 22 approved operating markets
const countries: [string, string, string][] = [
  ["Middle East", "UAE", "🇦🇪"],
  ["Middle East", "Saudi Arabia", "🇸🇦"],
  ["Middle East", "Oman", "🇴🇲"],
  ["Middle East", "Qatar", "🇶🇦"],
  ["Middle East", "Kuwait", "🇰🇼"],
  ["Middle East", "Bahrain", "🇧🇭"],
  ["Americas", "Canada", "🇨🇦"],
  ["Americas", "USA", "🇺🇸"],
  ["Europe", "UK", "🇬🇧"],
  ["Europe", "Switzerland", "🇨🇭"],
  ["Europe", "Luxembourg", "🇱🇺"],
  ["Europe", "Ireland", "🇮🇪"],
  ["Europe", "Norway", "🇳🇴"],
  ["Europe", "Denmark", "🇩🇰"],
  ["Europe", "Netherlands", "🇳🇱"],
  ["Europe", "Germany", "🇩🇪"],
  ["Europe", "France", "🇫🇷"],
  ["Europe", "Turkey", "🇹🇷"],
  ["Asia Pacific", "Australia", "🇦🇺"],
  ["Asia Pacific", "Malaysia", "🇲🇾"],
  ["Asia Pacific", "Singapore", "🇸🇬"],
];

const regionNames = ["All markets", "Middle East", "South Asia", "Americas", "Europe", "Asia Pacific"];

export function GlobalPage() {
  const [region, setRegion] = useState("All markets");
  const visible = region === "All markets" ? countries : countries.filter(([area]) => area === region);
  usePageMeta(
    "Global Reach — MBK.GLOBAL",
    "MBK.GLOBAL works remotely with businesses in the Middle East, Europe, Americas and Asia Pacific for website design, branding, UI/UX, marketing and AI automation."
  );

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen overflow-hidden bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />

      {/* Hero */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.65fr_.35fr] lg:items-end">
          <div>
            <Label>Global reach / Remote-first collaboration</Label>
            <h1 className="mt-5 max-w-4xl font-['Fraunces'] text-[clamp(2.5rem,4.8vw,4.75rem)] font-semibold leading-[.95] tracking-[-.03em]">
              Good digital work does not need a shared <i className="font-medium italic text-[#1c5f3d]">postcode.</i>
            </h1>
          </div>
          <div className="border-l-2 border-[#c9a124] pl-6">
            <p className="font-['Fraunces'] text-5xl font-semibold tracking-[-.04em]">22</p>
            <Label>Approved operating markets</Label>
            <p className="mt-5 text-sm leading-6 text-[#527060]">
              We work with teams across markets through clear planning, practical communication and reliable delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Country marquee */}
      <section className="border-y border-[#0e2b1a]/10 bg-[#0e2b1a] py-4 text-white">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex w-max gap-8 whitespace-nowrap font-['DM_Mono'] text-xs uppercase tracking-[.1em]"
        >
          {[...countries, ...countries, ...countries].map(([, country, flag], index) => (
            <span key={`${country}-${index}`} className="text-[#8cc9a8]">
              {flag} {country}<b className="ml-8 text-white/30">✦</b>
            </span>
          ))}
        </motion.div>
      </section>

      {/* Country directory */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div>
              <Label>Country directory</Label>
              <h2 className="mt-4 font-['Fraunces'] text-4xl font-semibold tracking-[-.04em] md:text-6xl">
                Your market. A team that <i className="font-medium italic text-[#1c5f3d]">works alongside you.</i>
              </h2>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-2">
              {regionNames.map(name => (
                <button
                  key={name}
                  onClick={() => setRegion(name)}
                  className={`px-3 py-2 text-xs font-semibold transition ${region === name ? "bg-[#0e2b1a] text-white" : "border border-[#0e2b1a]/20 hover:border-[#1c5f3d]"}`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid border-l border-t border-[#0e2b1a]/12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map(([area, country, flag]) => (
              <div key={country} className="flex items-center justify-between border-b border-r border-[#0e2b1a]/12 p-5 transition hover:bg-[#e4ede6]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">{flag}</span>
                  <div>
                    <p className="font-semibold">{country}</p>
                    <Label>{area}</Label>
                  </div>
                </div>
                <MapPin size={14} className="text-[#1c5f3d]" />
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-[#527060]">
            Do not see your country here? If your team can meet and review work online, we can usually work together.
          </p>
        </div>
      </section>

      {/* How we work globally */}
      <section className="bg-[#e4ede6] px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Label>How we work globally</Label>
          <div className="mt-10 grid gap-px bg-[#0e2b1a]/10 sm:grid-cols-3">
            {[
              [Globe2, "A shared way of working", "You will have clear milestones, shared files and regular updates. We do not leave you guessing where the project stands."],
              [Clock3, "Time that respects your team", "Workshops and reviews are planned around the people who need to make decisions, wherever they are based."],
              [Check, "A useful handover", "We finish with the files, guidance and access your team needs to keep the work moving."],
            ].map(([Icon, title, body]) => (
              <div key={title as string} className="bg-[#f6f5ed] p-7">
                <Icon className="text-[#1c5f3d]" size={24} />
                <h2 className="mt-6 font-['Fraunces'] text-2xl font-semibold">{title as string}</h2>
                <p className="mt-3 text-sm leading-6 text-[#527060]">{body as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (green) */}
      <section className="bg-[#1c5f3d] px-5 py-16 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <Label light>Start from where you are</Label>
            <p className="mt-3 font-['Fraunces'] text-3xl font-semibold tracking-[-.04em]">A good project can begin with one clear conversation.</p>
          </div>
          <Link to="/contact" className="inline-flex w-fit items-center gap-2 bg-[#c9a124] px-5 py-3.5 text-sm font-semibold text-[#0e2b1a] transition hover:bg-white">
            Contact MBK.GLOBAL <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const stages = [
  ["Start with context", "We learn what is happening now, who you need to reach and where the current experience is falling short."],
  ["Set the direction", "We turn the conversation into a clear scope, a sensible order of work and a plan your team can follow."],
  ["Make the work visible", "We create the identity, interface, content or campaign in stages, so feedback arrives while it can still improve the result."],
  ["Build it properly", "Approved work becomes a responsive website, connected system or campaign, with careful checks before it goes live."],
  ["Launch with a plan", "We help you take the work live, hand it over cleanly and decide what is worth improving next."],
];

export function ProcessPage() {
  usePageMeta(
    "Our Process — MBK.GLOBAL",
    "Explore the MBK.GLOBAL creative process: discover, define, design, build and launch digital projects for global businesses."
  );
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />

      {/* Hero */}
      <section className="border-b border-[#0e2b1a]/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Label>How we work / Five clear stages</Label>
          <h1 className="mt-5 max-w-4xl font-['Fraunces'] text-[clamp(2.5rem,4.8vw,4.75rem)] font-semibold leading-[.95] tracking-[-.03em]">
            Good work starts with a process people can <i className="font-medium italic text-[#1c5f3d]">actually follow.</i>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#527060]">
            You will always know what we are doing, why it matters and what we need from you next. The process stays flexible, but the project never loses its direction.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="px-5 py-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          {stages.map(([title, description]) => (
            <article key={title} className="grid gap-3 border-b border-[#0e2b1a]/12 py-10 md:grid-cols-[.32fr_.68fr] md:items-center">
              <h2 className="font-['Fraunces'] text-3xl font-semibold tracking-[-.04em]">{title}</h2>
              <p className="text-sm leading-7 text-[#527060]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Principles (dark) */}
      <section className="bg-[#0e2b1a] px-5 py-20 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.52fr_.48fr]">
          <div>
            <Label light>Project principles</Label>
            <h2 className="mt-5 font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-.04em]">
              Clear decisions. Visible progress. No unnecessary layers.
            </h2>
          </div>
          <ul className="grid gap-4 text-sm leading-6 text-white/70">
            {[
              "One clear point of contact and a working rhythm that suits the project.",
              "Feedback at useful moments, instead of a large pile at the end.",
              "Scope decisions discussed early, before they become surprises.",
              "Practical handover notes and support after launch.",
            ].map(item => (
              <li className="flex gap-3" key={item}>
                <Check size={16} className="mt-1 shrink-0 text-[#8cc9a8]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border border-[#0e2b1a]/12 p-7 md:flex-row md:items-center md:p-10">
          <div>
            <Label>Start with the brief</Label>
            <p className="mt-2 font-['Fraunces'] text-2xl font-semibold">Tell us what needs to work better for your business.</p>
          </div>
          <Link to="/contact" className="inline-flex w-fit items-center gap-2 bg-[#1c5f3d] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0e2b1a]">
            Start a conversation <MessageCircle size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
