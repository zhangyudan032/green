import { useState } from 'react'
import { motion } from 'framer-motion'
import { stories } from '../../data/greenData'
import ImageCard from '../common/ImageCard'
import VideoModal from '../common/VideoModal'

/**
 * StoriesSection 故事展示区 (v2.0.0)
 *
 * 功能：
 * - 故事卡片展示
 * - 网格布局
 * - 支持视频和外部链接
 */
const StoriesSection = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')

  const handleStoryClick = (story) => {
    if (story.videoUrl) {
      setCurrentVideo(story.videoUrl)
      setCurrentTitle(story.title)
      setVideoModalOpen(true)
    } else if (story.externalLink) {
      window.open(story.externalLink, '_blank')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="stories" className="section bg-white">
      <div className="container-custom">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            趣事集锦
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            记录格林的点点滴滴，每一个瞬间都值得珍藏
          </p>
        </motion.div>

        {/* 故事网格 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stories.map((story) => (
            <motion.div key={story.id} variants={itemVariants}>
              <ImageCard
                image={story.images[0]}
                title={story.title}
                subtitle={story.date}
                description={story.content}
                videoUrl={story.videoUrl}
                link={story.externalLink}
                onClick={() => handleStoryClick(story)}
                overlayEffect={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 视频弹窗 */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl={currentVideo}
        platform="bilibili"
        title={currentTitle}
      />
    </section>
  )
}

export default StoriesSection
