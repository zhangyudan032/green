import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gameData } from '../../data/greenData'
import VideoModal from '../common/VideoModal'

/**
 * GameSection 互动游戏区 (v2.0.0)
 *
 * 功能：
 * - 找格林游戏
 * - 图片网格
 * - 答题反馈动画
 * - 成功后播放视频
 */
const GameSection = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [correctVideoUrl, setCorrectVideoUrl] = useState('')

  const handleSelect = (option) => {
    if (selectedId) return // 已经选过了

    setSelectedId(option.id)
    setIsCorrect(option.isCorrect)
    setShowResult(true)

    if (option.isCorrect) {
      setCorrectVideoUrl(option.videoUrl)
      // 延迟打开视频弹窗
      setTimeout(() => {
        setVideoModalOpen(true)
      }, 1500)
    }
  }

  const handleReset = () => {
    setSelectedId(null)
    setShowResult(false)
    setIsCorrect(false)
    setVideoModalOpen(false)
  }

  return (
    <section id="game" className="section bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container-custom">
        {/* 标题 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            互动游戏
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            {gameData.question}
          </p>
          <p className="text-gray-500">
            点击你认为是格林的照片
          </p>
        </motion.div>

        {/* 图片网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
          {gameData.options.map((option, index) => (
            <motion.div
              key={option.id}
              className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-lg ${
                selectedId ? 'pointer-events-none' : ''
              } ${
                selectedId === option.id
                  ? option.isCorrect
                    ? 'ring-4 ring-green-500'
                    : 'ring-4 ring-red-500'
                  : ''
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: selectedId ? 1 : 1.05 }}
              whileTap={{ scale: selectedId ? 1 : 0.95 }}
              onClick={() => handleSelect(option)}
            >
              <div className="w-full h-full gradient-bg flex items-center justify-center text-white text-4xl font-bold">
                <img
                  src={option.image}
                  alt={`狼 ${option.id}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <span className="absolute">{option.id}</span>
              </div>

              {/* 选中标记 */}
              {selectedId === option.id && (
                <motion.div
                  className={`absolute inset-0 flex items-center justify-center ${
                    option.isCorrect ? 'bg-green-500/80' : 'bg-red-500/80'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {option.isCorrect ? (
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 结果提示 */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {isCorrect ? (
                <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    {gameData.successTitle}
                  </h3>
                  <p className="text-green-700">
                    {gameData.successMessage}
                  </p>
                </div>
              ) : (
                <div className="bg-red-100 border-2 border-red-500 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-2">
                    {gameData.failTitle}
                  </h3>
                  <p className="text-red-700 mb-4">
                    {gameData.failMessage}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    再试一次
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 重新开始按钮（答对后） */}
        {isCorrect && (
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              再玩一次
            </button>
          </motion.div>
        )}
      </div>

      {/* 视频弹窗 */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl={correctVideoUrl}
        platform="bilibili"
        title="狼王格林"
      />
    </section>
  )
}

export default GameSection
