import React, { useState, useEffect } from 'react';
import { Terminal, Activity } from 'lucide-react';

export default function EventTicker({ logs }) {
  const [currentLogs, setCurrentLogs] = useState(logs);

  return (
    <div className="h-10 bg-[#090d16] border-t border-slate-800/80 px-6 flex items-center justify-between text-xs font-mono text-slate-400 select-none">
      <div className="flex items-center space-x-3 overflow-hidden">
        <div className="flex items-center space-x-1.5 text-cyan-400 font-semibold shrink-0">
          <Terminal className="w-3.5 h-3.5" />
          <span>LIVE EVENTS:</span>
        </div>
        <div className="truncate text-slate-300">
          <span className="text-slate-500 mr-2">[{currentLogs[currentLogs.length - 1]?.time}]</span>
          <span className="text-cyan-300 font-semibold mr-1.5">@{currentLogs[currentLogs.length - 1]?.agent}:</span>
          <span>{currentLogs[currentLogs.length - 1]?.text}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 shrink-0 text-[11px] text-slate-500 hidden sm:flex">
        <span>集群算力: 8 Nodes Online</span>
        <span className="flex items-center gap-1 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          All Agents Active
        </span>
      </div>
    </div>
  );
}
