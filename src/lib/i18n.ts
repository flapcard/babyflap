import { createContext, useContext } from "react";

export type Lang = "zh" | "en";

export const translations = {
  zh: {
    nav: { about: "关于", tokenomics: "代币经济", roadmap: "路线图", community: "社区", faq: "常见问题" },
    cta: { buy: "在 Flap.sh 购买", join: "加入社区" },
    hero: {
      badge: "下一代蝴蝶 Memecoin 🦋",
      title1: "拍动翅膀",
      title2: "起飞月球",
      subtitle: "BabyFlap 是最可爱、最病毒、最具社区力量的蝴蝶 Memecoin。一次拍翅，掀起加密浪潮。",
      stat1: "持有者",
      stat2: "总供应",
      stat3: "上线平台",
    },
    about: {
      tag: "关于 BabyFlap",
      title: "一只蝴蝶,引发链上风暴",
      body: "据说亚马逊的一只蝴蝶轻轻拍动翅膀,就能在世界另一端掀起飓风。BabyFlap 把这个浪漫的混沌理论搬上区块链——每一次社区互动、每一次 meme 传播,都是一次拍翅,推动我们飞向月球。",
      pills: ["100% 社区驱动", "开发代币锁定", "公平启动", "持有者分红"],
    },
    token: {
      tag: "代币信息",
      title: "稳如磐石的代币结构",
      name: "代币名称",
      supply: "总供应量",
      platform: "启动平台",
      chain: "链",
    },
    tokenomics: {
      tag: "代币经济学",
      title: "透明 · 公平 · 飞翔",
      items: [
        { label: "开发代币锁定", value: 100, desc: "团队代币 100% 锁定,无 rug 风险" },
        { label: "回购销毁", value: 10, desc: "持续回购并销毁,通缩飞轮" },
        { label: "持有者分红", value: 10, desc: "每笔交易自动分红给持有者" },
        { label: "DEX 流动性 & 营销", value: 80, desc: "深度流动性与全球 meme 传播" },
      ],
    },
    roadmap: {
      tag: "路线图",
      title: "三个阶段,飞向月球",
      phases: [
        { phase: "第一阶段", title: "破茧成蝶", items: ["在 flap.sh 启动", "建立核心社区", "病毒式 Meme 营销"] },
        { phase: "第二阶段", title: "振翅高飞", items: ["CEX 上市与合作", "持有者奖励上线", "回购销毁系统激活"] },
        { phase: "第三阶段", title: "蝴蝶效应", items: ["全球 Meme 扩张", "蝴蝶 NFT 系列", "BabyFlap 生态发布"] },
      ],
    },
    community: {
      tag: "加入蝴蝶军团",
      title: "一起拍动翅膀 🦋",
      sub: "我们不是金融建议,我们是金融疯狂。加入数千名扇动翅膀的蝴蝶持有者。",
      tw: "在 Twitter 关注",
      tg: "加入 Telegram",
      slogans: ["拍翅 = 财富", "蝴蝶不会卖", "Flap to the Moon"],
    },
    faq: {
      tag: "常见问题",
      title: "蝴蝶疑问解答",
      items: [
        {
          q: "BabyFlap 是什么?",
          a: "BabyFlap 是一只可爱蝴蝶主题的 memecoin,由社区驱动,在 flap.sh 公平启动。没有预售,没有团队分配,只有翅膀和梦想。",
        },
        {
          q: "如何购买 $BABYFLAP?",
          a: "前往 flap.sh,连接你的钱包,搜索 FLAP 合约地址,然后用一只手指轻轻一拍——你就成为了一只蝴蝶。",
        },
        { q: "代币是否安全?", a: "是。开发代币 100% 锁定,流动性已锁,合约已审计。蝴蝶不会 rug。" },
        { q: "为什么是蝴蝶?", a: "因为蝴蝶效应。一次小小的拍翅,可以引发整个市场的飓风。也因为它们真的很可爱。" },
      ],
    },
    footer: "© 2026 BabyFlap. 不构成金融建议,仅供娱乐和拍翅。",
    ticker: ["拍翅 BABYFLAP", "上月球 🚀", "蝴蝶军团 🦋", "FAIR LAUNCH", "100% LOCKED", "BUYBACK & BURN"],
  },
  en: {
    nav: { about: "About", tokenomics: "Tokenomics", roadmap: "Roadmap", community: "Community", faq: "FAQ" },
    cta: { buy: "Buy on Flap.sh", join: "Join Community" },
    hero: {
      badge: "The Next Viral Butterfly Memecoin 🦋",
      title1: "Flap Your Wings",
      title2: "Fly To The Moon",
      subtitle:
        "BabyFlap is the cutest, most viral, most community-powered butterfly memecoin. One flap, and we move the entire market.",
      stat1: "Holders",
      stat2: "Total Supply",
      stat3: "Launch Platform",
    },
    about: {
      tag: "About BabyFlap",
      title: "One Butterfly. One Crypto Hurricane.",
      body: "They say a butterfly flapping its wings in the Amazon can cause a hurricane on the other side of the world. BabyFlap brings that beautiful chaos on-chain — every meme, every share, every flap pushes us closer to the moon.",
      pills: ["100% Community", "Dev Tokens Locked", "Fair Launch", "Holder Rewards"],
    },
    token: {
      tag: "Token Info",
      title: "Built Different. Built To Flap.",
      name: "Token Name",
      supply: "Total Supply",
      platform: "Launch Platform",
      chain: "Chain",
    },
    tokenomics: {
      tag: "Tokenomics",
      title: "Transparent · Fair · Flying",
      items: [
        { label: "Dev Tokens Locked", value: 100, desc: "Team allocation fully locked. No rug, just flap." },
        { label: "Buy Back & Burn", value: 10, desc: "Continuous buybacks fuel a deflationary flywheel." },
        { label: "Holder Dividends", value: 10, desc: "Every trade rewards diamond-winged holders." },
        { label: "DEX Liquidity & Marketing", value: 80, desc: "Deep liquidity and global meme expansion." },
      ],
    },
    roadmap: {
      tag: "Roadmap",
      title: "Three Phases. One Moon.",
      phases: [
        {
          phase: "Phase 1",
          title: "Cocoon Cracks Open",
          items: ["Launch on flap.sh", "Core community building", "Viral meme campaign"],
        },
        {
          phase: "Phase 2",
          title: "Wings Take Flight",
          items: ["CEX listings & partnerships", "Holder rewards live", "Buyback & burn activated"],
        },
        {
          phase: "Phase 3",
          title: "The Butterfly Effect",
          items: ["Global meme expansion", "Butterfly NFT collection", "BabyFlap ecosystem"],
        },
      ],
    },
    community: {
      tag: "Join The Flap Army",
      title: "Flap Together 🦋",
      sub: "Not financial advice. Just financial chaos. Join thousands of butterfly holders flapping into history.",
      tw: "Follow on Twitter",
      tg: "Join Telegram",
      slogans: ["Flap = Wealth", "Butterflies Don't Sell", "Flap to the Moon"],
    },
    faq: {
      tag: "FAQ",
      title: "Butterfly Questions, Answered",
      items: [
        {
          q: "What is BabyFlap?",
          a: "BabyFlap is a community-powered butterfly memecoin fair-launched on flap.sh. No presale, no team alloc — just wings and dreams.",
        },
        {
          q: "How do I buy $BABYFLAP?",
          a: "Go to flap.sh, connect your wallet, paste the FLAP contract, and gently flap a finger. You're now a butterfly.",
        },
        {
          q: "Is the token safe?",
          a: "Yes. Dev tokens 100% locked, LP locked, contract audited. Butterflies don't rug.",
        },
        {
          q: "Why a butterfly?",
          a: "Because of the butterfly effect. One tiny flap can move the entire market. Also, they're really cute.",
        },
      ],
    },
    footer: "© 2026 BabyFlap. Not financial advice. Just vibes and wings.",
    ticker: ["FLAP FLAP", "TO THE MOON 🚀", "BUTTERFLY ARMY 🦋", "FAIR LAUNCH", "100% LOCKED", "BUYBACK & BURN"],
  },
} as const;

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "zh",
  setLang: () => {},
});
export const useLang = () => useContext(LangContext);
export const useT = () => translations[useLang().lang];
