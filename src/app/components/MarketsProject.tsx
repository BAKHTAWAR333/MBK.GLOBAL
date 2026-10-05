import { ArrowUpRight } from "lucide-react";

export function MarketsProject({ dark = false }: { dark?: boolean }) {
  return (
    <article className="group min-w-0">
      <a href="https://mbk-global-market.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Explore MBK Global Markets (opens in a new tab)" className={`block ${dark ? "text-white" : "text-foreground"}`}>
        <div className="relative overflow-hidden bg-secondary">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=880&q=85" alt="Financial analytics displayed on a laptop" loading="lazy" decoding="async" className={`aspect-[1.4] w-full object-cover transition duration-700 group-hover:scale-105 ${dark ? "opacity-85 group-hover:opacity-100" : ""}`} />
          <span className="absolute left-4 top-4 border border-white/20 bg-[#0e2b1a]/90 px-3 py-2 font-['DM_Mono'] text-[10px] uppercase tracking-[.12em] text-white backdrop-blur-sm">MBK Global / Finance</span>
        </div>
        <div className={`mt-5 border-t pt-4 ${dark ? "border-white/20" : "border-[#c9a124]"}`}>
          <p className={`font-['DM_Mono'] text-[10px] uppercase tracking-[.12em] ${dark ? "text-[#8cc9a8]" : "text-primary"}`}>Live Markets / Finance</p>
          <h3 className="mt-2 font-['Fraunces'] text-2xl font-semibold leading-tight sm:text-3xl">MBK Global Markets</h3>
          <p className={`mt-3 max-w-xl text-sm leading-7 ${dark ? "text-white/70" : "text-muted-foreground"}`}>Live financial market platform with real-time cryptocurrency prices, live charts, market data, trading pairs, stocks, forex, indices, and other financial assets.</p>
          <div className={`mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4 ${dark ? "border-white/10" : "border-border"}`}>
            <span className={`inline-flex min-h-11 items-center gap-3 text-sm font-semibold ${dark ? "text-[#c9a124]" : "text-primary"}`}>Explore project <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            <span className={`text-xs ${dark ? "text-white/60" : "text-muted-foreground"}`}>Opens in a new tab</span>
          </div>
        </div>
      </a>
    </article>
  );
}
