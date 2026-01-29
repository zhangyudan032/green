import { useState } from 'react'
import { stories } from '../data/greenData'

const Stories = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleStory = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-wolf-dark mb-4">有趣故事</h1>
        <p className="text-xl text-wolf-gray">记录格林的精彩时刻</p>
      </div>

      {/* 时间轴 */}
      <div className="relative">
        {/* 中央线 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-forest-green hidden md:block"></div>

        {/* 故事列表 */}
        <div className="space-y-8">
          {stories.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              index={index}
              isExpanded={expandedId === story.id}
              onToggle={() => toggleStory(story.id)}
            />
          ))}
        </div>
      </div>

      {/* 空状态 */}
      {stories.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📖</div>
          <p className="text-xl text-wolf-gray">
            故事内容待补充...
          </p>
        </div>
      )}
    </div>
  )
}

const StoryCard = ({ story, index, isExpanded, onToggle }) => {
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* 时间轴圆点 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-forest-green rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

      {/* 故事卡片 */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
          {/* 日期标签 */}
          <div className="bg-gradient-to-r from-forest-green to-sky-blue p-3 text-white">
            <p className="text-sm font-semibold">{story.date}</p>
          </div>

          {/* 内容 */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-wolf-dark mb-3">
              {story.title}
            </h3>

            {/* 简短预览 */}
            <p className={`text-wolf-gray leading-relaxed ${!isExpanded && 'line-clamp-3'}`}>
              {story.content}
            </p>

            {/* 展开/收起按钮 */}
            <button
              onClick={onToggle}
              className="mt-4 text-forest-green font-semibold hover:text-sky-blue transition-colors duration-200"
            >
              {isExpanded ? '收起 ▲' : '阅读更多 ▼'}
            </button>

            {/* 视频链接 */}
            {isExpanded && story.videoUrl && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href={story.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-forest-green to-sky-blue text-white rounded-lg hover:shadow-lg transition-shadow duration-200"
                >
                  <span className="mr-2">🎬</span>
                  观看相关视频
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories
