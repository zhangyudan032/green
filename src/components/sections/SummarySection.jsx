import { memo } from 'react'
import { motion } from 'framer-motion'
const SummarySection = memo(({ stage }) => {
  const { summaryContent } = stage

  return (
    <section
      id={`stage-${stage.id}`}
      className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-black py-20 min-h-screen"
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
          <div className="text-sm text-slate-500 mb-2">阶段 {stage.id}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            {stage.title}
          </h2>
          <div className="text-slate-400 text-lg mb-6">{stage.timeRange}</div>

          {/* 装饰线 */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
            <div className="mx-4 w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
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
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-slate-200 text-xl leading-loose">
                    {para.content}
                  </p>
                </div>
              )}

              {para.type === 'quote' && (
                <div className="relative p-8 md:p-12 bg-black/50 backdrop-blur-sm rounded-2xl border-l-4 border-emerald-500 shadow-xl border border-slate-800">
                  <div className="absolute top-4 left-4 text-6xl text-emerald-500/20">"</div>
                  <p className="text-2xl md:text-3xl text-slate-200 italic leading-relaxed relative z-10">
                    {para.content}
                  </p>
                  {para.author && (
                    <p className="text-right text-slate-400 mt-4">— {para.author}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}

          {/* 结束装饰 */}
          <div className="flex items-center justify-center pt-12">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
            <div className="mx-6 text-emerald-400 text-2xl">✦</div>
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
})

SummarySection.displayName = 'SummarySection'

export default SummarySection
