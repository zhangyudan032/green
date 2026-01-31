import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const StoryCard = memo(({ story, stageTheme, index, stageId }) => {
  const [showFullContent, setShowFullContent] = useState(false)

  // 主题色配置
  const themeColors = {
    warm: 'from-orange-400 to-yellow-400',
    grassland: 'from-green-500 to-blue-400',
    mature: 'from-blue-600 to-gray-600',
    emotional: 'from-purple-500 to-pink-500',
    reflection: 'from-yellow-600 to-amber-700'
  }

  const gradient = themeColors[stageTheme] || themeColors.grassland

  // 摘要：取前80字
  const summary = story.content.length > 80
    ? story.content.substring(0, 80) + '...'
    : story.content

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      id={`story-${stageId}-${story.id}`}
      className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-sm"
    >
      {/* 图片区 */}
      <div className="w-full">
        <motion.div
          className="relative overflow-hidden group"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <img
            src={story.images[0]}
            alt={story.title}
            loading="lazy"
            decoding="async"
            className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ willChange: 'transform' }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-200`} />
        </motion.div>
      </div>

      {/* 内容区 */}
      <div className="w-full flex flex-col p-6">
        <div className="text-xs text-gray-500 mb-2">{story.date}</div>
        <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {story.title}
        </h3>

        {/* 默认只显示摘要 */}
        <div className="text-gray-700 leading-relaxed">
          {showFullContent ? (
            <>
              <div className="whitespace-pre-line">{story.content}</div>

              {/* 展开后显示 documentClip */}
              {story.documentClip && (
                <div className="text-xs text-gray-400 italic mt-3">
                  {story.documentClip}
                </div>
              )}

              {/* 展开后显示外链按钮（不含视频） */}
              {story.externalLink && (
                <div className="flex gap-3 mt-4">
                  <a
                    href={story.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 transition-colors"
                  >
                    <FaExternalLinkAlt /> 了解更多
                  </a>
                </div>
              )}
            </>
          ) : (
            <div>{summary}</div>
          )}
        </div>

        <button
          onClick={() => setShowFullContent(!showFullContent)}
          className={`mt-4 text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent hover:underline self-start`}
        >
          {showFullContent ? '收起' : '阅读更多'}
        </button>
      </div>
    </motion.div>
  )
})

StoryCard.displayName = 'StoryCard'

export default StoryCard
