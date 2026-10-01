import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RefreshCw, 
  TrendingUp, 
  ShieldAlert, 
  BookOpen, 
  Radio, 
  Globe, 
  Share2, 
  Check, 
  Sliders, 
  Zap, 
  BarChart3, 
  ArrowRight,
  Flame,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { SPARK_RESEARCH_PILLARS } from '../data/mockData';

export default function SparkResearchDeskModal({ isOpen, onClose, onBroadcastSuccess, onTriggerLog }) {
  if (!isOpen) return null;

  const [selectedPillarId, setSelectedPillarId] = useState('daily');
  const [selectedEngine, setSelectedEngine] = useState('AURORA (黄金策略)');
  const [selectedKnowledge, setSelectedKnowledge] = useState('#001 What is Quant Trading?');
  const [currentText, setCurrentText] = useState(() => {
    const daily = SPARK_RESEARCH_PILLARS.find(p => p.id === 'daily');
    return daily?.content || '';
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [broadcastChannel, setBroadcastChannel] = useState('telegram_topic_5');

  // Switch Pillar
  const handleSelectPillar = (pillar) => {
    setSelectedPillarId(pillar.id);
    setIsGenerating(true);
    
    onTriggerLog?.('Macro_Oracle', `【SPARK AI 投研中心】正在调取 [${pillar.title}] 核心知识库与实时链上/宏观行情...`);

    setTimeout(() => {
      setIsGenerating(false);
      if (pillar.id === 'hourly_auto') {
        const candidates = SPARK_RESEARCH_PILLARS.filter(p => p.id !== 'hourly_auto');
        const randomPick = candidates[Math.floor(Math.random() * candidates.length)];
        setCurrentText(randomPick.content || '');
      } else if (pillar.id === 'insight') {
        const randomQuote = pillar.quotes ? pillar.quotes[Math.floor(Math.random() * pillar.quotes.length)] : '';
        setCurrentText(`✨ [SPARK AI INSIGHT] On Compounding & Quantitative Edge\n\n${randomQuote}\n\nIn the hyper-financialized crypto landscape, edge doesn't come from predicting the future; it comes from having a mathematical protocol for managing every possible future.\n\n#CryptoPhilosophy #QuantitativeMindset #SparkUnion #AlphaTakeaway`);
      } else {
        setCurrentText(pillar.content || '');
      }
    }, 450);
  };

  // Trigger Send / Broadcast
  const handleBroadcast = (targetName) => {
    setIsSent(true);
    onTriggerLog?.('TG_Topic_Bot', `✈️ 投研内容已成功广播至 [${targetName}]！11国语言节点同步投递。`);
    onBroadcastSuccess?.(targetName);

    setTimeout(() => {
      setIsSent(false);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-5xl h-[88vh] max-h-[720px] bg-[#0c1220] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-amber-500 p-[1.5px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0c1220] rounded-[10px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  SPARK AI Research Desk
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">
                  Topic: 🤖 SPARK AI (#5)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                  @sparkone_global 联动
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Global Market Intelligence · AI Quant · Risk · Trends | Understand the market. Understand the data.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Grid */}
        <div className="flex-1 grid grid-cols-12 overflow-hidden">
          
          {/* Left Column: 6 核心投研栏目 (Cols 1-5) */}
          <div className="col-span-5 border-r border-slate-800/80 bg-slate-950/40 p-4 overflow-y-auto space-y-2.5 custom-scrollbar">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono font-bold mb-1">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Sliders className="w-3.5 h-3.5" />
                6 大核心投研栏目
              </span>
              <span className="text-[10px] text-slate-500">点击自动调取引擎生成</span>
            </div>

            {/* 1. 每小时自动随机抽选 */}
            <div 
              onClick={() => handleSelectPillar(SPARK_RESEARCH_PILLARS[0])}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                selectedPillarId === 'hourly_auto'
                  ? 'border-emerald-500/60 bg-emerald-950/30 shadow-lg shadow-emerald-900/20'
                  : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span className="flex items-center gap-1.5">
                  <span>🎲</span>
                  <span>每小时自动随机抽选</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono">
                  Hourly Auto
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mb-2">
                系统每整点自动从 6 大支柱中轮巡/加权随机抽取一条推送
              </p>
              <button className="w-full py-1.5 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/40 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition">
                <RefreshCw className="w-3 h-3 text-cyan-400 animate-spin-slow" />
                <span>立即随机抽取一条内容</span>
              </button>
            </div>

            {/* 2. SPARK AI DAILY */}
            <div 
              onClick={() => handleSelectPillar(SPARK_RESEARCH_PILLARS[1])}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                selectedPillarId === 'daily'
                  ? 'border-amber-500/60 bg-amber-950/30 shadow-lg shadow-amber-900/20'
                  : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>1. SPARK AI DAILY</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-mono">
                  每日必看
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mb-2">
                极简全球市场脉搏与宏观观点
              </p>
              <button className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition">
                <span>生成今日市场脉搏</span>
              </button>
            </div>

            {/* 3. MARKET INTELLIGENCE */}
            <div 
              onClick={() => handleSelectPillar(SPARK_RESEARCH_PILLARS[2])}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                selectedPillarId === 'market_intel'
                  ? 'border-cyan-500/60 bg-cyan-950/30 shadow-lg shadow-cyan-900/20'
                  : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>2. MARKET INTELLIGENCE</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">
                  多维归因
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mb-2">
                深度剖析“黄金/加密市场为什么这样走”
              </p>
              <button className="w-full py-1.5 rounded-lg bg-amber-950/40 hover:bg-amber-900/50 border border-amber-600/40 text-amber-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition">
                <span>生成多维归因分析</span>
              </button>
            </div>

            {/* 4. HOW SPARK AI THINKS */}
            <div 
              onClick={() => handleSelectPillar(SPARK_RESEARCH_PILLARS[3])}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                selectedPillarId === 'how_it_thinks'
                  ? 'border-purple-500/60 bg-purple-950/30 shadow-lg shadow-purple-900/20'
                  : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span className="flex items-center gap-1.5">
                  <span className="text-sm">🧠</span>
                  <span>3. HOW SPARK AI THINKS</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-mono">
                  5大引擎
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mb-2">
                解构核心引擎架构与运行管线
              </p>
              <div className="flex items-center space-x-1.5" onClick={e => e.stopPropagation()}>
                <select 
                  value={selectedEngine}
                  onChange={(e) => {
                    setSelectedEngine(e.target.value);
                    handleSelectPillar(SPARK_RESEARCH_PILLARS[3]);
                  }}
                  className="flex-1 bg-slate-900 border border-slate-700 text-white text-[11px] rounded-lg px-2 py-1.5 focus:outline-none focus:border-cyan-400"
                >
                  <option value="AURORA (黄金策略)">AURORA (黄金策略)</option>
                  <option value="PHOENIX (高频统计套利)">PHOENIX (高频统计套利)</option>
                  <option value="NEBULA (链上巨鲸异动)">NEBULA (链上巨鲸异动)</option>
                  <option value="CHRONOS (跨期波动率曲面)">CHRONOS (跨期波动率曲面)</option>
                </select>
                <button 
                  onClick={() => handleSelectPillar(SPARK_RESEARCH_PILLARS[3])}
                  className="px-2.5 py-1.5 bg-indigo-600/50 hover:bg-indigo-600 text-white text-xs font-bold rounded-lg transition"
                >
                  解构
                </button>
              </div>
            </div>

            {/* 5. AI RISK ALERT */}
            <div 
              onClick={() => handleSelectPillar(SPARK_RESEARCH_PILLARS[4])}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                selectedPillarId === 'risk_alert'
                  ? 'border-rose-500/60 bg-rose-950/30 shadow-lg shadow-rose-900/20'
                  : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span className="flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                  <span>4. AI RISK ALERT</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 font-mono">
                  突发风控
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mb-2">
                波动加剧时启动防御: Risk First
              </p>
              <button className="w-full py-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900/60 border border-rose-600/40 text-rose-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition">
                <span>生成突发风控警报</span>
              </button>
            </div>

            {/* 6. AI KNOWLEDGE */}
            <div 
              onClick={() => handleSelectPillar(SPARK_RESEARCH_PILLARS[5])}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                selectedPillarId === 'knowledge'
                  ? 'border-indigo-500/60 bg-indigo-950/30 shadow-lg shadow-indigo-900/20'
                  : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>5. AI KNOWLEDGE</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-mono">
                  #001-#008
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mb-2">
                单点打透的量化微课堂
              </p>
              <div className="flex items-center space-x-1.5" onClick={e => e.stopPropagation()}>
                <select 
                  value={selectedKnowledge}
                  onChange={(e) => {
                    setSelectedKnowledge(e.target.value);
                    handleSelectPillar(SPARK_RESEARCH_PILLARS[5]);
                  }}
                  className="flex-1 bg-slate-900 border border-slate-700 text-white text-[11px] rounded-lg px-2 py-1.5 focus:outline-none focus:border-cyan-400"
                >
                  <option value="#001 What is Quant Trading?">#001 What is Quant Trading?</option>
                  <option value="#002 The Kelly Criterion in Capital Allocation">#002 The Kelly Criterion</option>
                  <option value="#003 Order Book Imbalance & Liquidity Pools">#003 Order Book Imbalance</option>
                </select>
                <button 
                  onClick={() => handleSelectPillar(SPARK_RESEARCH_PILLARS[5])}
                  className="px-2.5 py-1.5 bg-emerald-600/50 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition"
                >
                  载入
                </button>
              </div>
            </div>

            {/* 7. SPARK AI INSIGHT */}
            <div 
              onClick={() => handleSelectPillar(SPARK_RESEARCH_PILLARS[6])}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                selectedPillarId === 'insight'
                  ? 'border-fuchsia-500/60 bg-fuchsia-950/30 shadow-lg shadow-fuchsia-900/20'
                  : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>6. SPARK AI INSIGHT</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-800 font-mono">
                  高传播金句
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mb-2">
                极具洞见的投资哲思，利于二次裂变
              </p>
              <button className="w-full py-1.5 rounded-lg bg-fuchsia-950/40 hover:bg-fuchsia-900/50 border border-fuchsia-600/40 text-fuchsia-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition">
                <span>换一条高传播观点</span>
              </button>
            </div>

          </div>

          {/* Right Column: 投研发布台 & 实时在线调整 (Cols 6-12) */}
          <div className="col-span-7 flex flex-col p-4 bg-slate-900/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-base">📝</span>
                <h3 className="text-sm font-bold text-white tracking-tight">SPARK AI 投研发布台</h3>
                <span className="text-[10px] text-slate-400">
                  (目标: <strong className="text-cyan-400 font-mono">🤖 SPARK AI</strong>)
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-400" />
                已自动按国际最高标准英文排版
              </span>
            </div>

            {/* Markdown Editor / Preview Box */}
            <div className="relative flex-1 rounded-xl border border-slate-800 bg-[#090d16] p-4 flex flex-col overflow-hidden shadow-inner">
              {isGenerating ? (
                <div className="absolute inset-0 bg-[#090d16]/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-2 z-10">
                  <div className="w-7 h-7 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></div>
                  <span className="text-xs font-mono text-cyan-300">
                    Claude 3.5 & GPT-4o 正在组织华尔街级英文研报...
                  </span>
                </div>
              ) : null}

              <textarea 
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
                placeholder="点击左侧任意栏目，系统将自动生成权威纯正的英文投研内容..."
                className="w-full flex-1 bg-transparent text-slate-200 font-mono text-xs leading-relaxed resize-none focus:outline-none custom-scrollbar"
              />

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-2">
                  <span>话题 Thread ID: <strong className="text-cyan-400">5</strong></span>
                  <span>•</span>
                  <span>字数: {currentText.length} 字符</span>
                </span>
                <span className="text-amber-400/90 text-[10px]">
                  发帖前可直接在线调整
                </span>
              </div>
            </div>

            {/* Bottom Broadcast Execution Bar */}
            <div className="mt-3.5 pt-2 flex items-center justify-between space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] text-slate-400 font-mono">广播通道:</span>
                <div className="flex items-center rounded-lg bg-slate-900 border border-slate-700/80 p-0.5 text-xs">
                  <button 
                    onClick={() => setBroadcastChannel('telegram_topic_5')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                      broadcastChannel === 'telegram_topic_5' 
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ✈️ Telegram (#5 SPARK AI)
                  </button>
                  <button 
                    onClick={() => setBroadcastChannel('x_global')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                      broadcastChannel === 'x_global' 
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    𝕏 X.com (@sparkone_global)
                  </button>
                  <button 
                    onClick={() => setBroadcastChannel('all_11_lang')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                      broadcastChannel === 'all_11_lang' 
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🌐 11国语言全球广播
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleBroadcast(
                    broadcastChannel === 'telegram_topic_5' 
                      ? 'Telegram #5 SPARK AI 话题' 
                      : broadcastChannel === 'x_global'
                      ? 'X.com (@sparkone_global)'
                      : '全球 11 国语言社区'
                  )}
                  className={`px-4 py-2 rounded-xl text-xs font-bold shadow-lg transition-all flex items-center space-x-2 active:scale-95 ${
                    isSent
                      ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                      : 'bg-gradient-to-r from-cyan-500 via-indigo-600 to-amber-500 hover:from-cyan-400 hover:to-amber-400 text-white shadow-cyan-500/20'
                  }`}
                >
                  {isSent ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>已成功广播至全球社区！</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>一键投递至目标通道</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
