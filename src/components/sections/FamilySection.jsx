import { useState } from 'react'
import { motion } from 'framer-motion'
import { familyMembers } from '../../data/greenData'
import Card from '../common/Card'
import VideoModal from '../common/VideoModal'

/**
 * FamilySection 家庭成员区 (v2.0.0)
 *
 * 功能：
 * - 卡片网格布局
 * - 悬浮动画
 * - 交错渐入效果
 * - 支持视频播放和链接跳转
 */
const FamilySection = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState('')

  const handleCardClick = (member) => {
    if (member.videoUrl) {
      setCurrentVideo(member.videoUrl)
      setVideoModalOpen(true)
    } else if (member.link) {
      window.open(member.link, '_blank')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="family" className="section bg-gray-50">
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
            家庭成员
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            格林的家人们，他们共同构成了温暖的家庭
          </p>
        </motion.div>

        {/* 卡片网格 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {familyMembers.map((member) => (
            <motion.div key={member.id} variants={cardVariants}>
              <Card
                image={member.image}
                title={member.name}
                subtitle={member.relation}
                description={member.description}
                link={member.link}
                videoUrl={member.videoUrl}
                onClick={() => handleCardClick(member)}
                hoverEffect="lift"
                imageHeight="250px"
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
        title="家庭成员视频"
      />
    </section>
  )
}

export default FamilySection
