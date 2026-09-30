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
  },
  {
    id: 'c3',
    name: 'NovaSaaS AI',
    category: 'AI 生产力工具',
    avatar: '⚡',
    platforms: ['TikTok', 'Instagram', 'Facebook'],
    todayGoal: '1 条 15s 效率翻倍短视频演示',
    progress: 40,
    status: 'in_production',
    activePostType: '15s_video',
    brandTone: '快节奏、痛点打击、高能对比、免费试用CTA'
  }
];

// Director (You) sitting in Meeting Room
export const DIRECTOR_DATA = {
  id: 'human_director',
  name: '你 (Studio Director)',
  title: '业务主理人 / 创意总监',
  x: 870,
  y: 110,
  avatarEmoji: '👑',
  avatarBg: 'bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500',
  thought: '👋 欢迎！点击上方【召集全员碰头会】，让 Google Flow、Kling、Higgsfield 和 GPT 团队来跟我汇报！'
};

export const INITIAL_AGENTS = [
  // ── Desk Zone: 策划与情报工位 ──
  {
    id: 'trend_scout',
    name: 'Trend_Scout',
    face: '👀',
    zone: 'desk',
    role: '全网热点嗅探',
    avatarColor: 'bg-emerald-500',
    borderColor: 'border-emerald-400',
    haloColor: 'rgba(52, 211, 153, 0.4)',
    status: 'active',
    homeX: 130,
    homeY: 130,
    x: 130,
    y: 130,
    currentTask: '抓取 TikTok #SkincareHack 及热门卡点音效',
    thought: '💡 发现 TikTok 音效 "Nightcore-Urgency" 完播率飙升至 64%！',
    tokenUsage: '14.2k',
    model: 'Gemini 1.5 Pro'
  },
  {
    id: 'redbook_radar',
    name: 'RedBook_Radar',
    face: '📕',
    zone: 'desk',
    role: '小红书爆款雷达',
    avatarColor: 'bg-rose-500',
    borderColor: 'border-rose-400',
    haloColor: 'rgba(251, 113, 133, 0.4)',
    status: 'active',
    homeX: 230,
    homeY: 130,
    x: 230,
    y: 130,
    currentTask: '分析小红书护肤 TOP 5% 笔记大字封面',
    thought: '💡 小红书 "大字警告+红叉" 封面 CTR 高达 9.8%，建议 GPT Image 套用！',
    tokenUsage: '18.9k',
    model: 'Claude 3.5 Sonnet'
  },
  {
    id: 'script_master',
    name: 'Script_Master',
    face: '✍️',
    zone: 'desk',
    role: '15秒黄金脚本师',
    avatarColor: 'bg-amber-500',
    borderColor: 'border-amber-400',
    haloColor: 'rgba(251, 191, 36, 0.4)',
    status: 'active',
    homeX: 130,
    homeY: 235,
    x: 130,
    y: 235,
    currentTask: '拆解 15s 分镜：Kling 美感镜头 + Higgsfield 产品动作',
    thought: '📝 0~3s 痛点台词锁定：“别再拿万元面霜当救命稻草！” 已指派对应视频模型！',
    tokenUsage: '32.1k',
    model: 'GPT-4o'
  },
  {
    id: 'copy_alchemist',
    name: 'Copy_Alchemist',
    face: '✨',
    zone: 'desk',
    role: '多平台文案排版师',
    avatarColor: 'bg-purple-500',
    borderColor: 'border-purple-400',
    haloColor: 'rgba(192, 132, 252, 0.4)',
    status: 'idle',
    homeX: 230,
    homeY: 235,
    x: 230,
    y: 235,
    currentTask: '小红书 Emoji 排版与 IG 双语文案生成完毕',
    thought: '✨ 标签库已更新：#熬夜护肤 #早C晚A #TikTokMadeMeBuyIt',
    tokenUsage: '11.5k',
    model: 'Claude 3.5 Sonnet'
  },

  // ── Production Studio: 视听制作基地 (按你的专属工具链定制) ──
  {
    id: 'google_flow_op',
    name: 'Google_Flow_Op',
    face: '🌊',
    zone: 'production',
    role: '主力视频生成流 (Google Flow)',
    avatarColor: 'bg-sky-500',
    borderColor: 'border-sky-400',
    haloColor: 'rgba(56, 189, 248, 0.5)',
    status: 'active',
    homeX: 380,
    homeY: 130,
    x: 380,
    y: 130,
    currentTask: 'Google Flow 生成主体 15s 流程与整体视频管线控制',
    thought: '🌊 Google Flow 正在串联主镜头流程，调度 Kling 与 Higgsfield 片段中！',
    tokenUsage: '51.2k',
    model: 'Google Flow / Veo Engine'
  },
  {
    id: 'kling_master',
    name: 'Kling_Aesthetic',
    face: '✨',
    zone: 'production',
    role: '高美感画面专精 (Kling AI)',
    avatarColor: 'bg-cyan-500',
    borderColor: 'border-cyan-400',
    haloColor: 'rgba(34, 211, 238, 0.5)',
    status: 'active',
    homeX: 470,
    homeY: 130,
    x: 470,
    y: 130,
    currentTask: '可灵 Kling 渲染 0~3s 面部素颜反差与琥珀高光美感特写',
    thought: '🎬 Kling 美感镜头生成完毕！光影层次极高，水光通透感拉满！',
    tokenUsage: '38.6k',
    model: 'Kling AI 1.5 Pro'
  },
  {
    id: 'seedance_motion',
    name: 'Seedance_Motion',
    face: '🎯',
    zone: 'production',
    role: '产品动作控制 (Higgsfield 2.5)',
    avatarColor: 'bg-amber-500',
    borderColor: 'border-amber-400',
    haloColor: 'rgba(245, 158, 11, 0.5)',
    status: 'active',
    homeX: 560,
    homeY: 130,
    x: 560,
    y: 130,
    currentTask: 'Higgsfield Seedance 2.5 物理级运镜：瓶身按压与微距爆珠',
    thought: '⚡ Seedance 2.5 动作轨迹已锁定：一泵挤出、精粹破裂扩散物理效果完美！',
    tokenUsage: '42.3k',
    model: 'Higgsfield Seedance 2.5'
  },
  {
    id: 'gpt_image_artist',
    name: 'GPT_Image_Master',
    face: '🖼️',
    zone: 'production',
    role: '主力图文生成 (GPT Image)',
    avatarColor: 'bg-emerald-500',
    borderColor: 'border-emerald-400',
    haloColor: 'rgba(16, 185, 129, 0.4)',
    status: 'active',
    homeX: 420,
    homeY: 235,
    x: 420,
    y: 235,
    currentTask: 'GPT Image 批量直出小红书 40% 爆款大字封面与知识卡',
    thought: '🎨 GPT Image 直出 3:4 封面！文案语义贴合度 100%，字体排版极其锐利。',
    tokenUsage: '28.1k',
    model: 'GPT Image / DALL-E 3'
  },
  {
    id: 'suno_music_op',
    name: 'Suno_Music_Op',
    face: '🎵',
    zone: 'production',
    role: '爆款音频与BGM (Suno & Flow Music)',
    avatarColor: 'bg-fuchsia-500',
    borderColor: 'border-fuchsia-400',
    haloColor: 'rgba(217, 70, 239, 0.45)',
    status: 'active',
    homeX: 335,
    homeY: 235,
    x: 335,
    y: 235,
    currentTask: 'Suno v3.5 生成 15s 情绪递进卡点，第 3 秒精准 Beat Drop',
    thought: '🎵 Suno 爆款卡点旋律已就绪！0~3s 悬疑推进，3s 节奏爆发，完美配合 Seedance 动作！',
    tokenUsage: '22.4k',
    model: 'Suno v3.5 / Google Flow Music'
  },
  {
    id: 'higgsfield_vision',
    name: 'Higgsfield_Vision',
    face: '🪐',
    zone: 'production',
    role: '特效视觉增强 (Higgsfield)',
    avatarColor: 'bg-pink-500',
    borderColor: 'border-pink-400',
    haloColor: 'rgba(236, 72, 153, 0.4)',
    status: 'idle',
    homeX: 520,
    homeY: 235,
    x: 520,
    y: 235,
    currentTask: 'Higgsfield 内置模型渲染微观分子结构背景与高级艺术特效',
    thought: '🪐 辅助图文特效就绪，随时为小红书笔记注入高级科幻微观质感。',
    tokenUsage: '16.5k',
    model: 'Higgsfield Studio'
  },

  // ── Meeting Zone: 策略圆桌 ──
  {
    id: 'ai_cmo',
    name: 'AI_CMO',
    face: '🧠',
    zone: 'meeting',
    role: '首席增长主脑',
    avatarColor: 'bg-violet-500',
    borderColor: 'border-violet-400',
    haloColor: 'rgba(167, 139, 250, 0.6)',
    status: 'active',
    homeX: 800,
    homeY: 180,
    x: 800,
    y: 180,
    currentTask: '调配 Google Flow / Kling / Seedance 算力与模型配比',
    thought: '🧠 报告总监：美感特写全给 Kling，产品操作全上 Seedance 2.5！',
    tokenUsage: '52.7k',
    model: 'o3-mini / Claude 3.5'
  },
  {
    id: 'insight_oracle',
    name: 'Insight_Oracle',
    face: '📊',
    zone: 'meeting',
    role: '数据归因与策略调优',
    avatarColor: 'bg-teal-500',
    borderColor: 'border-teal-400',
    haloColor: 'rgba(45, 212, 191, 0.4)',
    status: 'active',
    homeX: 940,
    homeY: 180,
    x: 940,
    y: 180,
    currentTask: '对比昨日 TikTok 与小红书 15s 视频前 3 秒留存率',
    thought: '📊 昨日数据：Kling 高美感封面 3s 留存 82%，Seedance 产品动作留存 63%！',
    tokenUsage: '38.4k',
    model: 'Gemini 1.5 Pro'
  },

  // ── Lounge & Standby Zone: 休闲与待命区 ──
  {
    id: 'standby_crawler',
    name: 'Standby_Crawler',
    face: '☕',
    zone: 'lounge',
    role: '备用舆情节点',
    avatarColor: 'bg-slate-600',
    borderColor: 'border-slate-500',
    haloColor: 'rgba(148, 163, 184, 0.2)',
    status: 'standby',
    homeX: 140,
    homeY: 375,
    x: 140,
    y: 375,
    currentTask: '待命监听中 (随时响应突发热点扩容)',
    thought: '☕ 在休闲吧台倒了杯手冲，正实时监控突发热点词...',
    tokenUsage: '1.2k',
    model: 'MiniMax'
  },
  {
    id: 'standby_localizer',
    name: 'Standby_Localizer',
    face: '🌐',
    zone: 'lounge',
    role: '海外本地化专家',
    avatarColor: 'bg-slate-600',
    borderColor: 'border-slate-500',
    haloColor: 'rgba(148, 163, 184, 0.2)',
    status: 'standby',
    homeX: 230,
    homeY: 375,
    x: 230,
    y: 375,
    currentTask: '多语言词库就绪 (北美英语/印尼/日韩)',
    thought: '🛋️ 在沙发区待命，随时支持跨境客户的多语言发版。',
    tokenUsage: '3.1k',
    model: 'GPT-4o mini'
  }
];

// 会议室环绕圆桌坐席坐标
export const MEETING_SEATS = {
  human_director: { x: 870, y: 110 },
  ai_cmo: { x: 800, y: 175 },
  insight_oracle: { x: 940, y: 175 },
  script_master: { x: 825, y: 255 },
  seedance_motion: { x: 915, y: 255 },
  google_flow_op: { x: 870, y: 275 },
  suno_music_op: { x: 775, y: 220 }
};

// 按照你专属工具箱定制的会议讨论剧本
export const MEETING_DIALOGUES = [
  {
    speakerId: 'human_director',
    text: '“各位，下周 Tomato Boy 番茄仔在 KL 正式开张宣传，沙巴海鲜番茄汤粉的 15s 短视频怎么打出爆款？”'
  },
  {
    speakerId: 'kling_master',
    text: '“总监！0~3s 开头交给我 Kling：大锅沸腾红亮番茄浓汤白雾升腾、生猛海鲜特写，深夜食欲瞬间拉满！”'
  },
  {
    speakerId: 'seedance_motion',
    text: '“3~10 秒的产品动作，我用 Higgsfield Seedance 2.5：筷子挑起吸汁米粉拉丝、剥虾蘸金桔辣椒，真实丝滑！”'
  },
  {
    speakerId: 'suno_music_op',
    text: '“总监！配乐用 Suno 生成欢快有食欲的 KL 探店卡点神曲，第 3.0 秒夹粉瞬间精准 Beat Drop！”'
  },
  {
    speakerId: 'google_flow_op',
    text: '“主力 15s 视频管线由我 Google Flow 全程跑通，尾部平滑拉出满桌海鲜大合影并打出 KL 门店福利！”'
  },
  {
    speakerId: 'gpt_image_artist',
    text: '“小红书与 FB 40% 的图文大字海报，我用 GPT Image 直接生成‘KL首家沙巴海鲜番茄粉’爆款封面！”'
  },
  {
    speakerId: 'ai_cmo',
    text: '“KL 本地美食圈势在必得！各位回工位开始批量渲染，15分钟后提交总监审核！”'
  }
];

// 动态连线 (从脚本到 Google Flow / Kling / Seedance / Suno / GPT Image)
export const INITIAL_LINKS = [
  { id: 'l1', from: 'trend_scout', to: 'script_master', label: '热门Hook投递' },
  { id: 'l2', from: 'script_master', to: 'google_flow_op', label: 'Google Flow 主线' },
  { id: 'l3', from: 'script_master', to: 'kling_master', label: 'Kling 美感特写' },
  { id: 'l4', from: 'script_master', to: 'seedance_motion', label: 'Seedance 动作运镜' },
  { id: 'l5', from: 'script_master', to: 'suno_music_op', label: 'Suno 卡点配乐' },
  { id: 'l6', from: 'redbook_radar', to: 'gpt_image_artist', label: 'GPT Image 出图' }
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
    videoEngineOverview: 'Google Flow 控速 + Kling 沸腾热气美感 + Seedance 2.5 夹粉蘸酱动作 + Suno 卡点',
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
    videoEngineOverview: '主力 GPT Image 直出 + Higgsfield 辅助艺术微观质感',
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
        tag: 'GPT Image 图表',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
      },
      {
        index: 3,
        type: 'content',
        title: '错误二：闷蒸时间太随意',
        sub: '不排气直接注水，萃取率暴跌 40%。看准鼓包完全回落（约30秒）',
        tag: 'Higgsfield 特效增强',
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
  { time: '16:48:12', agent: 'Insight_Oracle', text: '昨日数据归因：Kling 美感镜头 3s 留存 82.4%，Seedance 动作演示留存 63.1%！' },
  { time: '16:48:45', agent: 'Trend_Scout', text: '捕获 TikTok 飙升音效「Nightcore-Urgency」，自动投送脚本工位。' },
  { time: '16:49:10', agent: 'Script_Master', text: '生成 GlowSkin 15s 脚本：分派 Kling 跑美感镜头，Seedance 跑产品动作。' },
  { time: '16:49:33', agent: 'Kling_Aesthetic', text: 'Kling 1.5 渲染 0~3s 面部反差与高光特写，耗时 11s，氛围感极佳。' },
  { time: '16:49:50', agent: 'Seedance_Motion', text: 'Higgsfield Seedance 2.5 渲染 3~10s 一泵挤压物理破裂微距，动作丝滑。' },
  { time: '16:50:05', agent: 'Google_Flow_Op', text: 'Google Flow 主线总成拼接完成，粗体动态字幕已绑定，移交【审核工作台】。' },
  { time: '16:50:22', agent: 'GPT_Image_Master', text: 'GPT Image 直出小红书 3:4 避坑大字封面，排版完成。' }
];
