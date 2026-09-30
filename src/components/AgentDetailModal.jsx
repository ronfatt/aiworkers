import React from 'react';
import { X, Bot, Cpu, Zap, Activity, MessageSquare, Terminal } from 'lucide-react';

export default function AgentDetailModal({ agent, onClose, onTestAgent }) {
  if (!agent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#0e1626] border border-slate-700/80 rounded-2xl shadow-2xl p-6 text-slate-100 space-y-4">
        
        {/* Top Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-2xl ${agent.avatarColor} border-2 ${agent.borderColor} flex items-center justify-center shadow-lg`}>
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-bold text-white">{agent.name}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {agent.role}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">工位分区: {agent.zone.toUpperCase()} ZONE</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status and Model Specs */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <div>
              <span className="text-[10px] text-slate-500 block">基础模型</span>
              <span className="font-semibold text-slate-200">{agent.model}</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <div>
              <span className="text-[10px] text-slate-500 block">累计 Token</span>
              <span className="font-semibold text-slate-200">{agent.tokenUsage}</span>
            </div>
          </div>
        </div>

        {/* Current Execution State */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono uppercase text-slate-400 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>当前执行任务</span>
          </label>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            {agent.currentTask}
          </div>
        </div>

        {/* Thought Bubble Content */}
        {agent.thought && (
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono uppercase text-slate-400 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>实时思维日志 (Thought Stream)</span>
            </label>
            <div className="p-3 bg-cyan-950/20 border border-cyan-500/30 rounded-xl text-xs text-cyan-200">
              {agent.thought}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 flex justify-end space-x-2">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition"
          >
            关闭
          </button>
          <button 
            onClick={() => {
              onTestAgent(agent.id);
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white shadow-lg shadow-cyan-600/30 transition flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>单独给该 Agent 下发指令</span>
          </button>
        </div>

      </div>
    </div>
  );
}
