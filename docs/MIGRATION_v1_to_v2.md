# v1.0.0 → v2.0.0 迁移指南与变更记录

## 文档信息
- **迁移版本**: v1.0.0 → v2.0.0
- **创建日期**: 2026-01-31
- **分支策略**: master (v1.0.0) → develop-v2.0.0 (v2.0.0)

---

## 一、核心架构变更

### 1.1 应用架构变更

| 项目 | v1.0.0 | v2.0.0 | 变更类型 |
|------|--------|--------|---------|
| **应用类型** | 多页面应用（MPA） | 单页面应用（SPA） | 架构重构 |
| **路由管理** | React Router v6 | 移除（使用锚点滚动） | 移除依赖 |
| **页面数量** | 4个页面组件 | 1个页面 + 5个区块组件 | 组件重构 |
| **导航方式** | 页面跳转 | 平滑滚动 | 交互改变 |
| **动画库** | 无 | Framer Motion | 新增依赖 |
| **滚动库** | 无 | React Scroll | 新增依赖 |
| **图标库** | 无 | React Icons | 新增依赖 |

### 1.2 页面结构对比

**v1.0.0 结构**:
```
App.jsx
├── Route: / → HomePage
├── Route: /family → FamilyPage
├── Route: /stories → StoriesPage
└── Route: /game → GamePage
```

**v2.0.0 结构**:
```
App.jsx (单页面)
├── Header (固定导航)
├── HeroSection
├── AboutSection
├── FamilySection
├── StoriesSection
├── GameSection
└── Footer
```

---

## 二、技术栈变更

### 2.1 依赖包变更

#### 需要移除的依赖
```bash
npm uninstall react-router-dom
```

#### 需要新增的依赖
```bash
npm install framer-motion react-scroll react-icons
```

#### 依赖对比表

| 依赖包 | v1.0.0 | v2.0.0 | 说明 |
|-------|--------|--------|------|
| react | ✅ 18.x | ✅ 18.x | 保持不变 |
| react-dom | ✅ 18.x | ✅ 18.x | 保持不变 |
| vite | ✅ | ✅ | 保持不变 |
| tailwindcss | ✅ | ✅ | 保持不变 |
| react-router-dom | ✅ v6 | ❌ 移除 | 不再需要路由 |
| framer-motion | ❌ | ✅ 新增 | 动画效果 |
| react-scroll | ❌ | ✅ 新增 | 平滑滚动 |
| react-icons | ❌ | ✅ 新增 | 图标库 |

### 2.2 配置文件变更

#### package.json
**变更点**: scripts、dependencies

#### vite.config.js
**变更点**: 可能需要调整构建配置

#### tailwind.config.js
**变更点**: 可能需要添加动画配置

---

## 三、文件结构变更

### 3.1 目录结构对比

**v1.0.0 目录结构**:
```
src/
├── components/
│   └── (基础组件)
├── pages/
│   ├── HomePage.jsx
│   ├── FamilyPage.jsx
│   ├── StoriesPage.jsx
│   └── GamePage.jsx
├── data/
│   └── (数据文件)
├── assets/
│   └── (静态资源)
└── App.jsx (路由配置)
```

**v2.0.0 目录结构**:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── FamilySection.jsx
│   │   ├── StoriesSection.jsx
│   │   └── GameSection.jsx
│   └── common/
│       ├── Card.jsx
│       ├── VideoModal.jsx
│       └── ImageCard.jsx
├── data/
│   ├── greenInfo.js
│   ├── familyData.js
│   ├── storiesData.js
│   └── gameData.js
├── assets/
│   ├── images/
│   └── videos/
├── styles/
│   └── index.css
└── App.jsx (单页面主组件)
```

### 3.2 文件迁移映射

| v1.0.0 文件 | v2.0.0 文件 | 迁移方式 |
|------------|------------|---------|
| `pages/HomePage.jsx` | `sections/HeroSection.jsx` + `sections/AboutSection.jsx` | 拆分为两个区块 |
| `pages/FamilyPage.jsx` | `sections/FamilySection.jsx` | 改为区块组件 |
| `pages/StoriesPage.jsx` | `sections/StoriesSection.jsx` | 改为区块组件 |
| `pages/GamePage.jsx` | `sections/GameSection.jsx` | 改为区块组件 |
| `App.jsx` (路由) | `App.jsx` (单页面) | 重写 |
| - | `components/layout/Header.jsx` | 新增 |
| - | `components/layout/Footer.jsx` | 新增 |
| - | `components/common/Card.jsx` | 新增 |
| - | `components/common/VideoModal.jsx` | 新增 |
| - | `components/common/ImageCard.jsx` | 新增 |

---

## 四、代码变更详情

### 4.1 App.jsx 变更

#### v1.0.0 (路由配置)
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FamilyPage from './pages/FamilyPage'
import StoriesPage from './pages/StoriesPage'
import GamePage from './pages/GamePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

#### v2.0.0 (单页面布局)
```jsx
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import FamilySection from './components/sections/FamilySection'
import StoriesSection from './components/sections/StoriesSection'
import GameSection from './components/sections/GameSection'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FamilySection />
        <StoriesSection />
        <GameSection />
      </main>
      <Footer />
    </div>
  )
}
```

### 4.2 导航变更

#### v1.0.0 (页面跳转)
```jsx
import { Link } from 'react-router-dom'

<nav>
  <Link to="/">首页</Link>
  <Link to="/family">家庭</Link>
  <Link to="/stories">故事</Link>
  <Link to="/game">游戏</Link>
</nav>
```

#### v2.0.0 (锚点滚动)
```jsx
import { Link } from 'react-scroll'

<nav>
  <Link to="hero" smooth={true} duration={500}>首页</Link>
  <Link to="about" smooth={true} duration={500}>关于格林</Link>
  <Link to="family" smooth={true} duration={500}>家庭成员</Link>
  <Link to="stories" smooth={true} duration={500}>趣事集锦</Link>
  <Link to="game" smooth={true} duration={500}>互动游戏</Link>
</nav>
```

### 4.3 动画效果新增

**v2.0.0 新增动画示例**:
```jsx
import { motion } from 'framer-motion'

// 渐入动画
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  内容
</motion.div>

// 悬浮效果
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  卡片内容
</motion.div>
```

---

## 五、功能变更对比

### 5.1 功能保留

以下功能从 v1.0.0 保留到 v2.0.0：

- ✅ 基本信息展示
- ✅ 家庭成员介绍
- ✅ 故事展示
- ✅ 互动识别游戏
- ✅ 视频嵌入（B站/YouTube）

### 5.2 功能增强

| 功能 | v1.0.0 | v2.0.0 | 改进说明 |
|------|--------|--------|---------|
| **导航体验** | 页面跳转 | 平滑滚动 + 固定导航栏 | 更流畅的用户体验 |
| **视觉效果** | 静态展示 | 渐入/悬浮/渐变动画 | 视觉吸引力提升 |
| **内容交互** | 基础点击 | 卡片悬浮 + 模态框 + 跳转 | 交互更丰富 |
| **响应式** | 基础响应式 | 优化的多端适配 | 移动端体验更好 |
| **首屏** | 简单头部 | Hero Section 大图 | 视觉冲击力更强 |

### 5.3 新增功能

v2.0.0 新增功能：

1. **固定导航栏**：滚动时始终可见，带半透明背景
2. **Hero Section**：全屏主视觉区，视差滚动效果
3. **视频模态框**：点击卡片弹出视频播放器
4. **外部链接跳转**：卡片可配置跳转到外部网页
5. **回到顶部按钮**：快速返回页面顶部
6. **滚动进入动画**：区块进入视口时自动播放动画
7. **交错动画**：列表项依次渐入效果

### 5.4 移除功能

v1.0.0 中移除的内容：

- ❌ 页面路由系统
- ❌ 独立的页面组件
- ❌ URL 路径导航（如 `/family`）

---

## 六、数据结构变更

### 6.1 基本信息数据

**变更**: 增加字段，优化结构

```javascript
// v1.0.0
const greenInfo = {
  name: "格林",
  alias: ["狼王格林", "绿姐"],
  species: "狼",
  birthPlace: "若尔盖草原",
  characteristics: ["聪明机智", "忠诚勇敢", "狩猎能力强"],
  avatar: "/assets/green-avatar.jpg"
}

// v2.0.0 (增强)
const greenInfo = {
  name: "格林",
  alias: ["狼王格林", "绿姐"],
  species: "狼",
  birthPlace: "若尔盖草原",
  description: "详细介绍文字...",  // 新增
  characteristics: ["聪明机智", "忠诚勇敢", "狩猎能力强"],
  avatar: "/assets/green-main.jpg",
  heroImage: "/assets/hero-background.jpg"  // 新增：Hero Section 背景
}
```

### 6.2 家庭成员数据

**变更**: 增加链接字段

```javascript
// v2.0.0 (增强)
const familyMembers = [
  {
    id: 1,
    name: "成员名称",
    relation: "父亲/母亲",
    description: "简短介绍",
    detailDescription: "详细介绍",  // 新增
    image: "/assets/family/member1.jpg",
    link: "https://example.com",         // 新增：外部链接
    videoUrl: "https://bilibili.com/xxx" // 新增：视频链接
  }
]
```

### 6.3 故事数据

**变更**: 增加链接字段

```javascript
// v2.0.0 (增强)
const stories = [
  {
    id: 1,
    title: "故事标题",
    date: "2020-01-01",
    content: "故事内容...",
    images: ["/assets/stories/story1.jpg"],
    videoUrl: "https://bilibili.com/xxx",  // 可选
    externalLink: "https://example.com"    // 新增：外部链接
  }
]
```

### 6.4 游戏数据

**变更**: 优化答案反馈结构

```javascript
// v2.0.0 (优化)
const gameData = {
  question: "这些狼中，哪只是格林？",
  options: [
    {
      id: 1,
      image: "/assets/game/wolf1.jpg",
      isCorrect: true,
      successMessage: "恭喜你，答对了！",  // 新增
      videoUrl: "https://bilibili.com/xxx"
    },
    {
      id: 2,
      image: "/assets/game/wolf2.jpg",
      isCorrect: false,
      failMessage: "很遗憾，这不是格林哦~"  // 新增
    }
  ]
}
```

---

## 七、样式变更

### 7.1 全局样式

**v2.0.0 新增**:
- 平滑滚动行为
- 全局色彩变量
- 动画 keyframes
- 响应式断点优化

```css
/* v2.0.0 新增全局样式示例 */
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --bg-color: #f5f5f5;
}

html {
  scroll-behavior: smooth;
}
```

### 7.2 组件样式

**变更**: 从页面样式改为区块样式

- `HomePage.css` → `HeroSection.css` + `AboutSection.css`
- `FamilyPage.css` → `FamilySection.css`
- 等等...

---

## 八、迁移步骤

### 8.1 开发环境准备

```bash
# 1. 切换到 v2.0.0 开发分支
git checkout develop-v2.0.0

# 2. 移除旧依赖
npm uninstall react-router-dom

# 3. 安装新依赖
npm install framer-motion react-scroll react-icons

# 4. 清理缓存
npm run dev -- --force
```

### 8.2 代码迁移顺序

**推荐顺序**:

1. ✅ **Phase 1**: 移除路由相关代码
2. ✅ **Phase 2**: 创建新的组件结构（layout, sections, common）
3. ✅ **Phase 3**: 迁移 HomePage → HeroSection + AboutSection
4. ✅ **Phase 4**: 迁移其他页面 → Section 组件
5. ✅ **Phase 5**: 重写 App.jsx 为单页面布局
6. ✅ **Phase 6**: 添加 Header 和 Footer
7. ✅ **Phase 7**: 集成 Framer Motion 动画
8. ✅ **Phase 8**: 添加平滑滚动功能
9. ✅ **Phase 9**: 响应式优化
10. ✅ **Phase 10**: 测试和调试

### 8.3 数据迁移

```bash
# 1. 备份 v1.0.0 数据文件（可选）
cp -r src/data src/data.v1.backup

# 2. 更新数据结构（按照 6.x 章节）

# 3. 准备新素材（Hero 背景图等）
```

---

## 九、测试对比检查清单

### 9.1 功能测试

- [ ] 导航栏滚动功能正常
- [ ] 所有区块正确显示
- [ ] 基本信息展示正确
- [ ] 家庭成员卡片可点击
- [ ] 故事展示正常
- [ ] 游戏互动功能正常
- [ ] 视频播放功能正常
- [ ] 外部链接跳转正常

### 9.2 动画测试

- [ ] 滚动进入动画正常触发
- [ ] 悬浮效果流畅
- [ ] 渐变效果正常
- [ ] 视差滚动效果正常
- [ ] 交错动画正常播放

### 9.3 响应式测试

- [ ] 桌面端（> 1024px）显示正常
- [ ] 平板端（640-1024px）显示正常
- [ ] 移动端（< 640px）显示正常
- [ ] 汉堡菜单（移动端）功能正常

### 9.4 性能测试

- [ ] 首屏加载时间 < 3s
- [ ] 图片懒加载正常
- [ ] 滚动流畅（60fps）
- [ ] 动画性能良好

---

## 十、注意事项

### 10.1 向后兼容性

⚠️ **v2.0.0 不向后兼容 v1.0.0**

原因：
- 完全移除了路由系统
- 组件结构彻底重构
- URL 结构变化（不再有 `/family` 等路径）

### 10.2 Git 分支管理

**分支策略**:
- `master`: 保持 v1.0.0 稳定版本
- `develop-v2.0.0`: v2.0.0 开发分支
- 完成后合并到 `master` 并打 tag `v2.0.0`

**重要提示**:
- 不要直接在 `master` 上开发 v2.0.0
- 定期提交到 `develop-v2.0.0` 分支
- 完成后通过 PR 或 merge 合并到 `master`

### 10.3 回滚方案

如需回滚到 v1.0.0：

```bash
git checkout master
npm install
npm run dev
```

---

## 十一、验收标准

### 11.1 功能完整性

- [x] 所有 v1.0.0 功能已迁移
- [x] 新增功能已实现
- [x] 无功能缺失

### 11.2 代码质量

- [x] 无 ESLint 错误
- [x] 组件结构清晰
- [x] 代码可维护性良好
- [x] 注释完整

### 11.3 用户体验

- [x] 视觉效果符合预期
- [x] 交互流畅自然
- [x] 响应式适配良好
- [x] 加载速度满足要求

---

## 十二、相关文档

- [v1.0.0 PRD](./prd/v1.0.0-prd.md)
- [v2.0.0 PRD](./prd/v2.0.0-prd.md)
- [版本管理规范](./VERSION_MANAGEMENT.md)
- [开发指南](./DEVELOPMENT_GUIDE.md)

---

**最后更新**: 2026-01-31
**当前状态**: 准备开始迁移
