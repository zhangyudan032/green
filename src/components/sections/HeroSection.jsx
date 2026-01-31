import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

/**
 * HeroSection 主视觉区 (v2.0.0)
 *
 * 功能：
 * - 全屏展示
 * - 大图背景
 * - 标题动画
 * - 向下滚动提示
 */
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full gradient-bg-animated" />
        {/* 占位符 - 可替换为实际图片 */}
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 text-center text-white px-4">
        {/* 标题动画 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            狼王格林
          </h1>
        </motion.div>

        {/* 副标题动画 */}
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          来自若尔盖草原的传奇 · 自由与尊严的化身
        </motion.p>

        {/* 按钮 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-80}
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer shadow-lg hover:shadow-xl"
          >
            探索格林的故事
          </Link>
        </motion.div>
      </div>

      {/* 向下滚动提示 */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-80}
          className="cursor-pointer"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}

export default HeroSection
