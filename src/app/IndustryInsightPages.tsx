import { SiteFooter } from "./components/SiteFooter";
import { SiteNav as SharedSiteNav } from "./components/SiteNav";
import { useEffect } from "react";
import { ArrowRight, Check, ChevronRight, Sparkles } from "lucide-react";
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

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    applySeo({ title, description });
  }, [title, description]);
}

function Nav() {
  return <SharedSiteNav />;
}

function Footer() {
  return <SiteFooter />;
}

const industries = [
  ["Real estate & property", "Websites and customer journeys that help buyers compare, trust and make an enquiry with less hesitation.", "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"],
  ["Hospitality & lifestyle", "Distinct brand and booking experiences that give guests a feel for the standard before they arrive.", "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=800&q=80"],
  ["Technology & SaaS", "Product strategy and UI/UX for teams that need a complex service to feel straightforward from the first screen.", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"],
  ["Retail & e-commerce", "Storefronts and campaigns that make products easy to explore, trust and buy.", "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80"],
  ["Professional services", "Credible websites and content for advisory, legal, finance, education and B2B teams where trust comes first.", "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"],
  ["Health & wellbeing", "Clear, considered digital experiences for services where people need reassurance before they decide.", "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"],
] as const;

const articles = [
  ["A brand system should make everyday work easier.", "Brand strategy", "How a practical identity helps teams stay consistent across sales, service and marketing."],
  ["What a useful website brief needs before design starts.", "Website development", "The questions that save time later: audience, offer, priorities, proof and the action you need visitors to take."],
  ["Where AI automation earns its place first.", "AI & systems", "Start with repeat tasks and slow handovers. The most useful automation often solves a small, frequent problem."],
  ["Good UX begins before the first screen.", "UI/UX design", "A clear user journey depends on the business decision behind it—not just a polished interface."],
  ["How a new business can look credible online.", "Digital strategy", "The practical building blocks: a clear offer, honest proof, a sensible website and a reliable route to contact."],
  ["A website should do more than explain what you do.", "Web design", "How structure, words and user flow help the right visitor take the next step."],
] as const;

export function IndustriesPage() {
  usePageMeta(
    "Industries — MBK.GLOBAL",
    "MBK.GLOBAL partners with property, technology, hospitality, e-commerce, professional services and wellbeing businesses worldwide."
  );
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />

      {/* Hero */}
      <section className="border-b border-[#0e2b1a]/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.65fr_.35fr] lg:items-end">
          <div>
            <Label>Industries / Built around real buying decisions</Label>
            <h1 className="mt-5 max-w-4xl font-['Fraunces'] text-[clamp(2.5rem,4.8vw,4.75rem)] font-semibold leading-[.95] tracking-[-.03em]">
              Different sectors need <i className="font-medium italic text-[#1c5f3d]">different answers.</i>
            </h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#527060]">
            A property buyer, a hotel guest and a software user do not make the same decision. We begin with that difference, then build the right digital response around it.
          </p>
        </div>
      </section>

      {/* Industry cards */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(([title, copy, img]) => (
              <motion.article
                whileHover={{ y: -4 }}
                key={title}
                className="group relative overflow-hidden bg-[#e4ede6] transition"
              >
                <div className="overflow-hidden bg-[#dce8df]">
                  <img
                    loading="lazy"
                    src={img}
                    alt={title}
                    className="aspect-[16/9] w-full object-cover opacity-70 mix-blend-multiply transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-end">
                    <ChevronRight className="text-[#1c5f3d] transition group-hover:translate-x-1" size={18} />
                  </div>
                  <h2 className="mt-6 font-['Fraunces'] text-2xl font-semibold tracking-[-.03em]">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#527060]">{copy}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1c5f3d] transition hover:text-[#0e2b1a]">
                    Discuss your sector <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Point of view (dark) */}
      <section className="bg-[#0e2b1a] px-5 py-20 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <Label light>Our point of view</Label>
            <h2 className="mt-5 font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-.04em]">
              The right work starts with a question worth answering.
            </h2>
          </div>
          <ul className="grid gap-4 text-sm leading-7 text-white/70">
            {[
              "What needs to become clearer for your customer?",
              "Where is the business currently losing confidence or momentum?",
              "What should your digital presence make easier next?",
            ].map(question => (
              <li key={question} className="flex gap-3">
                <Check className="mt-1 shrink-0 text-[#8cc9a8]" size={16} />
                {question}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function InsightsPage() {
  usePageMeta(
    "Insights — MBK.GLOBAL",
    "Perspective from MBK.GLOBAL on brand strategy, website development, UI/UX, AI automation and digital growth."
  );
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />

      {/* Hero */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
            <Label>MBK.GLOBAL / Notes from the work</Label>
          <h1 className="mt-5 max-w-4xl font-['Fraunces'] text-[clamp(2.5rem,4.8vw,4.75rem)] font-semibold leading-[.95] tracking-[-.03em]">
            Clear thinking for <i className="font-medium italic text-[#1c5f3d]">better digital decisions.</i>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#527060]">
            Straightforward notes on websites, branding, UI/UX, SEO and automation—written for people making real business decisions.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="border-y border-[#0e2b1a]/10 px-5 md:px-10">
        <div className="mx-auto max-w-7xl">
          {articles.map(([title, category, excerpt], index) => (
            <article key={title} className="group grid gap-6 border-b border-[#0e2b1a]/10 py-10 last:border-0 md:grid-cols-[.1fr_.22fr_.55fr_.13fr] md:items-center">
              <Label>{String(index + 1).padStart(2, "0")}</Label>
              <p className="text-sm font-semibold text-[#1c5f3d]">{category}</p>
              <div>
                <h2 className="font-['Fraunces'] text-2xl font-semibold leading-tight tracking-[-.03em] transition group-hover:text-[#1c5f3d]">{title}</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#527060]">{excerpt}</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1c5f3d] md:justify-self-end">
                Talk to us <ArrowRight className="transition group-hover:translate-x-1" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 bg-[#e4ede6] p-7 md:grid-cols-[.6fr_.4fr] md:p-12">
          <div>
            <Label>Need a second opinion?</Label>
            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-.04em]">
              Start with the question behind your next project.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#527060]">
              Tell us what feels unclear, slow or difficult. A short conversation can help you see the right next step.
            </p>
          </div>
          <Link to="/contact" className="inline-flex self-end justify-self-start items-center gap-2 bg-[#1c5f3d] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0e2b1a]">
            Start a conversation <Sparkles size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
