import React from 'react';
import { X, Users, Clock, Flame, ArrowRight, CheckCircle2, AlertCircle, Sparkles, Building2 } from 'lucide-react';

export default function ClientQueueModal({ 
  isOpen, 
  onClose, 
  waitingClients, 
  activeClientId, 
  onActivateClient 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#0c1220] border border-yellow-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-gradient-to-r from-yellow-950/40 via-slate-900 to-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-bold text-white">顾客接洽部 • 客户服务等候大厅</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-yellow-950 text-yellow-400 border border-yellow-700/60 font-semibold">
                  {waitingClients.filter(c => c.status === 'waiting').length} 家排队等候中
                </span>
              </div>
              <p className="text-xs text-slate-400">查看当前排队签约客户，一键接入四大部门 AI 流水线</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#090e18]">
          {waitingClients.map((client) => {
            const isActive = client.id === activeClientId;
            return (
              <div 
                key={client.id}
                className={`p-4 rounded-xl border transition-all ${
                  isActive 
                    ? 'border-cyan-500/80 bg-cyan-950/20 ring-1 ring-cyan-500/40' 
                    : client.status === 'waiting'
                    ? 'border-yellow-500/30 bg-yellow-950/10 hover:border-yellow-500/60'
                    : 'border-slate-800 bg-slate-900/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  
                  {/* Left: Client Brand Info */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl shrink-0 shadow-md">
                      {client.avatar}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-bold text-white">{client.name}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                          {client.category}
                        </span>
                        {isActive ? (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-700 font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            当前工位生产中
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700 font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3 text-amber-400" />
                            {client.waitTime}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 mt-1">{client.brief}</p>

                      <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1 text-cyan-300">
                          <Sparkles className="w-3 h-3" />
                          {client.service}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span>优先级: <strong className="text-amber-400">{client.priority}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Action */}
                  <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                    {isActive ? (
                      <div className="flex items-center space-x-1.5 text-xs font-bold text-cyan-400 bg-cyan-950/60 px-3.5 py-2 rounded-xl border border-cyan-800">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span>已在四大部门制作</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          onActivateClient(client.id);
                          onClose();
                        }}
                        className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 text-xs font-bold shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <span>一键接入部门生产线</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="h-14 border-t border-slate-800 px-6 flex items-center justify-between bg-slate-900/60 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            <span>接洽顾问随时为新客户快速建立 Brand Vault 知识库</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium"
          >
            返回虚拟工位
          </button>
        </div>

      </div>
    </div>
  );
}
