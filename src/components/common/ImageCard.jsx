import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * ImageCard 图片卡片组件 (v2.0.0)
 *
 * 专门用于展示图片的卡片组件
 * 支持：
 * - 图片悬浮效果
 * - 遮罩层动画
 * - 点击跳转或触发事件
 */
const ImageCard = ({
  image,
  title,
  subtitle,
  description,
  link,
  videoUrl,
  onClick,
  className = '',
  overlayEffect = true // 是否显示悬浮遮罩
}) => {

  const handleClick = () => {
    if (onClick) {
      onClick({ image, title, link, videoUrl })
    } else if (link) {
      window.open(link, '_blank')
    }
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      {/* 图片 */}
      <div className="w-full h-64 bg-gradient-to-br from-purple-400 to-indigo-600">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      </div>

      {/* 悬浮遮罩层 */}
      {overlayEffect && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {/* 副标题 */}
          {subtitle && (
            <span className="text-indigo-300 text-sm font-semibold mb-1">
              {subtitle}
            </span>
          )}

          {/* 标题 */}
          {title && (
            <h3 className="text-white text-xl font-bold mb-2">
              {title}
            </h3>
          )}

          {/* 描述 */}
          {description && (
            <p className="text-gray-200 text-sm line-clamp-2">
              {description}
            </p>
          )}

          {/* 图标 */}
          {(link || videoUrl) && (
            <div className="mt-3 flex items-center text-white">
              {videoUrl ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
              <span className="ml-2 text-sm">
                {videoUrl ? '观看视频' : '查看详情'}
              </span>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  videoUrl: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  overlayEffect: PropTypes.bool
}

export default ImageCard
