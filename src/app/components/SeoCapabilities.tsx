import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export const seoGroups = [
  { id: "ai-search", title: "AI & answer discovery", intro: "Make reliable information easier to discover, interpret and reference across evolving search experiences.", methods: [
    ["GEO — Generative Engine Optimization", "Improve the clarity, sourcing and accessibility of content that generative search systems may reference."],
    ["AEO — Answer Engine Optimization", "Build direct, useful answers around the questions your audience actually asks."],
    ["AI SEO — Artificial Intelligence SEO", "Use AI-assisted research and analysis with human review, fact-checking and editorial control."],
    ["LLM SEO — Large Language Model SEO", "Present consistent brand facts and well-supported explanations for language-model-driven discovery."],
    ["Google AI Overview Optimization", "Strengthen indexed pages with clear answers, original evidence and sound search foundations."],
    ["Google AI Mode Optimization", "Develop helpful content for detailed, multi-part searches and follow-up questions."],
    ["AI Search Optimization", "Review how your content can be accessed and understood by relevant AI search platforms."],
    ["Voice Search Optimization", "Address conversational questions with natural wording and concise, accurate answers."],
    ["Featured Snippet Optimization", "Structure relevant explanations, lists and tables so key answers are easy to extract."],
    ["Zero-Click Search Optimization", "Keep essential brand and service information useful when people do not visit your site."],
  ] },
  { id: "content", title: "Content & topical depth", intro: "Start with customer needs, then connect useful pages into a coherent body of knowledge.", methods: [
    ["Semantic SEO", "Cover concepts and their relationships instead of repeating isolated keywords."],
    ["Topical SEO", "Plan related pages around a subject with a clear purpose for each page."],
    ["Topical Authority", "Build subject depth through original expertise, connected resources and ongoing updates."],
    ["Content SEO", "Improve the usefulness, accuracy and structure of service pages, guides and articles."],
    ["Search Intent Optimization", "Match the format and depth of each page to what searchers want to accomplish."],
    ["Keyword Research & Optimization", "Evaluate relevant queries, demand and competition, then map them to appropriate pages."],
    ["On-Page SEO", "Refine titles, descriptions, headings, URLs and page copy without keyword stuffing."],
    ["Content Gap Analysis", "Identify unanswered questions and missing topics worth covering for your audience."],
  ] },
  { id: "technical", title: "Technical foundations", intro: "Help search engines access your pages while making the website faster and easier to use.", methods: [
    ["Technical SEO", "Review redirects, canonicals, sitemaps, duplication and other implementation issues."],
    ["Structured Data / Schema Markup", "Add and validate appropriate markup that accurately reflects visible page content."],
    ["Core Web Vitals Optimization", "Measure and improve loading speed, interaction responsiveness and layout stability."],
    ["Mobile SEO", "Check mobile content parity, navigation, rendering and usability across screen sizes."],
    ["Internal Linking Optimization", "Connect relevant pages with descriptive links that help readers and crawlers."],
    ["Site Architecture Optimization", "Organise navigation, page hierarchy and URLs around understandable relationships."],
    ["Crawlability & Indexability Optimization", "Check robots directives, indexing signals and discoverability for important pages."],
    ["Page Experience Optimization", "Reduce intrusive elements and improve readable, accessible page interactions."],
    ["Website Performance Optimization", "Improve assets, caching and rendering based on measured performance bottlenecks."],
    ["Programmatic SEO", "Create data-backed page systems only where each page offers distinct value; avoid thin mass-generated content."],
  ] },
  { id: "trust", title: "Brand & trust", intro: "Make your business identity consistent and support claims with real expertise and credible sources.", methods: [
    ["Entity SEO", "Clarify who your business is and connect consistent information about its services and expertise."],
    ["Knowledge Graph Optimization", "Strengthen verifiable entity information and authoritative references; knowledge panels are not guaranteed."],
    ["E-E-A-T Optimization", "Show genuine experience, expertise, authorship and trust signals; E-E-A-T is not a single score."],
    ["Off-Page SEO", "Build relevant external visibility through credible mentions, partnerships and editorial coverage."],
    ["Link Building", "Earn relevant links through useful resources and genuine outreach, not paid ranking schemes."],
    ["Digital PR", "Develop newsworthy stories, research and expert contributions for relevant publications."],
    ["Reputation SEO", "Improve accurate business information and support an honest, policy-compliant review process."],
    ["Brand SEO", "Align branded search results, official profiles and website messaging around a consistent identity."],
    ["Backlink Audit", "Review link relevance and risks; consider disavowal only where justified, not as routine maintenance."],
  ] },
  { id: "markets", title: "Markets & platforms", intro: "Adapt the work to where your customers search and how they choose products or services.", methods: [
    ["Local SEO", "Improve eligible business profiles, location information and genuinely relevant local pages."],
    ["International SEO", "Plan language and market targeting, localisation and appropriate hreflang implementation."],
    ["E-commerce SEO", "Optimise categories, product information, faceted navigation and relevant product markup."],
    ["Image SEO", "Improve image context, descriptive alt text, file delivery and discoverability."],
    ["Video SEO", "Support video discovery with accurate titles, transcripts, metadata and suitable structured data."],
    ["YouTube SEO", "Refine video topics, titles, descriptions and audience experience using channel analytics."],
    ["Social SEO", "Improve platform-native discovery through clear profiles, relevant captions and useful content."],
    ["App Store SEO (ASO)", "Refine app listings, keywords and creative assets for Apple App Store and Google Play discovery."],
  ] },
  { id: "measurement", title: "Research & results", intro: "Set a baseline, prioritise improvements and measure useful outcomes rather than vanity metrics.", methods: [
    ["Conversion Rate Optimization (CRO)", "Test clearer journeys, forms and calls to action to turn relevant traffic into useful enquiries or sales."],
    ["Competitor SEO Analysis", "Compare relevant competitors' content, visibility and site structure to find realistic opportunities."],
    ["SEO Audit", "Assess technical health, content, search visibility and trust signals with prioritised recommendations."],
    ["SERP Analysis", "Study live search result formats and competing pages for your target queries and markets."],
    ["SEO Reporting & Analytics", "Track agreed metrics through appropriate tools such as Search Console and consent-aware analytics."],
  ] },
];

export function SeoCapabilities() {
  return (
    <section aria-labelledby="seo-capabilities-heading" className="border-t border-border px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-['DM_Mono'] text-[10px] uppercase tracking-[.14em] text-primary">Search capabilities / 50 methods</p>
        <h2 id="seo-capabilities-heading" className="mt-4 font-['Fraunces'] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.08]">Search, from every angle.</h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">Traditional SEO and AI search share important foundations: useful content, clear business information and an accessible website. We choose the methods your business needs, not a checklist of acronyms.</p>
        <nav aria-label="SEO capability groups" className="mt-8 flex flex-wrap gap-2">
          {seoGroups.map(group => <a key={group.id} href={`#seo-${group.id}`} className="inline-flex min-h-11 items-center border border-border px-4 py-2 text-xs font-semibold transition hover:border-primary hover:text-primary">{group.title}</a>)}
        </nav>
        <div className="mt-12 space-y-14">
          {seoGroups.map((group, index) => (
            <section key={group.id} id={`seo-${group.id}`} aria-labelledby={`seo-heading-${group.id}`} className="grid scroll-mt-28 gap-6 border-t border-border pt-8 lg:grid-cols-[.36fr_.64fr] lg:gap-16">
              <div>
                <span className="font-['DM_Mono'] text-xs text-muted-foreground">0{index + 1}</span>
                <h3 id={`seo-heading-${group.id}`} className="mt-3 font-['Fraunces'] text-3xl font-semibold">{group.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{group.intro}</p>
              </div>
              <dl className="grid gap-x-8 sm:grid-cols-2">
                {group.methods.map(([name, description]) => <div key={name} className="border-b border-border py-5 first:pt-0 sm:pt-0 sm:pb-6 sm:mb-6"><dt className="text-sm font-semibold leading-6">{name}</dt><dd className="mt-2 text-sm leading-6 text-muted-foreground">{description}</dd></div>)}
              </dl>
            </section>
          ))}
        </div>
        <div className="mt-12 border border-border bg-secondary p-6 md:p-8">
          <h3 className="font-['Fraunces'] text-2xl font-semibold">Start with an audit.</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">We review the site, agree on priorities and define what success means for your business. Scope, deliverables and reporting are confirmed before work begins. Rankings, rich results, knowledge panels and AI citations are controlled by external platforms and cannot be guaranteed. Several AI-search terms overlap; there is no special markup that guarantees inclusion.</p>
          <Link to="/contact" className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-primary">Discuss your SEO priorities <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
