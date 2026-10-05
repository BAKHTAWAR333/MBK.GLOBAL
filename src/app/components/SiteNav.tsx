import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";

const links = [["About", "/about"], ["Services", "/services"], ["Work", "/work"], ["Global", "/global"], ["Process", "/process"], ["Industries", "/industries"], ["Insights", "/insights"], ["FAQs", "/faq"], ["Packages", "/packages"], ["Planner", "/project-planner"], ["Contact", "/contact"]];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 px-5 py-4 backdrop-blur-md md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" aria-label="MBK Global home" className="shrink-0 font-['Plus_Jakarta_Sans'] text-xl font-bold tracking-[-.04em]">MBK<span className="text-accent">.</span>GLOBAL</Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-4 min-[1440px]:flex">
            {links.map(([label, to]) => <NavLink key={to} to={to} className={({ isActive }) => `inline-flex min-h-11 items-center text-xs font-medium transition hover:text-primary ${isActive ? "text-primary underline decoration-accent underline-offset-8" : "text-foreground"}`}>{label}</NavLink>)}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden min-h-11 items-center gap-2 bg-primary px-4 text-xs font-semibold text-primary-foreground transition hover:bg-foreground sm:inline-flex">Start a project <ArrowUpRight size={14} /></Link>
            <button ref={toggle} type="button" onClick={() => setOpen(value => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-navigation-panel" className="grid size-11 place-items-center border border-border min-[1440px]:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        {open && <nav id="site-navigation-panel" aria-label="Mobile navigation" className="mt-4 grid max-h-[70svh] overflow-y-auto border-t border-border pt-3 min-[1440px]:hidden">
          {links.map(([label, to]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `flex min-h-11 items-center justify-between px-3 text-sm font-medium transition hover:bg-secondary ${isActive ? "bg-secondary text-primary" : "text-foreground"}`}>{label}<ArrowUpRight size={14} className="text-muted-foreground" /></NavLink>)}
        </nav>}
      </div>
    </header>
  );
}
