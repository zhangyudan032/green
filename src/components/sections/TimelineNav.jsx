import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const TimelineNav = memo(({ stages }) => {
  const [activeStage, setActiveStage] = useState(1)

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto overflow-x-auto">
          {stages.map((stage, index) => (
            <div key={stage.id} className="flex items-center flex-shrink-0">
              {/* 阶段节点 */}
              <Link
                to={`stage-${stage.id}`}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveStage(stage.id)}
                className="cursor-pointer group"
              >
                <div className="flex flex-col items-center min-w-[120px] px-2">
                  {/* 圆点节点 */}
                  <motion.div
                    className={`w-4 h-4 rounded-full transition-all duration-200 ${
                      activeStage === stage.id
                        ? 'bg-green-600 scale-125 shadow-lg'
                        : 'bg-gray-300 group-hover:bg-green-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    style={{ willChange: 'transform' }}
                  />

                  {/* 阶段标题 */}
                  <div className="mt-2 text-center">
                    <div
                      className={`text-xs font-semibold transition-colors duration-300 ${
                        activeStage === stage.id
                          ? 'text-green-600'
                          : 'text-gray-600 group-hover:text-green-500'
                      }`}
                    >
                      {stage.title.split('·')[0]}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1">
                      {stage.timeRange}
                    </div>
                  </div>
                </div>
              </Link>

              {/* 连接线 */}
              {index < stages.length - 1 && (
                <div className="flex-shrink-0 w-12 md:w-20 h-[2px] bg-gray-300 mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

TimelineNav.displayName = 'TimelineNav'

export default TimelineNav
