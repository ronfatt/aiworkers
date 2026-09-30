import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  Coffee, 
  Users, 
  MessageSquare, 
  ChevronRight, 
  Flame, 
  Crown,
  Play,
  ArrowRightLeft,
  BarChart3,
  PenTool,
  Palette,
  Film,
  BellRing,
  Clock
} from 'lucide-react';
import { DIRECTOR_DATA, MEETING_SEATS, MEETING_DIALOGUES } from '../data/mockData';

export default function StudioCanvas({ 
  agents, 
  links, 
  onSelectAgent, 
  activeClientId, 
  clients,
  waitingClients = [],
  onOpenApprovalForClient,
  onOpenQueue,
  onTriggerLog
}) {
  const currentClient = clients.find(c => c.id === activeClientId) || clients[0];
  const queuedWaitingCount = waitingClients.filter(c => c.status === 'waiting').length;

  // Dynamic live agent positions & walking state
  const [agentPositions, setAgentPositions] = useState(() => {
    const map = {};
    agents.forEach(a => {
      map[a.id] = { x: a.homeX, y: a.homeY, isWalking: false, bubble: null };
    });
    return map;
  });

  // Meeting Mode state
  const [isMeetingActive, setIsMeetingActive] = useState(false);
  const [meetingStep, setMeetingStep] = useState(0);
  const [activeSpeakerId, setActiveSpeakerId] = useState('human_director');
  const [currentSpeakerBubble, setCurrentSpeakerBubble] = useState(DIRECTOR_DATA.thought);

  // Selected agent for manual inspection
  const [selectedAgentId, setSelectedAgentId] = useState(null);

  // Spontaneous roaming timers
  useEffect(() => {
    if (isMeetingActive) return;

    // Random cross-department visits every 9 seconds
    const interval = setInterval(() => {
      triggerRandomCollab();
    }, 9000);

    return () => clearInterval(interval);
  }, [isMeetingActive]);

  // Handle Meeting Step Dialogues
  useEffect(() => {
    let dialogueTimer;
    if (isMeetingActive) {
      const dialogue = MEETING_DIALOGUES[meetingStep % MEETING_DIALOGUES.length];
      setActiveSpeakerId(dialogue.speakerId);
      setCurrentSpeakerBubble(dialogue.text);

      dialogueTimer = setTimeout(() => {
        setMeetingStep(prev => prev + 1);
      }, 3500);
    }
    return () => clearTimeout(dialogueTimer);
  }, [isMeetingActive, meetingStep]);

  // Start Meeting: Move department heads to boardroom
  const handleStartMeeting = () => {
    setIsMeetingActive(true);
    setMeetingStep(0);
    onTriggerLog?.('Human_Director', '召集部门联席会！接洽部、市场、文案、设计、视听主管正前往战略决策室...');

    setAgentPositions(prev => {
      const next = { ...prev };
      Object.keys(MEETING_SEATS).forEach(id => {
        if (id !== 'human_director' && next[id]) {
          next[id] = {
            ...next[id],
            x: MEETING_SEATS[id].x,
            y: MEETING_SEATS[id].y,
            isWalking: true
          };
        }
      });
      return next;
    });

    setTimeout(() => {
      setAgentPositions(prev => {
        const next = { ...prev };
        Object.keys(MEETING_SEATS).forEach(id => {
          if (id !== 'human_director' && next[id]) {
            next[id] = { ...next[id], isWalking: false };
          }
        });
        return next;
      });
    }, 1500);
  };

  // End Meeting: Return everyone back to their department desks
  const handleEndMeeting = () => {
    setIsMeetingActive(false);
    setActiveSpeakerId(null);
    setCurrentSpeakerBubble(null);
    onTriggerLog?.('AI_CMO', '联席碰头结束，全员返回各自工位投入 Tomato Boy 宣发与新客户排产！');

    setAgentPositions(prev => {
      const next = { ...prev };
      agents.forEach(a => {
        next[a.id] = {
          ...next[a.id],
          x: a.homeX,
          y: a.homeY,
          isWalking: true,
          bubble: null
        };
      });
      return next;
    });

    setTimeout(() => {
      setAgentPositions(prev => {
        const next = { ...prev };
        agents.forEach(a => {
          next[a.id] = { ...next[a.id], isWalking: false };
        });
        return next;
      });
    }, 1500);
  };

  // Spontaneous cross-department collaboration
  const triggerRandomCollab = () => {
    const scenarios = [
      {
        walker: 'client_concierge',
        targetX: 350,
        targetY: 125, // Walks from Reception to Copy Dept
        walkerSpeech: '🛎️ Uncle Lim 肉骨茶的品牌档案已审核完毕，递交文案部建立 15s 脚本！',
        targetId: 'script_master',
        targetSpeech: '收到客户资料！马上撰写 30 年老字号药膳痛点文案！',
        log: '【顾客接洽部】Client_Concierge 走向【文案脚本部】工位转交排队客户资料。'
      },
      {
        walker: 'trend_scout',
        targetX: 410,
        targetY: 200, // Walks from Market to Copy Dept
        walkerSpeech: '📊 市场部捕获到 KL 飙升词 #沙巴海鲜粉，快写入今日 0~3s 脚本！',
        targetId: 'script_master',
        targetSpeech: '文案部收到！痛点冲突已敲定：“别飞沙巴排队了”！',
        log: '【市场分析部】Trend_Scout 走到【文案脚本部】工位交付大马爆款热词。'
      },
      {
        walker: 'script_master',
        targetX: 475,
        targetY: 330, // Walks from Copy Dept to Design Dept (Seedream)
        walkerSpeech: '✍️ 脚本出炉！设计部 Seedream 老师，需要一组摄影级鲜虾微距！',
        targetId: 'seedream_artist',
        targetSpeech: '设计部收到！Seedream 正在渲染摄影级鲜虾光泽与老坛番茄红汤！',
        log: '【文案脚本部】Script_Master 走向【视觉设计部】交付 Seedream 美学海报需求。'
      },
      {
        walker: 'google_flow_op',
        targetX: 770,
        targetY: 145, // Walks to Kling in AV Dept
        walkerSpeech: '🌊 Google Flow 全局视频管线就绪，Kling 老师美感分镜已融合！',
        targetId: 'kling_master',
        targetSpeech: 'Kling 0~3s 沸腾热气已渲染完毕，光影氛围满分！',
        log: '【视听制作部】Google_Flow_Op 与 Kling_Aesthetic 会合协同分镜。'
      },
      {
        walker: 'queue_manager',
        targetX: 990,
        targetY: 210, // Walks from Reception to Boardroom to notify Director
        walkerSpeech: '👑 总监！接洽部有 3 家优质新餐饮客户排队，随时可一键接单下发！',
        targetId: 'human_director',
        targetSpeech: '收到！等 Tomato Boy 首发成片确认后立即接入 Uncle Lim 肉骨茶！',
        log: '【顾客接洽部】Queue_Manager 走进决策室向总监汇报等候队列。'
      }
    ];

    const pick = scenarios[Math.floor(Math.random() * scenarios.length)];
    onTriggerLog?.(pick.walker, pick.log);

    // 1. Start walking
    setAgentPositions(prev => ({
      ...prev,
      [pick.walker]: {
        ...prev[pick.walker],
        x: pick.targetX,
        y: pick.targetY,
        isWalking: true,
        bubble: pick.walkerSpeech
      }
    }));
    setActiveSpeakerId(pick.walker);
    setCurrentSpeakerBubble(pick.walkerSpeech);

    // 2. Arrive at destination
    setTimeout(() => {
      setAgentPositions(prev => ({
        ...prev,
        [pick.walker]: { ...prev[pick.walker], isWalking: false }
      }));

      // Reply from target agent if any
      if (pick.targetId && pick.targetSpeech) {
        setTimeout(() => {
          setActiveSpeakerId(pick.targetId);
          setCurrentSpeakerBubble(pick.targetSpeech);
        }, 1200);
      }
    }, 1400);

    // 3. Walk back to home desk
    setTimeout(() => {
      const home = agents.find(a => a.id === pick.walker);
      if (home) {
        setAgentPositions(prev => ({
          ...prev,
          [pick.walker]: {
            ...prev[pick.walker],
            x: home.homeX,
            y: home.homeY,
            isWalking: true,
            bubble: null
          }
        }));

        setTimeout(() => {
          setAgentPositions(prev => ({
            ...prev,
            [pick.walker]: { ...prev[pick.walker], isWalking: false }
          }));
          setActiveSpeakerId(null);
          setCurrentSpeakerBubble(null);
        }, 1400);
      }
    }, 5500);
  };

  return (
    <div className="relative w-full h-[calc(100vh-8rem)] bg-[#090d16] overflow-hidden select-none p-4 flex flex-col items-center justify-center">
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #38bdf8 1px, transparent 1px),
            linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px'
        }}
      />

      {/* Main Floor Plan Container (1260px x 590px) */}
      <div className="relative w-full max-w-[1260px] h-[590px] bg-[#0c1322]/95 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">
        
        {/* Top Floating Control Bar for Movement / Meetings */}
        <div className="absolute top-3 right-4 z-40 flex items-center space-x-2.5">
          {/* Quick open Queue Button */}
          <button
            onClick={onOpenQueue}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-yellow-950/60 hover:bg-yellow-900/80 border border-yellow-500/40 text-yellow-300 text-xs font-semibold transition hover:scale-105 active:scale-95 shadow"
          >
            <BellRing className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>顾客等候大厅</span>
            <span className="w-4 h-4 rounded-full bg-yellow-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">
              {queuedWaitingCount}
            </span>
          </button>

          {!isMeetingActive ? (
            <button
              onClick={handleStartMeeting}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-violet-600/30 transition-all hover:scale-105 active:scale-95 border border-violet-400/40"
            >
              <Users className="w-3.5 h-3.5 text-violet-200 animate-pulse" />
              <span>召集五部门联席会</span>
            </button>
          ) : (
            <button
              onClick={handleEndMeeting}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 border border-emerald-400/40"
            >
              <Users className="w-3.5 h-3.5 text-emerald-200" />
              <span>散会！各部门回工位开工</span>
            </button>
          )}

          <button
            onClick={triggerRandomCollab}
            title="触发一次跨部门走动讨论"
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 text-xs font-medium border border-slate-700 transition"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">跨部门串门协作</span>
          </button>
        </div>

        {/* ── 5 大业务部门 + 战略决策室 Floor Plan (12 Columns) ── */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2.5 p-3.5 pointer-events-none">
          
          {/* Department 1: 顾客接洽部与等候大厅 (Cols 1-3, Rows 1-3) */}
          <div 
            onClick={onOpenQueue}
            className="col-span-3 row-span-3 rounded-xl border border-yellow-500/30 hover:border-yellow-400/60 bg-gradient-to-b from-yellow-950/20 via-slate-900/40 to-yellow-950/15 p-2.5 relative flex flex-col justify-between pointer-events-auto cursor-pointer transition-all hover:bg-yellow-950/25 group"
          >
            <div className="flex items-center justify-between text-yellow-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <BellRing className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                <span>顾客接洽部</span>
              </div>
              <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-yellow-950 text-yellow-300 border border-yellow-700/60 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping"></span>
                {queuedWaitingCount} 位等候
              </span>
            </div>

            {/* Waiting Queue Visual List */}
            <div className="mt-auto space-y-1.5 pt-1">
              <div className="text-[9px] font-mono text-slate-400 flex items-center justify-between">
                <span>🛋️ VIP 客户等候沙发展示</span>
                <span className="text-yellow-400 text-[8px] group-hover:underline">点击展开 ➔</span>
              </div>
              {waitingClients.slice(1, 3).map((c) => (
                <div 
                  key={c.id}
                  className="px-2 py-1 rounded-lg bg-slate-900/80 border border-yellow-500/20 flex items-center justify-between text-xs transition group-hover:border-yellow-500/50 shadow"
                >
                  <div className="flex items-center space-x-1.5">
                    <span className="text-sm">{c.avatar}</span>
                    <span className="font-bold text-white text-[10px] line-clamp-1">{c.name}</span>
                  </div>
                  <span className="text-[8px] px-1 rounded bg-yellow-950/80 text-yellow-300 border border-yellow-800 font-mono shrink-0">
                    {c.waitTime}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Department 2: 市场分析部 (Cols 1-3, Rows 4-6) */}
          <div className="col-span-3 row-span-3 rounded-xl border border-teal-500/25 bg-teal-950/15 p-2.5 relative flex flex-col justify-between">
            <div className="flex items-center justify-between text-teal-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
                <span>市场分析部</span>
              </div>
              <span className="text-[8px] px-1 rounded bg-teal-900/40 text-teal-300 border border-teal-700/40">
                爆款嗅探与留存
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 opacity-35">
              <div className="h-9 rounded-lg border border-teal-800/60 bg-teal-900/20 flex items-center justify-center text-[8px] text-teal-300 font-mono">全网飙升雷达</div>
              <div className="h-9 rounded-lg border border-teal-800/60 bg-teal-900/20 flex items-center justify-center text-[8px] text-emerald-300 font-mono">留存归因分析</div>
            </div>
          </div>

          {/* Department 3: 文案脚本部 (Cols 4-6, Rows 1-3) */}
          <div className="col-span-3 row-span-3 rounded-xl border border-amber-500/25 bg-amber-950/15 p-2.5 relative flex flex-col justify-between">
            <div className="flex items-center justify-between text-amber-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <PenTool className="w-3.5 h-3.5 text-amber-400" />
                <span>文案脚本部</span>
              </div>
              <span className="text-[8px] px-1 rounded bg-amber-900/40 text-amber-300 border border-amber-700/40">
                15s 三段式架构
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 opacity-35">
              <div className="h-9 rounded-lg border border-amber-800/60 bg-amber-900/20 flex items-center justify-center text-[8px] text-amber-300 font-mono">黄金三段式Hook</div>
              <div className="h-9 rounded-lg border border-orange-800/60 bg-orange-900/20 flex items-center justify-center text-[8px] text-orange-300 font-mono">社媒种草文案</div>
            </div>
          </div>

          {/* Department 4: 视觉设计部 (Cols 4-6, Rows 4-6) - GPT Image & Seedream */}
          <div className="col-span-3 row-span-3 rounded-xl border border-rose-500/30 bg-rose-950/15 p-2.5 relative flex flex-col justify-between">
            <div className="flex items-center justify-between text-rose-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <Palette className="w-3.5 h-3.5 text-rose-400" />
                <span>视觉设计部</span>
              </div>
              <span className="text-[8px] px-1 rounded bg-rose-900/40 text-rose-300 border border-rose-700/40">
                GPT Image & Seedream
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1 opacity-35">
              <div className="h-9 rounded-lg border border-rose-800/60 bg-rose-900/20 flex items-center justify-center text-[8px] text-rose-300 font-mono text-center">GPT 大字报</div>
              <div className="h-9 rounded-lg border border-pink-800/60 bg-pink-900/20 flex items-center justify-center text-[8px] text-pink-300 font-mono text-center">Seedream摄影</div>
              <div className="h-9 rounded-lg border border-fuchsia-800/60 bg-fuchsia-900/20 flex items-center justify-center text-[8px] text-fuchsia-300 font-mono text-center">Higgs特效</div>
            </div>
          </div>

          {/* Department 5: 视听制作部 (Cols 7-9, Rows 1-6) - Flow + Kling + Seedance + Suno (2x2 Pods!) */}
          <div className="col-span-3 row-span-6 rounded-xl border border-cyan-500/30 bg-cyan-950/15 p-2.5 relative flex flex-col justify-between">
            <div className="flex items-center justify-between text-cyan-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <Film className="w-3.5 h-3.5 text-cyan-400" />
                <span>视听制作部 / AV PRODUCTION</span>
              </div>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-cyan-900/40 text-cyan-300 border border-cyan-700/40">
                60% 15s 视频管线
              </span>
            </div>

            {/* Middle Pipeline Ribbon */}
            <div className="my-auto py-2 px-2.5 rounded-lg border border-cyan-500/20 bg-slate-900/60 text-center">
              <div className="text-[9px] font-mono text-cyan-300/80 mb-1">
                ⚡ 15s 视听协同管线
              </div>
              <div className="text-[8px] font-mono text-slate-400 flex items-center justify-center space-x-1">
                <span className="text-sky-300">Flow</span>
                <span>➔</span>
                <span className="text-cyan-300">Kling</span>
                <span>➔</span>
                <span className="text-amber-300">Seedance</span>
                <span>➔</span>
                <span className="text-violet-300">Suno</span>
              </div>
            </div>

            {/* Bottom 4 Pod Tags */}
            <div className="grid grid-cols-4 gap-1 opacity-35">
              <div className="h-9 rounded-lg border border-sky-800/70 bg-sky-950/30 flex items-center justify-center text-[8px] text-sky-300 font-mono text-center p-0.5">Flow</div>
              <div className="h-9 rounded-lg border border-cyan-800/70 bg-cyan-950/30 flex items-center justify-center text-[8px] text-cyan-300 font-mono text-center p-0.5">Kling</div>
              <div className="h-9 rounded-lg border border-amber-800/70 bg-amber-950/30 flex items-center justify-center text-[8px] text-amber-300 font-mono text-center p-0.5">Seedance</div>
              <div className="h-9 rounded-lg border border-violet-800/70 bg-violet-950/30 flex items-center justify-center text-[8px] text-violet-300 font-mono text-center p-0.5">Suno</div>
            </div>
          </div>

          {/* Department 6: 战略决策会议室 (Cols 10-12, Rows 1-6) */}
          <div className="col-span-3 row-span-6 rounded-xl border border-violet-500/30 bg-violet-950/15 p-2.5 relative flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between text-violet-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>战略决策室</span>
              </div>
              {isMeetingActive && (
                <span className="text-[8px] text-rose-400 font-bold px-1.5 py-0.2 rounded bg-rose-950/80 border border-rose-800 animate-pulse">
                  ● 汇报中
                </span>
              )}
            </div>

            {/* Circular Conference Table Graphic (Centered at y ≈ 335) */}
            <div className="relative mt-24 mb-auto w-52 h-52 rounded-full border-2 border-violet-500/40 bg-violet-950/30 flex items-center justify-center shadow-2xl shadow-violet-900/30">
              <div className="w-28 h-28 rounded-full border border-violet-400/50 bg-violet-900/40 flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-violet-400/30 animate-ping-slow"></div>
                <span className="text-[10px] font-mono text-violet-200 font-bold tracking-wider">BOARDROOM</span>
                <span className="text-[8px] text-violet-400">总监指挥中枢</span>
              </div>
            </div>

            <div className="w-full text-center text-[9px] text-slate-500 font-mono">
              五部门联席 • 策略与排期拍板
            </div>
          </div>

        </div>

        {/* Dynamic SVG Connection Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {!isMeetingActive && links.map((link) => {
            const sourcePos = agentPositions[link.from];
            const targetPos = agentPositions[link.to];
            if (!sourcePos || !targetPos) return null;

            const dx = targetPos.x - sourcePos.x;
            const dy = targetPos.y - sourcePos.y;
            const cx1 = sourcePos.x + dx * 0.5;
            const cy1 = sourcePos.y;
            const cx2 = sourcePos.x + dx * 0.5;
            const cy2 = targetPos.y;
            const pathData = `M ${sourcePos.x} ${sourcePos.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${targetPos.x} ${targetPos.y}`;

            return (
              <g key={link.id}>
                <path
                  d={pathData}
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.12)"
                  strokeWidth="3"
                />
                <path
                  d={pathData}
                  fill="none"
                  stroke="url(#cyanLine)"
                  strokeWidth="1.8"
                  strokeDasharray="6 6"
                  className="animate-dash-flow"
                />
              </g>
            );
          })}
        </svg>

        {/* --- Characters Layer (Director + 5 Departments) --- */}
        <div className="absolute inset-0 z-20 pointer-events-auto">
          
          {/* Director (You) in Boardroom */}
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
            style={{ left: `${DIRECTOR_DATA.x}px`, top: `${DIRECTOR_DATA.y}px` }}
          >
            {(activeSpeakerId === 'human_director' || (!activeSpeakerId && !isMeetingActive)) && (
              <div 
                className="absolute top-14 left-1/2 transform -translate-x-1/2 w-56 p-2.5 rounded-xl border border-amber-400 bg-slate-900/95 backdrop-blur-md shadow-2xl text-[11px] leading-tight z-30 animate-pop-bubble"
              >
                <div className="flex items-center justify-between text-[9px] font-mono text-amber-400 mb-1 font-bold">
                  <span className="flex items-center gap-1">
                    <Crown className="w-3 h-3 text-amber-400" />
                    <span>{DIRECTOR_DATA.name}</span>
                  </span>
                  <span className="text-slate-400">{DIRECTOR_DATA.title}</span>
                </div>
                <p className="text-amber-200 font-medium">{currentSpeakerBubble || DIRECTOR_DATA.thought}</p>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-l border-t border-amber-400 rotate-45"></div>
              </div>
            )}

            <div 
              onClick={() => {
                setActiveSpeakerId('human_director');
                setCurrentSpeakerBubble(DIRECTOR_DATA.thought);
              }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-2.5 rounded-full bg-amber-500/30 animate-pulse" />
              <div className={`relative w-12 h-12 rounded-full ${DIRECTOR_DATA.avatarBg} border-2 border-amber-300 flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110 active:scale-95`}>
                <span className="text-2xl drop-shadow">{DIRECTOR_DATA.avatarEmoji}</span>
              </div>
              <div className="absolute top-13 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-amber-950/90 border border-amber-600/80 px-2 py-0.5 rounded-md text-[10px] font-bold text-amber-300 tracking-tight shadow">
                总监 (You)
              </div>
            </div>
          </div>

          {/* Department Agents */}
          {agents.map((agent) => {
            const pos = agentPositions[agent.id] || { x: agent.homeX, y: agent.homeY, isWalking: false };
            const isSpeaking = activeSpeakerId === agent.id;
            const speechText = pos.bubble || (isSpeaking ? currentSpeakerBubble : null) || (selectedAgentId === agent.id ? agent.thought : null);
            const isNearTop = pos.y < 210;

            return (
              <div 
                key={agent.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                  pos.isWalking ? 'animate-walking' : ''
                }`}
                style={{ 
                  left: `${pos.x}px`, 
                  top: `${pos.y}px`,
                  transition: 'left 1.4s cubic-bezier(0.34, 1.2, 0.64, 1), top 1.4s cubic-bezier(0.34, 1.2, 0.64, 1)'
                }}
              >
                {/* Dynamically popped speech bubble */}
                {speechText && (
                  <div 
                    className={`absolute ${isNearTop ? 'top-13' : 'bottom-13'} left-1/2 transform -translate-x-1/2 w-52 p-2.5 rounded-xl border border-cyan-400 bg-slate-900/95 backdrop-blur-md shadow-2xl text-[11px] leading-tight z-30 animate-pop-bubble cursor-pointer`}
                    onClick={() => onSelectAgent(agent)}
                  >
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-1">
                      <span className="font-semibold text-cyan-400 flex items-center gap-1 truncate max-w-[120px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                        {agent.name}
                      </span>
                      <span className="text-[8px] px-1 rounded bg-slate-800 text-slate-300 shrink-0">{agent.deptName}</span>
                    </div>
                    <p className="line-clamp-3 text-slate-100 font-medium">{speechText}</p>
                    {isNearTop ? (
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-l border-t border-cyan-400 rotate-45"></div>
                    ) : (
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-cyan-400 rotate-45"></div>
                    )}
                  </div>
                )}

                {/* Avatar Circle */}
                <div 
                  onClick={() => {
                    setSelectedAgentId(agent.id);
                    setActiveSpeakerId(agent.id);
                    setCurrentSpeakerBubble(agent.thought);
                    onSelectAgent(agent);
                  }}
                  className="relative group cursor-pointer"
                >
                  <div 
                    className="absolute -inset-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: agent.haloColor }}
                  />

                  <div className={`relative w-11 h-11 rounded-full ${agent.avatarColor} border-2 ${agent.borderColor} flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 active:scale-95`}>
                    <span className="text-lg drop-shadow select-none">{agent.face || '🤖'}</span>
                    
                    <span className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${
                      pos.isWalking 
                        ? 'bg-amber-400 animate-ping' 
                        : agent.status === 'active' 
                        ? 'bg-emerald-400 animate-pulse' 
                        : 'bg-slate-500'
                    }`} />
                  </div>

                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-slate-900/90 border border-slate-700/80 px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-200 tracking-tight shadow group-hover:border-cyan-400 transition-colors">
                    {agent.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Floating Bottom Client Pipeline Bar */}
      <div className="w-full max-w-[1240px] mt-2.5 h-12 bg-gradient-to-r from-slate-900/90 via-[#0d1526]/90 to-cyan-950/80 border border-cyan-500/30 rounded-xl px-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-lg shadow">
            {currentClient.avatar}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-white">{currentClient.name}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">
              {currentClient.category}
            </span>
            <span className="text-[10px] text-slate-400 hidden md:inline">
              目标: {currentClient.todayGoal}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-36 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-full transition-all duration-1000"
                style={{ width: `${currentClient.progress}%` }}
              />
            </div>
            <span className="text-[10px] font-mono font-bold text-cyan-400">{currentClient.progress}% 制作中</span>
          </div>

          <button
            onClick={() => onOpenApprovalForClient(currentClient.id)}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow"
          >
            <span>检阅 15s 成片与图文</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
