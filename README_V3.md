# v3.0.0 时间线叙事版本 - 启动说明

## ✅ 已完成的工作

1. **图片提取** - 从Word文档中提取了17张图片并组织到对应文件夹
2. **数据文件** - 创建了`src/data/greenData_v3.js`，包含所有5个阶段的内容
3. **核心组件** - 创建了以下组件：
   - `HeroSectionV3.jsx` - 首页封面
   - `TimelineNav.jsx` - 时间线导航
   - `StageSection.jsx` - 阶段区块
   - `StoryCard.jsx` - 故事卡片
   - `ImmersiveStory.jsx` - 沉浸式故事（阶段4）
   - `SummarySection.jsx` - 总结区块（阶段5）
   - `HeaderV3.jsx` - 简化版导航栏
4. **主应用** - 创建了`App_v3.jsx`，已在`main.jsx`中启用

## 🚀 如何预览

在项目目录下运行：

```bash
npm run dev
```

然后在浏览器中打开显示的地址（通常是 `http://localhost:5173`）

## 📁 项目结构

```
src/
├── data/
│   ├── greenData.js (v2.0.0旧版)
│   └── greenData_v3.js (v3.0.0新版) ✨
├── components/
│   ├── layout/
│   │   ├── Header.jsx (v2.0.0)
│   │   ├── HeaderV3.jsx (v3.0.0) ✨
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── HeroSectionV3.jsx ✨
│   │   ├── TimelineNav.jsx ✨
│   │   ├── StageSection.jsx ✨
│   │   ├── StoryCard.jsx ✨
│   │   ├── ImmersiveStory.jsx ✨
│   │   └── SummarySection.jsx ✨
│   └── common/
│       └── VideoModal.jsx
├── App.jsx (v2.0.0旧版)
├── App_v3.jsx (v3.0.0新版) ✨
└── main.jsx (已切换到v3.0.0)

public/assets/
├── hero-green.jpg (首页封面)
├── green-portrait.jpg (格林肖像)
├── stage1/ (4张图片)
├── stage2/ (6张图片)
├── stage3/ (5张图片)
├── stage4/ (1张图片)
└── stage5/ (1张图片)
```

## 🎨 v3.0.0 特色

### 五个阶段时间线叙事

1. **阶段1：成都岁月·邂逅与相伴** (橙黄暖色调)
   - 4个故事：生死邂逅、与狐狸的情谊、看纪录片自学、走失事件

2. **阶段2：草原野化·解锁生存技能** (绿蓝草原色)
   - 6个故事：捕猎进阶、智慧捕鱼、险象环生、与藏獒相守、牵马救人、寻狼归群

3. **阶段3：草原深耕·格林的族群成长** (蓝灰成熟色)
   - 5个故事：狼山重逢、温情投喂、格桑避镜、救助飞毛腿、痛失幼崽

4. **阶段4：重逢与羁绊** (紫粉情感色)
   - 1个沉浸式重点故事：七年再会·红腰带的念想

5. **阶段5：传奇回响** (金棕升华色)
   - 文字总结与影响力展示
   - 相关作品介绍
   - 致谢与寄语

### 交互特性

- ✨ 时间线导航：快速跳转到各个阶段
- 🎬 视频播放：点击观看B站/优酷视频
- 📖 展开阅读：故事内容可展开/收起
- 🌊 平滑滚动：所有导航都有平滑滚动效果
- 🎨 独特配色：每个阶段有专属色调主题
- 💫 动画效果：Framer Motion 提供流畅动画

## 📝 后续优化建议

如果预览后发现图片不合适，你可以：

1. 替换 `public/assets/` 下的图片文件（保持文件名不变）
2. 修改 `src/data/greenData_v3.js` 中的文字内容
3. 调整各阶段的色调主题

## 🔄 切换回v2.0.0

如果想切换回v2.0.0版本，编辑 `src/main.jsx`：

```javascript
// 将这行
import App from './App_v3.jsx'

// 改回
import App from './App.jsx'
```

---

**v3.0.0 - 时间线叙事版本已就绪！🎉**
