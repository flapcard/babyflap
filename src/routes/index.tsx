import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, Lock, Flame, Coins, Rocket, Twitter, Send, ChevronDown,
  Sparkles, Globe, ShieldCheck, Zap,
} from "lucide-react";
import mascot from "@/assets/flapmeme-mascot.png";
import { Button } from "@/components/ui/button";
import { FloatingButterflies } from "@/components/FloatingButterflies";
import { LangContext, type Lang, useT, translations } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlapMeme — 拍动翅膀,飞向月球 🦋" },
      { name: "description", content: "FlapMeme — 下一代蝴蝶 memecoin。在 flap.sh 公平启动,100% 社区驱动。" },
      { property: "og:title", content: "FlapMeme 🦋 The Butterfly Memecoin" },
      { property: "og:description", content: "Flap your wings. Fly to the moon. Fair launch on flap.sh." },
    ],
  }),
  component: Page,
});

function useCounter(target: number, dur = 1500, start = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, dur, start]);
  return v;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const o = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && setSeen(true)),
      { threshold: 0.3 },
    );
    o.observe(ref.current);
    return () => o.disconnect();
  }, [seen]);
  return [ref, seen] as const;
}

function Page() {
  const [lang, setLang] = useState<Lang>("zh");
  const ctx = useMemo(() => ({ lang, setLang }), [lang]);
  return (
    <LangContext.Provider value={ctx}>
      <Site />
    </LangContext.Provider>
  );
}

function Site() {
  const t = useT();
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <TokenInfo />
      <Tokenomics />
      <Roadmap />
      <Community />
      <FAQ />
      <footer className="border-t border-border/50 py-10 text-center text-sm text-muted-foreground">
        {t.footer}
      </footer>
    </div>
  );
}

function Nav() {
  const t = useT();
  const { lang, setLang } = { ...useT.length ? {} : {}, ...{ lang: "zh" as Lang, setLang: (_: Lang) => {} } };
  // use real context
  const ctx = (LangContext as unknown as React.Context<{ lang: Lang; setLang: (l: Lang) => void }>);
  const { lang: l, setLang: sl } = (function useReal() { return (require("react") as typeof import("react")).useContext(ctx); })();
  return null as unknown as JSX.Element;
}
