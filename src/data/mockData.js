export const INITIAL_CLIENTS = [
  {
    id: 'c1',
    name: 'Tomato Boy 番茄仔',
    category: 'KL沙巴海鲜番茄粉 (下周新开张)',
    avatar: '🍅',
    platforms: ['Facebook', 'Instagram', 'TikTok', '小红书'],
    todayGoal: '下周新开张首发：1 条 15s 狂流口水海鲜短视频 + 1 套 KL 探店大字图文',
    progress: 92,
    status: 'review_ready',
    activePostType: '15s_video',
    brandTone: '浓郁鲜红老坛番茄汤底、生猛老虎虾/鲜鱿/鱼片、食欲拉满、新店开张福利'
  },
  {
    id: 'w1',
    name: 'Uncle Lim 瓦煲肉骨茶',
    category: 'KL甲洞老字号肉骨茶',
    avatar: '🍲',
    platforms: ['Facebook', '小红书', 'TikTok'],
    todayGoal: '15s 药膳沸腾探店视频 + FB 爆款打卡贴',
    progress: 25,
    status: 'review_ready',
    activePostType: '15s_video',
    brandTone: '30年祖传秘方药膳、大块排骨与酥脆油条、古早味情怀'
  },
  {
    id: 'w2',
    name: 'DurianBB 榴莲甜品工坊',
    category: '武吉免登旗舰店',
    avatar: '🍈',
    platforms: ['Instagram', '小红书', 'TikTok'],
    todayGoal: '猫山王纯果肉爆浆冰淇淋视频 + Seedream 摄影图',
    progress: 15,
    status: 'in_production',
    activePostType: '15s_video',
    brandTone: '顶级猫山王D197、金黄爆浆、年轻潮酷打卡'
  },
  {
    id: 'c2',
    name: 'Zenith Coffee',
    category: '精品咖啡连锁',
    avatar: '☕',
    platforms: ['小红书', 'Instagram', 'Facebook'],
    todayGoal: '1 套手冲避坑干货轮播图 (40%份额)',
    progress: 95,
    status: 'review_ready',
    activePostType: 'image_carousel',
    brandTone: '美学生活方式、保姆级保真教程、文艺松弛感'
  }
];

// 顾客接洽部：等候服务大厅与签约客户队列
export const WAITING_CLIENTS = [
  {
    id: 'c1',
    name: 'Tomato Boy 番茄仔',
    category: 'KL沙巴海鲜番茄粉',
    avatar: '🍅',
    status: 'active',
    waitTime: '正在四部门生产中',
    priority: '最高 - 下周正式开张',
    progress: 92,
    service: '60% 15s 短视频 (Flow+Kling+Seedance+Suno) + 40% 小红书图文 (GPT Image+Seedream)',
    brief: '大马 KL 首家正宗沙巴老坛番茄海鲜汤粉，鲜虾鱼片爆汁，下周新店开张大促销。'
  },
  {
    id: 'w1',
    name: 'Uncle Lim 瓦煲肉骨茶',
    category: 'KL甲洞老字号肉骨茶',
    avatar: '🍲',
    status: 'waiting',
    waitTime: '排队 15 分钟',
    priority: '紧急 - 下周试营业',
    progress: 25,
    service: '15s 药膳沸腾探店视频 + FB 爆款打卡贴',
    brief: '30年祖传秘方药膳瓦煲肉骨茶，大块排骨与油条，需强化老字号醇厚食欲感。'
  },
  {
    id: 'w2',
    name: 'DurianBB 榴莲甜品工坊',
    category: '武吉免登旗舰店',
    avatar: '🍈',
    status: 'waiting',
    waitTime: '排队 28 分钟',
    priority: '高 - 旺季特推',
    progress: 15,
    service: '15s 猫山王冰淇淋物理动作视频 + Seedream 摄影美学图',
    brief: '纯正猫山王D197榴莲果肉爆浆泡芙与手作冰淇淋，主攻年轻游客与情侣打卡。'
  },
  {
    id: 'w3',
    name: '南洋经典 Kopitiam 1978',
    category: '传统炭烤吐司与白咖啡',
    avatar: '☕',
    status: 'waiting',
    waitTime: '排队 42 分钟',
    priority: '常规日更托管',
    progress: 0,
    service: '40% 深度复古图文 + 怀旧拉咖啡文案',
    brief: '老街情怀南洋茶室，半熟蛋、牛油雪花烤面包与手拉浓郁白咖啡。'
  }
];

// Director (You) sitting in Meeting Room
export const DIRECTOR_DATA = {
  id: 'human_director',
  name: '你 (Studio Director)',
  title: '业务主理人 / 创意总监',
  x: 1095,
  y: 155,
  avatarEmoji: '👑',
  avatarBg: 'bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500',
  thought: '👋 欢迎！接洽部随时有新客户排队，点击【顾客等候大厅】即可一键接单下发！'
};

// 5 大核心业务部门定义
export const DEPARTMENTS = [
  { id: 'reception', name: '顾客接洽部', icon: '🛎️', color: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-950/15' },
  { id: 'market', name: '市场分析部', icon: '📊', color: 'text-teal-400', border: 'border-teal-500/30', bg: 'bg-teal-950/15' },
  { id: 'copy', name: '文案脚本部', icon: '✍️', color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-950/15' },
  { id: 'design', name: '视觉设计部', icon: '🎨', color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-950/15' },
  { id: 'production', name: '视听制作部', icon: '🎬', color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-950/15' }
];

export const INITIAL_AGENTS = [
  // ── 1. 顾客接洽部门 (Client Reception & Intake Dept) ── (Col 1-3, Row 1-3)
  {
    id: 'client_concierge',
    name: 'Client_Concierge',
    face: '🛎️',
    dept: 'reception',
    deptName: '顾客接洽部',
    role: 'VIP 客户接洽顾问',
    avatarColor: 'bg-yellow-600',
    borderColor: 'border-yellow-400',
    haloColor: 'rgba(250, 204, 21, 0.45)',
    status: 'active',
    homeX: 100,
    homeY: 105,
    x: 100,
    y: 105,
    currentTask: '审查 Uncle Lim 肉骨茶与 DurianBB 的品牌卖点与素材库',
    thought: '🛎️ 正在等候厅接待客户！Uncle Lim 瓦煲肉骨茶资料已审核完毕，随时可派单给文案部！',
    tokenUsage: '12.8k',
    model: 'GPT-4o'
  },
  {
    id: 'queue_manager',
    name: 'Queue_Manager',
    face: '📋',
    dept: 'reception',
    deptName: '顾客接洽部',
    role: '排期调度专员',
    avatarColor: 'bg-amber-600',
    borderColor: 'border-amber-400',
    haloColor: 'rgba(217, 119, 6, 0.4)',
    status: 'active',
    homeX: 235,
    homeY: 105,
    x: 235,
    y: 105,
    currentTask: '监控 3 家新客户等候队列：肉骨茶、榴莲工坊、南洋白咖啡',
    thought: '📋 接洽部等候队列就绪！已对齐各客户优先级，支持总监一键接单下发！',
    tokenUsage: '11.5k',
    model: 'Claude 3.5 Sonnet'
  },

  // ── 2. 市场分析部门 (Market Intelligence Dept) ── (Col 1-3, Row 4-6)
  {
    id: 'trend_scout',
    name: 'Trend_Scout',
    face: '👀',
    dept: 'market',
    deptName: '市场分析部',
    role: '全网热点嗅探',
    avatarColor: 'bg-teal-500',
    borderColor: 'border-teal-400',
    haloColor: 'rgba(45, 212, 191, 0.45)',
    status: 'active',
    homeX: 100,
    homeY: 395,
    x: 100,
    y: 395,
    currentTask: '抓取 KL 华裔美食圈 #KLFoodie #吉隆坡新开 飙升词',
    thought: '📊 发现大马美食词 #沙巴海鲜粉 搜索量月环比 +185%，已通知文案部抢占！',
    tokenUsage: '16.4k',
    model: 'Gemini 1.5 Pro'
  },
  {
    id: 'insight_oracle',
    name: 'Insight_Oracle',
    face: '📈',
    dept: 'market',
    deptName: '市场分析部',
    role: '数据留存归因与调优',
    avatarColor: 'bg-emerald-500',
    borderColor: 'border-emerald-400',
    haloColor: 'rgba(52, 211, 153, 0.4)',
    status: 'active',
    homeX: 235,
    homeY: 395,
    x: 235,
    y: 395,
    currentTask: '分析昨日美食探店 15s 完播衰减与 FB 评论 @ 互动率',
    thought: '📊 归因总结：前 3 秒展现大铁锅沸腾热气可降低跳出率 26%，指令已反哺！',
    tokenUsage: '28.1k',
    model: 'Claude 3.5 Sonnet'
  },

  // ── 3. 文案脚本部门 (Copywriting & Script Dept) ── (Col 4-6, Row 1-3)
  {
    id: 'script_master',
    name: 'Script_Master',
    face: '✍️',
    dept: 'copy',
    deptName: '文案脚本部',
    role: '15秒黄金分镜架构师',
    avatarColor: 'bg-amber-500',
    borderColor: 'border-amber-400',
    haloColor: 'rgba(251, 191, 36, 0.45)',
    status: 'active',
    homeX: 410,
    homeY: 125,
    x: 410,
    y: 125,
    currentTask: '拆解 Tomato Boy 15s 三段式脚本：Hook / 夹粉 / 开张福利',
    thought: '📝 0~3s 痛点台词已敲定：“别再去沙巴排队了！”，分镜 Prompt 已指派视听部！',
    tokenUsage: '35.8k',
    model: 'GPT-4o'
  },
  {
    id: 'viral_copywriter',
    name: 'Viral_Copywriter',
    face: '💬',
    dept: 'copy',
    deptName: '文案脚本部',
    role: '社媒种草文案师',
    avatarColor: 'bg-orange-500',
    borderColor: 'border-orange-400',
    haloColor: 'rgba(251, 146, 60, 0.4)',
    status: 'active',
    homeX: 545,
    homeY: 125,
    x: 545,
    y: 125,
    currentTask: '生成 FB 互动圈友文案与小红书垂涎欲滴 Emoji 排版',
    thought: '✨ 文案已注入大马本地俚语：“Jom 冲去吃”、“鲜到直跺脚”！',
    tokenUsage: '19.2k',
    model: 'Claude 3.5 Sonnet'
  },

  // ── 4. 视觉设计部门 (Visual Design Dept - GPT Image & Seedream) ── (Col 4-6, Row 4-6)
  {
    id: 'gpt_image_master',
    name: 'GPT_Image_Master',
    face: '🖼️',
    dept: 'design',
    deptName: '视觉设计部',
    role: '主力大字封面 (GPT Image)',
    avatarColor: 'bg-rose-500',
    borderColor: 'border-rose-400',
    haloColor: 'rgba(251, 113, 133, 0.5)',
    status: 'active',
    homeX: 375,
    homeY: 395,
    x: 375,
    y: 395,
    currentTask: 'GPT Image 直出 40% 小红书 3:4 爆款高对比大字报封面',
    thought: '🎨 GPT Image 直出完成！“KL终于吃到了！超生猛海鲜番茄粉”大字锐利醒目！',
    tokenUsage: '34.2k',
    model: 'GPT Image / DALL-E 3'
  },
  {
    id: 'seedream_artist',
    name: 'Seedream_Artist',
    face: '🌱',
    dept: 'design',
    deptName: '视觉设计部',
    role: '美学摄影与质感画师 (Seedream)',
    avatarColor: 'bg-pink-500',
    borderColor: 'border-pink-400',
    haloColor: 'rgba(244, 114, 182, 0.5)',
    status: 'active',
    homeX: 475,
    homeY: 395,
    x: 475,
    y: 395,
    currentTask: 'Seedream 生成摄影级海鲜食材光泽、浓郁番茄慢熬质感大片',
    thought: '🌱 Seedream 美学光影已渲染：生猛老虎虾晶莹剔透，色泽温暖饱和，食欲拉满！',
    tokenUsage: '31.5k',
    model: 'Seedream 2.0 / 3.0'
  },
  {
    id: 'higgsfield_vision',
    name: 'Higgsfield_Vision',
    face: '🪐',
    dept: 'design',
    deptName: '视觉设计部',
    role: '特效视觉合成 (Higgsfield)',
    avatarColor: 'bg-fuchsia-500',
    borderColor: 'border-fuchsia-400',
    haloColor: 'rgba(217, 70, 239, 0.4)',
    status: 'idle',
    homeX: 575,
    homeY: 395,
    x: 575,
    y: 395,
    currentTask: '辅助图文合成微观高光质感与艺术特效',
    thought: '🪐 辅助图文特效就绪，随时合成高阶视觉背景与排版细节。',
    tokenUsage: '14.1k',
    model: 'Higgsfield Studio'
  },

  // ── 5. 视听制作部门 (AV Production Dept - Flow / Kling / Seedance / Suno) ── (Col 7-9, Row 1-6)
  {
    id: 'google_flow_op',
    name: 'Google_Flow_Op',
    face: '🌊',
    dept: 'production',
    deptName: '视听制作部',
    role: '主力视频流 (Google Flow)',
    avatarColor: 'bg-sky-500',
    borderColor: 'border-sky-400',
    haloColor: 'rgba(56, 189, 248, 0.5)',
    status: 'active',
    homeX: 700,
    homeY: 145,
    x: 700,
    y: 145,
    currentTask: 'Google Flow 主线管线生成与 15s 全局控速总装',
    thought: '🌊 Google Flow 正在串联主镜头流程，并在第 12 秒稳稳推入 KL 门店开张信息！',
    tokenUsage: '53.1k',
    model: 'Google Flow / Veo'
  },
  {
    id: 'kling_master',
    name: 'Kling_Aesthetic',
    face: '✨',
    dept: 'production',
    deptName: '视听制作部',
    role: '高美感画面专精 (Kling AI)',
    avatarColor: 'bg-cyan-500',
    borderColor: 'border-cyan-400',
    haloColor: 'rgba(34, 211, 238, 0.5)',
    status: 'active',
    homeX: 840,
    homeY: 145,
    x: 840,
    y: 145,
    currentTask: '可灵 Kling 渲染 0~3s 大铁锅沸腾红亮番茄汤与热气美感',
    thought: '🎬 0~3s Kling 美感镜头生成完毕！沸腾白雾蒸腾，红亮汤底质感极度诱人！',
    tokenUsage: '39.8k',
    model: 'Kling AI 1.5 Pro'
  },
  {
    id: 'seedance_motion',
    name: 'Seedance_Motion',
    face: '🎯',
    dept: 'production',
    deptName: '视听制作部',
    role: '产品动作运镜 (Seedance 2.5)',
    avatarColor: 'bg-amber-500',
    borderColor: 'border-amber-400',
    haloColor: 'rgba(245, 158, 11, 0.5)',
    status: 'active',
    homeX: 700,
    homeY: 395,
    x: 700,
    y: 395,
    currentTask: 'Higgsfield Seedance 2.5 夹粉拉丝与剥虾蘸酱物理动作',
    thought: '⚡ Seedance 2.5 动作运镜完成：筷子高挑米粉与金桔辣酱蘸取物理动态完美！',
    tokenUsage: '44.2k',
    model: 'Higgsfield Seedance 2.5'
  },
  {
    id: 'suno_music_op',
    name: 'Suno_Music_Op',
    face: '🎵',
    dept: 'production',
    deptName: '视听制作部',
    role: '卡点音乐 (Suno & Flow)',
    avatarColor: 'bg-violet-500',
    borderColor: 'border-violet-400',
    haloColor: 'rgba(167, 139, 250, 0.45)',
    status: 'active',
    homeX: 840,
    homeY: 395,
    x: 840,
    y: 395,
    currentTask: 'Suno v3.5 生成欢快探店神曲，第 3.0s 精准 Beat Drop',
    thought: '🎵 Suno 爆款卡点旋律已就绪！第 3.0 秒精准 Beat Drop 完美扣合夹粉瞬间！',
    tokenUsage: '23.6k',
    model: 'Suno v3.5 / Flow Music'
  },

  // ── 6. 战略决策会议室 (Executive Boardroom) ── (Col 10-12, Row 1-6)
  {
    id: 'ai_cmo',
    name: 'AI_CMO',
    face: '🧠',
    dept: 'boardroom',
    deptName: '战略决策室',
    role: '首席策略运营总监',
    avatarColor: 'bg-purple-600',
    borderColor: 'border-purple-400',
    haloColor: 'rgba(192, 132, 252, 0.6)',
    status: 'active',
    homeX: 1180,
    homeY: 220,
    x: 1180,
    y: 220,
    currentTask: '统筹接洽部、市场、文案、设计、视听协同闭环',
    thought: '🧠 报告总监：五大部门全部就位，等候厅客户储备充足，Tomato Boy 开张宣发阵型拉满！',
    tokenUsage: '58.4k',
    model: 'o3-mini / Claude 3.5'
  }
];

// 会议室环绕圆桌坐席坐标 (围绕圆心 1095, 350 均衡分布)
export const MEETING_SEATS = {
  human_director: { x: 1095, y: 220 },
  ai_cmo: { x: 1185, y: 275 },
  google_flow_op: { x: 1205, y: 355 },
  seedance_motion: { x: 1175, y: 435 },
  seedream_artist: { x: 1095, y: 465 },
  script_master: { x: 1015, y: 435 },
  trend_scout: { x: 985, y: 355 },
  client_concierge: { x: 1005, y: 275 }
};

// 四大部门与接洽部向总监汇报开张方案的圆桌剧本
export const MEETING_DIALOGUES = [
  {
    speakerId: 'human_director',
    text: '“各部门注意！下周 Tomato Boy 番茄仔在 KL 新开张，汇报各自战备与客户接洽进度！”'
  },
  {
    speakerId: 'client_concierge',
    text: '“【顾客接洽部】汇报：Tomato Boy 正全速生产中！等候厅另有 Uncle Lim 肉骨茶与 DurianBB 等 3 家新客户排队就绪，随时可并线接入！”'
  },
  {
    speakerId: 'trend_scout',
    text: '“【市场分析部】汇报：KL 华裔美食圈数据已锁定！#KLFoodie 与 #吉隆坡新开 飙升热词已输送给文案部！”'
  },
  {
    speakerId: 'script_master',
    text: '“【文案脚本部】汇报：15s 黄金脚本敲定！0~3s 痛点反转‘别飞沙巴了’已分发给设计部与视听部！”'
  },
  {
    speakerId: 'seedream_artist',
    text: '“【视觉设计部】汇报：GPT Image 直出大字封面，Seedream 渲染摄影级鲜虾光泽，美学质感已拉满！”'
  },
  {
    speakerId: 'google_flow_op',
    text: '“【视听制作部】汇报：Google Flow 串联全片，Kling 沸腾热气 + Seedance 夹粉拉丝 + Suno 3s 卡点已合成！”'
  },
  {
    speakerId: 'ai_cmo',
    text: '“报告总监：接洽部、市场、文案、设计、视听全部协同完毕！请总监在审核台最后拍板！”'
  }
];

// 跨部门动态连线 (从接洽 ──> 市场 ──> 文案 ──> 设计/视听 ──> 策略中枢)
export const INITIAL_LINKS = [
  { id: 'l1', from: 'client_concierge', to: 'trend_scout', label: '新客档案派单' },
  { id: 'l2', from: 'trend_scout', to: 'script_master', label: '市场热词投递' },
  { id: 'l3', from: 'script_master', to: 'gpt_image_master', label: '小红书封面需求' },
  { id: 'l4', from: 'script_master', to: 'google_flow_op', label: '15s视频脚本分发' },
  { id: 'l5', from: 'gpt_image_master', to: 'ai_cmo', label: '图文大片呈报' },
  { id: 'l6', from: 'google_flow_op', to: 'ai_cmo', label: '视听成片递交' },
  { id: 'l7', from: 'insight_oracle', to: 'queue_manager', label: '排期效能回流' }
];

export const PENDING_APPROVALS = [
  {
    id: 'app_1',
    clientId: 'c1',
    clientName: 'Tomato Boy 番茄仔',
    type: '15s_video',
    title: '【15s新店开张首发】不用飞沙巴！KL终于能吃到这碗生猛海鲜番茄粉了！',
    platforms: ['Facebook', 'Instagram Reels', 'TikTok', '小红书'],
    duration: '14.8s',
    ratio: '9:16',
    estimatedRetention: '54.2%',
    predictedViews: '150k ~ 320k',
    videoEngineOverview: 'Google Flow 控速 + Kling 沸腾热气美感 + Seedance 2.5 夹粉动作 + Suno 卡点',
    scriptStructure: [
      {
        phase: '0~3s 黄金 Hook (Kling 美感专精)',
        spokenText: '别再去沙巴排队了！KL竟然把一整锅生猛海鲜倒进浓郁番茄汤里！',
        visualPrompt: 'Kling 1.5 极度诱人慢动作：大铁锅内沸腾滚烫的鲜红老坛番茄浓汤，升腾诱人白雾热气，生猛老虎虾、鲜鱿、嫩鱼片层层叠叠堆满画面！',
        engineTag: 'Kling AI 1.5 Pro (沸腾热气与红亮光泽)',
        durationSec: 3.0
      },
      {
        phase: '3~10s 核心演示 (Seedance 2.5 动作专精)',
        spokenText: '现剥大老虎虾、脆爽鱿鱼、滑嫩鱼片，配上熬足6小时的沙巴番茄汤，吸一口粉鲜到骨子里！',
        visualPrompt: 'Higgsfield Seedance 2.5 物理动作：一双筷子精准将吸饱浓郁红汤的滑爽米粉高高挑起拉丝，紧接着慢动作手持剥开金黄虾肉蘸入特制金桔辣椒酱！',
        engineTag: 'Higgsfield Seedance 2.5 (挑粉拉丝与蘸酱动作)',
        durationSec: 7.0
      },
      {
        phase: '10~15s 诱人开张 CTA (Google Flow 总成)',
        spokenText: '下周正式开张！全场海鲜套餐限时特惠，带上你的吉隆坡饭搭子直接冲！',
        visualPrompt: 'Google Flow 镜头拉远展现摆满各种不同海鲜搭配的大合影，定格打出 KL 门市地址与限时开张福利浮层！',
        engineTag: 'Google Flow 主线总成',
        durationSec: 4.8
      }
    ],
    videoMockUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    copyCaption: '🔥 KL的吃货赶紧收藏！不用大老远飞沙巴，正宗【Tomato Boy 番茄仔】海鲜番茄粉下周正式在 KL 隆重开张试营业啦！🍅🦐 每日新鲜直运的生猛老虎虾、大花枝鱿鱼、鲜嫩鱼片，配上熬足6小时的老坛番茄浓汤，酸爽鲜甜超开胃！下周开张限时粉丝专属福利，快 @ 你的饭搭子一起去打卡！📍详细地址与营业时间见第一条评论👇 #KLFoodie #吉隆坡美食 #TomatoBoySeafood #番茄仔海鲜粉 #吉隆坡新开 #沙巴海鲜粉 #KL探店 #马来西亚美食',
    hashtags: ['#KLFoodie', '#吉隆坡美食', '#TomatoBoySeafood', '#番茄仔海鲜粉', '#沙巴海鲜粉', '#KL探店']
  },
  {
    id: 'app_2',
    clientId: 'c2',
    clientName: 'Zenith Coffee',
    type: 'image_carousel',
    title: '【40%干货图文】手冲咖啡避坑指南：90%新手都在错的3个点',
    platforms: ['小红书', 'Instagram', 'Facebook'],
    ratio: '3:4 (小红书) / 1:1 (IG)',
    predictedViews: '32k ~ 60k',
    videoEngineOverview: '设计部 GPT Image 大字封面 + Seedream 美学摄影质感图',
    slides: [
      {
        index: 1,
        type: 'cover',
        title: '劝退警告！这3个错误毁了你几百块的豆子',
        sub: '手冲冠军不会告诉你的萃取真相',
        tag: 'GPT Image 直出大字封面',
        imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
      },
      {
        index: 2,
        type: 'content',
        title: '错误一：水温无脑拉到 95°C',
        sub: '深烘豆苦涩杂味全出来！黄金区间：浅烘91°C，深烘86°C',
        tag: 'Seedream 摄影级萃取质感',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
      },
      {
        index: 3,
        type: 'content',
        title: '错误二：闷蒸时间太随意',
        sub: '不排气直接注水，萃取率暴跌 40%。看准鼓包完全回落（约30秒）',
        tag: 'Seedream 摄影级微距水流',
        imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80'
      },
      {
        index: 4,
        type: 'cta',
        title: '私信回复【参数表】免费领',
        sub: '整理了12款经典产区研磨度+水温对照表，新手照着冲绝不翻车',
        tag: '转化引流卡片',
        imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80'
      }
    ],
    copyCaption: '花了上百块买精品浅烘瑰夏，冲出来又酸又涩像中药？新手先自查这3个致命错误！建议点赞收藏对照冲煮☕ 评论区扣【参数】无偿领高清产区表！ #手冲咖啡 #咖啡小白入门 #手冲参数 #打工人续命咖啡 #咖啡生活',
    hashtags: ['#手冲咖啡', '#咖啡日常', '#小红书干货', '#CoffeeGram']
  }
];

export const LIVE_LOGS = [
  { time: '16:48:12', agent: 'Client_Concierge', text: '【顾客接洽部】Uncle Lim 瓦煲肉骨茶与 DurianBB 已排入等候服务大厅。' },
  { time: '16:48:45', agent: 'Trend_Scout', text: '【市场分析部】捕获 KL 飙升词「沙巴海鲜番茄粉」，自动投送脚本工位。' },
  { time: '16:49:10', agent: 'Script_Master', text: '【文案脚本部】生成 Tomato Boy 15s 脚本，分派视听部与设计部。' },
  { time: '16:49:33', agent: 'GPT_Image_Master', text: '【视觉设计部】GPT Image 直出小红书 3:4 避坑大字封面，排版完成。' },
  { time: '16:49:50', agent: 'Seedream_Artist', text: '【视觉设计部】Seedream 生成摄影级海鲜光泽与质感海报，细节极佳。' },
  { time: '16:50:05', agent: 'Seedance_Motion', text: '【视听制作部】Seedance 2.5 渲染夹粉与剥虾蘸酱物理动作，运动真实。' },
  { time: '16:50:22', agent: 'Google_Flow_Op', text: '【视听制作部】Google Flow 15s 全片总成压制完毕，移交【审核工作台】。' }
];
