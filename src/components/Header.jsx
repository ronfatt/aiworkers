import React from 'react';
import { 
  Sparkles, 
  Radio, 
  Layers, 
  Send, 
  CheckCircle2, 
  TrendingUp, 
  RefreshCw,
  Cpu,
  ChevronDown,
  Globe,
  SlidersHorizontal,
  Bot
} from 'lucide-react';

export default function Header({ 
  clients, 
  selectedClientId, 
  onSelectClient, 
  onOpenApproval, 
  pendingCount,
  onOpenInsights,
  onOpenResearchDesk,
  onTriggerRun
}) {
  const currentClient = clients.find(c => c.id === selectedClientId) || clients[0];

  return (
    <header className="h-16 border-b border-slate-800/80 bg-[#080d19]/95 backdrop-blur-md px-5 flex items-center justify-between z-30">
      {/* Left: Brand & Studio Title */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-cyan-500 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
                <span>SPARK ONE</span>
                <span className="text-slate-400 font-normal text-xs">社区运营超级控制台</span>
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                SPARK AI Swarm
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              专为 <span className="text-amber-300 font-semibold">Spark Union Capital</span> 打造 • 𝕏 (@sparkone_global) + ✈️ Telegram (18区 / 11国语言)
            </p>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="h-6 w-[1px] bg-slate-800 hidden md:block"></div>

        {/* Live Channel Badges */}
        <div className="hidden xl:flex items-center space-x-2">
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-sky-950/60 border border-sky-800/60 text-sky-300 flex items-center gap-1">
            <Send className="w-3 h-3 text-sky-400" />
            <span>TG: #5 SPARK AI (18区)</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 flex items-center gap-1">
            <strong className="text-white">𝕏</strong>
            <span>@sparkone_global</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 flex items-center gap-1">
            <Globe className="w-3 h-3 text-emerald-400" />
            <span>11国语言广播</span>
          </span>
        </div>
      </div>

      {/* Center: Live Stats Banner */}
      <div className="hidden lg:flex items-center space-x-5 text-xs font-mono">
        <div className="flex items-center space-x-2 text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800/60">
          <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>TG Topic Bot: <strong className="text-emerald-400 font-medium">心跳正常 (18/18)</strong></span>
        </div>
        <div className="flex items-center space-x-2 text-slate-400">
          <Cpu className="w-3.5 h-3.5 text-amber-400" />
          <span>今日投研 Token: <strong className="text-amber-200">248.6k</strong></span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-3">
        {/* Core Pillar: Research Desk Button */}
        <button 
          onClick={onOpenResearchDesk}
          className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-amber-200 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 hover:from-amber-500/30 hover:to-yellow-500/30 border border-amber-500/50 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/10"
        >
          <Bot className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>SPARK AI 投研发布中心</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
            6大支柱
          </span>
        </button>

        <button 
          onClick={onOpenInsights}
          className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/50 transition-all hover:text-white"
        >
          <TrendingUp className="w-4 h-4 text-cyan-400" />
          <span className="hidden sm:inline">传播与风控复盘</span>
        </button>

        <button 
          onClick={onTriggerRun}
          title="触发 5 大量化引擎与投研巡检"
          className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 border border-slate-800 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
        </button>

        {/* Telegram & X Approval Modal */}
        <button 
          onClick={onOpenApproval}
          className="relative flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-amber-600 hover:from-cyan-500 hover:to-amber-500 shadow-lg shadow-cyan-600/30 transition-all active:scale-95"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>待审核成稿 (𝕏 + TG)</span>
          {pendingCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center animate-bounce">
              {pendingCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
