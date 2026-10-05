import { useEffect } from "react";

const configuredUrl = import.meta.env.VITE_SITE_URL as string | undefined;
export const SITE_URL = (configuredUrl || "https://mbk.global").replace(/\/$/, "");
const SITE_NAME = "MBK.GLOBAL";
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1200&q=90";

type SeoInput = {
  title: string;
  description: string;
  pathname?: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
  breadcrumb?: string[];
  schema?: Record<string, unknown>;
};

function upsertMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

const organization = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  email: "mbkglobalinternational@gmail.com",
  telephone: "+923200276941",
  description: "MBK.GLOBAL is an independent creative digital agency providing website development, UI/UX design, branding, e-commerce, AI automation, SEO and digital marketing.",
  logo: `${SITE_URL}/favicon.svg`,
  image: DEFAULT_IMAGE,
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: "+923200276941",
    contactType: "sales and project inquiries",
    email: "mbkglobalinternational@gmail.com",
    availableLanguage: ["English", "Urdu"],
  }],
  areaServed: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait", "Bahrain", "Canada", "USA", "UK", "Switzerland", "Luxembourg", "Ireland", "Norway", "Denmark", "Netherlands", "Germany", "France", "Turkey", "Australia", "Malaysia", "Singapore"],
  knowsAbout: ["Website design and development", "UI/UX design", "Brand identity", "E-commerce", "SEO", "Digital marketing", "AI automation", "Business systems"],
};

function getBreadcrumb(pathname: string, supplied?: string[]) {
  const labels = supplied || pathname.split("/").filter(Boolean).map(part => part.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase()));
  return [{ name: "Home", url: SITE_URL }, ...labels.map((name, index) => ({ name, url: `${SITE_URL}/${pathname.split("/").filter(Boolean).slice(0, index + 1).join("/")}` }))];
}

export function applySeo(input: SeoInput) {
  const pathname = input.pathname || window.location.pathname || "/";
  const url = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
  const image = input.image || DEFAULT_IMAGE;
  document.title = input.title;
  upsertMeta('meta[name="description"]', "name", "description", input.description);
  upsertMeta('meta[name="robots"]', "name", "robots", input.noIndex ? "noindex,follow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
  upsertMeta('meta[property="og:title"]', "property", "og:title", input.title);
  upsertMeta('meta[property="og:description"]', "property", "og:description", input.description);
  upsertMeta('meta[property="og:type"]', "property", "og:type", input.type || "website");
  upsertMeta('meta[property="og:url"]', "property", "og:url", url);
  upsertMeta('meta[property="og:image"]', "property", "og:image", image);
  upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
  upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", input.title);
  upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", input.description);
  upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
  setCanonical(url);

  const graph: Record<string, unknown>[] = [
    organization,
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: "en" },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: input.title, description: input.description, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` }, inLanguage: "en" },
  ];
  if (pathname !== "/" && !input.noIndex) {
    graph.push({ "@type": "BreadcrumbList", itemListElement: getBreadcrumb(pathname, input.breadcrumb).map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })) });
  }
  const routeSchemas: Record<string, Record<string, unknown>> = {
    "/about": { "@type": "AboutPage", name: "About MBK.GLOBAL", mainEntity: { "@id": `${SITE_URL}/#organization` } },
    "/services": { "@type": "CollectionPage", name: "MBK.GLOBAL Digital Services", about: { "@id": `${SITE_URL}/#organization` } },
    "/work": { "@type": "CollectionPage", name: "MBK.GLOBAL Selected Work", description: "A portfolio of website, brand identity, e-commerce and digital product work." },
    "/insights": { "@type": "Blog", name: "MBK.GLOBAL Insights", description: "Practical perspectives on strategy, branding, web development, AI and digital growth." },
    "/contact": { "@type": "ContactPage", name: "Contact MBK.GLOBAL", mainEntity: { "@id": `${SITE_URL}/#organization` } },
  };
  if (routeSchemas[pathname]) graph.push(routeSchemas[pathname]);
  if (input.schema) graph.push(input.schema);
  let script = document.getElementById("mbk-seo-schema") as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = "mbk-seo-schema";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.text = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

export function useSeo(input: SeoInput) {
  useEffect(() => { applySeo(input); }, [input.title, input.description, input.pathname, input.type, input.image, input.noIndex]);
}

export function initializeAnalytics() {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  const gtmId = import.meta.env.VITE_GTM_ID as string | undefined;
  const googleVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
  const bingVerification = import.meta.env.VITE_BING_SITE_VERIFICATION as string | undefined;
  if (googleVerification) upsertMeta('meta[name="google-site-verification"]', "name", "google-site-verification", googleVerification);
  if (bingVerification) upsertMeta('meta[name="msvalidate.01"]', "name", "msvalidate.01", bingVerification);
  if (gtmId && !document.getElementById("mbk-gtm")) {
    const script = document.createElement("script"); script.id = "mbk-gtm"; script.async = true; script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`; document.head.appendChild(script);
  }
  if (gaId && !document.getElementById("mbk-ga")) {
    const script = document.createElement("script"); script.id = "mbk-ga"; script.async = true; script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`; document.head.appendChild(script);
    window.dataLayer = window.dataLayer || []; window.gtag = function gtag(...args: unknown[]) { window.dataLayer.push(args); }; window.gtag("js", new Date()); window.gtag("config", gaId, { anonymize_ip: true });
  }
}

declare global { interface Window { dataLayer: unknown[][]; gtag: (...args: unknown[]) => void; } }
