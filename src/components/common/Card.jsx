import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * Card 通用卡片组件 (v2.0.0)
 *
 * 支持功能：
 * - 悬浮动画效果
 * - 点击跳转外部链接
 * - 点击播放视频
 * - 自定义点击事件
 */
const Card = ({
  image,
  title,
  subtitle,
  description,
  link,
  videoUrl,
  onClick,
  className = '',
  imageHeight = '200px',
  hoverEffect = 'lift' // 'lift' | 'scale' | 'none'
}) => {

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (link) {
      window.open(link, '_blank')
    } else if (videoUrl) {
      onClick?.({ videoUrl })
    }
  }

  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case 'lift':
        return { y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }
      case 'scale':
        return { scale: 1.05 }
      default:
        return {}
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-lg overflow-hidden shadow-md cursor-pointer ${className}`}
      whileHover={getHoverAnimation()}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      {/* 图片 */}
      {image && (
        <div
          className="w-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center"
          style={{ height: imageHeight }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      )}

      {/* 内容 */}
      <div className="p-5">
        {/* 副标题 */}
        {subtitle && (
          <span className="text-sm text-indigo-600 font-semibold">
            {subtitle}
          </span>
        )}

        {/* 标题 */}
        {title && (
          <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
            {title}
          </h3>
        )}

        {/* 描述 */}
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {/* 提示图标 */}
        {(link || videoUrl) && (
          <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium">
            <span>{link ? '查看详情' : '观看视频'}</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  videoUrl: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  imageHeight: PropTypes.string,
  hoverEffect: PropTypes.oneOf(['lift', 'scale', 'none'])
}

export default Card
