import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export function SiteFooter() {
  return (
    <footer className="bg-[#0e2b1a] px-5 py-12 text-white md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_1fr]">
          <div>
            <Link to="/" aria-label="MBK Global home" className="font-['Fraunces'] text-3xl font-semibold">MBK<span className="text-[#c9a124]">.</span>GLOBAL</Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">Brand, website and digital growth work for businesses worldwide.</p>
            <Link to="/project-planner" className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#c9a124]">Plan your project <ArrowUpRight size={16} /></Link>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 content-start gap-x-6">
            {[["About", "/about"], ["Services", "/services"], ["Work", "/work"], ["Global", "/global"], ["Process", "/process"], ["Industries", "/industries"], ["Insights", "/insights"], ["FAQs", "/faq"], ["Packages", "/packages"], ["Contact", "/contact"]].map(([label, to]) => <Link key={to} to={to} className="inline-flex min-h-11 items-center text-sm text-white/75 transition hover:text-[#c9a124]">{label}</Link>)}
          </nav>
          <div>
            <p className="font-['DM_Mono'] text-[10px] uppercase tracking-[.14em] text-[#8cc9a8]">Start a conversation</p>
            <a href="https://wa.me/923200276941" className="mt-4 flex min-h-11 items-center gap-3 text-sm font-semibold transition hover:text-[#c9a124]">03200276941 <ArrowUpRight size={15} /></a>
            <a href="mailto:mbkglobalinternational@gmail.com" className="flex min-h-11 items-center break-all text-sm text-white/80 transition hover:text-[#c9a124]">mbkglobalinternational@gmail.com</a>
            <p className="mt-4 text-xs leading-6 text-white/65">Global collaboration. Clear communication.</p>
          </div>
        </div>
        <p className="mt-10 border-t border-white/15 pt-5 font-['DM_Mono'] text-[10px] tracking-[.06em] text-white/65">© {new Date().getFullYear()} MBK.GLOBAL. All rights reserved.</p>
      </div>
    </footer>
  );
}
