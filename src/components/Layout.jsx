import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/family', label: '家庭' },
    { path: '/stories', label: '故事' },
    { path: '/game', label: '互动' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 导航栏 */}
      <nav className="bg-wolf-dark text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-forest-green">🐺</div>
              <span className="text-xl font-bold">狼王格林</span>
            </Link>

            {/* 导航菜单 */}
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-forest-green text-white'
                      : 'text-gray-300 hover:bg-wolf-gray hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="bg-wolf-dark text-gray-400 mt-auto">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2026 狼王格林个人主页. All rights reserved.</p>
          <p className="text-sm mt-2">致敬草原之王 🐺</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
