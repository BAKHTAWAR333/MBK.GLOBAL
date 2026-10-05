import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
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

type Faq = { q: string; a: string; category: string };

const faqs: Faq[] = [
  { q: "What services does MBK Global provide?", a: "MBK.GLOBAL provides website design and development, UI/UX, branding, e-commerce, SEO, digital marketing, AI automation, business systems, maintenance and ongoing digital support.", category: "General" },
  { q: "What is a digital agency?", a: "A digital agency helps businesses build, improve and grow their digital presence through strategy, design, technology, content and marketing.", category: "General" },
  { q: "Can you work with our internal team?", a: "Yes. We can work alongside internal marketing, operations, technology or leadership teams through clear roles and review points.", category: "General" },
  { q: "Do you provide professional website development services?", a: "Yes. We plan, design, build and launch professional websites tailored to your business goals and audience.", category: "Websites" },
  { q: "Do you design websites for businesses?", a: "Yes. We design business websites that communicate your offer clearly, build trust and make it easier for customers to take action.", category: "Websites" },
  { q: "How much does a professional website cost?", a: "Website cost depends on scope, pages, features, content, integrations and timeline. We provide a custom quote after understanding your requirements.", category: "Pricing & support" },
  { q: "How long does it take to build a website?", a: "A focused brochure or landing website can take a few weeks; larger e-commerce or custom platforms take longer. We confirm a practical timeline with your scope.", category: "Websites" },
  { q: "Do you create custom websites?", a: "Yes. Every MBK.GLOBAL website is scoped around the brand, users, content and business goals instead of being forced into a generic template.", category: "Websites" },
  { q: "Do you provide responsive website design?", a: "Yes. Our websites are designed and tested to work clearly across mobile, tablet and desktop screens.", category: "Websites" },
  { q: "Can you redesign an existing website?", a: "Yes. We can audit your current website, improve the strategy, UI/UX, content structure, performance and visual identity, then redesign it.", category: "Websites" },
  { q: "Do you provide website maintenance services?", a: "Yes. Post-launch maintenance can include content updates, technical checks, feature improvements, monitoring and ongoing support.", category: "Websites" },
  { q: "Do you provide website security services?", a: "We can support practical security measures such as secure deployment, access management, updates, backups and platform-specific hardening.", category: "Websites" },
  { q: "Do you provide SSL certificates?", a: "Yes. We can help configure SSL so your website is served securely over HTTPS.", category: "Websites" },
  { q: "Can you help me choose a domain name?", a: "Yes. We can advise on a clear, available domain name that fits your brand, market and long-term digital presence.", category: "Websites" },
  { q: "Do you provide domain registration?", a: "We can guide domain registration and help connect a domain to your website, email and other essential services.", category: "Websites" },
  { q: "Do you provide web hosting?", a: "We can recommend, set up or manage suitable hosting based on your website type, traffic needs, security and support requirements.", category: "Websites" },
  { q: "Can you deploy my website online?", a: "Yes. We can deploy your website, connect the domain, configure SSL and complete the key launch checks.", category: "Websites" },
  { q: "Do you provide business email setup?", a: "Yes. We can help set up professional domain-based email, such as yourname@yourcompany.com.", category: "Websites" },
  { q: "Can you create a professional company website?", a: "Yes. We create clear, credible company websites that communicate services, proof, expertise and a strong route to contact.", category: "Websites" },
  { q: "Can you create a personal portfolio website?", a: "Yes. We build portfolio websites for founders, creatives, consultants and professionals who need their work to speak clearly.", category: "Websites" },
  { q: "Can you create a landing page?", a: "Yes. We create focused landing pages for campaigns, launches, paid advertising, products and lead generation.", category: "Websites" },
  { q: "What technologies do you use for website development?", a: "The right technology depends on the project. Our work can include React, modern HTML/CSS, CMS platforms, e-commerce tools, APIs and cloud hosting.", category: "Websites" },
  { q: "Do you develop websites using React?", a: "Yes. React is one of the modern technologies we use for fast, interactive and scalable website experiences.", category: "Websites" },
  { q: "Do you develop modern responsive websites?", a: "Yes. We build modern, responsive, performance-aware websites with clear UX and polished interface detail.", category: "Websites" },
  { q: "Can you build a React website?", a: "Yes. We can design and develop custom React websites and web applications based on your required user experience and features.", category: "Websites" },
  { q: "Can you convert a Figma design into a website?", a: "Yes. We can translate a Figma design into a responsive, functional website while preserving its visual hierarchy and interaction intent.", category: "Websites" },
  { q: "Can you convert a design into React?", a: "Yes. We can turn approved designs into clean React components and a responsive production-ready interface.", category: "Websites" },
  { q: "Can you build an e-commerce website?", a: "Yes. We build e-commerce websites with product management, shopping flows, payments, inventory and conversion-focused experiences.", category: "Websites" },
  { q: "Can you build an online store?", a: "Yes. We can create an online store on the platform that best suits your products, operations and growth plan.", category: "Websites" },
  { q: "Can you create a booking website?", a: "Yes. We can create booking journeys for appointments, services, hospitality, events and other reservation-based businesses.", category: "Websites" },
  { q: "Can you create a restaurant website?", a: "Yes. We can design restaurant websites with menus, booking links, location details, delivery paths and brand-led visual storytelling.", category: "Websites" },
  { q: "Can you create a hotel website?", a: "Yes. We can create hotel websites with room information, booking connections, experience content and an elevated hospitality feel.", category: "Websites" },
  { q: "Can you create a business portfolio website?", a: "Yes. We create business portfolio websites that present case studies, services, credentials and a clear contact path.", category: "Websites" },
  { q: "Can you create a service-based website?", a: "Yes. We design service websites around what customers need to understand, trust and do next.", category: "Websites" },
  { q: "Can you add animations to my website?", a: "Yes. We use purposeful motion, transitions and micro-interactions to improve feel and hierarchy without making the site slow or distracting.", category: "Websites" },
  { q: "Can you create a modern UI for my website?", a: "Yes. We create modern UI systems with strong hierarchy, responsive components, accessibility awareness and a visual language suited to your brand.", category: "Websites" },
  { q: "Can you improve my website's user experience?", a: "Yes. We can review the user journey, content hierarchy, navigation, forms and key conversion points to improve UX.", category: "Websites" },
  { q: "Can you make my website mobile-friendly?", a: "Yes. We can redesign or rebuild key layouts so they work clearly and comfortably on mobile devices.", category: "Websites" },
  { q: "Can you optimize my website speed?", a: "Yes. We can improve image delivery, code efficiency, hosting configuration and front-end performance where the project allows.", category: "Websites" },
  { q: "What is SEO?", a: "SEO, or search engine optimization, is the practice of improving a website so search engines can understand, trust and surface it for relevant searches.", category: "SEO" },
  { q: "Do you provide SEO services?", a: "Yes. We provide SEO strategy, technical SEO, on-page optimization, local SEO, keyword research and content guidance.", category: "SEO" },
  { q: "Can you optimize my website for Google?", a: "Yes. We can improve the technical, content and on-page signals that help Google understand your website and target audience.", category: "SEO" },
  { q: "How can I get my website on Google?", a: "A website needs to be crawlable, indexed and supported by useful content, clear structure and sound technical foundations. We can guide that process.", category: "SEO" },
  { q: "How long does SEO take to show results?", a: "SEO is a long-term activity. Early technical improvements may appear sooner, while competitive growth usually takes several months of consistent work.", category: "SEO" },
  { q: "Can SEO increase website traffic?", a: "Yes. A focused SEO strategy can increase qualified organic visibility and traffic by targeting the searches your audience actually makes.", category: "SEO" },
  { q: "Can you optimize website keywords?", a: "Yes. We research relevant search intent and improve keyword targeting across site structure, pages, titles and supporting content.", category: "SEO" },
  { q: "Do you provide on-page SEO?", a: "Yes. On-page SEO includes improving page structure, headings, copy, internal links, titles, descriptions and other relevance signals.", category: "SEO" },
  { q: "Do you provide technical SEO?", a: "Yes. Technical SEO can include crawlability, indexing, page speed, structured data, mobile performance and site architecture checks.", category: "SEO" },
  { q: "Can you create SEO-friendly website content?", a: "Yes. We can create or refine useful, search-aware website copy that remains clear and credible for people first.", category: "SEO" },
  { q: "Can you create SEO-friendly FAQs?", a: "Yes. We can create helpful FAQ content and add appropriate FAQ structured data where it is suitable.", category: "SEO" },
  { q: "Can you optimize website titles and descriptions?", a: "Yes. We can write and optimize page titles and meta descriptions to better explain relevance in search results.", category: "SEO" },
  { q: "Can you improve my Google search ranking?", a: "We can improve the factors within your website and SEO strategy, but rankings depend on competition, quality, authority and search-engine evaluation over time.", category: "SEO" },
  { q: "Can you help my business appear in local searches?", a: "Yes. Local SEO work can improve visibility for relevant location-based searches through pages, profiles, citations and local signals.", category: "SEO" },
  { q: "What is local SEO?", a: "Local SEO helps a business appear when people search for services in a particular city, area or nearby location.", category: "SEO" },
  { q: "Can you optimize my Google Business Profile?", a: "Yes. We can help improve profile setup, categories, information, service detail, visual consistency and local optimization.", category: "SEO" },
  { q: "Can you create location-based SEO pages?", a: "Yes. We can create useful location pages where they reflect real services, audience needs and a clear local value proposition.", category: "SEO" },
  { q: "Can backlinks help my website SEO?", a: "Relevant, credible backlinks can support authority and visibility, but quality and relevance matter far more than volume.", category: "SEO" },
  { q: "What are backlinks?", a: "Backlinks are links from another website to yours. Search engines can treat strong, relevant links as one signal of credibility.", category: "SEO" },
  { q: "Can you help build quality backlinks?", a: "We can advise on sustainable, quality-led digital PR, content and outreach approaches. We do not recommend low-quality link schemes.", category: "SEO" },
  { q: "Can you create a professional brand identity?", a: "Yes. We develop brand strategy, logos, visual systems, typography, colors, guidelines and practical brand applications.", category: "Branding" },
  { q: "Do you provide logo design?", a: "Yes. We create considered logo systems that work across digital, print, social and everyday business use.", category: "Branding" },
  { q: "Do you design business cards?", a: "Yes. We design business cards and supporting business stationery as part of a coherent identity system.", category: "Branding" },
  { q: "Do you create social media designs?", a: "Yes. We create adaptable social media design systems, templates and campaign assets for consistent brand communication.", category: "Branding" },
  { q: "Can you design professional business posts?", a: "Yes. We design professional social posts, carousels, announcements and campaign creative for business communication.", category: "Branding" },
  { q: "Can you create a company profile?", a: "Yes. We can structure and design a clear company profile for sales, partnerships, presentations and digital sharing.", category: "Branding" },
  { q: "Can you create a digital portfolio?", a: "Yes. We can build a digital portfolio as a website, PDF or presentation depending on how your audience needs to use it.", category: "Branding" },
  { q: "Can you create a professional presentation?", a: "Yes. We design clear, branded presentations for proposals, investors, sales, training and internal communication.", category: "Branding" },
  { q: "Can you improve my existing brand design?", a: "Yes. We can audit and evolve an existing identity while protecting the parts of the brand that already have recognition.", category: "Branding" },
  { q: "Can you create a complete branding package?", a: "Yes. A complete package can include strategy, logo, identity, brand guidelines, stationery, social templates and marketing applications.", category: "Branding" },
  { q: "Do you provide website development services in Dubai?", a: "Yes. We work remotely with Dubai businesses on website development, web design, branding, SEO and digital growth projects.", category: "Global services" },
  { q: "Do you provide web design services in UAE?", a: "Yes. We provide remote web design and digital services for businesses across the UAE.", category: "Global services" },
  { q: "Do you work with businesses in Saudi Arabia?", a: "Yes. We collaborate remotely with businesses in Saudi Arabia on websites, branding, growth and digital systems.", category: "Global services" },
  { q: "Do you provide digital services in Qatar?", a: "Yes. Our remote delivery model allows us to support businesses in Qatar with focused digital projects.", category: "Global services" },
  { q: "Do you work with businesses in Oman?", a: "Yes. We work remotely with Omani businesses seeking strong website, identity and growth solutions.", category: "Global services" },
  { q: "Do you provide services in Kuwait?", a: "Yes. We can work with businesses in Kuwait through structured remote collaboration and clear project milestones.", category: "Global services" },
  { q: "Do you provide services in Bahrain?", a: "Yes. We can support Bahrain-based businesses with website, branding, SEO and digital strategy work.", category: "Global services" },
  { q: "Can you build a website for a Dubai business?", a: "Yes. We can build a website for a Dubai business with the right audience, market position, service flow and local SEO needs in mind.", category: "Global services" },
  { q: "Can you create a real estate website for a Dubai agent?", a: "Yes. We can create a real estate website for Dubai agents with property listings, lead forms, WhatsApp paths, maps and property detail pages.", category: "Real estate" },
  { q: "Can you create a professional website for a UAE company?", a: "Yes. We create professional websites for UAE companies that build credibility, explain services and support lead generation.", category: "Global services" },
  { q: "Can you create a real estate website?", a: "Yes. We create real estate websites with property listings, enquiry paths, agent profiles, location content and lead-focused UX.", category: "Real estate" },
  { q: "Can you create a property listing website?", a: "Yes. We can build property listing experiences with structured inventory, image galleries, detail pages and enquiry forms.", category: "Real estate" },
  { q: "Can you add property search and filters?", a: "Yes. We can add property search, filters and sorting based on the data structure and platform selected for your listing website.", category: "Real estate" },
  { q: "Can you add WhatsApp contact buttons to a real estate website?", a: "Yes. We can add focused WhatsApp contact paths on property cards, detail pages and agent sections.", category: "Real estate" },
  { q: "Can you add Google Maps to a property website?", a: "Yes. We can embed or integrate Google Maps to help users understand property locations and nearby context.", category: "Real estate" },
  { q: "Can you create property detail pages?", a: "Yes. We build property detail pages with images, highlights, specifications, location, amenities and enquiry actions.", category: "Real estate" },
  { q: "Can you create a real estate agent portfolio?", a: "Yes. We can create agent portfolio pages with expertise, listings, market areas, testimonials and direct contact paths.", category: "Real estate" },
  { q: "Can you create a Dubai real estate website?", a: "Yes. We can create a Dubai real estate website designed around property discovery, agent credibility and qualified enquiries.", category: "Real estate" },
  { q: "Can you optimize a real estate website for Google?", a: "Yes. We can improve real estate SEO through technical foundations, property and area content, location pages, metadata and useful site structure.", category: "Real estate" },
  { q: "Can you redesign my real estate website?", a: "Yes. We can redesign a real estate website to improve property discovery, mobile UX, speed, visual trust and lead conversion.", category: "Real estate" },
  { q: "How much does website development cost?", a: "Development cost is based on the complexity of the design, pages, content, features, integrations and ongoing needs. We quote transparently after discovery.", category: "Pricing & support" },
  { q: "Do you offer affordable website packages?", a: "Yes. We can recommend a focused starter scope for startups and small businesses, then plan a phased expansion as the business grows.", category: "Pricing & support" },
  { q: "Do you provide custom website pricing?", a: "Yes. We provide custom pricing based on the work that will create the most useful outcome for your business.", category: "Pricing & support" },
  { q: "Do you offer website packages for startups?", a: "Yes. Startup website packages can focus on a clear offer, essential pages, launch speed and a foundation that can grow later.", category: "Pricing & support" },
  { q: "Do you offer website packages for small businesses?", a: "Yes. We can build right-sized website packages for small businesses that need credibility, clarity and practical lead generation.", category: "Pricing & support" },
  { q: "Do you provide post-launch support?", a: "Yes. We offer post-launch support options for updates, maintenance, performance review, new pages and ongoing digital improvements.", category: "Pricing & support" },
  { q: "Can you update my website after launch?", a: "Yes. We can update content, features, design sections and technical elements after launch as your business needs change.", category: "Pricing & support" },
  { q: "How can I start my website project?", a: "Send us your goals, timeline, audience, existing assets and any examples you like. We will recommend a useful next step and project scope.", category: "Pricing & support" },
  { q: "How can I contact MBK Global?", a: "You can contact MBK.GLOBAL through the project inquiry form, WhatsApp or by email at mbkglobalinternational@gmail.com.", category: "Pricing & support" },
  { q: "Why should I choose MBK Global for my website?", a: "Choose MBK.GLOBAL when you want a partner who connects strategy, design, development and practical growth thinking into one clear digital solution.", category: "Pricing & support" },
  { q: "Do you sign NDAs for confidential projects?", a: "Yes. We can review a reasonable NDA before discussing confidential products, plans or business information.", category: "Pricing & support" },
  { q: "Will I own my website after launch?", a: "Ownership arrangements are clarified in the project agreement. We aim to provide a practical handover so your team can confidently operate the finished work.", category: "Pricing & support" },
  { q: "Do you provide a website training session?", a: "Where relevant, we can provide a handover or training session so your team understands key website workflows and content updates.", category: "Pricing & support" },
];

const categories = ["All", ...Array.from(new Set(faqs.map(item => item.category)))];

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<number | null>(0);

  const visible = useMemo(
    () => faqs.filter(item =>
      (category === "All" || item.category === category) &&
      `${item.q} ${item.a}`.toLowerCase().includes(query.toLowerCase())
    ),
    [category, query]
  );

  useEffect(() => {
    applySeo({ title: "Frequently Asked Questions | MBK.GLOBAL", description: "Clear answers about MBK.GLOBAL website development, web design, SEO, branding, pricing, support and global digital services.", pathname: "/faq" });
    const id = "mbk-faq-schema";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(item => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f6f5ed] font-['Plus_Jakarta_Sans'] text-[#0e2b1a]">

      {/* Nav */}
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-[#0e2b1a]/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.62fr_.38fr] lg:items-end">
          <div>
            <Label>MBK.GLOBAL / Frequently asked questions</Label>
            <h1 className="mt-5 max-w-4xl font-['Fraunces'] text-[clamp(2.5rem,4.8vw,4.75rem)] font-semibold leading-[.95] tracking-[-.03em]">
              Straight answers before you <i className="font-medium italic text-[#1c5f3d]">start a project.</i>
            </h1>
          </div>
          <p className="max-w-lg text-sm leading-6 text-[#527060]">
            Helpful answers about websites, branding, UI/UX, SEO, e-commerce, pricing and ongoing support. If yours is not here, you can ask us directly.
          </p>
        </div>
      </section>

      {/* Search + filter */}
      <section className="px-5 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 border border-[#0e2b1a]/12 bg-white/60 p-4 md:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-3 border-b border-[#0e2b1a]/12 px-2 py-2 md:border-b-0 focus-within:border-[#1c5f3d]">
              <Search className="text-[#1c5f3d] shrink-0" size={18} />
              <input
                value={query}
                onChange={event => { setQuery(event.target.value); setOpen(null); }}
                aria-label="Search frequently asked questions"
                placeholder="Search a question or topic"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#6b8c72]"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(item => (
                <button
                  key={item}
                  onClick={() => { setCategory(item); setOpen(null); }}
                  className={`px-3 py-2 text-xs font-semibold transition ${category === item ? "bg-[#0e2b1a] text-white" : "border border-[#0e2b1a]/15 hover:border-[#1c5f3d]"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Label>{visible.length} answers available</Label>
            <Link to="/contact" className="text-sm font-semibold text-[#1c5f3d] transition hover:text-[#0e2b1a]">
              Still need help? Contact us <ArrowRight className="inline" size={15} />
            </Link>
          </div>

          <div className="mt-7 border-t border-[#0e2b1a]/12">
            {visible.map((item, index) => (
              <article className="border-b border-[#0e2b1a]/12" key={item.q}>
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  aria-expanded={open === index}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left transition hover:text-[#1c5f3d]"
                >
                  <div>
                    <Label>{item.category}</Label>
                    <h2 className="mt-2 font-['Fraunces'] text-lg font-semibold leading-6 md:text-xl">{item.q}</h2>
                  </div>
                  <ChevronDown
                    className={`shrink-0 text-[#1c5f3d] transition ${open === index ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                {open === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="max-w-3xl pb-6 text-sm leading-7 text-[#527060]"
                  >
                    {item.a}
                  </motion.div>
                )}
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-['Fraunces'] text-xl font-semibold">No matching answer found.</p>
              <p className="mt-3 text-sm text-[#527060]">Try another term, choose a category, or send us your question directly.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA (green) */}
      <section className="px-5 pb-5 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 bg-[#1c5f3d] p-7 text-white md:flex-row md:items-center md:p-12">
          <div>
            <Label light>Did not find your answer?</Label>
            <p className="mt-3 font-['Fraunces'] text-3xl font-semibold tracking-[-.04em]">Tell us what you are planning. We will point you in the right direction.</p>
          </div>
          <Link to="/contact" className="inline-flex w-fit items-center gap-2 bg-[#c9a124] px-5 py-3.5 text-sm font-semibold text-[#0e2b1a] transition hover:bg-white">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
