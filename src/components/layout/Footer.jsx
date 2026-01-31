import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { animateScroll as scroll } from 'react-scroll'

/**
 * Footer 底部组件 (v2.0.0)
 *
 * 功能：
 * - 版权信息
 * - 回到顶部按钮（滚动一定距离后显示）
 */
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  // 监听滚动，显示/隐藏回到顶部按钮
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 回到顶部
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <>
      {/* Footer主体 */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container-custom">
          {/* 主要内容 */}
          <div className="text-center">
            {/* Logo */}
            <h2 className="text-3xl font-bold gradient-text mb-4">
              狼王格林
            </h2>

            {/* 简介 */}
            <p className="text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
              格林的故事展现了狼这一物种的尊严、智慧与对自由的向往。
              让我们一起走进狼王格林的世界，感受自然的力量与生命的感动。
            </p>

            {/* 分隔线 */}
            <div className="border-t border-gray-700 my-6"></div>

            {/* 版权信息 */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} 狼王格林个人主页. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Built with React · Vite · Tailwind CSS · Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* 回到顶部按钮 */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full gradient-bg text-white shadow-lg flex items-center justify-center cursor-pointer z-50 hover:shadow-xl"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            aria-label="回到顶部"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer
