import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Send, 
  Share2, 
  TrendingUp, 
  Globe, 
  Sparkles, 
  Repeat2, 
  Heart, 
  Bookmark, 
  MessageSquare, 
  Bot, 
  ExternalLink,
  ShieldCheck,
  Check,
  Film,
  Play,
  Pause
} from 'lucide-react';

export default function ApprovalModal({ 
  isOpen, 
  onClose, 
  approvalItems = [], 
  selectedItemId,
  onApprovePost 
}) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('x_com'); // 'x_com' | 'telegram' | 'video_15s'
  const [selectedLang, setSelectedLang] = useState('EN');
  const [isApproved, setIsApproved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  const languages = ['EN (English)', '中文 (Chinese)', '日本語 (Japanese)', '한국어 (Korean)', 'Español', 'العربية (Arabic)', 'Русский'];

  const handleApprove = () => {
    setIsApproved(true);
    onApprovePost?.(selectedItemId || 'app_1');
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-5xl h-[88vh] max-h-[740px] bg-[#0c1220] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="h-14 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-900/70">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold">
              ⚡
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Spark Union Capital 终审发布工作台</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-mono">
                  Human-in-the-Loop 终审把关
                </span>
              </h2>
            </div>
          </div>

          {/* Platform Tab Switcher */}
          <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('x_com')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'x_com'
                  ? 'bg-slate-800 text-white border border-slate-700 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="font-bold">𝕏</span>
              <span>X.com Thread 预览</span>
            </button>
            <button
              onClick={() => setActiveTab('telegram')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'telegram'
                  ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Send className="w-3.5 h-3.5 text-cyan-400" />
              <span>Telegram 18区看板</span>
            </button>
            <button
              onClick={() => setActiveTab('video_15s')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'video_15s'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5 text-amber-400" />
              <span>15s 金融动态成片</span>
            </button>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="flex-1 grid grid-cols-12 overflow-hidden">
          
          {/* Left Preview Pane (Cols 1-7) */}
          <div className="col-span-7 border-r border-slate-800/80 bg-slate-950/60 p-6 flex flex-col items-center justify-center overflow-y-auto custom-scrollbar">
            
            {/* VIEW 1: X.com Thread Simulator */}
            {activeTab === 'x_com' && (
              <div className="w-full max-w-lg bg-black border border-slate-800 rounded-2xl p-4 text-white shadow-2xl font-sans">
                {/* User Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-cyan-500 to-indigo-600 p-[1.5px] flex items-center justify-center">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-bold text-amber-400 text-sm">
                        ⚡
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-bold text-sm text-white">Spark Union Capital</span>
                        <span className="text-amber-400 text-xs" title="Verified Gold Organization">🟡</span>
                      </div>
                      <span className="text-slate-500 text-xs">@sparkone_global · 1/4 Thread</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-white text-black font-bold text-xs rounded-full hover:bg-slate-200">
                    Follow
                  </button>
                </div>

                {/* Tweet Body */}
                <p className="text-xs text-slate-200 leading-relaxed mb-3 font-mono">
                  ⚡ <strong className="text-cyan-400">[SPARK AI DAILY]</strong> Global Macro Pulse & Quantitative Attribution.<br/><br/>
                  1. Macro: Gold (XAU/USD) hits $2,682/oz while US 10Y yields ease to 4.22%.<br/>
                  2. Crypto: Bitcoin consolidates at $68,500 amid +$315M net ETF inflows.<br/>
                  3. AURORA Engine: 71% Long Momentum confirmed with tightened 1.6% trailing stops.<br/><br/>
                  Deep attribution breakdown below 🧵👇
                </p>

                {/* Visual Chart Card */}
                <div className="rounded-xl border border-slate-800 bg-[#090d16] overflow-hidden mb-3">
                  <div className="p-2 border-b border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="text-cyan-400 font-bold">TradingView 4K • XAU/USD vs BTC Multi-Correlation</span>
                    <span className="text-emerald-400 font-semibold">+1.8% QoQ Liquidity Surge</span>
                  </div>
                  <div className="h-44 bg-gradient-to-br from-slate-900 via-[#0c1626] to-slate-950 p-3 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                    <div className="flex items-center justify-between text-xs font-mono z-10">
                      <div>
                        <span className="text-slate-400 text-[10px]">AURORA QUANT SIGNAL</span>
                        <div className="text-sm font-bold text-emerald-400 font-mono">LONG BIAS 71.4% (Kelly 0.35)</div>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 text-[10px]">CURRENT RESISTANCE</span>
                        <div className="text-sm font-bold text-amber-400 font-mono">$2,710.00</div>
                      </div>
                    </div>
                    {/* Simulated Neon Chart Line */}
                    <div className="my-auto h-20 w-full flex items-end space-x-1.5 pt-4">
                      {[35, 42, 38, 55, 60, 52, 70, 65, 82, 88, 79, 95, 92, 100].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                          <div 
                            className="w-full rounded-t bg-gradient-to-t from-cyan-600/30 to-cyan-400 transition-all"
                            style={{ height: `${val}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 z-10">
                      <span>00:00 UTC</span>
                      <span className="text-cyan-300">Target Alpha Zone</span>
                      <span>24:00 UTC</span>
                    </div>
                  </div>
                </div>

                {/* Tweet Metrics */}
                <div className="flex items-center justify-between text-slate-500 text-xs pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1.5 hover:text-cyan-400 cursor-pointer">
                    <MessageSquare className="w-3.5 h-3.5" /> 148
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-emerald-400 cursor-pointer">
                    <Repeat2 className="w-3.5 h-3.5" /> 612
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-rose-400 cursor-pointer">
                    <Heart className="w-3.5 h-3.5" /> 2,480
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-cyan-400 cursor-pointer">
                    <Bookmark className="w-3.5 h-3.5" /> 420
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-cyan-400 cursor-pointer">
                    <Share2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}

            {/* VIEW 2: Telegram Simulator */}
            {activeTab === 'telegram' && (
              <div className="w-full max-w-md bg-[#17212b] border border-cyan-500/30 rounded-2xl p-4 text-white shadow-2xl font-sans">
                {/* TG Channel Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#242f3d] mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-full bg-cyan-600 flex items-center justify-center font-bold text-white text-sm">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white flex items-center gap-1">
                        <span>Spark Union Capital • Official</span>
                        <ShieldCheck className="w-3 h-3 text-cyan-400" />
                      </h4>
                      <p className="text-[10px] text-slate-400 font-mono">Topic: 🤖 SPARK AI (#5) • 42,500 members</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-300 font-mono">
                    11-Lang Broadcast
                  </span>
                </div>

                {/* TG Message Bubble */}
                <div className="p-3.5 rounded-xl bg-[#202b36] border border-[#2b3a4a] text-xs text-slate-200 leading-relaxed mb-3 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-cyan-400 font-bold font-mono">
                    <span>🤖 SPARK AI BOT [RESEARCH DISPATCH]</span>
                    <span className="text-slate-400">12:10 PM</span>
                  </div>

                  <p className="font-mono text-[11px] leading-relaxed">
                    ⚡ <strong>[SPARK AI DAILY & MARKET INTELLIGENCE]</strong><br/><br/>
                    <strong>1. GLOBAL MACRO:</strong><br/>
                    US 10Y Yields cooling to 4.22%. Gold ($2,682) & Bitcoin ($68.5k) sustain co-breakout.<br/><br/>
                    <strong>2. ATTRIBUTION BREAKDOWN:</strong><br/>
                    • Liquidity Surplus: 42%<br/>
                    • Derivatives Flush: 28%<br/>
                    • De-Dollarization Reserve: 30%<br/><br/>
                    <strong>3. AURORA QUANT ENGINE:</strong><br/>
                    71% Long Momentum active. Trailing stop tightened to 1.6%.
                  </p>

                  {/* Inline Action Buttons */}
                  <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-[#2b3a4a]">
                    <button className="py-1.5 px-2 bg-[#2b3a4a] hover:bg-[#344659] text-[10px] font-semibold rounded text-cyan-300 flex items-center justify-center gap-1 transition">
                      <BarChart3 className="w-3 h-3" />
                      <span>查看 TradingView 图表</span>
                    </button>
                    <button className="py-1.5 px-2 bg-[#2b3a4a] hover:bg-[#344659] text-[10px] font-semibold rounded text-amber-300 flex items-center justify-center gap-1 transition">
                      <Zap className="w-3 h-3" />
                      <span>AURORA 引擎读数</span>
                    </button>
                  </div>
                </div>

                <div className="text-center text-[10px] text-slate-400 font-mono">
                  ✈️ 已同步至 18 个 Telegram 主题区与 11 国语言专属频道
                </div>
              </div>
            )}

            {/* VIEW 3: 15s Video Simulator */}
            {activeTab === 'video_15s' && (
              <div className="relative w-64 h-[420px] rounded-2xl bg-black border-2 border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col justify-between p-3.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 z-10">
                  <span className="px-1.5 py-0.5 rounded bg-black/60 border border-cyan-500/30">9:16 Financial Reel</span>
                  <span>14.8s • 4K</span>
                </div>

                {/* Simulated Center Video Graphic */}
                <div className="my-auto text-center space-y-2 z-10">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 mx-auto flex items-center justify-center shadow-lg shadow-cyan-500/30 animate-pulse">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h4 className="text-xs font-bold text-white font-mono">AURORA QUANT ENGINE</h4>
                  <p className="text-[10px] text-cyan-300 font-mono">GOLD & BTC MACRO BREAKOUT</p>
                </div>

                {/* Bottom Video Controls */}
                <div className="z-10 space-y-1.5">
                  <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-3/4 animate-pulse" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Google Flow 控速</span>
                    <span className="text-amber-400">Suno 3.0s Beat</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Audit & Execution Panel (Cols 8-12) */}
          <div className="col-span-5 p-6 flex flex-col justify-between bg-slate-900/30">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-bold uppercase">
                  Audit & Dispatch Checklist
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  Spark Union Capital 国际投研宣发排期
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  该内容由宏观投研部与量化策略部自动编译，符合最高合规与华尔街机构传播标准。
                </p>
              </div>

              {/* Multi-language Dispatch Selector */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold mb-2">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>全球 11 国语言本地化广播状态</span>
                  </span>
                  <span className="text-emerald-400 text-[10px] font-mono">全部就绪</span>
                </div>
                <div className="grid grid-cols-2 gap-1 text-[10px] font-mono text-slate-400">
                  <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">🇬🇧 English (Primary)</div>
                  <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">🇨🇳 中文普通话</div>
                  <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">🇯🇵 日本語</div>
                  <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">🇰🇷 한국어</div>
                  <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">🇪🇸 Español</div>
                  <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">🇦🇪 العربية</div>
                </div>
              </div>

              {/* Multi-Channel Distribution Target */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span className="text-sm">𝕏</span>
                    <span>X.com (@sparkone_global)</span>
                  </span>
                  <span className="text-[10px] text-cyan-400 font-mono font-bold">4-Tweet Thread</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Telegram 18区超级社群 (#5 SPARK AI)</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">全网广播</span>
                </div>
              </div>
            </div>

            {/* Bottom Approval Action */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
              <button
                onClick={handleApprove}
                disabled={isApproved}
                className={`w-full py-3 rounded-xl text-xs font-bold shadow-xl transition-all flex items-center justify-center space-x-2 active:scale-95 ${
                  isApproved
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-cyan-500 via-indigo-600 to-amber-500 hover:from-cyan-400 hover:to-amber-400 text-white shadow-cyan-500/25'
                }`}
              >
                {isApproved ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>总监已授权！Telegram & X.com 全球排期广播已启动</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>总监一键拍板授权发布 (Approve & Broadcast)</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-semibold transition"
              >
                返回投研控制台调整
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
