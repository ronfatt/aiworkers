import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Share2, 
  Clock, 
  Flame, 
  Film, 
  Image as ImageIcon,
  MessageCircle,
  TrendingUp,
  Volume2,
  Send,
  Eye,
  Check
} from 'lucide-react';

export default function ApprovalModal({ 
  isOpen, 
  onClose, 
  approvalItems, 
  selectedItemId,
  onApprovePost 
}) {
  if (!isOpen) return null;

  const [activeItem, setActiveItem] = useState(
    approvalItems.find(i => i.id === selectedItemId) || approvalItems[0]
  );

  // 15s Video Player states
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // 0 to 15 seconds
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [approvedStatus, setApprovedStatus] = useState({});
  const [musicSource, setMusicSource] = useState('suno'); // 'suno' | 'flow_music'

  useEffect(() => {
    let timer;
    if (isPlaying && activeItem.type === '15s_video') {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 14.8) {
            setIsPlaying(false);
            return 14.8;
          }
          return Number((prev + 0.1).toFixed(1));
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeItem]);

  // Determine current active script beat
  const getCurrentBeat = () => {
    if (currentTime < 3.0) return activeItem.scriptStructure?.[0];
    if (currentTime < 10.0) return activeItem.scriptStructure?.[1];
    return activeItem.scriptStructure?.[2];
  };

  const handleApprove = (id) => {
    setApprovedStatus(prev => ({ ...prev, [id]: true }));
    onApprovePost(id);
  };

  const currentBeat = activeItem.type === '15s_video' ? getCurrentBeat() : null;
  const isApproved = approvedStatus[activeItem.id];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[88vh] bg-[#0c1220] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="h-14 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <span>内容审核工作台 (Human-in-the-Loop)</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  人类最后拍板把关
                </span>
              </h2>
            </div>
          </div>

          {/* Switch between Pending Items */}
          <div className="flex items-center space-x-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
            {approvalItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setCurrentTime(0);
                  setIsPlaying(false);
                }}
                className={`px-3 py-1 rounded-md text-xs font-medium flex items-center space-x-1.5 transition-all ${
                  activeItem.id === item.id 
                    ? 'bg-cyan-600 text-white shadow' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.type === '15s_video' ? (
                  <Film className="w-3.5 h-3.5 text-cyan-300" />
                ) : (
                  <ImageIcon className="w-3.5 h-3.5 text-pink-300" />
                )}
                <span>{item.clientName}</span>
                {approvedStatus[item.id] && (
                  <Check className="w-3 h-3 text-emerald-300 ml-1" />
                )}
              </button>
            ))}
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Left Phone Mockup Preview, Right Script & Insight breakdown */}
        <div className="flex-1 grid grid-cols-12 overflow-hidden bg-[#090e18]">
          
          {/* Left Column: Visual Simulator (9:16 vertical player or Carousel viewer) */}
          <div className="col-span-5 p-6 border-r border-slate-800/80 flex flex-col items-center justify-center bg-slate-950/40 relative">
            
            {activeItem.type === '15s_video' ? (
              /* 9:16 Smartphone Mockup */
              <div className="relative w-[270px] h-[480px] bg-slate-900 rounded-[32px] border-[5px] border-slate-700/80 shadow-2xl overflow-hidden flex flex-col justify-between">
                {/* Simulated Screen Content */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                  style={{ backgroundImage: `url(${activeItem.videoMockUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                </div>

                {/* Top Phone UI (TikTok / Reels style) */}
                <div className="relative z-10 px-4 pt-3 flex justify-between items-center text-[10px] text-white/80 font-mono">
                  <span className="bg-rose-500/80 px-1.5 py-0.5 rounded text-[9px] font-bold">15s REELS / TIKTOK</span>
                  
                  {/* Interactive Music Selector (Suno vs Google Flow Music) */}
                  <button 
                    onClick={() => setMusicSource(prev => prev === 'suno' ? 'flow_music' : 'suno')}
                    title="点击切换 BGM 引擎: Suno 卡点 vs Flow Music 氛围"
                    className="flex items-center space-x-1 bg-black/60 hover:bg-black/90 px-2 py-0.5 rounded-full backdrop-blur border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Volume2 className={`w-3 h-3 ${musicSource === 'suno' ? 'text-fuchsia-400 animate-pulse' : 'text-sky-400'}`} />
                    <span className="font-sans text-[10px]">
                      {musicSource === 'suno' ? '🎵 Suno: 强卡点神曲' : '🎼 Flow: 氛围轻音'}
                    </span>
                  </button>
                </div>

                {/* Center Dynamic Subtitles Overlay based on current playback beat */}
                <div className="relative z-10 px-4 text-center my-auto">
                  {currentBeat && (
                    <div className="bg-black/70 backdrop-blur-md border border-white/20 p-2.5 rounded-xl shadow-2xl animate-in zoom-in-95 duration-150">
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500 text-black font-extrabold mb-1 inline-block">
                        {currentBeat.phase}
                      </span>
                      <p className="text-sm font-extrabold text-amber-300 drop-shadow-md leading-snug tracking-wide">
                        "{currentBeat.spokenText}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Social Action Overlay */}
                <div className="relative z-10 p-3 flex flex-col space-y-2">
                  <div className="text-[11px] text-white">
                    <p className="font-bold text-cyan-300">@{activeItem.clientName}</p>
                    <p className="text-[10px] text-slate-200 line-clamp-2 mt-0.5">{activeItem.copyCaption}</p>
                  </div>

                  {/* 15s Timeline Bar (3-beat color coded) */}
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden flex relative">
                      {/* Beat 1 (0-3s Hook): Red/Rose */}
                      <div className="w-[20%] h-full bg-rose-500 border-r border-black" title="0~3s Hook" />
                      {/* Beat 2 (3-10s Core): Cyan */}
                      <div className="w-[47%] h-full bg-cyan-400 border-r border-black" title="3~10s Demo" />
                      {/* Beat 3 (10-15s CTA): Emerald */}
                      <div className="w-[33%] h-full bg-emerald-400" title="10~15s CTA" />

                      {/* Current playhead indicator */}
                      <div 
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg shadow-white"
                        style={{ left: `${(currentTime / 14.8) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-slate-400">
                      <span>0s (Hook)</span>
                      <span>3s</span>
                      <span>10s</span>
                      <span>14.8s</span>
                    </div>
                  </div>

                  {/* Play / Pause Controls */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 active:scale-95 transition"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                      </button>
                      <button 
                        onClick={() => { setCurrentTime(0); setIsPlaying(true); }}
                        className="p-1 rounded text-slate-400 hover:text-white"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-[10px] font-mono text-slate-300 font-bold">{currentTime}s / 14.8s</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Carousel Simulator (小红书/Instagram) */
              <div className="w-[290px] h-[460px] bg-slate-900 rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col justify-between">
                <div 
                  className="relative flex-1 bg-cover bg-center p-4 flex flex-col justify-between"
                  style={{ backgroundImage: `url(${activeItem.slides[activeSlideIndex].imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />

                  {/* RedBook / IG Mockup Header */}
                  <div className="relative z-10 flex justify-between items-center">
                    <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      小红书 3:4 爆款格式
                    </span>
                    <span className="bg-black/60 text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
                      {activeSlideIndex + 1} / {activeItem.slides.length}
                    </span>
                  </div>

                  {/* Simulated High-Impact Typography on Cover */}
                  <div className="relative z-10 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/20">
                    <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                      {activeItem.slides[activeSlideIndex].tag}
                    </span>
                    <h4 className="text-base font-extrabold text-white leading-tight">
                      {activeItem.slides[activeSlideIndex].title}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                      {activeItem.slides[activeSlideIndex].sub}
                    </p>
                  </div>
                </div>

                {/* Slide Thumbnail Strip */}
                <div className="p-2.5 bg-slate-950 flex items-center justify-center space-x-2 border-t border-slate-800">
                  {activeItem.slides.map((s, idx) => (
                    <button
                      key={s.index}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`w-9 h-12 rounded border overflow-hidden transition-all ${
                        activeSlideIndex === idx 
                          ? 'border-cyan-400 ring-2 ring-cyan-500/40 scale-105' 
                          : 'border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={s.imageUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Detailed Breakdown, Copywriting, Model Prompts, and One-Click Approval */}
          <div className="col-span-7 p-6 overflow-y-auto space-y-5">
            
            {/* Header info */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  {activeItem.type === '15s_video' ? '60% 份额 • 15s 短视频' : '40% 份额 • 深度干货图文'}
                </span>
                <span className="text-xs text-slate-400 font-mono">预估曝光: {activeItem.predictedViews}</span>
                {activeItem.estimatedRetention && (
                  <span className="text-xs text-emerald-400 font-mono">
                    预期完播率: {activeItem.estimatedRetention}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white">{activeItem.title}</h3>
            </div>

            {/* Target Distribution Channels */}
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-slate-400 font-mono">目标发布渠道:</span>
              {activeItem.platforms.map(p => (
                <span key={p} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-medium">
                  {p}
                </span>
              ))}
            </div>

            {/* Script Breakdown if Video */}
            {activeItem.type === '15s_video' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5" />
                    <span>15s 黄金分镜拆解 (Google Flow + Kling + Seedance 2.5)</span>
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">各镜头专模专精</span>
                </div>

                <div className="space-y-2.5">
                  {activeItem.scriptStructure.map((sc, i) => (
                    <div 
                      key={i}
                      className={`p-3.5 rounded-xl border text-xs transition-all ${
                        currentBeat?.phase === sc.phase 
                          ? 'border-cyan-500/80 bg-cyan-950/20 ring-1 ring-cyan-500/30' 
                          : 'border-slate-800 bg-slate-900/50'
                      }`}
                    >
                      <div className="flex justify-between items-center font-mono text-[10px] text-slate-400 mb-1.5">
                        <strong className="text-cyan-300 text-xs">{sc.phase}</strong>
                        <div className="flex items-center space-x-2">
                          {sc.engineTag && (
                            <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-700/60 font-mono text-[9px] font-bold">
                              {sc.engineTag}
                            </span>
                          )}
                          <span>时长: {sc.durationSec}s</span>
                        </div>
                      </div>
                      <p className="font-semibold text-slate-100">口播: "{sc.spokenText}"</p>
                      <p className="text-[11px] text-slate-400 mt-1">分镜视觉 Prompt: {sc.visualPrompt}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Copywriting & Caption Section */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-indigo-400" />
                <span>社媒正文与热门 Hashtag</span>
              </h4>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                {activeItem.copyCaption}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeItem.hashtags.map(tag => (
                  <span key={tag} className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar: Approve or Regenerate with specific models */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => alert('已调用 Kling AI：正在重新增强 0~3s 面部素颜反差与美感光影质感...')}
                  className="px-2.5 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900 text-cyan-300 text-[11px] font-medium border border-cyan-800 transition flex items-center gap-1"
                >
                  <span>✨ 调 Kling 强化美感</span>
                </button>
                <button 
                  onClick={() => alert('已调用 Higgsfield Seedance 2.5：正在重新演算滴管挤出与掌心爆破微距运动轨迹...')}
                  className="px-2.5 py-1.5 rounded-lg bg-amber-950/60 hover:bg-amber-900 text-amber-300 text-[11px] font-medium border border-amber-800 transition flex items-center gap-1"
                >
                  <span>🎯 调 Seedance 优化动作</span>
                </button>
                <button 
                  onClick={() => alert('已调用 Suno v3.5：正在基于 15s 情绪转折曲线重新生成第 3.0s 精准 Beat Drop 伴奏...')}
                  className="px-2.5 py-1.5 rounded-lg bg-fuchsia-950/60 hover:bg-fuchsia-900 text-fuchsia-300 text-[11px] font-medium border border-fuchsia-800 transition flex items-center gap-1"
                >
                  <span>🎵 调 Suno 重做卡点</span>
                </button>
                <button 
                  onClick={() => alert('已调用 Google Flow：正在全局调度控速重刷完整 15s 渲染管线...')}
                  className="px-2.5 py-1.5 rounded-lg bg-sky-950/60 hover:bg-sky-900 text-sky-300 text-[11px] font-medium border border-sky-800 transition flex items-center gap-1"
                >
                  <span>🌊 调 Google Flow 全片重刷</span>
                </button>
              </div>

              <button 
                onClick={() => handleApprove(activeItem.id)}
                disabled={isApproved}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs shadow-xl transition-all ${
                  isApproved 
                    ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 cursor-default' 
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 hover:scale-105 active:scale-95 shadow-emerald-500/20'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isApproved ? '已审批排期！等待自动推送' : '一键过审并定时自动发布'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
