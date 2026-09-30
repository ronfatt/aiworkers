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
  ArrowRightLeft
} from 'lucide-react';
import { DIRECTOR_DATA, MEETING_SEATS, MEETING_DIALOGUES } from '../data/mockData';

export default function StudioCanvas({ 
  agents, 
  links, 
  onSelectAgent, 
  activeClientId, 
  clients,
  onOpenApprovalForClient,
  onTriggerLog
}) {
  const currentClient = clients.find(c => c.id === activeClientId) || clients[0];

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

    // Random cross-zone visits every 9 seconds
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

  // Start Meeting: Move agents to meeting room
  const handleStartMeeting = () => {
    setIsMeetingActive(true);
    setMeetingStep(0);
    onTriggerLog?.('Human_Director', '召集 AI 专项圆桌会！各工位核心 Agent 正在前往会议室...');

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

    // Turn off walking wobble after they arrive
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

  // End Meeting: Return everyone back to their desks
  const handleEndMeeting = () => {
    setIsMeetingActive(false);
    setActiveSpeakerId(null);
    setCurrentSpeakerBubble(null);
    onTriggerLog?.('AI_CMO', '圆桌讨论完毕，全员回到工位投入生产流水线！');

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

  // Spontaneous random cross-zone visit
  const triggerRandomCollab = () => {
    const scenarios = [
      {
        walker: 'trend_scout',
        targetX: 160,
        targetY: 235, // Script_Master's desk
        walkerSpeech: '🔥 刚逮到一个飙升音频，快加进 GlowSkin 0~3s 脚本！',
        targetId: 'script_master',
        targetSpeech: '收到！冲突感已融入第 1 镜头！',
        log: 'Trend_Scout 走到 Script_Master 工位交付爆款卡点音效。'
      },
      {
        walker: 'seedance_motion',
        targetX: 470,
        targetY: 130, // Kling's desk
        walkerSpeech: '⚡ 瓶身挤压动作已锁定，美感高光片段准备合并！',
        targetId: 'kling_master',
        targetSpeech: 'Kling 氛围光效渲染完毕，准备提交 Google Flow 总成！',
        log: 'Seedance_Motion 走向 Kling 工位交接动作与美感分镜。'
      },
      {
        walker: 'gpt_image_artist',
        targetX: 230,
        targetY: 235, // Copy_Alchemist's desk
        walkerSpeech: '🎨 GPT Image 小红书大字封面已直出，来核对标题字数！',
        targetId: 'copy_alchemist',
        targetSpeech: '排版极佳，已加上高转化 Emoji 与标签！',
        log: 'GPT_Image_Master 走向 Copy_Alchemist 对齐图文排版。'
      },
      {
        walker: 'standby_crawler',
        targetX: 300,
        targetY: 375, // Coffee machine in Lounge
        walkerSpeech: '☕ 去咖啡角倒了杯手冲，顺便监听突发热点词...',
        targetId: null,
        targetSpeech: null,
        log: 'Standby 机器人在休闲区走动倒咖啡，保持待命。'
      },
      {
        walker: 'script_master',
        targetX: 840,
        targetY: 135, // Walks over to Director in meeting room to report!
        walkerSpeech: '👑 总监，GlowSkin 今日 15s 脚本已分配给 Kling & Seedance！',
        targetId: 'human_director',
        targetSpeech: '干得漂亮，按美感+产品动作结合的策略推进！',
        log: 'Script_Master 走到总监面前进行分镜汇报。'
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

      {/* Main Floor Plan Container */}
      <div className="relative w-full max-w-[1240px] h-[580px] bg-[#0c1322]/95 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">
        
        {/* Top Floating Control Bar for Movement / Meetings */}
        <div className="absolute top-3 right-4 z-40 flex items-center space-x-2.5">
          {!isMeetingActive ? (
            <button
              onClick={handleStartMeeting}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-violet-600/30 transition-all hover:scale-105 active:scale-95 border border-violet-400/40"
            >
              <Users className="w-3.5 h-3.5 text-violet-200 animate-pulse" />
              <span>召集 AI 专项圆桌会 (全员走入会议室)</span>
            </button>
          ) : (
            <button
              onClick={handleEndMeeting}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 border border-emerald-400/40"
            >
              <Users className="w-3.5 h-3.5 text-emerald-200" />
              <span>散会！各 AI 回各自工位</span>
            </button>
          )}

          <button
            onClick={triggerRandomCollab}
            title="触发一次跨工位走动讨论"
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 text-xs font-medium border border-slate-700 transition"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">自主串门走动</span>
          </button>
        </div>

        {/* Room Partition Backgrounds */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-3 p-4 pointer-events-none">
          
          {/* Zone 1: Desk Zone */}
          <div className="col-span-4 row-span-4 rounded-xl border border-dashed border-emerald-500/20 bg-emerald-950/10 p-3 relative">
            <div className="flex items-center space-x-1.5 text-emerald-400 font-mono text-[11px] font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-sm bg-emerald-400"></span>
              <span>DESK ZONE / 策划与情报工位</span>
            </div>
            {/* Visual Desk Pods */}
            <div className="absolute top-12 left-6 right-6 bottom-4 grid grid-cols-2 gap-3 opacity-30">
              <div className="rounded-lg border border-slate-700 bg-slate-800/30 flex items-center justify-center text-[9px] text-emerald-300 font-mono">Trend Desk</div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/30 flex items-center justify-center text-[9px] text-rose-300 font-mono">RedBook Desk</div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/30 flex items-center justify-center text-[9px] text-amber-300 font-mono">15s Script Desk</div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/30 flex items-center justify-center text-[9px] text-purple-300 font-mono">Copy Desk</div>
            </div>
          </div>

          {/* Zone 2: Production Studio */}
          <div className="col-span-4 row-span-4 rounded-xl border border-dashed border-cyan-500/20 bg-cyan-950/10 p-3 relative">
            <div className="flex items-center space-x-1.5 text-cyan-400 font-mono text-[11px] font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-sm bg-cyan-400"></span>
              <span>PRODUCTION / Google Flow + Kling + Higgsfield + GPT</span>
            </div>
            {/* Rigs outlines */}
            <div className="absolute top-12 left-4 right-4 bottom-4 grid grid-cols-3 gap-2 opacity-35">
              <div className="rounded-lg border border-sky-800/70 bg-sky-950/30 flex items-center justify-center text-[9px] text-sky-300 font-mono text-center p-1">Google Flow (主力)</div>
              <div className="rounded-lg border border-cyan-800/70 bg-cyan-950/30 flex items-center justify-center text-[9px] text-cyan-300 font-mono text-center p-1">Kling (美感)</div>
              <div className="rounded-lg border border-amber-800/70 bg-amber-950/30 flex items-center justify-center text-[9px] text-amber-300 font-mono text-center p-1">Seedance 2.5 (动作)</div>
              <div className="rounded-lg border border-emerald-800/70 bg-emerald-950/30 flex items-center justify-center text-[9px] text-emerald-300 font-mono text-center p-1 col-span-2">GPT Image (40%图文直出)</div>
              <div className="rounded-lg border border-pink-800/70 bg-pink-950/30 flex items-center justify-center text-[9px] text-pink-300 font-mono text-center p-1">Higgsfield 特效</div>
            </div>
          </div>

          {/* Zone 3: Meeting Zone */}
          <div className="col-span-4 row-span-4 rounded-xl border border-dashed border-violet-500/30 bg-violet-950/15 p-3 relative flex flex-col items-center">
            <div className="w-full flex items-center justify-between text-violet-400 font-mono text-[11px] font-semibold tracking-wider">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-sm bg-violet-400"></span>
                <span>MEETING ZONE / 策略圆桌 (跟总监讨论)</span>
              </div>
              {isMeetingActive && (
                <span className="text-[10px] text-rose-400 font-bold px-2 py-0.5 rounded bg-rose-950/80 border border-rose-800 animate-pulse">
                  ● 正在激烈复盘中
                </span>
              )}
            </div>

            {/* Circular Conference Table Graphic */}
            <div className="relative mt-7 w-48 h-48 rounded-full border-2 border-violet-500/40 bg-violet-950/30 flex items-center justify-center shadow-2xl shadow-violet-900/20">
              {/* Table center dynamic hologram */}
              <div className="w-24 h-24 rounded-full border border-violet-400/50 bg-violet-900/40 flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-violet-400/30 animate-ping-slow"></div>
                <span className="text-[11px] font-mono text-violet-200 font-bold tracking-wider">ROUNDTABLE</span>
                <span className="text-[9px] text-violet-400">15s 策略中枢</span>
              </div>
            </div>
          </div>

          {/* Zone 4: Lounge & Standby */}
          <div className="col-span-5 row-span-2 rounded-xl border border-dashed border-slate-700/40 bg-slate-900/30 p-3 flex flex-col justify-between relative">
            <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] font-semibold">
              <div className="flex items-center space-x-1.5">
                <Coffee className="w-3.5 h-3.5 text-amber-400" />
                <span>LOUNGE & STANDBY / 休闲与备用区</span>
              </div>
              <span className="text-[10px] text-amber-400/80 font-mono flex items-center gap-1">
                <span className="animate-steam">♨️</span> 手冲咖啡角
              </span>
            </div>
            
            {/* Visual coffee counter */}
            <div className="flex items-center space-x-6 text-[10px] text-slate-500 font-mono">
              <div className="flex items-center space-x-1.5 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                <span>☕ 咖啡机</span>
                <span className="text-amber-300">热萃中</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                <span>🛋️ 休闲沙发</span>
                <span className="text-slate-400">随时响应</span>
              </div>
            </div>
          </div>

          {/* Zone 5: Active Client Task Pipeline Bar */}
          <div className="col-span-7 row-span-2 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/95 to-cyan-950/40 p-3 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl shadow-md">
                {currentClient.avatar}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xs font-bold text-white">{currentClient.name}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">
                    {currentClient.category}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    目标: {currentClient.todayGoal}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-52 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-full transition-all duration-1000"
                      style={{ width: `${currentClient.progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400">{currentClient.progress}% 生产就绪</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenApprovalForClient(currentClient.id)}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-900/30"
            >
              <span>查看今日 15s 成片/图文</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
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

          {/* Render links tracking the moving agent's live coordinates */}
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

        {/* --- Characters Layer (Director + AI Agents) --- */}
        <div className="absolute inset-0 z-20 pointer-events-auto">
          
          {/* 1. YOU (The Human Director / Studio Boss in Meeting Room) */}
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
            style={{ left: `${DIRECTOR_DATA.x}px`, top: `${DIRECTOR_DATA.y}px` }}
          >
            {/* Director Speech Bubble */}
            {(activeSpeakerId === 'human_director' || (!activeSpeakerId && !isMeetingActive)) && (
              <div 
                className="absolute bottom-11 left-1/2 transform -translate-x-1/2 w-56 p-2.5 rounded-xl border border-amber-400 bg-slate-900/95 backdrop-blur-md shadow-2xl text-[11px] leading-tight z-30 animate-pop-bubble"
              >
                <div className="flex items-center justify-between text-[9px] font-mono text-amber-400 mb-1 font-bold">
                  <span className="flex items-center gap-1">
                    <Crown className="w-3 h-3 text-amber-400" />
                    <span>{DIRECTOR_DATA.name}</span>
                  </span>
                  <span className="text-slate-400">{DIRECTOR_DATA.title}</span>
                </div>
                <p className="text-amber-200 font-medium">{currentSpeakerBubble || DIRECTOR_DATA.thought}</p>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-amber-400 rotate-45"></div>
              </div>
            )}

            {/* Director Avatar Circle */}
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

          {/* 2. All AI Agents with Live Smooth Moving Coordinates & Walking Wobble */}
          {agents.map((agent) => {
            const pos = agentPositions[agent.id] || { x: agent.homeX, y: agent.homeY, isWalking: false };
            const isSpeaking = activeSpeakerId === agent.id;
            const speechText = pos.bubble || (isSpeaking ? currentSpeakerBubble : null) || (selectedAgentId === agent.id ? agent.thought : null);

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
                    className="absolute bottom-11 left-1/2 transform -translate-x-1/2 w-52 p-2.5 rounded-xl border border-cyan-400 bg-slate-900/95 backdrop-blur-md shadow-2xl text-[11px] leading-tight z-30 animate-pop-bubble cursor-pointer"
                    onClick={() => onSelectAgent(agent)}
                  >
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-1">
                      <span className="font-semibold text-cyan-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                        {agent.name}
                      </span>
                      <span>{agent.tokenUsage}</span>
                    </div>
                    <p className="line-clamp-3 text-slate-100 font-medium">{speechText}</p>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-cyan-400 rotate-45"></div>
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
                  {/* Outer glowing halo */}
                  <div 
                    className="absolute -inset-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: agent.haloColor }}
                  />

                  {/* Character Avatar with Emoji expression */}
                  <div className={`relative w-11 h-11 rounded-full ${agent.avatarColor} border-2 ${agent.borderColor} flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 active:scale-95`}>
                    <span className="text-lg drop-shadow select-none">{agent.face || '🤖'}</span>
                    
                    {/* Status Dot */}
                    <span className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${
                      pos.isWalking 
                        ? 'bg-amber-400 animate-ping' 
                        : agent.status === 'active' 
                        ? 'bg-emerald-400 animate-pulse' 
                        : 'bg-slate-500'
                    }`} />
                  </div>

                  {/* Character Name Tag */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-slate-900/90 border border-slate-700/80 px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-200 tracking-tight shadow group-hover:border-cyan-400 transition-colors">
                    {agent.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
