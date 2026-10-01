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
  Clock,
  Radio
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
  onOpenResearchDesk,
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
    onTriggerLog?.('Human_Director', '召集五大投研部门联席会！调度、宏观、量化、编译、图表主管正前往战略决策室...');

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
    onTriggerLog?.('AI_CQO', '联席碰头结束，全员返回各自工位投入 Telegram 18区与 @sparkone_global 实时广播生产！');

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

  // Spontaneous cross-department collaboration (Spark Union Quant Operations)
  const triggerRandomCollab = () => {
    const scenarios = [
      {
        walker: 'tg_topic_concierge',
        targetX: 100,
        targetY: 330, // Walks from Gateway to Macro Intel
        walkerSpeech: '📡 Telegram #5 SPARK AI 话题整点待命，宏观部请交付最新市场脉搏！',
        targetId: 'macro_oracle',
        targetSpeech: '收到排期指令！美债 4.22% 回落与黄金 $2,682 脉搏已整理完成！',
        log: '【TG & X 广播调度部】TG_Topic_Bot 前往【宏观投研部】催收 SPARK AI DAILY 研报。'
      },
      {
        walker: 'macro_oracle',
        targetX: 410,
        targetY: 200, // Walks from Macro to Quant Dept
        walkerSpeech: '📊 黄金触及 $2,682/oz 强阻力，流动性归因 42%，请 AURORA 策略模型确认读数！',
        targetId: 'aurora_architect',
        targetSpeech: 'AURORA 接收数据！多头置信度 71%，已下达凯利仓位动态防守指令！',
        log: '【宏观投研情报部】Macro_Oracle 走向【量化策略部】递交多维归因参数。'
      },
      {
        walker: 'aurora_architect',
        targetX: 380,
        targetY: 330, // Walks from Quant to Global Editorial
        walkerSpeech: '⚡ AURORA 黄金策略解构就绪！请编译部输出华尔街级权威英文 Thread！',
        targetId: 'alpha_writer',
        targetSpeech: '全球编译部收到！4-Tweet 深度研报推文正在组织排版！',
        log: '【量化策略解构部】Aurora_Core 走向【全球编译部】移交 5 大引擎解构参数。'
      },
      {
        walker: 'alpha_writer',
        targetX: 710,
        targetY: 220, // Walks from Editorial to Visual Dept
        walkerSpeech: '✍️ 推特 Thread 与 TG 稿件完成！图表部请渲染 TradingView 暗黑清算热力图！',
        targetId: 'chart_renderer',
        targetSpeech: 'K 线与支撑位 $2,650 标注渲染完毕，TradingView 4K 图表直出！',
        log: '【全球内容编译部】Alpha_Writer 走向【视听渲染部】交付图表渲染需求。'
      },
      {
        walker: 'x_flight_director',
        targetX: 990,
        targetY: 210, // Walks from Gateway to Boardroom to notify Director
        walkerSpeech: '👑 总监！Telegram 18区与 @sparkone_global 排期已就绪，随时一键投递！',
        targetId: 'human_director',
        targetSpeech: '很好！启动 Level 2 风控防护，在投研发布台一键授权全网广播！',
        log: '【TG & X 广播调度部】X_Flight_Op 走进决策室向总监汇报全球排期。'
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
        <div className="absolute top-3 right-4 z-40 flex items-center space-x-2">
          {/* Direct Trigger for SPARK AI Research Desk */}
          <button
            onClick={onOpenResearchDesk}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900/90 border border-cyan-500/50 text-cyan-300 text-xs font-bold transition hover:scale-105 active:scale-95 shadow-lg shadow-cyan-900/30"
          >
            <Bot className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>🤖 打开 SPARK AI 投研发布中心</span>
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

        {/* ── 5 大业务部门 + 战略决策室 Floor Plan (4 Columns x 2 Rows) ── */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-2.5 p-3.5 pointer-events-none">
          
          {/* Department 1: TG & X 广播调度部 (Col 1, Row 1) */}
          <div 
            onClick={onOpenQueue}
            className="col-start-1 row-start-1 rounded-xl border border-yellow-500/35 hover:border-yellow-400/60 bg-gradient-to-b from-yellow-950/20 via-slate-900/40 to-yellow-950/15 p-2.5 relative flex flex-col justify-between pointer-events-auto cursor-pointer transition-all hover:bg-yellow-950/25 group shadow-lg"
          >
            <div className="flex items-center justify-between text-yellow-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <Radio className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                <span>TG & X 广播调度部</span>
              </div>
              <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-yellow-950 text-yellow-300 border border-yellow-700/60 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping"></span>
                18区 + @sparkone_global
              </span>
            </div>

            {/* Waiting Queue Visual List */}
            <div className="mt-auto space-y-1.5 pt-1">
              <div className="text-[9px] font-mono text-slate-400 flex items-center justify-between">
                <span>📡 广播频道与话题排期</span>
                <span className="text-yellow-400 text-[8px] group-hover:underline">展开排期 ➔</span>
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

          {/* Department 2: 宏观投研情报部 (Col 1, Row 2) */}
          <div className="col-start-1 row-start-2 rounded-xl border border-teal-500/25 bg-teal-950/15 p-2.5 relative flex flex-col justify-between">
            <div className="flex items-center justify-between text-teal-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
                <span>宏观投研情报部</span>
              </div>
              <span className="text-[8px] px-1 rounded bg-teal-900/40 text-teal-300 border border-teal-700/40">
                DAILY & 多维归因
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 opacity-35">
              <div className="h-9 rounded-lg border border-teal-800/60 bg-teal-900/20 flex items-center justify-center text-[8px] text-teal-300 font-mono">美债/DXY脉搏</div>
              <div className="h-9 rounded-lg border border-teal-800/60 bg-teal-900/20 flex items-center justify-center text-[8px] text-emerald-300 font-mono">流动性多维归因</div>
            </div>
          </div>

          {/* Department 3: 量化策略解构部 (Col 2, Row 1) */}
          <div className="col-start-2 row-start-1 rounded-xl border border-amber-500/25 bg-amber-950/15 p-2.5 relative flex flex-col justify-between">
            <div className="flex items-center justify-between text-amber-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>量化策略解构部</span>
              </div>
              <span className="text-[8px] px-1 rounded bg-amber-900/40 text-amber-300 border border-amber-700/40">
                AURORA 黄金 & 风控
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 opacity-35">
              <div className="h-9 rounded-lg border border-amber-800/60 bg-amber-900/20 flex items-center justify-center text-[8px] text-amber-300 font-mono">AURORA 黄金 (71%)</div>
              <div className="h-9 rounded-lg border border-orange-800/60 bg-orange-900/20 flex items-center justify-center text-[8px] text-orange-300 font-mono">AI RISK ALERT 哨兵</div>
            </div>
          </div>

          {/* Department 4: 全球内容编译部 (Col 2, Row 2) */}
          <div className="col-start-2 row-start-2 rounded-xl border border-rose-500/30 bg-rose-950/15 p-2.5 relative flex flex-col justify-between">
            <div className="flex items-center justify-between text-rose-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <PenTool className="w-3.5 h-3.5 text-rose-400" />
                <span>全球内容编译部</span>
              </div>
              <span className="text-[8px] px-1 rounded bg-rose-900/40 text-rose-300 border border-rose-700/40">
                X Thread & 11国语言
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1 opacity-35">
              <div className="h-9 rounded-lg border border-rose-800/60 bg-rose-900/20 flex items-center justify-center text-[8px] text-rose-300 font-mono text-center">权威英文排版</div>
              <div className="h-9 rounded-lg border border-pink-800/60 bg-pink-900/20 flex items-center justify-center text-[8px] text-pink-300 font-mono text-center">11国母语本地化</div>
              <div className="h-9 rounded-lg border border-fuchsia-800/60 bg-fuchsia-900/20 flex items-center justify-center text-[8px] text-fuchsia-300 font-mono text-center">高传播投资哲思</div>
            </div>
          </div>

          {/* Department 5: 视听图表渲染部 (Col 3, Rows 1-2 Full Height!) */}
          <div className="col-start-3 row-start-1 row-span-2 rounded-xl border border-cyan-500/30 bg-cyan-950/15 p-2.5 relative flex flex-col justify-between">
            <div className="flex items-center justify-between text-cyan-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <Film className="w-3.5 h-3.5 text-cyan-400" />
                <span>视听图表渲染部 / VISUAL INFOGRAPHICS</span>
              </div>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-cyan-900/40 text-cyan-300 border border-cyan-700/40">
                TradingView 4K & Seedream
              </span>
            </div>

            {/* Middle Pipeline Ribbon */}
            <div className="my-auto py-2.5 px-2.5 rounded-lg border border-cyan-500/20 bg-slate-900/70 text-center shadow">
              <div className="text-[9px] font-mono text-cyan-300/90 mb-1 font-semibold">
                ⚡ SPARK 工业化投研管线
              </div>
              <div className="text-[8px] font-mono text-slate-300 flex items-center justify-center space-x-1.5">
                <span className="text-sky-300 font-bold">Macro</span>
                <span className="text-slate-500">➔</span>
                <span className="text-cyan-300 font-bold">Aurora</span>
                <span className="text-slate-500">➔</span>
                <span className="text-amber-300 font-bold">Thread</span>
                <span className="text-slate-500">➔</span>
                <span className="text-violet-300 font-bold">TG/X 广播</span>
              </div>
            </div>

            {/* Bottom 4 Pod Tags */}
            <div className="grid grid-cols-4 gap-1 opacity-40">
              <div className="h-9 rounded-lg border border-sky-800/70 bg-sky-950/30 flex items-center justify-center text-[8px] text-sky-300 font-mono text-center p-0.5">TradingView</div>
              <div className="h-9 rounded-lg border border-cyan-800/70 bg-cyan-950/30 flex items-center justify-center text-[8px] text-cyan-300 font-mono text-center p-0.5">Seedream科技</div>
              <div className="h-9 rounded-lg border border-amber-800/70 bg-amber-950/30 flex items-center justify-center text-[8px] text-amber-300 font-mono text-center p-0.5">15s 投研动态</div>
              <div className="h-9 rounded-lg border border-violet-800/70 bg-violet-950/30 flex items-center justify-center text-[8px] text-violet-300 font-mono text-center p-0.5">Suno 赛博音效</div>
            </div>
          </div>

          {/* Department 6: 战略决策会议室 (Col 4, Rows 1-2 Full Height!) */}
          <div className="col-start-4 row-start-1 row-span-2 rounded-xl border border-violet-500/30 bg-violet-950/15 p-2.5 relative flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between text-violet-400 font-mono text-[10px] font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>战略决策与一键广播中枢</span>
              </div>
              {isMeetingActive && (
                <span className="text-[8px] text-rose-400 font-bold px-1.5 py-0.2 rounded bg-rose-950/80 border border-rose-800 animate-pulse">
                  ● 联席终审中
                </span>
              )}
            </div>

            {/* Circular Conference Table Graphic (Centered at y ≈ 350) */}
            <div className="relative mt-32 mb-auto w-48 h-48 rounded-full border-2 border-violet-500/40 bg-violet-950/30 flex items-center justify-center shadow-2xl shadow-violet-900/30">
              <div className="w-24 h-24 rounded-full border border-violet-400/50 bg-violet-900/40 flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-violet-400/30 animate-ping-slow"></div>
                <span className="text-[9px] font-mono text-violet-200 font-bold tracking-wider">BOARDROOM</span>
                <span className="text-[8px] text-violet-400">总监指挥中枢</span>
              </div>
            </div>

            <div className="w-full text-center text-[9px] text-slate-500 font-mono">
              五部门联席 • 针对 Telegram & X.com 终审拍板
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
                className="absolute right-14 top-0 w-56 p-2.5 rounded-xl border border-amber-400 bg-slate-900/95 backdrop-blur-md shadow-2xl text-[11px] leading-tight z-30 animate-pop-bubble"
              >
                <div className="flex items-center justify-between text-[9px] font-mono text-amber-400 mb-1 font-bold">
                  <span className="flex items-center gap-1">
                    <Crown className="w-3 h-3 text-amber-400" />
                    <span>{DIRECTOR_DATA.name}</span>
                  </span>
                  <span className="text-slate-400">{DIRECTOR_DATA.title}</span>
                </div>
                <p className="text-amber-200 font-medium">{currentSpeakerBubble || DIRECTOR_DATA.thought}</p>
                <div className="absolute top-4 -right-1.5 w-3 h-3 bg-slate-900 border-r border-t border-amber-400 rotate-45"></div>
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

      {/* Floating Bottom Client Pipeline Bar (SPARK ONE Focused) */}
      <div className="w-full max-w-[1260px] mt-2.5 h-12 bg-gradient-to-r from-slate-900/90 via-[#0d1526]/90 to-cyan-950/80 border border-cyan-500/30 rounded-xl px-4 flex items-center justify-between shadow-lg">
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
                className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400 rounded-full transition-all duration-1000"
                style={{ width: `${currentClient.progress}%` }}
              />
            </div>
            <span className="text-[10px] font-mono font-bold text-cyan-400">{currentClient.progress}% 研报已就绪</span>
          </div>

          <button
            onClick={() => onOpenApprovalForClient(currentClient.id)}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-amber-500/20 hover:from-cyan-500/30 hover:to-amber-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow"
          >
            <span>检阅 𝕏 推特与 ✈️ TG 全球成稿</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
