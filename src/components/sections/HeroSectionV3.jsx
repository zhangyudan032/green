import { motion } from 'framer-motion'
import { heroInfo } from '../../data/greenData_v3'
import { FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

const HeroSectionV3 = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroInfo.backgroundImage}
          alt="格林背景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* 内容区 */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
            {heroInfo.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl mb-6 text-gray-200 drop-shadow-lg">
            {heroInfo.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-100 drop-shadow-md mb-8">
            {heroInfo.introduction}
          </p>
        </motion.div>

        {/* 向下滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="stage-1"
            smooth={true}
            duration={800}
            offset={-80}
            className="inline-block cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <span className="text-sm">开始阅读</span>
              <FaChevronDown className="text-2xl" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10" />
    </section>
  )
}

export default HeroSectionV3
