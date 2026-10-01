// Spark Union Capital (SPARK ONE) 专属金融区块链与量化投研数据配置
// 专为 Telegram (18区社群) 与 X.com (@sparkone_global) 全球 11 国语言宣发定制

export const INITIAL_CLIENTS = [
  {
    id: 'c1',
    name: 'Spark Union Capital',
    brandName: 'SPARK ONE',
    category: 'AI量化与金融区块链生态 (Global Market Intelligence)',
    avatar: '⚡',
    platforms: ['Telegram (18区社群)', 'X.com (@sparkone_global)', 'Binance Square', 'Discord'],
    todayGoal: '每小时自动随机抽选 + 6大投研支柱多维归因 + 11国语言全球即时广播',
    progress: 96,
    status: 'review_ready',
    activePostType: 'spark_research',
    brandTone: '全球宏观脉搏、极简投研、AURORA黄金与加密量化引擎、Risk First 突发风控'
  }
];

// SPARK ONE 重点宣发板块与资产矩阵 (对应 Telegram 18 大主题区)
export const WAITING_CLIENTS = [
  {
    id: 'c1',
    name: 'SPARK AI 核心投研 (#5)',
    category: '6大核心投研支柱与极简观点',
    avatar: '🤖',
    status: 'active',
    waitTime: '正在四部门编译中',
    priority: '最高 - 持续每小时广播',
    progress: 96,
    service: 'SPARK AI DAILY + 多维归因 + AURORA引擎解构 + X.com Thread + Telegram 18区广播',
    brief: '覆盖黄金(XAU/USD)、比特币(BTC)、以太坊与宏观流动性，权威纯正英文与11国语言即时出稿。'
  },
  {
    id: 'w1',
    name: 'AURORA 黄金量化策略区 (#1)',
    category: '高频统计套利与波动率曲面',
    avatar: '📈',
    status: 'waiting',
    waitTime: '排队 12 分钟',
    priority: '高优先级 - 突发风控联动',
    progress: 40,
    service: '实时胜率追踪 + 动态止损警报 + 5大引擎架构展示',
    brief: '解构 AURORA 黄金策略运行管线，在黄金突破 $2,680 节点输出机构级风险防御参数。'
  },
  {
    id: 'w2',
    name: '全球 11 国语言社区治理 (#2-#12)',
    category: '多语种本地化社群矩阵',
    avatar: '🌐',
    status: 'waiting',
    waitTime: '排队 25 分钟',
    priority: '日常全球轮播',
    progress: 15,
    service: '英/日/韩/西/阿/俄/德/法等 11 国语言全自动翻译投递',
    brief: '无缝打通 Telegram 各语言专属频道与推特多语账号，实现全球投资者 24 小时零时差接收。'
  },
  {
    id: 'w3',
    name: 'AI KNOWLEDGE 量化微课堂 (#15)',
    category: '#001-#008 投资者教育单点打透',
    avatar: '🎓',
    status: 'waiting',
    waitTime: '排队 40 分钟',
    priority: '深度长效沉淀',
    progress: 0,
    service: '单点打透的量化微课堂 + 凯利公式 + 订单流深度教学',
    brief: '输出具有极高二次裂变传播力的投资哲思与量化科普，塑造 Spark Union Capital 国际顶级投研形象。'
  }
];

// 6 大核心投研栏目 (直接对应控制台截图中的功能)
export const SPARK_RESEARCH_PILLARS = [
  {
    id: 'hourly_auto',
    code: '0',
    title: '每小时自动随机抽选',
    badge: 'Hourly Auto',
    badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-700/60',
    subtitle: '系统每整点自动从 6 大支柱中轮巡/加权随机抽取一条推送',
    btnText: '立即随机抽取一条内容',
    icon: '🎲'
  },
  {
    id: 'daily',
    code: '1',
    title: 'SPARK AI DAILY',
    badge: '每日必看',
    badgeColor: 'bg-amber-950 text-amber-300 border-amber-700/60',
    subtitle: '极简全球市场脉搏与宏观观点',
    btnText: '生成今日市场脉搏',
    icon: '⚡',
    content: `⚡ [SPARK AI DAILY] Oct 01 Macro Pulse & Crypto Alpha

1. GLOBAL MACRO:
US 10Y Treasury Yields pull back to 4.22%, easing broad liquidity constraints. DXY soft at 103.4. Gold (XAU/USD) sustains breakout at $2,682/oz as central bank reserve accumulation offsets higher-for-longer rate narratives.

2. CRYPTO ECOSYSTEM:
Bitcoin consolidates firmly in the $68,200 - $69,100 range. Net spot ETF inflows clocked +$315M yesterday (BlackRock IBIT leading). Ethereum/BTC ratio begins mean reversion test at 0.0385 support.

3. QUANT INSIGHT (AURORA ENGINE):
Aurora Model signals 71% Long Momentum on Gold & Layer-1 majors with trailing risk bands tightened to 1.6%.
Volatility index (VIX-Crypto) compressed at 44.5 — algorithmic liquidity expansion anticipated into US cash open.

#SparkUnion #SPARKAI #QuantTrading #MacroPulse #Bitcoin`
  },
  {
    id: 'market_intel',
    code: '2',
    title: 'MARKET INTELLIGENCE',
    badge: '多维归因',
    badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-700/60',
    subtitle: '深度剖析“黄金/加密市场为什么这样走”',
    btnText: '生成多维归因分析',
    icon: '📊',
    content: `📊 [SPARK MARKET INTELLIGENCE] Multi-Dimensional Attribution

Asset Focus: Gold (XAU/USD) & Bitcoin (BTC) Dual Breakout

WHY THE MARKET MOVES THIS WAY:
• Liquidity Attribution (42% Weight): Global M2 expansion across Tier-1 central banks up +1.8% QoQ. Synthetic liquidity surplus is systematically absorbed by hard-cap collateral assets.
• Derivatives Structure (28% Weight): Perpetual funding rates reset to flat (0.007%) following a $140M short liquidation cascade. Open Interest (OI) remains healthy at $38.4B.
• Geopolitical / De-Dollarization (30% Weight): Sovereign reserve diversification accelerated; BRICS settlement basket pilots increase demand for decentralized reserve balance sheets.

KEY LEVEL TO MONITOR:
Support: BTC $67,400 / Gold $2,650
Resistance: BTC $70,800 / Gold $2,710
Strategy: Avoid chasing high-funding spikes; accumulate on structural dips.

#MarketIntelligence #MacroAttribution #SPARKONE #AlphaDeepDive`
  },
  {
    id: 'how_it_thinks',
    code: '3',
    title: 'HOW SPARK AI THINKS',
    badge: '5大引擎',
    badgeColor: 'bg-purple-950 text-purple-300 border-purple-700/60',
    subtitle: '解构核心引擎架构与运行管线',
    btnText: '解构核心引擎管线',
    icon: '🧠',
    engines: [
      'AURORA (黄金策略)',
      'PHOENIX (高频统计套利)',
      'NEBULA (链上巨鲸异动)',
      'CHRONOS (跨期波动率曲面)',
      'AEGIS (动态资产组合防御)'
    ],
    content: `🧠 [HOW SPARK AI THINKS] Engine Pipeline: AURORA (Gold & Macro Strategy)

Architecture Breakdown:
• Sub-Model 1: Micro-Structure Order Book Imbalance (5ms scan across CME & Binance futures)
• Sub-Model 2: Macro Yield-Differential Vector (Real yields vs. Inflation breakeven)
• Sub-Model 3: Dynamic Volatility Envelope (Automated Bollinger-Kelter Band fusion)

Execution Snapshot:
When market volatility spikes beyond 2.4 sigma, AURORA dynamically adjusts position sizing using fractional Kelly Criterion, scaling out 35% of exposure to lock in realized alpha while letting remaining runners trail stop.

Human trader feels greed and fear. AURORA operates purely on mathematical expectancy and cold execution.

#AlgorithmicTrading #AuroraEngine #QuantArchitecture #SPARKAI`
  },
  {
    id: 'risk_alert',
    code: '4',
    title: 'AI RISK ALERT',
    badge: '突发风控',
    badgeColor: 'bg-rose-950 text-rose-300 border-rose-700/60',
    subtitle: '波动加剧时启动防御: Risk First',
    btnText: '生成突发风控警报',
    icon: '🚨',
    content: `🚨 [AI RISK ALERT - LEVEL 2 PROTOCOL ACTIVE]

Trigger Event: Anomalous funding rate divergence & sudden $85M long liquidation cascade in perpetual markets within 15 minutes.

Automated Risk Directives:
1. Trailing Stop-Loss tightened from 2.5% to 1.2% across high-beta crypto holdings.
2. Aurora Engine shifted into Dynamic Delta-Neutral Hedge Mode.
3. Leverage cap lowered to max 3x on open algorithmic execution tracks.

Directive to Traders:
Do not attempt knife-catching while spot CVD remains divergent. Preservation of principal is the prerequisite for asymmetric compounding.

#RiskManagement #RiskFirst #AIEngine #EmergencyAlert #SparkUnion`
  },
  {
    id: 'knowledge',
    code: '5',
    title: 'AI KNOWLEDGE',
    badge: '#001-#008',
    badgeColor: 'bg-indigo-950 text-indigo-300 border-indigo-700/60',
    subtitle: '单点打透的量化微课堂',
    btnText: '载入微课堂精炼知识',
    icon: '🎓',
    classes: [
      { id: '#001', name: '#001 What is Quant Trading?' },
      { id: '#002', name: '#002 The Kelly Criterion in Capital Allocation' },
      { id: '#003', name: '#003 Order Book Imbalance & Liquidity Pools' },
      { id: '#004', name: '#004 Delta Neutral Hedging Explained' },
      { id: '#005', name: '#005 Volatility Smiles & Options Gamma' }
    ],
    content: `🎓 [SPARK AI KNOWLEDGE #001] What is Quantitative Trading?

Traditional trading relies on intuition, chart patterns, and subjective sentiment.
Quantitative trading replaces emotional guesswork with rigorous mathematical models and probabilistic algorithms.

How SPARK ONE executes quant systems:
1. Data Ingestion: Millions of ticks processed per second (order book, sentiment, macro).
2. Alpha Hypothesis: Formulating testable statistical edges with verifiable backtesting.
3. Execution Engine: High-speed API execution minimizing slippage and market impact.
4. Risk Bounds: Strict stop-losses hardcoded into smart contracts and algorithmic gateways.

Result: Consistent mathematical expectancy independent of market hype.

#Quant101 #CryptoEducation #AlphaAcademy #SPARKONE`
  },
  {
    id: 'insight',
    code: '6',
    title: 'SPARK AI INSIGHT',
    badge: '高传播金句',
    badgeColor: 'bg-fuchsia-950 text-fuchsia-300 border-fuchsia-700/60',
    subtitle: '极具洞见的投资哲思，利于二次裂变',
    btnText: '换一条高传播观点',
    icon: '✨',
    quotes: [
      '“Financial markets are designed to transfer wealth from the impatient to the quantitative. Emotion is the enemy of compounding.”',
      '“In crypto and blockchain, volatility isn’t risk; it is the price of admission for non-correlated generational alpha.”',
      '“A retail trader asks: \'Will it pump?\' A quantitative fund asks: \'What is our expected value across 1,000 statistical iterations?\'”',
      '“Risk management is not what you do after the crash. It is the architectural foundation built before placing the first satoshi.”'
    ],
    content: `✨ [SPARK AI INSIGHT] On Compounding & Quantitative Edge

“Financial markets are designed to transfer wealth from the impatient to the quantitative. Emotion is the enemy of compounding. Systems outlast sentiments.”

In the hyper-financialized crypto landscape, edge doesn't come from predicting the future; it comes from having a mathematical protocol for managing every possible future.

#CryptoPhilosophy #QuantitativeMindset #SparkUnion #AlphaTakeaway`
  }
];

// Director (You) sitting in Meeting Room
export const DIRECTOR_DATA = {
  id: 'human_director',
  name: '你 (Spark Union 总监 / COO)',
  title: '全球首席运营总监 / 资深量化主理人',
  x: 1095,
  y: 155,
  avatarEmoji: '⚡',
  avatarBg: 'bg-gradient-to-tr from-amber-500 via-cyan-500 to-indigo-600',
  thought: '⚡ 欢迎！Telegram 18区与 X.com @sparkone_global 已全线贯通，点击【投研发布中心】即可一键生成并广播！'
};

// 5 大金融区块链投研部门定义
export const DEPARTMENTS = [
  { id: 'gateway', name: 'TG & X 广播调度部', icon: '📡', color: 'text-yellow-400', border: 'border-yellow-500/35', bg: 'bg-yellow-950/15' },
  { id: 'market', name: '宏观投研情报部', icon: '📊', color: 'text-teal-400', border: 'border-teal-500/30', bg: 'bg-teal-950/15' },
  { id: 'quant', name: '量化策略解构部', icon: '🧠', color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-950/15' },
  { id: 'editorial', name: '全球编译发布部', icon: '✍️', color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-950/15' },
  { id: 'visual', name: '视听图表渲染部', icon: '🎨', color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-950/15' }
];

export const INITIAL_AGENTS = [
  // ── 1. TG & X 广播调度部 (Telegram 18区与推特排期网关) ── (Col 1, Row 1)
  {
    id: 'tg_topic_concierge',
    name: 'TG_Topic_Bot',
    face: '📡',
    dept: 'gateway',
    deptName: '广播调度部',
    role: 'Telegram 18区话题调度官',
    avatarColor: 'bg-yellow-600',
    borderColor: 'border-yellow-400',
    haloColor: 'rgba(250, 204, 21, 0.45)',
    status: 'active',
    homeX: 100,
    homeY: 105,
    x: 100,
    y: 105,
    currentTask: '监控 Telegram #5 SPARK AI 话题与 11 国语言广播频道',
    thought: '📡 Telegram 18区连接正常！#5 SPARK AI 话题就绪，随时广播最新宏观脉搏！',
    tokenUsage: '14.2k',
    model: 'TG Bot API Gateway'
  },
  {
    id: 'x_flight_director',
    name: 'X_Flight_Op',
    face: '𝕏',
    dept: 'gateway',
    deptName: '广播调度部',
    role: '@sparkone_global 排期专家',
    avatarColor: 'bg-amber-600',
    borderColor: 'border-amber-400',
    haloColor: 'rgba(217, 119, 6, 0.4)',
    status: 'active',
    homeX: 235,
    homeY: 105,
    x: 235,
    y: 105,
    currentTask: '调度 @sparkone_global 每小时推文 Thread 与高传播金句',
    thought: '𝕏 推特 API 管道畅通！准备发布黄金(XAU/USD)与比特币双突破长推！',
    tokenUsage: '18.5k',
    model: 'X API v2 Stream'
  },

  // ── 2. 宏观投研情报部 (Global Market Intel & Daily Pulse) ── (Col 1, Row 2)
  {
    id: 'macro_oracle',
    name: 'Macro_Oracle',
    face: '🌐',
    dept: 'market',
    deptName: '宏观投研部',
    role: 'SPARK AI DAILY 脉搏分析师',
    avatarColor: 'bg-teal-500',
    borderColor: 'border-teal-400',
    haloColor: 'rgba(45, 212, 191, 0.45)',
    status: 'active',
    homeX: 100,
    homeY: 410,
    x: 100,
    y: 410,
    currentTask: '抓取美债10Y利率(4.22%)、DXY美元指数与黄金现货数据',
    thought: '📊 宏观点评：黄金触碰 $2,682/oz 强阻力，流动性溢出正涌向加密硬通货！',
    tokenUsage: '26.4k',
    model: 'Gemini 1.5 Pro'
  },
  {
    id: 'attribution_quant',
    name: 'Attribution_AI',
    face: '📈',
    dept: 'market',
    deptName: '宏观投研部',
    role: '多维归因深度专家',
    avatarColor: 'bg-emerald-500',
    borderColor: 'border-emerald-400',
    haloColor: 'rgba(52, 211, 153, 0.4)',
    status: 'active',
    homeX: 235,
    homeY: 410,
    x: 235,
    y: 410,
    currentTask: '解构“黄金/加密市场为什么这样走”：流动性42%+衍生品28%',
    thought: '📈 多维归因模型完成：去美元化储备配置是本轮资产共振上涨的核心催化剂！',
    tokenUsage: '32.1k',
    model: 'Claude 3.5 Sonnet'
  },

  // ── 3. 量化策略解构部 (How Spark AI Thinks & Risk Alert) ── (Col 2, Row 1)
  {
    id: 'aurora_architect',
    name: 'Aurora_Core',
    face: '⚡',
    dept: 'quant',
    deptName: '量化策略部',
    role: 'AURORA 黄金量化引擎架构师',
    avatarColor: 'bg-amber-500',
    borderColor: 'border-amber-400',
    haloColor: 'rgba(251, 191, 36, 0.45)',
    status: 'active',
    homeX: 410,
    homeY: 125,
    x: 410,
    y: 125,
    currentTask: '解构 AURORA 黄金策略运行管线与多空凯利仓位动态配置',
    thought: '⚡ AURORA 黄金模型读数更新：多头动能达 71%，动态布林带收敛，执行冷峻加仓！',
    tokenUsage: '42.8k',
    model: 'GPT-4o Quant Engine'
  },
  {
    id: 'risk_sentinel',
    name: 'Risk_Sentinel',
    face: '🚨',
    dept: 'quant',
    deptName: '量化策略部',
    role: 'AI RISK ALERT 突发风控官',
    avatarColor: 'bg-orange-500',
    borderColor: 'border-orange-400',
    haloColor: 'rgba(251, 146, 60, 0.4)',
    status: 'active',
    homeX: 545,
    homeY: 125,
    x: 545,
    y: 125,
    currentTask: '24小时盯梢爆仓异动，启动 Level 2 突发防御协议',
    thought: '🚨 波动加剧预警：永续合约资金费率异常，已命令 AURORA 收紧追踪止损至 1.2%！',
    tokenUsage: '29.2k',
    model: 'o3-mini Risk First'
  },

  // ── 4. 全球编译发布部 (Global Editorial & 11-Lang Dispatch) ── (Col 2, Row 2)
  {
    id: 'alpha_writer',
    name: 'Alpha_Writer',
    face: '✍️',
    dept: 'editorial',
    deptName: '全球编译部',
    role: 'X.com 深度 Thread 首席作家',
    avatarColor: 'bg-rose-500',
    borderColor: 'border-rose-400',
    haloColor: 'rgba(251, 113, 133, 0.5)',
    status: 'active',
    homeX: 380,
    homeY: 410,
    x: 380,
    y: 410,
    currentTask: '撰写权威纯正的华尔街英文研报与 Telegram 格式化帖文',
    thought: '✍️ 国际标准英文排版完成！“Why Gold & BTC are Unlocking Asymmetric Alpha” 极具感染力！',
    tokenUsage: '38.2k',
    model: 'Claude 3.5 Sonnet'
  },
  {
    id: 'polyglot_11lang',
    name: 'Polyglot_11L',
    face: '🌍',
    dept: 'editorial',
    deptName: '全球编译部',
    role: '11国语言即时编译官',
    avatarColor: 'bg-pink-500',
    borderColor: 'border-pink-400',
    haloColor: 'rgba(244, 114, 182, 0.5)',
    status: 'active',
    homeX: 475,
    homeY: 410,
    x: 475,
    y: 410,
    currentTask: '将投研内容一键转译为日、韩、西、阿、俄等 11 国母语版本',
    thought: '🌍 11 国语言本地化翻译同步完成，各语区 Telegram 社区可立即同步接收！',
    tokenUsage: '35.5k',
    model: 'DeepL Pro / GPT-4o'
  },
  {
    id: 'insight_philosopher',
    name: 'Insight_Echo',
    face: '✨',
    dept: 'editorial',
    deptName: '全球编译部',
    role: '高传播投资金句策划',
    avatarColor: 'bg-fuchsia-500',
    borderColor: 'border-fuchsia-400',
    haloColor: 'rgba(217, 70, 239, 0.4)',
    status: 'idle',
    homeX: 570,
    homeY: 410,
    x: 570,
    y: 410,
    currentTask: '提炼利于二次裂变的投资哲思金句',
    thought: '✨ 今日金句：“市场旨在将财富从浮躁者转移至量化者。情绪是复利的死敌。”',
    tokenUsage: '16.1k',
    model: 'Claude 3.5 Sonnet'
  },

  // ── 5. 视听图表渲染部 (TradingView & Visual Terminal) ── (Col 3, Rows 1-2 Full Height!)
  {
    id: 'chart_renderer',
    name: 'Chart_Renderer',
    face: '📊',
    dept: 'visual',
    deptName: '视听渲染部',
    role: '暗黑量化 K 线与深度图渲染',
    avatarColor: 'bg-sky-500',
    borderColor: 'border-sky-400',
    haloColor: 'rgba(56, 189, 248, 0.5)',
    status: 'active',
    homeX: 710,
    homeY: 145,
    x: 710,
    y: 145,
    currentTask: '直出 XAU/USD 黄金突破阻力位与 BTC 清算热力图',
    thought: '📊 TradingView 4K 赛博暗黑图表直出完成：黄金支撑位 $2,650 标注清晰！',
    tokenUsage: '48.1k',
    model: 'Quant Chart Engine'
  },
  {
    id: 'seedream_infographic',
    name: 'Seedream_Vision',
    face: '🎨',
    dept: 'visual',
    deptName: '视听渲染部',
    role: '链上多维归因视觉海报 (Seedream)',
    avatarColor: 'bg-cyan-500',
    borderColor: 'border-cyan-400',
    haloColor: 'rgba(34, 211, 238, 0.5)',
    status: 'active',
    homeX: 860,
    homeY: 145,
    x: 860,
    y: 145,
    currentTask: 'Seedream 生成 3:4 赛博金融科技推特大字封面',
    thought: '🎨 Seedream 美学海报已出炉：金色流光与区块链节点微观质感极其震撼！',
    tokenUsage: '41.8k',
    model: 'Seedream 3.0 Pro'
  },
  {
    id: 'motion_15s',
    name: 'Kinetic_Motion',
    face: '⚡',
    dept: 'visual',
    deptName: '视听渲染部',
    role: '15s 投研动态卡点动效 (Seedance)',
    avatarColor: 'bg-amber-500',
    borderColor: 'border-amber-400',
    haloColor: 'rgba(245, 158, 11, 0.5)',
    status: 'active',
    homeX: 710,
    homeY: 410,
    x: 710,
    y: 410,
    currentTask: '渲染 15s 投研快讯动态分镜与数字心跳律动',
    thought: '⚡ 15s 金融动态运镜压制就绪：第 3.0 秒精准放大 AURORA 信号节点！',
    tokenUsage: '45.2k',
    model: 'Seedance 2.5 Kinetic'
  },
  {
    id: 'suno_fintech',
    name: 'Suno_Sound_Op',
    face: '🎵',
    dept: 'visual',
    deptName: '视听渲染部',
    role: '金融科技卡点音效 (Suno)',
    avatarColor: 'bg-violet-500',
    borderColor: 'border-violet-400',
    haloColor: 'rgba(167, 139, 250, 0.45)',
    status: 'active',
    homeX: 860,
    homeY: 410,
    x: 860,
    y: 410,
    currentTask: 'Suno v3.5 生成充满未来科技感的低频脉冲背景音',
    thought: '🎵 赛博朋克量化节拍就绪，为 TG 与 X 视频赋予顶级机构质感！',
    tokenUsage: '25.6k',
    model: 'Suno v3.5 Fintech'
  },

  // ── 6. 战略决策与一键广播中枢 (Executive Boardroom) ── (Col 4, Rows 1-2 Full Height!)
  {
    id: 'ai_cqo',
    name: 'AI_CQO',
    face: '🧠',
    dept: 'boardroom',
    deptName: '战略决策室',
    role: '首席量化策略指挥官 (Spark AI)',
    avatarColor: 'bg-purple-600',
    borderColor: 'border-purple-400',
    haloColor: 'rgba(192, 132, 252, 0.6)',
    status: 'active',
    homeX: 1180,
    homeY: 220,
    x: 1180,
    y: 220,
    currentTask: '统筹 6 大投研支柱，审核 Telegram 18区与 X.com 广播排期',
    thought: '🧠 报告总监：Telegram 18区与 @sparkone_global 排期已校准，AURORA 研报随时可一键广播！',
    tokenUsage: '62.4k',
    model: 'o3-mini / Claude 3.5'
  }
];

// 会议室环绕圆桌坐席坐标 (围绕圆心 1095, 350 均衡分布)
export const MEETING_SEATS = {
  human_director: { x: 1095, y: 220 },
  ai_cqo: { x: 1185, y: 275 },
  chart_renderer: { x: 1205, y: 355 },
  motion_15s: { x: 1175, y: 435 },
  alpha_writer: { x: 1095, y: 465 },
  aurora_architect: { x: 1015, y: 435 },
  macro_oracle: { x: 985, y: 355 },
  tg_topic_concierge: { x: 1005, y: 275 }
};

// 五大部门向总监汇报开张方案的圆桌剧本 (针对 Spark Union Capital)
export const MEETING_DIALOGUES = [
  {
    speakerId: 'human_director',
    text: '“各部门注意！Spark Union Capital 全球宣发已启动，汇报 Telegram 18区与 X.com 当前战备排期！”'
  },
  {
    speakerId: 'tg_topic_concierge',
    text: '“【广播调度部】汇报：Telegram 18个社区板块全线连通！#5 SPARK AI 话题待命，11国语言频道即时接收推送！”'
  },
  {
    speakerId: 'macro_oracle',
    text: '“【宏观投研部】汇报：美债收益率4.22%回落，黄金 $2,682 与比特币稳固在 $68.5k，SPARK AI DAILY 脉搏已就绪！”'
  },
  {
    speakerId: 'aurora_architect',
    text: '“【量化策略部】汇报：AURORA 黄金量化策略运行良好，多头置信度 71%，风控哨兵 Risk First 处于警戒防御态！”'
  },
  {
    speakerId: 'alpha_writer',
    text: '“【全球编译部】汇报：X.com 深度 Thread 已按华尔街标准出稿，11国语言本地化版本已完成校验！”'
  },
  {
    speakerId: 'chart_renderer',
    text: '“【视听渲染部】汇报：TradingView 暗黑清算热力图 + Seedream 科技海报 + Suno 音效已合成！”'
  },
  {
    speakerId: 'ai_cqo',
    text: '“报告总监：投研、量化、编译、图表、广播全部闭环！请总监在投研发布台一键授权投递！”'
  }
];

// 跨部门动态连线 (从调度 ──> 宏观 ──> 量化 ──> 编译/渲染 ──> 决策中枢)
export const INITIAL_LINKS = [
  { id: 'l1', from: 'tg_topic_concierge', to: 'macro_oracle', label: '排期任务触发' },
  { id: 'l2', from: 'macro_oracle', to: 'aurora_architect', label: '宏观脉搏反哺' },
  { id: 'l3', from: 'aurora_architect', to: 'alpha_writer', label: '量化信号交付' },
  { id: 'l4', from: 'alpha_writer', to: 'chart_renderer', label: '推特Thread配图' },
  { id: 'l5', from: 'chart_renderer', to: 'ai_cqo', label: '图文终端呈报' },
  { id: 'l6', from: 'alpha_writer', to: 'ai_cqo', label: '多语稿件终审' },
  { id: 'l7', from: 'attribution_quant', to: 'x_flight_director', label: '多维归因同步' }
];

export const PENDING_APPROVALS = [
  {
    id: 'app_1',
    clientId: 'c1',
    clientName: 'Spark Union Capital',
    type: 'spark_research',
    title: '【SPARK AI 投研发布】黄金 $2,682 与 比特币 $68.5k 宏观共振多维归因深度解析',
    platforms: ['X.com (@sparkone_global)', 'Telegram (#5 SPARK AI)', 'Binance Square'],
    duration: 'X Thread (4 Tweets) + TG 广播',
    ratio: '16:9 (TradingView) / 3:4 (Seedream)',
    estimatedRetention: '88.5%',
    predictedViews: '240k ~ 580k Impressions',
    videoEngineOverview: 'TradingView 暗黑 K 线 + Seedream 赛博美学海报 + AURORA 黄金策略解构',
    contentPreview: `⚡ [SPARK AI DAILY & MARKET INTELLIGENCE]
Macro Pulse & Quantitative Attribution

1. MACRO FORCES:
US 10Y Yields drop to 4.22%. DXY softening to 103.4.
Gold (XAU/USD) testing $2,682/oz while Bitcoin forms high-timeframe accumulation at $68,500.

2. MULTI-DIMENSIONAL ATTRIBUTION:
• Liquidity Injection: 42%
• Derivatives Flush: 28%
• De-Dollarization Reserve Demand: 30%

3. AURORA QUANT STRATEGY:
Maintaining 71% Long Momentum bias. Trailing stop-loss tightened to 1.6%.

#SparkUnion #SPARKAI #Bitcoin #QuantTrading #MacroPulse`,
    hashtags: ['#SparkUnion', '#SPARKAI', '#QuantTrading', '#MacroPulse', '#Bitcoin', '#Gold']
  }
];

export const LIVE_LOGS = [
  { time: '12:08:12', agent: 'TG_Topic_Bot', text: '【广播调度部】Telegram #5 SPARK AI 话题接入，18社区板块心跳监测正常。' },
  { time: '12:08:45', agent: 'Macro_Oracle', text: '【宏观投研部】捕获金价 $2,682/oz 突破信号，美债10Y走低，生成 SPARK AI DAILY。' },
  { time: '12:09:10', agent: 'Aurora_Core', text: '【量化策略部】解构 AURORA 黄金策略运行管线，多头置信度 71%，风控收紧。' },
  { time: '12:09:33', agent: 'Alpha_Writer', text: '【全球编译部】按国际权威英文排版生成 X.com 深度 Thread，极具专业深度。' },
  { time: '12:09:50', agent: 'Polyglot_11L', text: '【全球编译部】11国母语本地化译文编译完毕（中/日/韩/西/阿/俄等）。' },
  { time: '12:10:05', agent: 'Chart_Renderer', text: '【视听渲染部】TradingView 4K 暗黑清算图与 Seedream 科技海报直出。' },
  { time: '12:10:22', agent: 'AI_CQO', text: '【战略决策室】全量投研资料审定完毕，就绪在【SPARK AI 投研发布台】一键全网广播！' }
];
