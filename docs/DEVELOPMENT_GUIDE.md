# 开发指南

## 快速开始

### 1. 安装依赖

```bash
cd green
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问：http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
```

构建输出在 `dist/` 目录

### 4. 预览生产构建

```bash
npm run preview
```

## 项目结构

```
green/
├── docs/                      # 文档目录
│   ├── prd/                  # PRD文档（按版本）
│   │   └── v1.0.0-prd.md
│   ├── VERSION_MANAGEMENT.md # 版本管理规范
│   └── DEVELOPMENT_GUIDE.md  # 开发指南（本文件）
├── src/                       # 源代码
│   ├── components/           # 公共组件
│   │   └── Layout.jsx        # 布局组件（导航+页脚）
│   ├── pages/                # 页面组件
│   │   ├── Home.jsx          # 首页
│   │   ├── Family.jsx        # 家庭页
│   │   ├── Stories.jsx       # 故事页
│   │   └── Game.jsx          # 游戏页
│   ├── data/                 # 数据文件
│   │   └── greenData.js      # 格林的数据
│   ├── assets/               # 静态资源
│   ├── styles/               # 样式文件
│   ├── App.jsx               # 根组件
│   ├── main.jsx              # 入口文件
│   └── index.css             # 全局样式
├── public/                    # 公共资源
├── index.html                 # HTML模板
├── package.json               # 项目配置
├── vite.config.js            # Vite配置
├── tailwind.config.js        # Tailwind配置
└── .gitignore                # Git忽略规则
```

## 技术栈

- **React 18**: 前端框架
- **Vite**: 构建工具（快速热更新）
- **React Router v6**: 路由管理
- **Tailwind CSS**: 样式框架（原子化CSS）

## 路由结构

| 路径 | 页面 | 功能 |
|------|------|------|
| `/` | Home | 展示格林的基本信息和特征 |
| `/family` | Family | 展示格林的家庭成员 |
| `/stories` | Stories | 时间轴形式展示有趣故事 |
| `/game` | Game | 互动识别游戏 |

## 数据管理

所有数据存放在 `src/data/greenData.js`：

### 修改基本信息

编辑 `greenInfo` 对象：

```javascript
export const greenInfo = {
  name: "格林",
  alias: ["狼王格林", "绿姐"],
  species: "狼",
  birthPlace: "若尔盖草原",
  characteristics: ["聪明机智", "忠诚勇敢", ...]
}
```

### 添加家庭成员

在 `familyMembers` 数组中添加：

```javascript
{
  id: 3,
  name: "成员名称",
  relation: "关系（父亲/母亲/兄弟等）",
  description: "详细介绍...",
  image: "/assets/family/member3.jpg"
}
```

### 添加故事

在 `stories` 数组中添加：

```javascript
{
  id: 4,
  title: "故事标题",
  date: "2021-05-10",
  content: "故事详细内容...",
  images: ["/assets/stories/story4.jpg"],
  videoUrl: "https://player.bilibili.com/player.html?bvid=BV号"
}
```

### 配置游戏图片

在 `gameData.images` 数组中配置：

```javascript
{
  id: 1,
  src: "/assets/game/wolf1.jpg",
  isGreen: true,  // 是否是格林本人
  videoUrl: "视频链接"
}
```

## 视频集成

### B站视频嵌入

获取B站视频的BV号，格式如下：

```
https://player.bilibili.com/player.html?bvid=BV1xx411c7XZ
```

### YouTube视频嵌入

获取YouTube视频ID，格式如下：

```
https://www.youtube.com/embed/视频ID
```

## 样式定制

### Tailwind自定义颜色

在 `tailwind.config.js` 中定义了主题色：

```javascript
colors: {
  'wolf-gray': '#4A5568',      // 狼灰色
  'wolf-dark': '#2D3748',      // 深色
  'forest-green': '#2F855A',   // 森林绿
  'sky-blue': '#63B3ED',       // 天空蓝
}
```

使用方式：`className="text-wolf-dark bg-forest-green"`

### 修改全局样式

编辑 `src/index.css`

## 组件开发

### Layout组件

位置：`src/components/Layout.jsx`

包含：
- 顶部导航栏（自动高亮当前页面）
- 主内容区域
- 页脚

### 页面组件结构

每个页面组件都是独立的React函数组件：

```jsx
const PageName = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* 页面内容 */}
    </div>
  )
}

export default PageName
```

## 添加新页面

1. 在 `src/pages/` 创建新组件文件
2. 在 `src/App.jsx` 添加路由：

```jsx
<Route path="/new-page" element={<NewPage />} />
```

3. 在 `src/components/Layout.jsx` 添加导航项：

```jsx
{ path: '/new-page', label: '新页面' }
```

## 资源管理

### 添加图片

1. 将图片放入 `public/assets/` 对应目录
2. 在数据文件中引用：`/assets/path/to/image.jpg`

推荐目录结构：
```
public/
├── assets/
│   ├── green-avatar.jpg     # 格林头像
│   ├── family/              # 家庭成员照片
│   ├── stories/             # 故事配图
│   └── game/                # 游戏图片
```

## 常见任务

### 修改页面标题

编辑 `index.html` 中的 `<title>` 标签

### 修改网站图标

替换 `public/vite.svg` 文件

### 调整端口

编辑 `vite.config.js`：

```javascript
server: {
  port: 3000  // 修改为其他端口
}
```

## Git工作流

### 提交代码

```bash
git add .
git commit -m "feat: 添加新功能"
```

### 查看状态

```bash
git status
git log --oneline
```

### 创建标签

```bash
git tag -a v0.2.0 -m "完成首页开发"
```

## 调试技巧

### 查看React组件树

安装React DevTools浏览器扩展

### 控制台调试

在代码中添加：
```javascript
console.log('调试信息', variable)
```

### Vite热更新

保存文件后自动刷新浏览器，无需手动刷新

## 部署

### 构建

```bash
npm run build
```

### 部署到静态托管

将 `dist/` 目录部署到：
- Vercel
- Netlify
- GitHub Pages
- 任何静态文件服务器

## 常见问题

### 依赖安装失败

尝试清除缓存：
```bash
rm -rf node_modules package-lock.json
npm install
```

### 端口被占用

修改 `vite.config.js` 中的 `server.port`

### 样式不生效

确保已正确配置Tailwind CSS并重启开发服务器

## 待完善功能

- [ ] 添加真实图片素材
- [ ] 补充视频链接
- [ ] 完善故事内容
- [ ] 添加响应式移动端优化
- [ ] 添加加载动画
- [ ] 添加图片懒加载

## 参考资料

- [React官方文档](https://react.dev)
- [Vite官方文档](https://vitejs.dev)
- [React Router文档](https://reactrouter.com)
- [Tailwind CSS文档](https://tailwindcss.com)

---

最后更新：2026-01-29
