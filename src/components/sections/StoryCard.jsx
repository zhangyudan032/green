import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

const StoryCard = memo(({ story, stageTheme, index, stageId }) => {
  const [showFullContent, setShowFullContent] = useState(false)

  // 主题色配置
  const themeColors = {
    warm: 'from-orange-400 to-yellow-400',
    grassland: 'from-emerald-400 to-teal-400',
    mature: 'from-blue-400 to-slate-400',
    emotional: 'from-purple-400 to-pink-400',
    reflection: 'from-yellow-400 to-amber-400'
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
      className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-black/50 backdrop-blur-sm border border-slate-800 hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300"
    >
      {/* 图片区 - 点击跳转视频 */}
      <div className="w-full">
        {story.videoUrl ? (
          <a href={story.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
            <motion.div
              className="relative overflow-hidden group cursor-pointer"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-200`} />
              {/* 播放图标 */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center border-2 border-white/80">
                  <FaPlay className="text-white text-lg ml-1" />
                </div>
              </div>
            </motion.div>
          </a>
        ) : (
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-200`} />
          </motion.div>
        )}
      </div>

      {/* 内容区 */}
      <div className="w-full flex flex-col p-6">
        <div className="text-xs text-slate-500 mb-2">{story.date}</div>
        <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {story.title}
        </h3>

        {/* 默认只显示摘要 */}
        <div className="text-slate-300 leading-relaxed">
          {showFullContent ? (
            <>
              <div className="whitespace-pre-line">{story.content}</div>

              {/* 展开后显示 documentClip */}
              {story.documentClip && (
                <div className="text-xs text-slate-500 italic mt-3">
                  {story.documentClip}
                </div>
              )}

              {/* 展开后显示外链按钮 */}
              {story.externalLink && (
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href={story.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
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
          className="mt-4 text-sm font-semibold text-emerald-400 hover:text-emerald-300 hover:underline self-start transition-colors"
        >
          {showFullContent ? '收起' : '阅读更多'}
        </button>
      </div>
    </motion.div>
  )
})

StoryCard.displayName = 'StoryCard'

export default StoryCard
