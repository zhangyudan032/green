import { useState } from 'react'
import { gameData } from '../data/greenData'

const Game = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const handleImageClick = (id) => {
    setSelectedId(id)
    setShowResult(true)
  }

  const handleReset = () => {
    setSelectedId(null)
    setShowResult(false)
    setShowVideo(false)
  }

  const selectedImage = gameData.images.find(img => img.id === selectedId)
  const isCorrect = selectedImage?.isGreen

  return (
    <div className="max-w-6xl mx-auto">
      {/* 标题区 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-wolf-dark mb-4">互动识别</h1>
        <p className="text-xl text-wolf-gray mb-6">
          从下面的图片中找出哪一张是狼王格林本人
        </p>

        {!showResult && (
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full text-lg font-semibold shadow-lg animate-pulse">
            点击你认为是格林的图片 🐺
          </div>
        )}
      </div>

      {/* 游戏区 */}
      {!showVideo ? (
        <>
          {/* 图片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {gameData.images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                isSelected={selectedId === image.id}
                onClick={() => !showResult && handleImageClick(image.id)}
                disabled={showResult}
              />
            ))}
          </div>

          {/* 结果提示 */}
          {showResult && (
            <div className="text-center">
              {isCorrect ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 mb-6 animate-bounce">
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="text-3xl font-bold text-green-600 mb-3">
                    恭喜你，答对了！
                  </h2>
                  <p className="text-xl text-wolf-gray mb-6">
                    你成功识别出了狼王格林
                  </p>
                  <button
                    onClick={() => setShowVideo(true)}
                    className="px-8 py-4 bg-gradient-to-r from-forest-green to-sky-blue text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    观看格林的视频 🎬
                  </button>
                </div>
              ) : (
                <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-8 mb-6">
                  <div className="text-6xl mb-4">😅</div>
                  <h2 className="text-3xl font-bold text-red-600 mb-3">
                    很遗憾，答错了
                  </h2>
                  <p className="text-xl text-wolf-gray mb-6">
                    这不是格林，再试一次吧！
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    再玩一次 🔄
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        /* 视频播放区 */
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
            <h2 className="text-3xl font-bold text-wolf-dark mb-6">
              关于格林的视频
            </h2>

            {selectedImage?.videoUrl ? (
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedImage.videoUrl}
                  title="格林视频"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-forest-green to-sky-blue rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-xl">视频链接待补充</p>
                </div>
              </div>
            )}

            <button
              onClick={handleReset}
              className="px-8 py-4 bg-gradient-to-r from-forest-green to-sky-blue text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              再玩一次 🔄
            </button>
          </div>
        </div>
      )}

      {/* 游戏说明 */}
      {!showResult && gameData.images.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🎮</div>
          <p className="text-xl text-wolf-gray">
            游戏图片待补充...
          </p>
        </div>
      )}
    </div>
  )
}

const ImageCard = ({ image, isSelected, onClick, disabled }) => (
  <div
    onClick={onClick}
    className={`
      relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
      transition-all duration-300 transform
      ${!disabled && 'hover:shadow-2xl hover:scale-105'}
      ${isSelected && 'ring-4 ring-forest-green'}
      ${disabled && !isSelected && 'opacity-50 cursor-not-allowed'}
    `}
  >
    {/* 图片占位 */}
    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
      <span className="text-8xl">🐺</span>
    </div>

    {/* 选中标记 */}
    {isSelected && (
      <div className="absolute top-4 right-4 bg-forest-green text-white rounded-full p-3 shadow-lg">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    )}
  </div>
)

export default Game
