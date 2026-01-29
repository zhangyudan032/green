// 格林的基本信息
export const greenInfo = {
  name: "格林",
  alias: ["狼王格林", "绿姐"],
  species: "狼",
  birthPlace: "若尔盖草原",
  characteristics: [
    "聪明机智",
    "忠诚勇敢",
    "狩猎能力强",
    "善于沟通",
    "保护意识强"
  ],
  avatar: "/assets/green-avatar.jpg"
}

// 家庭成员信息
export const familyMembers = [
  {
    id: 1,
    name: "示例成员1",
    relation: "父亲",
    description: "这里可以添加家庭成员的详细介绍。描述他们的性格、特点和与格林的关系。",
    image: "/assets/family/member1.jpg"
  },
  {
    id: 2,
    name: "示例成员2",
    relation: "母亲",
    description: "这里可以添加家庭成员的详细介绍。描述他们的性格、特点和与格林的关系。",
    image: "/assets/family/member2.jpg"
  },
  // 可以继续添加更多家庭成员...
]

// 有趣故事
export const stories = [
  {
    id: 1,
    title: "初次相遇",
    date: "2020-06-15",
    content: "这是格林与主人初次相遇的故事。可以详细描述当时的情景、格林的表现，以及这次相遇对双方的意义。添加更多细节让故事更加生动有趣。",
    images: ["/assets/stories/story1.jpg"],
    videoUrl: "" // 可以添加B站或YouTube视频链接
  },
  {
    id: 2,
    title: "草原奔跑",
    date: "2020-08-20",
    content: "格林在若尔盖草原自由奔跑的故事。描述草原的美景、格林的矫健身姿，以及那种自由奔放的感觉。",
    images: ["/assets/stories/story2.jpg"],
    videoUrl: ""
  },
  {
    id: 3,
    title: "智慧时刻",
    date: "2021-03-10",
    content: "展现格林聪明才智的一个故事。可以描述格林如何解决问题、如何与人沟通，体现它的智慧。",
    images: ["/assets/stories/story3.jpg"],
    videoUrl: ""
  },
  // 可以继续添加更多故事...
]

// 游戏识别数据
export const gameData = {
  images: [
    {
      id: 1,
      src: "/assets/game/wolf1.jpg",
      isGreen: true, // 这张是格林
      videoUrl: "https://player.bilibili.com/player.html?bvid=BV号" // B站视频链接
    },
    {
      id: 2,
      src: "/assets/game/wolf2.jpg",
      isGreen: false,
      videoUrl: ""
    },
    {
      id: 3,
      src: "/assets/game/wolf3.jpg",
      isGreen: false,
      videoUrl: ""
    },
    {
      id: 4,
      src: "/assets/game/wolf4.jpg",
      isGreen: false,
      videoUrl: ""
    },
    {
      id: 5,
      src: "/assets/game/wolf5.jpg",
      isGreen: false,
      videoUrl: ""
    },
    {
      id: 6,
      src: "/assets/game/wolf6.jpg",
      isGreen: false,
      videoUrl: ""
    },
  ]
}
