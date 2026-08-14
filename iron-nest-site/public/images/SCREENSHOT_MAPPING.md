# Steam 截图 → 页面映射方案

## 17 张截图内容摘要
- ss-00: 炮塔内部，双红色仰角手轮，HE 弹装填
- ss-01: 控制面板特写，装药选择按钮，距离输入 07.55km
- ss-02: 战术地图俯视，剪贴板+航空照片+目标标记
- ss-03: 升级/自定义界面，技能卡片， requisition credits
- ss-04: 橘猫戴船长帽坐在地图桌上（猫伙伴！）
- ss-05: 炮塔内部广角，对称控制站，中央地图桌
- ss-06: 仰拍双炮管，红色灯光，电影感
- ss-07: 炮塔内部中景，发射控制，红色手轮+绿色指示灯
- ss-08: 双炮仰角机构特写，绿色角度表，红色手轮
- ss-09: 暂停菜单状态，压力表，地图书
- ss-10: 战术地图网格，弹坑+海岸线+距离标注
- ss-11: 墙上西班牙大地图+排行榜（挑战模式）
- ss-12: 俯视战术地图，"GLORY TO NEST CASTLE"标记
- ss-13: 开火场景，骷髅目标，HCHE 弹，仰角 34.53°
- ss-14: 炮弹特写 "LOVE LETTER"，弹药装填区
- ss-15: 控制面板，红色拉杆+绿色指示灯+压力表
- ss-16: 炮塔内部广角，炮闩/装填机构居中

## 页面 → 图片分配

### Hero Banner (16:9) — 19 处
| 页面 | 图片 | 理由 |
|------|------|------|
| /guide | ss-05 | 炮塔内部广角，代表"攻略总览" |
| /guide/walkthrough | ss-02 | 战术地图+剪贴板，代表"流程" |
| /guide/tips-and-tricks | ss-08 | 仰角机构特写，代表"技巧" |
| /guide/gold-medal | ss-11 | 排行榜，代表"金牌挑战" |
| /guide/missions | ss-10 | 战术地图网格，代表"任务" |
| /guide/siege-of-cartagena | ss-13 | 开火场景，代表"战役" |
| /guide/endings | ss-06 | 仰拍炮管电影感，代表"结局" |
| /calculator | ss-01 | 控制面板+距离输入，代表"计算器" |
| /calculator/elevation-guide | ss-08 | 仰角机构特写 |
| /shells/best-shells | ss-14 | 炮弹特写 "LOVE LETTER" |
| /shells/phantom-battery | ss-13 | 开火场景+目标 |
| /arsenal/armor-piercing-shell | ss-00 | HE 弹装填（有弹药展示） |
| /arsenal/high-explosive-shell | ss-14 | 炮弹特写 |
| /arsenal/smoke-shell | ss-07 | 炮塔内部中景（烟雾相关氛围） |
| /coop | ss-15 | 控制面板拉杆（多人操作感） |
| /mods | ss-03 | 升级/自定义界面 |
| /demo | ss-09 | 暂停菜单（demo 体验） |
| /codes/key | ss-15 | 控制面板拉杆+按钮 |
| /guides/[slug] | ss-05 | 炮塔内部广角（通用文章头图） |

### 卡片缩略图 (bannerHue) — 18 处
| 页面 | 卡片 | 图片 | 理由 |
|------|------|------|------|
| / (首页) | 3 张卡片 | ss-06, ss-02, ss-04 | 电影感+地图+猫（多样化） |
| /guides | 6 篇文章 | ss-05,ss-01,ss-08,ss-10,ss-09,ss-14 | 每篇不同截图 |
| /arsenal | 3 张卡片 | ss-00, ss-14, ss-07 | AP→装填, HCHE→炮弹, SMK→控制 |
| /guide/missions | 2 张卡片 | ss-13, ss-06 | siege→开火, phantom→炮管 |

注：部分图片会复用（17 张图分配 37 处），但同一页面内不重复。
