import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, X } from "lucide-react";
import { router } from "./routes";

function readOfferState() {
  try { return sessionStorage.getItem("mbk-offer-seen") !== "true"; }
  catch { return false; }
}

export default function App() {
  const [offerOpen, setOfferOpen] = useState(readOfferState);
  useEffect(() => {
    let previousKey = "";
    let frame = 0;
    const syncPage = () => {
      const { location, navigation } = router.state;
      if (navigation.state !== "idle" || location.key === previousKey) return;
      previousKey = location.key;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
        if (target) target.scrollIntoView({ behavior: "instant" });
        else window.scrollTo({ top: 0, behavior: "instant" });
      });
    };
    syncPage();
    const unsubscribe = router.subscribe(syncPage);
    return () => { unsubscribe(); cancelAnimationFrame(frame); };
  }, []);

  const changeOffer = (open: boolean) => {
    if (!open) { try { sessionStorage.setItem("mbk-offer-seen", "true"); } catch {} }
    setOfferOpen(open);
  };

  return (
    <>
      <a href="#main-content" className="fixed left-4 top-4 z-[110] -translate-y-24 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground focus:translate-y-0">Skip to content</a>
      <RouterProvider router={router} />
      <Dialog.Root open={offerOpen} onOpenChange={changeOffer}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-foreground/35 backdrop-blur-[2px]" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] max-h-[85svh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-background p-6 shadow-2xl sm:p-9">
            <Dialog.Close aria-label="Close offer" className="absolute right-4 top-4 grid size-11 place-items-center border border-border transition hover:border-primary hover:text-primary"><X size={18} /></Dialog.Close>
            <div className="pr-10">
              <span className="inline-flex bg-primary px-3 py-2 font-['DM_Mono'] text-xs font-medium tracking-[.1em] text-primary-foreground">10% OFF</span>
              <p className="mt-6 font-['DM_Mono'] text-[10px] uppercase tracking-[.14em] text-muted-foreground">MBK Global / Introductory offer</p>
              <Dialog.Title className="mt-4 font-['Fraunces'] text-3xl font-semibold leading-[1.08] sm:text-4xl">Your next website,<br />with 10% off.</Dialog.Title>
              <Dialog.Description className="mt-5 text-sm leading-7 text-muted-foreground">An introductory discount on website design and development. Share your goals with us to discuss the scope and confirm the offer before starting.</Dialog.Description>
              <a href="https://wa.me/923200276941?text=Hello%20MBK.GLOBAL%2C%20I%20would%20like%20to%20discuss%20the%2010%25%20website%20offer." onClick={() => changeOffer(false)} className="mt-7 inline-flex min-h-12 items-center gap-3 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-foreground">Discuss the offer <ArrowRight size={16} /></a>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
