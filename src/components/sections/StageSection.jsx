import { memo } from 'react'
import { motion } from 'framer-motion'
import StoryCard from './StoryCard'

const StageSection = memo(({ stage }) => {
  // 主题色配置
  const themeColors = {
    warm: 'bg-gradient-to-br from-orange-50 to-yellow-50',
    grassland: 'bg-gradient-to-br from-green-50 to-blue-50',
    mature: 'bg-gradient-to-br from-blue-50 to-gray-50',
    emotional: 'bg-gradient-to-br from-purple-50 to-pink-50',
    reflection: 'bg-gradient-to-br from-yellow-50 to-amber-50'
  }

  const titleGradients = {
    warm: 'from-orange-500 to-yellow-500',
    grassland: 'from-green-600 to-blue-500',
    mature: 'from-blue-700 to-gray-700',
    emotional: 'from-purple-600 to-pink-600',
    reflection: 'from-yellow-700 to-amber-800'
  }

  const bgColor = themeColors[stage.colorTheme] || themeColors.grassland
  const titleGradient = titleGradients[stage.colorTheme] || titleGradients.grassland

  return (
    <section
      id={`stage-${stage.id}`}
      className={`py-20 ${bgColor} min-h-screen`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 阶段标题区 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-500 mb-2">阶段 {stage.id}</div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
            {stage.title}
          </h2>
          <div className="text-gray-600 text-lg mb-6">{stage.timeRange}</div>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {stage.description}
          </p>

          {/* 装饰线 */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <div className={`mx-4 w-3 h-3 rounded-full bg-gradient-to-r ${titleGradient}`} />
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>
        </motion.div>

        {/* 故事展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stage.stories.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              stageTheme={stage.colorTheme}
              index={index}
              stageId={stage.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
})

StageSection.displayName = 'StageSection'

export default StageSection
