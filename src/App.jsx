import React, { useState } from 'react';
import Header from './components/Header';
import StudioCanvas from './components/StudioCanvas';
import ApprovalModal from './components/ApprovalModal';
import AgentDetailModal from './components/AgentDetailModal';
import InsightsDrawer from './components/InsightsDrawer';
import EventTicker from './components/EventTicker';
import ClientQueueModal from './components/ClientQueueModal';
import SparkResearchDeskModal from './components/SparkResearchDeskModal';

import { 
  INITIAL_CLIENTS, 
  WAITING_CLIENTS,
  INITIAL_AGENTS, 
  INITIAL_LINKS, 
  PENDING_APPROVALS, 
  LIVE_LOGS 
} from './data/mockData';

export default function App() {
  const [clients, setClients] = useState(INITIAL_CLIENTS);
  const [waitingClients, setWaitingClients] = useState(WAITING_CLIENTS);
  const [agents, setAgents] = useState(INITIAL_AGENTS);
  const [links, setLinks] = useState(INITIAL_LINKS);
  const [approvals, setApprovals] = useState(PENDING_APPROVALS);
  const [logs, setLogs] = useState(LIVE_LOGS);

  const [selectedClientId, setSelectedClientId] = useState('c1');
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isApprovalOpen, setIsApprovalOpen] = useState(false);
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [isResearchDeskOpen, setIsResearchDeskOpen] = useState(false);
  const [selectedApprovalId, setSelectedApprovalId] = useState('app_1');
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  // Approve a post
  const handleApprovePost = (id) => {
    setApprovals(prev => prev.filter(item => item.id !== id));
    
    // Add success log
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    const newLog = {
      time: timeStr,
      agent: 'Human_Director',
      text: `已通过内容审核并授权！TikTok / Reels / 小红书 自动排期发布已就绪。`
    };
    setLogs(prev => [...prev, newLog]);

    // Update client progress
    setClients(prev => prev.map(c => {
      if (c.id === selectedClientId) {
        return { ...c, progress: 100, status: 'published' };
      }
      return c;
    }));
  };

  // Trigger manual simulation run
  const handleTriggerRun = () => {
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    // Update agents thoughts
    setAgents(prev => prev.map(a => {
      if (a.id === 'trend_scout') {
        return {
          ...a,
          thought: '🔥 抓取到小红书今日上升词 #熬夜自救指南 检索量环比 +310%，已投喂文案工位！',
          status: 'active'
        };
      }
      if (a.id === 'script_master') {
        return {
          ...a,
          thought: '✍️ 0~3s 新反常识脚本构建中：以“别急着撕面膜”作为阻断滑走 Hook！',
          status: 'active'
        };
      }
      return a;
    }));

    setLogs(prev => [
      ...prev,
      {
        time: timeStr,
        agent: 'Swarm_Master',
        text: '收到人工手动触发指令，各工位已启动并发检索与 15s 分镜生成！'
      }
    ]);
  };

  // Test single agent
  const handleTestAgent = (agentId) => {
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    setLogs(prev => [
      ...prev,
      {
        time: timeStr,
        agent: agentId,
        text: `接收到独立调度指令，正在重新执行该节点的单项工具调用...`
      }
    ]);
  };

  // Open approval specifically for a client
  const handleOpenApprovalForClient = (clientId) => {
    const item = approvals.find(a => a.clientId === clientId) || approvals[0];
    if (item) {
      setSelectedApprovalId(item.id);
    }
    setIsApprovalOpen(true);
  };

  // Activate a queued client from Reception into Production
  const handleActivateClient = (clientId) => {
    const target = waitingClients.find(c => c.id === clientId);
    if (!target) return;

    setSelectedClientId(clientId);
    setWaitingClients(prev => prev.map(c => {
      if (c.id === clientId) return { ...c, status: 'active', waitTime: '正在四部门生产中' };
      return c;
    }));

    // If not in clients list, add it
    if (!clients.some(c => c.id === clientId)) {
      setClients(prev => [...prev, {
        id: target.id,
        name: target.name,
        category: target.category,
        avatar: target.avatar,
        platforms: ['Facebook', 'Instagram', '小红书'],
        todayGoal: target.service,
        progress: 20,
        status: 'in_production',
        activePostType: '15s_video',
        brandTone: target.brief
      }]);
    }

    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    setLogs(prev => [
      ...prev,
      {
        time: timeStr,
        agent: 'Client_Concierge',
        text: `【顾客接洽部】已接入「${target.name}」！市场、文案、设计、视听已启动专属流水线！`
      }
    ]);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#090d16] text-slate-100 font-sans">
      {/* Top Header */}
      <Header
        clients={clients}
        selectedClientId={selectedClientId}
        onSelectClient={setSelectedClientId}
        onOpenApproval={() => setIsApprovalOpen(true)}
        pendingCount={approvals.length}
        onOpenInsights={() => setIsInsightsOpen(true)}
        onOpenResearchDesk={() => setIsResearchDeskOpen(true)}
        onTriggerRun={handleTriggerRun}
      />

      {/* Main Virtual Office Floor Plan Canvas */}
      <main className="flex-1 relative overflow-hidden flex flex-col justify-center">
        <StudioCanvas
          agents={agents}
          links={links}
          onSelectAgent={setSelectedAgent}
          activeClientId={selectedClientId}
          clients={clients}
          waitingClients={waitingClients}
          onOpenApprovalForClient={handleOpenApprovalForClient}
          onOpenResearchDesk={() => setIsResearchDeskOpen(true)}
          onTriggerLog={(agent, text) => {
            const now = new Date();
            const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
            setLogs(prev => [...prev, { time: timeStr, agent, text }]);
          }}
        />
      </main>

      {/* Bottom Live Event Stream */}
      <EventTicker logs={logs} />

      {/* Client Reception & Waiting Queue Modal */}
      <ClientQueueModal
        isOpen={isQueueOpen}
        onClose={() => setIsQueueOpen(false)}
        waitingClients={waitingClients}
        activeClientId={selectedClientId}
        onActivateClient={handleActivateClient}
      />

      {/* SPARK AI Research Desk Modal (Screenshot 1-to-1 Interactive Center) */}
      <SparkResearchDeskModal
        isOpen={isResearchDeskOpen}
        onClose={() => setIsResearchDeskOpen(false)}
        onBroadcastSuccess={(pillarTitle, channel) => {
          const now = new Date();
          const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
          setLogs(prev => [
            ...prev,
            {
              time: timeStr,
              agent: 'TG_Topic_Bot',
              text: `🚀 [SPARK ONE] 成功广播投研研报【${pillarTitle}】至 ${channel === 'both' ? '✈️ Telegram (#5 SPARK AI) 与 𝕏 (@sparkone_global)' : channel}！已分发 11 国语言！`
            }
          ]);
        }}
        onTriggerLog={(agent, text) => {
          const now = new Date();
          const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
          setLogs(prev => [...prev, { time: timeStr, agent, text }]);
        }}
      />

      {/* Human-in-the-Loop Content Approval Modal (15s Video + Carousel) */}
      <ApprovalModal
        isOpen={isApprovalOpen}
        onClose={() => setIsApprovalOpen(false)}
        approvalItems={approvals}
        selectedItemId={selectedApprovalId}
        onApprovePost={handleApprovePost}
      />

      {/* Agent Detail Inspector Modal */}
      <AgentDetailModal
        agent={selectedAgent}
        onClose={() => setSelectedAgent(null)}
        onTestAgent={handleTestAgent}
      />

      {/* Retention Curve & Tomorrow Strategy Insights Drawer */}
      <InsightsDrawer
        isOpen={isInsightsOpen}
        onClose={() => setIsInsightsOpen(false)}
        onApplyStrategy={() => {
          setLogs(prev => [
            ...prev,
            {
              time: 'JUST NOW',
              agent: 'AI_CMO',
              text: '已将《明日 Post 调优策略》成功注入全员 Prompt 规则库！'
            }
          ]);
        }}
      />
    </div>
  );
}
