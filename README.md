# 狼王格林个人主页

一个关于狼王格林的个人主页网站，展示格林的生平、家庭、趣事和互动游戏。

## 项目信息

- **当前版本**: v0.1.0
- **技术栈**: React 18 + Vite + Tailwind CSS + React Router
- **开发状态**: 基础框架已完成

## 快速开始

### 安装依赖
```bash
cd green
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问：http://localhost:3000

### 构建生产版本
```bash
npm run build
```

## 项目结构

```
green/
├── docs/
│   ├── prd/                  # PRD文档目录（按版本管理）
│   ├── VERSION_MANAGEMENT.md # 版本管理规范
│   └── DEVELOPMENT_GUIDE.md  # 开发指南
├── src/
│   ├── components/           # React组件
│   │   └── Layout.jsx        # 布局组件
│   ├── pages/                # 页面组件
│   │   ├── Home.jsx          # 首页
│   │   ├── Family.jsx        # 家庭页
│   │   ├── Stories.jsx       # 故事页
│   │   └── Game.jsx          # 游戏页
│   ├── data/                 # 数据文件
│   │   └── greenData.js      # 格林的数据
│   ├── assets/               # 静态资源
│   ├── App.jsx               # 根组件
│   ├── main.jsx              # 入口文件
│   └── index.css             # 全局样式
├── public/                   # 公共资源
├── package.json
├── vite.config.js
└── README.md
```

## 功能特性

- 首页：展示狼王格林的基本信息和性格特征
- 家庭页：展示格林的家庭成员信息
- 故事页：时间轴形式展示有趣故事
- 游戏页：互动识别游戏，找出哪张是格林本人

## 文档

- [PRD v1.0.0](./docs/prd/v1.0.0-prd.md) - 产品需求文档初始版本
- [开发指南](./docs/DEVELOPMENT_GUIDE.md) - 开发指南和常见任务
- [版本管理规范](./docs/VERSION_MANAGEMENT.md) - Git和PRD版本管理

## 版本管理

### PRD版本规范
- PRD文档采用语义化版本号：`vX.Y.Z`
- 每个版本的PRD存放在 `docs/prd/` 目录下
- 文件命名格式：`vX.Y.Z-prd.md`

### 代码版本规范
- 使用Git进行版本管理
- 提交信息格式：`<type>: <description>`
  - `feat`: 新功能
  - `fix`: Bug修复
  - `docs`: 文档更新
  - `style`: 样式调整
  - `refactor`: 代码重构
  - `test`: 测试相关
  - `chore`: 构建/工具链相关

### 版本与Tag对应关系
| Git Tag | PRD版本 | 说明 |
|---------|---------|------|
| - | v1.0.0 | 初始PRD，技术选型 |
| v0.1.0 | - | 项目初始化，完成基础框架和四个页面骨架 |
| - | v1.1.0 | （待创建）完善页面功能和样式 |
| - | v1.2.0 | （待创建）添加真实数据和视频集成 |

## 开发计划

查看 [PRD v1.0.0](./docs/prd/v1.0.0-prd.md#6-开发计划) 了解详细开发计划。

## 贡献指南

1. 阅读最新版本的PRD文档
2. 创建功能分支：`git checkout -b feature/xxx`
3. 提交改动：`git commit -m 'feat: add xxx'`
4. 推送分支：`git push origin feature/xxx`
5. 创建Pull Request

## 许可证

MIT
