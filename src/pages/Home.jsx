import { greenInfo } from '../data/greenData'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 头部大图区 */}
      <div className="bg-gradient-to-r from-forest-green to-sky-blue rounded-2xl shadow-2xl overflow-hidden mb-8">
        <div className="p-12 text-white text-center">
          <div className="text-8xl mb-4">🐺</div>
          <h1 className="text-5xl font-bold mb-4">{greenInfo.name}</h1>
          <p className="text-xl opacity-90">
            {greenInfo.alias.join(' · ')}
          </p>
        </div>
      </div>

      {/* 基本信息卡片 */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-wolf-dark mb-6 border-b-4 border-forest-green pb-2">
          基本信息
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoItem label="姓名" value={greenInfo.name} />
          <InfoItem label="别名" value={greenInfo.alias.join('、')} />
          <InfoItem label="物种" value={greenInfo.species} />
          <InfoItem label="出生地" value={greenInfo.birthPlace} />
        </div>
      </div>

      {/* 特征标签 */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-wolf-dark mb-6 border-b-4 border-forest-green pb-2">
          性格特征
        </h2>

        <div className="flex flex-wrap gap-3">
          {greenInfo.characteristics.map((trait, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-forest-green to-sky-blue text-white rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-shadow duration-200"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* 引导语 */}
      <div className="mt-8 text-center p-6 bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl border-2 border-forest-green">
        <p className="text-lg text-wolf-dark">
          探索导航栏，了解更多关于狼王格林的故事 🐾
        </p>
      </div>
    </div>
  )
}

const InfoItem = ({ label, value }) => (
  <div className="flex items-start">
    <span className="text-wolf-gray font-semibold text-lg mr-2">{label}:</span>
    <span className="text-wolf-dark text-lg">{value}</span>
  </div>
)

export default Home
