import HeaderV3 from './components/layout/HeaderV3'
import Footer from './components/layout/Footer'
import HeroSectionV3 from './components/sections/HeroSectionV3'

import StageSection from './components/sections/StageSection'
import ImmersiveStory from './components/sections/ImmersiveStory'
import SummarySection from './components/sections/SummarySection'
import { stages } from './data/greenData_v3'

/**
 * App 主组件 (v3.0.0)
 *
 * 时间线叙事架构：
 * - 首页封面展示格林的核心介绍
 * - 时间线导航快速跳转5个阶段
 * - 阶段1-3：标准故事卡片展示
 * - 阶段4：沉浸式单故事展示
 * - 阶段5：文字总结与升华
 */
function App() {
  return (
    <div className="app">
      {/* 固定导航栏 */}
      <HeaderV3 stages={stages} />

      {/* 主要内容区域 */}
      <main>
        {/* 首页封面 */}
        <HeroSectionV3 />

        {/* 阶段1：成都岁月 */}
        <StageSection stage={stages[0]} />

        {/* 阶段2：草原野化 */}
        <StageSection stage={stages[1]} />

        {/* 阶段3：草原深耕 */}
        <StageSection stage={stages[2]} />

        {/* 阶段4：重逢羁绊（沉浸式故事） */}
        <ImmersiveStory stage={stages[3]} />

        {/* 阶段5：传奇回响（总结） */}
        <SummarySection stage={stages[4]} />
      </main>

      {/* 底部信息 */}
      <Footer />
    </div>
  )
}

export default App
