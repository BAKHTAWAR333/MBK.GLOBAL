import { SiteFooter } from "./components/SiteFooter";
import { SiteNav as SharedSiteNav } from "./components/SiteNav";
import { useEffect, useMemo, useState } from "react";
import { createBrowserRouter, Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Check, Code2, Cpu, Globe2, Palette, Sparkles } from "lucide-react";
import { applySeo, SITE_URL } from "./seo";
import { SeoCapabilities, seoGroups } from "./components/SeoCapabilities";
/* Route-level imports keep three-dimensional and motion tooling out of the initial payload. */
const raw = [
  ["graphic-design", "Graphic Design & Creative Solutions", "Creative", "Design assets that keep your business looking clear, consistent and ready for the next opportunity.", "Logo Design|Brand Visuals|Social Media Creatives|Marketing Materials|Business Stationery|Brochures & Flyers|Packaging|Presentations"],
  ["branding", "Branding & Identity", "Creative", "A practical identity that helps people recognise your business and understand what it stands for.", "Brand Strategy|Complete Identity|Logo Systems|Brand Guidelines|Corporate Branding|Rebranding|Positioning"],
  ["web-development", "Website & Web Application Development", "Development", "Websites and web products that explain your offer clearly and give customers a straightforward way to act.", "Business Websites|Corporate Websites|E-Commerce Stores|Landing Pages|Portfolio Websites|Custom Applications|Maintenance|Domain & Hosting"],
  ["ui-ux", "UI/UX Design", "Design", "Interfaces planned around the questions users have and the actions they need to take.", "Website UI|Mobile App Design|Wireframes|Prototypes|UX Research|Design Systems"],
  ["mobile-apps", "Mobile App Development", "Development", "Useful mobile products, shaped from the first idea through to launch and ongoing support.", "Android Apps|iOS Apps|Cross-Platform Apps|API Integration|App Maintenance"],
  ["marketing", "Digital Marketing", "Growth", "Campaigns and content that give the right people a reason to pay attention and respond.", "Social Media Marketing|Meta Campaigns|LinkedIn Marketing|Content Strategy|Paid Advertising|Analytics"],
  ["seo", "SEO & AI Search Services", "Growth", "Search strategy for businesses worldwide, from technical SEO and useful content to GEO, AEO and AI search discovery.", "SEO Audit & Strategy|GEO, AEO & AI Search|Technical & Content SEO|Brand & Entity SEO|International & E-Commerce SEO|Analytics & Conversion Optimization"],
  ["motion", "Video & Motion Graphics", "Creative", "Motion-led stories for launches, feeds and brand moments.", "Promotional Videos|Product Videos|Social Reels|Motion Graphics|Logo Animation|Video Editing"],
  ["ai", "AI Solutions & Automation", "Technology", "Practical automation for repetitive work, slow handovers and everyday tasks that take up too much time.", "AI Chatbots|AI Assistants|Content Tools|Image & Video Tools|Voice Solutions|API Integration|Workflow Automation"],
  ["software", "Software & Digital Tools", "Technology", "Selected business tools, cloud software and productivity systems.", "Business Software|Productivity Tools|Creative Software|Marketing Software|CRM Tools|Security Solutions"],
  ["subscriptions", "Premium Digital Subscriptions", "Technology", "Professional platforms and managed subscriptions for modern teams.", "Software Subscriptions|AI Tools|Creative Platforms|Business Apps|Learning Platforms|Cloud Services"],
  ["api", "API & Technology Solutions", "Technology", "Connect the tools your team already uses, so useful information and actions do not get stuck between systems.", "AI APIs|Business Integration|Payment APIs|Automation APIs|Custom Solutions"],
  ["email", "Email Marketing Solutions", "Growth", "Useful email systems built around lasting customer relationships.", "Campaign Setup|Newsletter Management|Automation|Segmentation|Email Templates|Analytics"],
  ["whatsapp", "WhatsApp Business Solutions", "Growth", "Reliable, direct communication systems for modern customer support.", "Business Setup|WhatsApp API|Support Automation|Communication Systems|Chat Automation"],
  ["communications", "Virtual Number Solutions", "Technology", "Global business calling, messaging and support infrastructure.", "Virtual Numbers|Business Calling|Cloud Communication|Support Numbers|SMS Solutions"],
  ["security", "VPN & Online Security", "Technology", "Privacy, safer browsing and practical protection for teams online.", "Premium VPN|Privacy Tools|Secure Browsing|Business Security|Online Safety"],
  ["reputation", "Google Business & Reputation", "Growth", "Local visibility and reputation signals that customers can trust.", "Profile Setup|Maps Optimization|Profile Management|Review Management|Local Visibility"],
  ["crm", "CRM & ERP Solutions", "Technology", "Business systems that bring customer, sales and operational information into one workable place.", "Customer Management|Sales Management|Inventory|HR Management|Process Automation|Enterprise Solutions"],
  ["commerce", "E-Commerce Solutions", "Development", "Online stores that make products easy to find, compare and buy with confidence.", "Store Development|Shopify|Product Management|Payments|Inventory|Conversion Optimization"],
  ["data", "Data & Business Intelligence", "Technology", "Decision-ready reporting and business intelligence for growing teams.", "Market Research|Business Analytics|Customer Data|Lead Management|Sales Intelligence|Reporting"],
  ["learning", "Digital Learning & Training", "Growth", "Practical training for teams and individuals building digital confidence.", "Web Development|Programming|AI & Automation|Digital Marketing|Graphic Design|Freelancing"],
  ["advertising", "OOH & DOOH Advertising", "Creative", "Physical and digital out-of-home campaigns with a sharper point of view.", "Billboards|Outdoor Branding|Campaign Planning|Digital Screens|LED Campaigns|Audience Targeting"],
  ["consulting", "Business Consulting & Digital Growth", "Growth", "A practical outside view when you need to decide what to fix, build or prioritise next.", "Digital Strategy|Business Setup|Technology Consulting|Marketing Planning|Growth Solutions|Long-Term Support"],
] as const;

const services = raw.map(([slug, title, category, description, features]) => ({
  slug, title, category, description, features: features.split("|"),
}));

const icons = { Creative: Palette, Design: Sparkles, Development: Code2, Growth: Globe2, Technology: Cpu };

const allNavLinks = [
  ["/about", "About"], ["/services", "Services"], ["/work", "Work"], ["/global", "Global"],
  ["/process", "Process"], ["/industries", "Industries"], ["/insights", "Insights"], ["/faq", "FAQs"], ["/contact", "Contact"],
];

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`font-['DM_Mono'] text-[10px] uppercase tracking-[.14em] ${light ? "text-white/55" : "text-[#6b8c72]"}`}>{children}</span>;
}

function Nav() {
  return <SharedSiteNav />;
}

export function ServicesPage() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => active === "All" ? services : services.filter(s => s.category === active),
    [active]
  );
  useEffect(() => { applySeo({ title: "Digital Services | MBK.GLOBAL", description: "Explore MBK.GLOBAL website development, UI/UX, branding, e-commerce, SEO, marketing, AI automation and digital business services.", pathname: "/services", schema: { "@type": "ItemList", name: "MBK.GLOBAL Digital Services", numberOfItems: services.length } }); }, []);

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />

      {/* Hero */}
      <section className="border-b border-[#0e2b1a]/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.64fr_.36fr]">
          <div>
            <Label>MBK.GLOBAL / Digital services</Label>
            <h1 className="mt-5 max-w-4xl font-['Fraunces'] text-[clamp(2.5rem,4.8vw,4.75rem)] font-semibold leading-[.95] tracking-[-.03em]">
              The right digital work, for the next <i className="font-medium italic text-[#1c5f3d]">step in your business.</i>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#527060]">
              From brand identity and website development to UI/UX, SEO and automation, we help you choose the work that will make a genuine difference.
            </p>
            <div className="mt-9 flex gap-3">
              <Link to="/contact" className="bg-[#1c5f3d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0e2b1a]">Start project</Link>
              <a href="mailto:mbkglobalinternational@gmail.com" className="border border-[#0e2b1a]/20 px-5 py-3 text-sm font-semibold transition hover:border-[#1c5f3d]">Contact us</a>
            </div>
          </div>
          <div className="self-end border-l-2 border-[#c9a124] pl-6">
            <p className="font-['Fraunces'] text-4xl font-semibold">23</p>
            <Label>Ways we can help</Label>
            <p className="mt-8 text-sm leading-6 text-[#527060]">Use one service on its own, or bring several together when the challenge needs a joined-up answer.</p>
          </div>
        </div>
      </section>

      {/* Service directory */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Label>Service directory</Label>
              <h2 className="mt-4 font-['Fraunces'] text-5xl font-semibold tracking-[-.04em]">
                Start with what needs to <i className="font-medium italic text-[#1c5f3d]">move first.</i>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Creative", "Design", "Development", "Growth", "Technology"].map(x => (
                <button
                  key={x}
                  onClick={() => setActive(x)}
                  className={`px-3 py-2 text-xs font-semibold transition ${active === x ? "bg-[#0e2b1a] text-white" : "border border-[#0e2b1a]/20 hover:border-[#1c5f3d]"}`}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service, i) => {
              const Icon = icons[service.category as keyof typeof icons];
              return (
                <article
                  key={service.slug}
                  className="group border border-[#0e2b1a]/12 bg-white/55 p-6 transition hover:-translate-y-1 hover:border-[#1c5f3d] hover:shadow-[0_16px_40px_rgba(28,95,61,0.08)]"
                >
                  <div className="flex justify-between">
                    <Icon size={20} className="text-[#1c5f3d]" />
                    <Label>{String(i + 1).padStart(2, "0")}</Label>
                  </div>
                  <h3 className="mt-14 font-['Fraunces'] text-2xl font-semibold leading-7 tracking-[-.03em]">{service.title}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-[#527060]">{service.description}</p>
                  <Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1c5f3d] transition hover:text-[#0e2b1a]" to={`/services/${service.slug}`}>
                    Learn more <ArrowRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA (dark) */}
      <section className="bg-[#0e2b1a] px-5 py-20 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <Label light>How we approach a brief</Label>
            <p className="mt-5 font-['Fraunces'] text-3xl font-semibold">
              Start with the problem. <i className="font-medium italic text-[#8cc9a8]">Then choose the right work.</i>
            </p>
          </div>
          <p className="text-sm leading-7 text-white/65">Some projects need one focused service. Others need brand, product and growth work to happen together. We will recommend the sensible route.</p>
          <Link to="/contact" className="self-end justify-self-start border border-[#c9a124] px-5 py-3 text-sm font-semibold text-[#c9a124] transition hover:bg-[#c9a124] hover:text-[#0e2b1a]">
            Discuss your brief
          </Link>
        </div>
      </section>
    <SiteFooter /></main>
  );
}

export function ServiceDetailPage() {
  const { slug } = useParams();
  const s = services.find(item => item.slug === slug);
  useEffect(() => {
    if (!s) return;
    applySeo({ title: `${s.title} | MBK.GLOBAL`, description: `${s.description} MBK.GLOBAL provides this service for businesses worldwide.`, pathname: `/services/${s.slug}`, breadcrumb: ["Services", s.title], schema: { "@type": "Service", name: s.title, description: s.description, provider: { "@id": `${SITE_URL}/#organization` }, areaServed: "Worldwide", ...(s.slug === "seo" ? { hasOfferCatalog: { "@type": "OfferCatalog", name: "SEO and AI search capabilities", itemListElement: seoGroups.map(group => ({ "@type": "OfferCatalog", name: group.title, itemListElement: group.methods.map(([name, description]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, description } })) })) } } : {}) } });
  }, [s]);
  if (!s) return <NotFoundPage />;

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />

      <section className="px-5 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1c5f3d] transition hover:text-[#0e2b1a]">
            <ArrowLeft size={15} /> All services
          </Link>
          <div className="mt-16 grid gap-16 lg:grid-cols-[.56fr_.44fr]">
            <div>
              <Label>{s.category} / MBK Global service</Label>
              <h1 className="mt-5 font-['Fraunces'] text-[clamp(2.4rem,4.6vw,4.5rem)] font-semibold leading-[.95] tracking-[-.03em]">{s.title}</h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#527060]">
                {s.description} We shape the work around your customers, team and priorities, then keep the process straightforward from first review to handover.
              </p>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 bg-[#1c5f3d] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0e2b1a]">
                Start a project <ArrowRight size={15} />
              </Link>
            </div>
            <div className="border-l-2 border-[#c9a124] pl-6">
              <Label>What is included</Label>
              <ul className="mt-7 grid gap-4">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-[#1c5f3d] shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {s.slug === "seo" && <SeoCapabilities />}

      <section className="bg-[#e4ede6] px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <Label>Benefits</Label>
            <p className="mt-5 font-['Fraunces'] text-2xl font-semibold">Work your customers can understand and your team can keep using.</p>
          </div>
          <div>
            <Label>Process</Label>
            <p className="mt-5 text-sm leading-7 text-[#527060]">We clarify the brief, set priorities, make the work visible early, then refine it with you before launch.</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="mt-5 text-sm leading-7 text-[#527060]">A practical result that supports the next conversation, sale, enquiry or internal decision.</p>
          </div>
        </div>
      </section>
    <SiteFooter /></main>
  );
}

export function NotFoundPage() {
  useEffect(() => { applySeo({ title: "Page Not Found | MBK.GLOBAL", description: "The page you requested is unavailable. Explore MBK.GLOBAL creative digital agency services and selected work.", noIndex: true }); }, []);
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">
      <Nav />
      <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-5 md:px-10">
        <Label>404 / Page not found</Label>
        <h1 className="mt-6 font-['Fraunces'] text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.8] tracking-[-.04em]">
          This page is<br /><i className="font-medium italic text-[#1c5f3d]">not in the brief.</i>
        </h1>
        <Link to="/" className="mt-10 inline-flex w-fit items-center gap-2 bg-[#0e2b1a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c5f3d]">
          Return home <ArrowRight size={15} />
        </Link>
      </section>
    <SiteFooter /></main>
  );
}

export const router = createBrowserRouter([
  { path: "/", lazy: async () => ({ Component: (await import("./Home")).default }) },
  { path: "/about", lazy: async () => ({ Component: (await import("./AgencyPages")).AboutPage }) },
  { path: "/work", lazy: async () => ({ Component: (await import("./AgencyPages")).WorkPage }) },
  { path: "/global", lazy: async () => ({ Component: (await import("./GlobalPages")).GlobalPage }) },
  { path: "/process", lazy: async () => ({ Component: (await import("./GlobalPages")).ProcessPage }) },
  { path: "/industries", lazy: async () => ({ Component: (await import("./IndustryInsightPages")).IndustriesPage }) },
  { path: "/insights", lazy: async () => ({ Component: (await import("./IndustryInsightPages")).InsightsPage }) },
  { path: "/faq", lazy: async () => ({ Component: (await import("./FaqPage")).default }) },
  { path: "/contact", lazy: async () => ({ Component: (await import("./AgencyPages")).ContactPage }) },
  { path: "/packages", lazy: async () => ({ Component: (await import("./CommercialPages")).PackagesPage }) },
  { path: "/project-planner", lazy: async () => ({ Component: (await import("./CommercialPages")).ProjectPlannerPage }) },
  { path: "/services", Component: ServicesPage },
  { path: "/services/:slug", Component: ServiceDetailPage },
  { path: "*", Component: NotFoundPage },
]);
