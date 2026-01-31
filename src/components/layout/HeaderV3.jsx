import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

/**
 * Header 导航栏组件 (v3.0.0)
 *
 * 顶部粘性横条，两层结构：
 * - 第一层：阶段标签横向排列，当前阶段高亮
 * - 第二层：点击阶段后展开该阶段的故事列表
 * - 滚动过首屏后才显示
 */
const HeaderV3 = ({ stages = [] }) => {
  const [activeStage, setActiveStage] = useState(null)
  const [expandedStage, setExpandedStage] = useState(null)
  const [visible, setVisible] = useState(false)

  const stageIcons = {
    1: '🏙️',
    2: '🌿',
    3: '🐺',
    4: '💫',
    5: '⭐'
  }

  const stageShortNames = {
    1: '成都岁月',
    2: '草原野化',
    3: '草原深耕',
    4: '重逢羁绊',
    5: '传奇回响'
  }

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 同步展开区域到当前活跃阶段
  useEffect(() => {
    if (activeStage !== null) {
      setExpandedStage(activeStage)
    }
  }, [activeStage])

  const handleStageClick = (stageId) => {
    setExpandedStage(expandedStage === stageId ? null : stageId)
  }

  const currentExpanded = stages.find(s => s.id === expandedStage)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      } bg-white/95 backdrop-blur-md shadow-md`}
    >
      {/* 第一层：阶段标签 */}
      <div className="flex items-center justify-center gap-1 md:gap-4 px-2 py-2">
        {stages.map((stage) => (
          <Link
            key={stage.id}
            to={`stage-${stage.id}`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={() => setActiveStage(stage.id)}
            onClick={() => handleStageClick(stage.id)}
            className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 rounded-full cursor-pointer transition-all text-sm md:text-base whitespace-nowrap ${
              activeStage === stage.id
                ? 'bg-green-100 text-green-700 font-bold shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="text-base md:text-lg">{stageIcons[stage.id] || '📌'}</span>
            <span className="hidden sm:inline">{stageShortNames[stage.id] || stage.title.split('·')[0]}</span>
          </Link>
        ))}
      </div>

      {/* 第二层：故事子列表 */}
      {currentExpanded && currentExpanded.stories && currentExpanded.stories.length > 0 && (
        <div className="border-t border-gray-200 bg-gray-50/80 px-4 py-1.5 overflow-x-auto">
          <div className="flex items-center justify-center gap-1 flex-nowrap">
            {currentExpanded.stories.map((story, idx) => (
              <span key={story.id} className="flex items-center flex-shrink-0">
                <Link
                  to={`story-${currentExpanded.id}-${story.id}`}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  className="text-xs md:text-sm text-gray-500 hover:text-green-600 cursor-pointer transition-colors whitespace-nowrap px-1"
                >
                  {story.title.length > 8 ? story.title.substring(0, 8) + '…' : story.title}
                </Link>
                {idx < currentExpanded.stories.length - 1 && (
                  <span className="text-gray-300 mx-0.5">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default HeaderV3
