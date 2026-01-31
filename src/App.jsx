import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import FamilySection from './components/sections/FamilySection'
import StoriesSection from './components/sections/StoriesSection'
import GameSection from './components/sections/GameSection'

/**
 * App 主组件 (v2.0.0)
 *
 * 单页面应用架构：
 * - 移除路由系统
 * - 垂直滚动布局
 * - 平滑锚点导航
 */
function App() {
  return (
    <div className="app">
      {/* 固定导航栏 */}
      <Header />

      {/* 主要内容区域 */}
      <main>
        <HeroSection />
        <AboutSection />
        <FamilySection />
        <StoriesSection />
        <GameSection />
      </main>

      {/* 底部信息 */}
      <Footer />
    </div>
  )
}

export default App
