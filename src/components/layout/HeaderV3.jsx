import { useState } from 'react'
import { Link } from 'react-scroll'

/**
 * Header 导航栏组件 (v3.0.0)
 *
 * 顶部粘性横条，始终可见：
 * - 阶段标签横向排列，当前阶段高亮
 */
const HeaderV3 = ({ stages = [] }) => {
  const [activeStage, setActiveStage] = useState(null)

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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-md border-b border-slate-800"
    >
      <div className="flex items-center justify-center gap-1 md:gap-4 px-2 py-2">
        {stages.map((stage) => (
          <Link
            key={stage.id}
            to={`stage-${stage.id}`}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onSetActive={() => setActiveStage(stage.id)}
            className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 rounded-full cursor-pointer transition-all text-sm md:text-base whitespace-nowrap ${
              activeStage === stage.id
                ? 'bg-emerald-500/20 text-emerald-400 font-bold shadow-sm'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span className="text-base md:text-lg">{stageIcons[stage.id] || '📌'}</span>
            <span className="hidden sm:inline">{stageShortNames[stage.id] || stage.title.split('·')[0]}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default HeaderV3
