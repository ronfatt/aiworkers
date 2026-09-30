import React from 'react';
import { 
  Sparkles, 
  Radio, 
  Layers, 
  Video, 
  CheckCircle2, 
  TrendingUp, 
  RefreshCw,
  Cpu,
  ChevronDown,
  BellRing
} from 'lucide-react';

export default function Header({ 
  clients, 
  selectedClientId, 
  onSelectClient, 
  onOpenApproval, 
  pendingCount,
  onOpenInsights,
  onOpenQueue,
  waitingCount = 0,
  onTriggerRun
}) {
  const currentClient = clients.find(c => c.id === selectedClientId) || clients[0];

  return (
    <header className="h-16 border-b border-slate-800/80 bg-[#0c1220]/90 backdrop-blur-md px-6 flex items-center justify-between z-30">
      {/* Left: Brand & Studio Title */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-[1.5px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0c1220] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base font-bold tracking-tight text-white">OmniFlow Studio</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                AI Agent Swarm
              </span>
            </div>
            <p className="text-xs text-slate-400">社媒矩阵实时工作室 • 60% 15s短视频 + 40% 图文闭环</p>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="h-6 w-[1px] bg-slate-800 hidden md:block"></div>

        {/* Client Selector Dropdown */}
        <div className="relative group hidden md:block">
          <label className="text-[10px] uppercase font-mono text-slate-500 block mb-0.5">当前聚焦客户</label>
          <div className="flex items-center space-x-2 bg-slate-900/90 border border-slate-700/60 rounded-lg px-3 py-1.5 cursor-pointer hover:border-cyan-500/50 transition-all">
            <span className="text-base">{currentClient.avatar}</span>
            <span className="text-xs font-semibold text-slate-200">{currentClient.name}</span>
            <span className="text-[10px] text-slate-400 font-mono">({currentClient.category})</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
            <select 
              value={selectedClientId} 
              onChange={(e) => onSelectClient(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            >
              {clients.map(c => (
                <option key={c.id} value={c.id} className="bg-slate-900 text-slate-100">
                  {c.avatar} {c.name} - {c.category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Center: Live Stats Banner */}
      <div className="hidden lg:flex items-center space-x-6 text-xs font-mono">
        <div className="flex items-center space-x-2 text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800/60">
          <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Gateway: <strong className="text-emerald-400 font-medium">WebSocket 实时已连接</strong></span>
        </div>
        <div className="flex items-center space-x-2 text-slate-400">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          <span>今日 Token: <strong className="text-slate-200">183.4k</strong></span>
        </div>
        <div className="flex items-center space-x-2 text-slate-400">
          <Video className="w-3.5 h-3.5 text-cyan-400" />
          <span>15s 视频配比: <strong className="text-cyan-400">60%</strong></span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-3">
        {/* Client Waiting Queue Button */}
        <button 
          onClick={onOpenQueue}
          className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-yellow-300 bg-yellow-950/40 hover:bg-yellow-900/60 border border-yellow-500/40 transition-all hover:scale-105 active:scale-95 shadow"
        >
          <BellRing className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span className="hidden sm:inline">顾客等候厅</span>
          <span className="w-4 h-4 rounded-full bg-yellow-500 text-slate-950 text-[10px] font-extrabold flex items-center justify-center">
            {waitingCount}
          </span>
        </button>

        <button 
          onClick={onOpenInsights}
          className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/50 transition-all hover:text-white"
        >
          <TrendingUp className="w-4 h-4 text-teal-400" />
          <span className="hidden sm:inline">策略与数据复盘</span>
        </button>

        <button 
          onClick={onTriggerRun}
          title="触发一次早间自动巡检"
          className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 border border-slate-800 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
        </button>

        {/* Human-in-the-Loop Review Deck Button */}
        <button 
          onClick={onOpenApproval}
          className="relative flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>内容审核工作台</span>
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
