import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

/**
 * Header 导航栏组件 (v2.0.0)
 *
 * 功能：
 * - 固定在顶部（sticky）
 * - 平滑滚动到对应区块
 * - 半透明背景（滚动后变实色）
 * - 响应式汉堡菜单
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: '首页', to: 'hero' },
    { name: '关于格林', to: 'about' },
    { name: '家庭成员', to: 'family' },
    { name: '趣事集锦', to: 'stories' },
    { name: '互动游戏', to: 'game' }
  ]

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/80 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            狼王格林
          </Link>

          {/* 桌面端导航 */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-indigo-600 font-semibold"
                  className="text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors text-base"
                  offset={-80}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 移动端汉堡菜单按钮 */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <motion.ul
            className="md:hidden mt-4 space-y-3 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-indigo-600 font-semibold"
                  className="block text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors"
                  offset={-80}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
