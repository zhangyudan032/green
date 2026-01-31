import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * VideoModal 视频弹窗组件 (v2.0.0)
 *
 * 支持：
 * - B站视频嵌入
 * - YouTube视频嵌入
 * - 点击背景关闭
 * - ESC键关闭
 * - 动画进出效果
 */
const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  platform = 'bilibili', // 'bilibili' | 'youtube'
  title = '视频播放'
}) => {

  // ESC键关闭
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  // 禁止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // 获取嵌入URL
  const getEmbedUrl = () => {
    if (!videoUrl) return ''

    if (platform === 'bilibili') {
      // 处理B站链接
      if (videoUrl.includes('bilibili.com')) {
        return videoUrl
      }
      return `//player.bilibili.com/player.html?bvid=${videoUrl}`
    } else if (platform === 'youtube') {
      // 处理YouTube链接
      if (videoUrl.includes('youtube.com/embed/')) {
        return videoUrl
      }
      const videoId = videoUrl.split('v=')[1] || videoUrl
      return `https://www.youtube.com/embed/${videoId}`
    }

    return videoUrl
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* 弹窗内容 */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 标题栏 */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* 视频区域 */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={getEmbedUrl()}
                  scrolling="no"
                  border="0"
                  frameBorder="no"
                  framespacing="0"
                  allowFullScreen={true}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={title}
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoUrl: PropTypes.string,
  platform: PropTypes.oneOf(['bilibili', 'youtube']),
  title: PropTypes.string
}

export default VideoModal
