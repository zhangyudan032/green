import { memo } from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaFilm, FaTv, FaLeaf } from 'react-icons/fa'

const SummarySection = memo(({ stage }) => {
  const { summaryContent } = stage

  // 图标映射
  const getIcon = (label) => {
    if (label.includes('文学')) return <FaBook className="text-2xl" />
    if (label.includes('电影')) return <FaFilm className="text-2xl" />
    if (label.includes('纪实剧')) return <FaTv className="text-2xl" />
    return <FaLeaf className="text-2xl" />
  }

  return (
    <section
      id={`stage-${stage.id}`}
      className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 py-20 min-h-screen"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* 阶段标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-500 mb-2">阶段 {stage.id}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-700 to-amber-800 bg-clip-text text-transparent">
            {stage.title}
          </h2>
          <div className="text-gray-600 text-lg mb-6">{stage.timeRange}</div>

          {/* 装饰线 */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="mx-4 w-3 h-3 rounded-full bg-gradient-to-r from-yellow-700 to-amber-800" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
        </motion.div>

        {/* 内容区 */}
        <div className="space-y-12">
          {summaryContent.paragraphs.map((para, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              {para.type === 'text' && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-800 text-xl leading-loose">
                    {para.content}
                  </p>
                </div>
              )}

              {para.type === 'quote' && (
                <div className="relative p-8 md:p-12 bg-white/70 backdrop-blur-sm rounded-2xl border-l-4 border-yellow-600 shadow-xl">
                  <div className="absolute top-4 left-4 text-6xl text-yellow-300/30">"</div>
                  <p className="text-2xl md:text-3xl text-gray-800 italic leading-relaxed relative z-10">
                    {para.content}
                  </p>
                  {para.author && (
                    <p className="text-right text-gray-600 mt-4">— {para.author}</p>
                  )}
                </div>
              )}

              {para.type === 'impact' && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    {para.title || '格林的影响力'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {para.data.map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-4 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <div className="text-yellow-600 mt-1">
                          {getIcon(item.label)}
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                          <div className="text-lg font-semibold text-gray-800">{item.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* 配图 */}
          {summaryContent.images && summaryContent.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={summaryContent.images[0]}
                alt="格林的传奇"
                loading="lazy"
                decoding="async"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-transparent" />
            </motion.div>
          )}

          {/* 致谢与寄语 */}
          {summaryContent.acknowledgment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-16 p-8 md:p-12 bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm rounded-2xl shadow-xl text-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">致谢</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                {summaryContent.acknowledgment}
              </p>
            </motion.div>
          )}

          {/* 结束装饰 */}
          <div className="flex items-center justify-center pt-12">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="mx-6 text-amber-600 text-2xl">✦</div>
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
})

SummarySection.displayName = 'SummarySection'

export default SummarySection
