import { motion } from 'framer-motion'
import { greenInfo } from '../../data/greenData'

/**
 * AboutSection 基本信息区 (v2.0.0)
 *
 * 功能：
 * - 格林详细介绍
 * - 图文布局
 * - 特征标签
 * - 悬浮效果
 */
const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* 左侧：图片 */}
          <motion.div variants={itemVariants}>
            <div className="relative group">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full gradient-bg flex items-center justify-center text-white text-6xl font-bold">
                  <img
                    src={greenInfo.avatar}
                    alt={greenInfo.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  {/* 占位文字（图片加载失败时显示） */}
                  <span className="absolute">格林</span>
                </div>
              </div>
              {/* 装饰元素 */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-bg rounded-full blur-3xl opacity-30 -z-10" />
            </div>
          </motion.div>

          {/* 右侧：信息 */}
          <motion.div variants={itemVariants}>
            {/* 标题 */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {greenInfo.name}
            </h2>

            {/* 别名 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {greenInfo.alias.map((name, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  {name}
                </span>
              ))}
            </div>

            {/* 基本信息 */}
            <div className="space-y-3 mb-6 text-gray-700">
              <p className="flex items-center">
                <span className="font-semibold w-24">物种：</span>
                <span>{greenInfo.species}</span>
              </p>
              <p className="flex items-center">
                <span className="font-semibold w-24">出生地：</span>
                <span>{greenInfo.birthPlace}</span>
              </p>
            </div>

            {/* 描述 */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {greenInfo.description}
            </p>

            {/* 特征标签 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                性格特征
              </h3>
              <div className="flex flex-wrap gap-3">
                {greenInfo.characteristics.map((trait, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 gradient-bg text-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-default"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
