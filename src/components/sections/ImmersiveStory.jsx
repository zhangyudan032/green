import { memo } from 'react'
import { motion } from 'framer-motion'

const ImmersiveStory = memo(({ stage }) => {
  const story = stage.stories[0] // 阶段4只有一个重点故事

  return (
    <section
      id={`stage-${stage.id}`}
      className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-20 min-h-screen"
    >
        <div className="container mx-auto px-4 max-w-4xl">
          {/* 阶段标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="text-sm text-gray-500 mb-2">阶段 {stage.id}</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {stage.title}
            </h2>
            <div className="text-gray-600 text-lg mb-6">{stage.timeRange}</div>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {stage.description}
            </p>

            {/* 装饰线 */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              <div className="mx-4 w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            </div>
          </motion.div>

          {/* 沉浸式故事内容 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-12"
            id={`story-${stage.id}-${story.id}`}
          >
            {/* 大标题 */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {story.title}
              </h3>
              <div className="text-gray-500">{story.date}</div>
              {story.documentClip && (
                <div className="text-xs text-gray-400 italic mt-2">
                  {story.documentClip}
                </div>
              )}
            </div>

            {/* 主图 */}
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <img
                src={story.images[0]}
                alt={story.title}
                loading="lazy"
                decoding="async"
                className="w-full h-96 md:h-[500px] object-cover"
                style={{ willChange: 'auto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-transparent" />
            </motion.div>

            {/* 故事正文 */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-loose text-lg whitespace-pre-line">
                {story.content}
              </div>
            </div>

            {/* 引用/感悟 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-16 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border-l-4 border-purple-500 shadow-lg"
            >
              <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                "这场重逢，是跨越岁月的牵挂，也是人与狼之间最动人的双向奔赴。"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
})

ImmersiveStory.displayName = 'ImmersiveStory'

export default ImmersiveStory
