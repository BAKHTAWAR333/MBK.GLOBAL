import { SiteFooter } from "./components/SiteFooter";
import { SiteNav as SharedSiteNav } from "./components/SiteNav";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { applySeo } from "./seo";
import { MarketsProject } from "./components/MarketsProject";

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

const capabilities = [
  "Creative strategy", "Brand identity", "Web design & development", "UI/UX design",
  "E-commerce", "Mobile apps", "SEO & performance marketing", "AI automation",
];

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    applySeo({ title, description });
  }, [description, title]);
}

export function AboutPage() {
  usePageMeta(
    "About MBK.GLOBAL — Creative Digital Agency",
    "Learn about MBK.GLOBAL, a global creative digital agency delivering web design, branding, UI/UX, e-commerce, AI automation and digital marketing."
  );
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />

      {/* Hero */}
      <section className="border-b border-[#0e2b1a]/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <Label>About MBK.GLOBAL / Independent digital partner</Label>
            <h1 className="mt-5 max-w-4xl font-['Fraunces'] text-[clamp(2.5rem,4.8vw,4.75rem)] font-semibold leading-[.95] tracking-[-.03em]">
              Digital work that makes your business easier to{" "}
              <i className="font-medium italic text-[#1c5f3d]">understand and choose.</i>
            </h1>
          </div>
          <p className="max-w-lg text-sm leading-6 text-[#527060]">
            MBK.GLOBAL helps businesses turn unclear digital activity into focused, useful work. We bring together brand strategy, website development, UI/UX, marketing and automation when they need to work as one.
          </p>
        </div>
      </section>

      {/* Beliefs */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.42fr_.58fr]">
          <div>
            <Label>What we believe</Label>
            <p className="mt-5 font-['Fraunces'] text-3xl font-semibold leading-tight tracking-[-.03em]">
              Good digital work should answer a real business need—not just fill a screen.
            </p>
          </div>
          <div className="grid gap-px bg-[#0e2b1a]/10 sm:grid-cols-2">
            {[
              ["Useful before impressive", "Every page, campaign and interface should help a customer understand, decide or take action."],
              ["Built for your team", "We keep the process clear and hand over work your team can use with confidence."],
              ["Connected, not scattered", "Brand, website and growth work are planned together, so one decision supports the next."],
              ["Direct collaboration", "You work with people who understand the brief, communicate clearly and keep the work moving."],
            ].map(([title, copy]) => (
              <article key={title} className="bg-[#f6f5ed] p-6 transition hover:bg-[#e4ede6]">
                <h2 className="font-['Fraunces'] text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#527060]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#e4ede6] px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Label>Core capabilities</Label>
          <div className="mt-8 grid gap-x-10 border-t border-[#0e2b1a]/12 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div key={capability} className="border-b border-[#0e2b1a]/12 py-5">
                <p className="font-semibold">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio facts */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Label>Studio in numbers</Label>
          <div className="mt-10 grid gap-1 border-t border-[#0e2b1a]/12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["05+", "Years of focused digital craft"],
              ["70+", "Projects completed globally"],
              ["22", "Approved operating markets"],
              ["100%", "Remote-ready delivery"],
            ].map(([stat, title]) => (
              <div key={title} className="border-b border-[#0e2b1a]/12 py-8 pr-8">
                <p className="font-['Fraunces'] text-5xl font-semibold text-[#1c5f3d]">{stat}</p>
                <p className="mt-3 text-sm leading-6 text-[#527060]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (dark) */}
      <section className="bg-[#0e2b1a] px-5 py-20 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Label light>Work with us</Label>
            <h2 className="mt-5 font-['Fraunces'] text-4xl font-semibold tracking-[-.04em] md:text-6xl">
              Bring us the<br /><i className="font-medium italic text-[#8cc9a8]">problem worth solving.</i>
            </h2>
          </div>
          <Link to="/contact" className="inline-flex w-fit items-center gap-3 border border-[#8cc9a8] px-5 py-3.5 text-sm font-semibold text-[#8cc9a8] transition hover:bg-[#8cc9a8] hover:text-[#0e2b1a]">
            Talk through your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const projects = [
  ["Oakline Residences", "Real estate website", "Positioning, website design, development", "A considered digital sales environment designed to make a premium property offer easier to understand.", "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=85"],
  ["Mysa Hotel", "Hospitality identity", "Brand strategy, visual identity, social creative", "A warm, memorable identity system balancing guest experience with operational clarity.", "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=900&q=85"],
  ["Nexus", "Business dashboard", "UX research, UI design, product direction", "An information-rich product experience simplified around the decisions teams need to make daily.", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85"],
  ["Foundry Goods", "E-commerce launch", "E-commerce design, product storytelling, performance", "A conversion-focused storefront where product character and buying confidence work together.", "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=85"],
];

export function WorkPage() {
  usePageMeta(
    "Selected Work — MBK.GLOBAL",
    "Explore MBK.GLOBAL projects including MBK Global Markets, a live financial market platform, alongside website design, branding, e-commerce and digital products."
  );
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />

      {/* Hero */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Label>Selected work / Digital case studies</Label>
          <h1 className="mt-5 max-w-4xl font-['Fraunces'] text-[clamp(2.5rem,4.8vw,4.75rem)] font-semibold leading-[.95] tracking-[-.03em]">
            Work built around <i className="font-medium italic text-[#1c5f3d]">real business decisions.</i>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#527060]">
            A selection of website, brand, e-commerce and product work. Each project starts with a practical question: what does the business need people to understand, trust or do next?
          </p>
        </div>
      </section>

      {/* Work grid with images */}
      <section className="px-5 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <MarketsProject />
            {projects.map(([name, type, services, description, img], index) => (
              <article key={name} className={`group ${index % 2 ? "md:mt-12" : ""}`}>
                <div className="overflow-hidden bg-[#e4ede6]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={img}
                    className="aspect-[1.35] w-full object-cover transition duration-500 group-hover:scale-105"
                    alt={name}
                  />
                </div>
                <div className="mt-5 border-t-2 border-[#c9a124] pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-['Fraunces'] text-2xl font-semibold">{name}</h3>
                      <p className="mt-1 text-sm font-medium text-[#1c5f3d]">{type}</p>
                    </div>
                    <Label>{String(index + 2).padStart(2, "0")} / 05</Label>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#527060]">{description}</p>
                  <p className="mt-4 font-['DM_Mono'] text-[10px] uppercase tracking-[.12em] text-[#6b8c72]">{services}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1c5f3d] px-5 py-20 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 p-7 md:grid-cols-[.58fr_.42fr] md:p-0">
          <div>
            <Label light>Have a project in mind?</Label>
            <h2 className="mt-5 font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-.04em]">
              Let’s make the next version of your business easier to use, understand and remember.
            </h2>
          </div>
          <Link to="/contact" className="inline-flex self-end justify-self-start items-center gap-3 bg-[#c9a124] px-5 py-3.5 text-sm font-semibold text-[#0e2b1a] transition hover:bg-white">
            Start your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function ContactPage() {
  usePageMeta(
    "Contact MBK.GLOBAL — Start Your Project",
    "Contact MBK.GLOBAL for website development, branding, UI/UX design, SEO, e-commerce and AI automation projects."
  );
  const [submitted, setSubmitted] = useState(false);
  const sendToWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "*New MBK.GLOBAL project inquiry*",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      `Budget: ${data.get("budget")}`,
      `Project details: ${data.get("details")}`,
    ].join("\n");
    setSubmitted(true);
    window.open(`https://wa.me/923200276941?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />

      {/* Hero + Form */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.55fr_.45fr] lg:gap-14">
          <div>
            <Label>Contact / New projects and practical questions</Label>
            <h1 className="mt-5 max-w-3xl font-['Fraunces'] text-[clamp(2.5rem,4.8vw,4.75rem)] font-semibold leading-[.95] tracking-[-.03em]">
              Tell us what needs to <i className="font-medium italic text-[#1c5f3d]">work better.</i>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-[#527060]">
              Whether you need a new website, sharper brand identity, better UI/UX, SEO support or a smarter internal system, start with the basics. Tell us where you are and what needs to change.
            </p>
            <div className="mt-12 grid gap-5">
              <a href="https://wa.me/923200276941" className="flex items-center gap-4 text-sm font-semibold transition hover:text-[#1c5f3d]">
                <MessageCircle className="text-[#1c5f3d]" size={19} /> WhatsApp: 03200276941
              </a>
              <a href="tel:+923200276941" className="flex items-center gap-4 text-sm font-semibold transition hover:text-[#1c5f3d]">
                <Phone className="text-[#1c5f3d]" size={19} /> Call: 03200276941
              </a>
              <a href="mailto:mbkglobalinternational@gmail.com" className="flex items-center gap-4 text-sm font-semibold transition hover:text-[#1c5f3d]">
                <Mail className="text-[#1c5f3d]" size={19} /> mbkglobalinternational@gmail.com
              </a>
            </div>

            {/* Quick info cards */}
            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {[
                ["First response", "Within one business day"],
                ["Starting point", "A short discovery conversation"],
                ["How we work", "Clear remote collaboration"],
                ["Confidentiality", "NDA available when needed"],
              ].map(([label, value]) => (
                <div key={label} className="border border-[#0e2b1a]/10 p-4">
                  <Label>{label}</Label>
                  <p className="mt-1 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={sendToWhatsApp}
            className="border border-[#0e2b1a]/12 bg-white/60 p-5 shadow-[0_18px_46px_rgba(14,43,26,0.06)] sm:p-7 md:p-8"
          >
            <Label>Project inquiry</Label>
            <div className="mt-7 grid gap-5">
              <input required name="name" placeholder="Your name" aria-label="Your name" className="border-b border-[#0e2b1a]/20 bg-transparent py-3 text-sm outline-none placeholder:text-[#6b8c72] focus:border-[#1c5f3d]" />
              <input required name="email" type="email" placeholder="Email address" aria-label="Email address" className="border-b border-[#0e2b1a]/20 bg-transparent py-3 text-sm outline-none placeholder:text-[#6b8c72] focus:border-[#1c5f3d]" />
              <select required name="service" defaultValue="" aria-label="Service needed" className="border-b border-[#0e2b1a]/20 bg-transparent py-3 text-sm outline-none focus:border-[#1c5f3d]">
                <option disabled value="">What do you need?</option>
                <option>Website Design & Development</option>
                <option>Branding & Identity</option>
                <option>UI/UX Design</option>
                <option>E-commerce Solution</option>
                <option>SEO & Digital Marketing</option>
                <option>AI Automation / Business Software</option>
              </select>
              <select required name="budget" defaultValue="" aria-label="Budget range" className="border-b border-[#0e2b1a]/20 bg-transparent py-3 text-sm outline-none focus:border-[#1c5f3d]">
                <option disabled value="">Estimated budget</option>
                <option>Under $500</option>
                <option>$500 – $1,500</option>
                <option>$1,500 – $3,000</option>
                <option>$3,000+</option>
                <option>Let's discuss</option>
              </select>
              <textarea required name="details" aria-label="Project details" placeholder="Tell us about your goals, timeline or current challenge." className="min-h-28 border-b border-[#0e2b1a]/20 bg-transparent py-3 text-sm outline-none placeholder:text-[#6b8c72] focus:border-[#1c5f3d]" />
              <button className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 bg-[#1c5f3d] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0e2b1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c5f3d]">
                {submitted ? "Open WhatsApp again" : "Send via WhatsApp"} <ArrowRight size={16} />
              </button>
              {submitted && (
                <p className="flex items-center gap-2 text-sm text-[#1c5f3d]">
                  <Check size={16} /> Your inquiry is ready in WhatsApp. Send it there to reach our team.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Best fit */}
      <section className="bg-[#e4ede6] px-5 py-16 md:px-10">
        <div className="mx-auto flex max-w-7xl items-start gap-5">
          <Sparkles className="mt-1 text-[#1c5f3d]" size={19} />
          <div>
            <Label>Best fit</Label>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-[#527060]">
              We are a good fit for founders and teams who want to fix a real business problem, not simply refresh the surface. Bring the context; we will help shape a sensible scope.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
