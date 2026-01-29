import { familyMembers } from '../data/greenData'

const Family = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-wolf-dark mb-4">家庭成员</h1>
        <p className="text-xl text-wolf-gray">格林的家族谱系</p>
      </div>

      {/* 家庭成员卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {familyMembers.map((member) => (
          <FamilyCard key={member.id} member={member} />
        ))}
      </div>

      {/* 空状态提示 */}
      {familyMembers.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🐺</div>
          <p className="text-xl text-wolf-gray">
            家庭成员信息待补充...
          </p>
        </div>
      )}
    </div>
  )
}

const FamilyCard = ({ member }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    {/* 图片占位 */}
    <div className="h-48 bg-gradient-to-br from-forest-green to-sky-blue flex items-center justify-center">
      <span className="text-6xl">🐺</span>
    </div>

    {/* 成员信息 */}
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-bold text-wolf-dark">{member.name}</h3>
        <span className="px-3 py-1 bg-forest-green text-white text-sm rounded-full">
          {member.relation}
        </span>
      </div>

      <p className="text-wolf-gray leading-relaxed">
        {member.description}
      </p>
    </div>
  </div>
)

export default Family
