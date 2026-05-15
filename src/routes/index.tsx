import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, Lock, Flame, Coins, Rocket, Twitter, Send, ChevronDown,
  Sparkles, ShieldCheck, Zap, Copy, Check,
} from "lucide-react";
import mascot from "@/assets/flapmeme-mascot.png";
import { Button } from "@/components/ui/button";
import { FloatingButterflies } from "@/components/FloatingButterflies";
import { LangContext, useLang, useT, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BabyFlap — 拍动翅膀,飞向月球 🦋" },
      { name: "description", content: "BabyFlap — 下一代蝴蝶 memecoin。在 flap.sh 公平启动,100% 社区驱动。" },
      { property: "og:title", content: "BabyFlap 🦋 The Butterfly Memecoin" },
      { property: "og:description", content: "Flap your wings. Fly to the moon. Fair launch on flap.sh." },
    ],
  }),
  component: Page,
});

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

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="glass flex items-center gap-1 rounded-full p-1 text-xs font-semibold">
      {(["zh", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1.5 transition-all ${
            lang === l
              ? "bg-gradient-flap text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l === "zh" ? "中" : "EN"}
        </button>
      ))}
    </div>
  );
}

function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#token", label: t.nav.tokenomics },
    { href: "#roadmap", label: t.nav.roadmap },
    { href: "#community", label: t.nav.community },
    { href: "#faq", label: t.nav.faq },
  ];
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={mascot} alt="BabyFlap" className="h-10 w-10 drop-shadow-[0_0_15px_rgba(255,220,50,0.6)]" />
          <span className="text-xl font-extrabold tracking-tight text-gradient-flap">BabyFlap</span>
        </a>
        <nav className="hidden items-center gap-1 glass rounded-full px-2 py-1.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <a
            href="https://flap.sh"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex"
          >
            <Button className="rounded-full bg-gradient-flap font-bold text-primary-foreground hover:opacity-90">
              {t.cta.buy} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const t = useT();
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <FloatingButterflies />
      {/* glow blobs */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--sun)]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-[var(--sky)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="mx-auto inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold">
          <Sparkles className="h-3.5 w-3.5 text-[var(--sun)]" />
          {t.hero.badge}
        </div>

        <div className="relative mx-auto my-8 flex justify-center">
          <div className="absolute inset-0 mx-auto h-72 w-72 rounded-full bg-gradient-flap opacity-30 blur-3xl" />
          <img
            src={mascot}
            alt="BabyFlap mascot"
            className="relative h-64 w-64 animate-flap drop-shadow-[0_20px_60px_rgba(255,220,50,0.45)] md:h-80 md:w-80"
            width={1024}
            height={1024}
          />
        </div>

        <h1 className="text-5xl font-extrabold leading-[1.05] md:text-7xl">
          <span className="text-gradient-flap">{t.hero.title1}</span>
          <br />
          <span className="text-foreground">{t.hero.title2}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          {t.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="https://flap.sh" target="_blank" rel="noreferrer">
            <Button size="lg" className="h-12 rounded-full bg-gradient-flap px-7 text-base font-bold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(255,220,50,0.7)] hover:opacity-95">
              <Rocket className="mr-2 h-4 w-4" /> {t.cta.buy}
            </Button>
          </a>
          <a href="#community">
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-white/5 px-7 text-base font-bold backdrop-blur hover:bg-white/10"
            >
              <Send className="mr-2 h-4 w-4" /> {t.cta.join}
            </Button>
          </a>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}

function useCounter(target: number, dur = 1600, start = true) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, dur, start]);
  return v;
}

function HeroStats() {
  const t = useT();
  const holders = useCounter(13420);
  const supply = useCounter(1_000_000_000);
  return (
    <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-3">
      <StatCard label={t.hero.stat1} value={Math.floor(holders).toLocaleString()} icon={<Sparkles className="h-4 w-4" />} />
      <StatCard label={t.hero.stat2} value={`${Math.floor(supply).toLocaleString()}`} icon={<Coins className="h-4 w-4" />} accent />
      <StatCard label={t.hero.stat3} value="flap.sh" icon={<Rocket className="h-4 w-4" />} />
    </div>
  );
}

function StatCard({
  label, value, icon, accent,
}: { label: string; value: string; icon: React.ReactNode; accent?: boolean }) {
  return (
    <div className={`glass rounded-2xl p-5 text-left ${accent ? "glow-sun" : ""}`}>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {icon} {label}
      </div>
      <div className="mt-2 text-2xl font-extrabold text-gradient-flap md:text-3xl">{value}</div>
    </div>
  );
}

function Ticker() {
  const t = useT();
  const items = [...t.ticker, ...t.ticker, ...t.ticker];
  return (
    <div className="relative my-4 overflow-hidden border-y border-border/50 bg-gradient-flap/10 py-3">
      <div className="ticker-track flex w-max gap-12 whitespace-nowrap text-sm font-extrabold tracking-widest">
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-3 text-foreground/80">
            🦋 <span>{it}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const t = useT();
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-gradient-flap opacity-20 blur-3xl" />
          <img src={mascot} alt="" className="relative mx-auto h-80 w-80 animate-float" width={1024} height={1024} loading="lazy" />
        </div>
        <div>
          <SectionTag>{t.about.tag}</SectionTag>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">{t.about.title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.about.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.about.pills.map((p) => (
              <span key={p} className="glass rounded-full px-3 py-1.5 text-sm font-semibold">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--sun)]/40 bg-[var(--sun)]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--sun)]">
      <Sparkles className="h-3 w-3" /> {children}
    </span>
  );
}

const CONTRACT = "FLAP1xButterfly7Memecoin8FairLaunch9onFlapsh";

function TokenInfo() {
  const t = useT();
  const [copied, setCopied] = useState(false);
  return (
    <section id="token" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionTag>{t.token.tag}</SectionTag>
        <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold md:text-5xl">{t.token.title}</h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <InfoCard icon={<Sparkles className="h-5 w-5" />} label={t.token.name} value="$FLAP" />
          <InfoCard icon={<Coins className="h-5 w-5" />} label={t.token.supply} value="1,000,000,000" highlight />
          <InfoCard icon={<Rocket className="h-5 w-5" />} label={t.token.platform} value="flap.sh" />
          <InfoCard icon={<ShieldCheck className="h-5 w-5" />} label={t.token.chain} value="Solana" />
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 glass rounded-2xl p-3 pl-5">
          <code className="flex-1 truncate text-left font-mono text-sm text-muted-foreground">
            {CONTRACT}
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText(CONTRACT);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-flap px-4 py-2 text-sm font-bold text-primary-foreground"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "OK" : "Copy"}
          </button>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value, highlight }: { icon: React.ReactNode; label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`glass rounded-2xl p-5 text-left ${highlight ? "glow-sun" : ""}`}>
      <div className="flex items-center gap-2 text-[var(--sun)]">{icon}</div>
      <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-xl font-extrabold md:text-2xl">{value}</div>
    </div>
  );
}

function Tokenomics() {
  const t = useT();
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionTag>{t.tokenomics.tag}</SectionTag>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{t.tokenomics.title}</h2>
        </div>
        <div ref={ref} className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.tokenomics.items.map((it, i) => (
            <TokenCard key={i} index={i} item={it} seen={seen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSeen(true)),
      { threshold: 0.2 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [seen]);
  return [ref, seen] as const;
}

function TokenCard({
  item, seen, index,
}: { item: { label: string; value: number; desc: string }; seen: boolean; index: number }) {
  const v = useCounter(item.value, 1400, seen);
  const icons = [<Lock key="l" className="h-5 w-5" />, <Flame key="f" className="h-5 w-5" />, <Coins key="c" className="h-5 w-5" />, <Zap key="z" className="h-5 w-5" />];
  return (
    <div
      className="glass group relative overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-flap opacity-20 blur-2xl transition-opacity group-hover:opacity-40" />
      <div className="relative">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-flap text-primary-foreground shadow-lg">
          {icons[index] ?? icons[0]}
        </div>
        <div className="mt-5 text-5xl font-extrabold text-gradient-flap">
          {Math.floor(v)}
          <span className="text-2xl">%</span>
        </div>
        <div className="mt-2 text-sm font-bold uppercase tracking-wider text-foreground/90">{item.label}</div>
        <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-flap transition-[width] duration-[1400ms] ease-out"
            style={{ width: seen ? `${item.value}%` : "0%" }}
          />
        </div>
      </div>
    </div>
  );
}

function Roadmap() {
  const t = useT();
  return (
    <section id="roadmap" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionTag>{t.roadmap.tag}</SectionTag>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{t.roadmap.title}</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.roadmap.phases.map((p, i) => (
            <div
              key={i}
              className="glass relative overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1"
            >
              <div
                className="absolute right-4 top-4 text-7xl font-black opacity-10"
                style={{ background: "var(--gradient-flap)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
              >
                0{i + 1}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--sun)]">{p.phase}</div>
              <h3 className="mt-2 text-2xl font-extrabold">{p.title}</h3>
              <ul className="mt-5 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-flap" />
                    <span className="text-muted-foreground">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  const t = useT();
  return (
    <section id="community" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[var(--sun)]/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[var(--sky)]/30 blur-3xl" />
          <FloatingButterflies />
          <div className="relative">
            <SectionTag>{t.community.tag}</SectionTag>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold md:text-6xl">{t.community.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.community.sub}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                className="group glass flex items-center gap-3 rounded-2xl px-6 py-4 transition-all hover:glow-sun">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-sun text-primary-foreground transition-transform group-hover:scale-110">
                  <Twitter className="h-6 w-6" />
                </span>
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">Twitter / X</span>
                  <span className="block font-extrabold">{t.community.tw}</span>
                </span>
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer"
                className="group glass flex items-center gap-3 rounded-2xl px-6 py-4 transition-all hover:glow-sky">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-sky text-secondary-foreground transition-transform group-hover:scale-110">
                  <Send className="h-6 w-6" />
                </span>
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">Telegram</span>
                  <span className="block font-extrabold">{t.community.tg}</span>
                </span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {t.community.slogans.map((s) => (
                <span key={s} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-bold">
                  🦋 {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <SectionTag>{t.faq.tag}</SectionTag>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{t.faq.title}</h2>
        </div>
        <div className="mt-10 space-y-3">
          {t.faq.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold md:text-lg">{it.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-[var(--sun)]" : "text-muted-foreground"}`} />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-muted-foreground">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
