import React, { useState } from 'react';
import { 
  X, 
  TrendingUp, 
  Flame, 
  Eye, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  SlidersHorizontal 
} from 'lucide-react';

export default function InsightsDrawer({ isOpen, onClose, onApplyStrategy }) {
  if (!isOpen) return null;

  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    onApplyStrategy();
    setTimeout(() => setApplied(false), 2500);
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0c1220] border-l border-slate-800 shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
      
      {/* Drawer Top */}
      <div className="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-900/50">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/30">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">全网数据洞察与策略调优</h3>
            <p className="text-[10px] text-slate-400 font-mono">Insight Oracle 自动归因引擎</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-slate-300">
        
        {/* 15s Video Retention Breakdown */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-rose-500" />
              <span>昨日 15s 短视频留存衰减曲线</span>
            </span>
            <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              平均完播率 46.8%
            </span>
          </div>

          {/* Retention Visual Bars */}
          <div className="space-y-2 pt-2">
            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>0~3s 黄金 Hook (防滑走率)</span>
                <strong className="text-emerald-400">82.4%</strong>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full" style={{ width: '82.4%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>3~10s 核心演示 (价值留存)</span>
                <strong className="text-cyan-400">63.1%</strong>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full" style={{ width: '63.1%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>10~15s CTA (互动/转化率)</span>
                <strong className="text-indigo-400">46.8%</strong>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '46.8%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 40% Image vs 60% Video Conversion Metric */}
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
            <span className="text-[10px] text-slate-400 block mb-1">15s 短视频互动比</span>
            <span className="text-lg font-bold text-cyan-400 font-mono">7.8%</span>
            <span className="text-[10px] text-emerald-400 block mt-0.5">↑ 较上周 +1.4%</span>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
            <span className="text-[10px] text-slate-400 block mb-1">40% 小红书图文点击率</span>
            <span className="text-lg font-bold text-pink-400 font-mono">9.2%</span>
            <span className="text-[10px] text-emerald-400 block mt-0.5">↑ 大字封面生效</span>
          </div>
        </div>

        {/* AI Automated Strategy Directives for Tomorrow */}
        <div className="space-y-3">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-white uppercase font-mono tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>AI 生成的《明日 Post 策略微调指令》</span>
          </div>

          <div className="p-3.5 bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-500/30 rounded-xl space-y-2.5">
            <div className="flex items-start space-x-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                1
              </span>
              <p className="text-xs text-slate-200">
                <strong>短视频前 2 秒加剧冲突感</strong>：昨日陈述句开头完播率比疑问句低 14%，明天所有 15s 脚本强制首句使用<strong>“反常识提问 / 停下警告”</strong>。
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                2
              </span>
              <p className="text-xs text-slate-200">
                <strong>小红书封面强化对比标签</strong>：带有“劝退/避坑”字眼的笔记点击率高出常态 2.2 倍，视觉工位将自动生成黑黄高对比警示框。
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                3
              </span>
              <p className="text-xs text-slate-200">
                <strong>TikTok 最佳发布时窗更新</strong>：美国东部时间 18:30 (北京时间次日 6:30) 流量池最活跃，已自动更新调度器定时。
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Drawer Bottom CTA */}
      <div className="p-4 border-t border-slate-800 bg-slate-900/80">
        <button
          onClick={handleApply}
          className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all ${
            applied 
              ? 'bg-emerald-600 text-white' 
              : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30'
          }`}
        >
          {applied ? (
            <>
              <CheckCircle className="w-4 h-4 text-white" />
              <span>已注入明日脚本与视觉工位！</span>
            </>
          ) : (
            <>
              <SlidersHorizontal className="w-4 h-4 text-white" />
              <span>一键将调优策略注入明日 Agent 提示词</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
