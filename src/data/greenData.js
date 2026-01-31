// 格林的基本信息 (v2.0.0)
export const greenInfo = {
  name: "格林",
  alias: ["狼王格林", "绿姐"],
  species: "狼",
  birthPlace: "若尔盖草原",
  description: "格林是一只来自若尔盖草原的狼，拥有非凡的智慧和勇气。它不仅是草原的王者，更是人类忠实的伙伴。格林的故事展现了狼这一物种的尊严、智慧与对自由的向往。",
  characteristics: [
    "聪明机智",
    "忠诚勇敢",
    "狩猎能力强",
    "善于沟通",
    "保护意识强"
  ],
  avatar: "/assets/green-main.jpg",
  heroImage: "/assets/hero-background.jpg"
}

// 家庭成员信息 (v2.0.0 - 增强版)
export const familyMembers = [
  {
    id: 1,
    name: "示例父亲",
    relation: "父亲",
    description: "格林的父亲，草原上的老狼王",
    detailDescription: "格林的父亲是若尔盖草原上德高望重的老狼王，拥有丰富的狩猎经验和领导才能。它将这些宝贵的品质传承给了格林，使格林成为了新一代的草原王者。",
    image: "/assets/family/father.jpg",
    link: "", // 外部链接（可选）
    videoUrl: "" // 视频链接（可选）
  },
  {
    id: 2,
    name: "示例母亲",
    relation: "母亲",
    description: "格林的母亲，温柔而坚强",
    detailDescription: "格林的母亲是一只温柔而坚强的母狼，她教会了格林如何在草原上生存，如何与同伴相处，以及如何保持狼的尊严与自由。",
    image: "/assets/family/mother.jpg",
    link: "",
    videoUrl: ""
  },
  {
    id: 3,
    name: "示例兄弟",
    relation: "兄弟",
    description: "格林的兄弟，共同成长的伙伴",
    detailDescription: "格林的兄弟与它一起在草原上长大，它们互相扶持，共同面对草原的挑战。兄弟之间的深厚情谊是格林成长过程中的重要支撑。",
    image: "/assets/family/brother.jpg",
    link: "",
    videoUrl: ""
  },
  {
    id: 4,
    name: "示例伴侣",
    relation: "伴侣",
    description: "格林的伴侣，忠诚的爱人",
    detailDescription: "格林的伴侣是一只美丽而忠诚的母狼，它们共同守护着自己的领地和家庭。伴侣的支持让格林更加坚定地履行狼王的职责。",
    image: "/assets/family/partner.jpg",
    link: "",
    videoUrl: ""
  }
]

// 有趣故事 (v2.0.0 - 增强版)
export const stories = [
  {
    id: 1,
    title: "初次相遇",
    date: "2020-06-15",
    content: "那是一个阳光明媚的夏日午后，在若尔盖草原的一处山坡上，格林与它的主人第一次相遇。当时格林还是一只幼狼，眼神中充满了对世界的好奇与警惕。主人蹲下身，轻声呼唤，格林犹豫了片刻，最终迈出了信任的第一步。这次相遇改变了它们彼此的命运，开启了一段跨越物种的深厚友谊。",
    images: ["/assets/stories/story1.jpg"],
    videoUrl: "", // B站或YouTube视频链接
    externalLink: "" // 外部网页链接
  },
  {
    id: 2,
    title: "草原奔跑",
    date: "2020-08-20",
    content: "若尔盖草原一望无际，天高云淡。格林在这片自由的土地上尽情奔跑，矫健的身姿在阳光下闪耀着金色的光芒。它奔跑的速度如同草原上的风，充满了力量与美感。这一刻，格林是真正的草原之子，是自由的化身。主人站在远处，默默注视着这幅美丽的画面，心中充满了感动。",
    images: ["/assets/stories/story2.jpg"],
    videoUrl: "",
    externalLink: ""
  },
  {
    id: 3,
    title: "智慧时刻",
    date: "2021-03-10",
    content: "有一次，格林和主人在山林中迷路了。天色渐暗，主人有些焦急。格林却异常冷静，它嗅着空气，辨别着方向，然后坚定地向一个方向前进。主人选择相信它，跟随着格林的脚步。一个小时后，他们成功走出了山林。这一刻，主人深刻体会到了格林的智慧与可靠。",
    images: ["/assets/stories/story3.jpg"],
    videoUrl: "",
    externalLink: ""
  },
  {
    id: 4,
    title: "守护时刻",
    date: "2021-07-18",
    content: "一个深夜，草原上传来了陌生的脚步声。格林立刻警觉起来，站在主人的帐篷前，低声吼叫。它的眼神警惕而坚定，身体微微前倾，随时准备保护主人。最终，那些陌生的脚步声渐渐远去，格林才放松下来。主人知道，有格林在，自己永远是安全的。",
    images: ["/assets/stories/story4.jpg"],
    videoUrl: "",
    externalLink: ""
  }
]

// 游戏识别数据 (v2.0.0 - 优化版)
export const gameData = {
  question: "这些狼中，哪只是格林？",
  successTitle: "恭喜你，答对了！",
  successMessage: "你成功识别出了狼王格林！现在可以观看格林的精彩视频。",
  failTitle: "很遗憾",
  failMessage: "这不是格林哦，再试一次吧！",
  options: [
    {
      id: 1,
      image: "/assets/game/wolf1.jpg",
      isCorrect: true, // 这张是格林
      successMessage: "没错！这就是狼王格林！",
      videoUrl: "https://player.bilibili.com/player.html?bvid=BV号" // B站视频链接
    },
    {
      id: 2,
      image: "/assets/game/wolf2.jpg",
      isCorrect: false,
      failMessage: "这不是格林，再仔细看看~"
    },
    {
      id: 3,
      image: "/assets/game/wolf3.jpg",
      isCorrect: false,
      failMessage: "这不是格林，再试一次吧~"
    },
    {
      id: 4,
      image: "/assets/game/wolf4.jpg",
      isCorrect: false,
      failMessage: "很接近了，但这不是格林~"
    },
    {
      id: 5,
      image: "/assets/game/wolf5.jpg",
      isCorrect: false,
      failMessage: "这不是格林，加油！"
    },
    {
      id: 6,
      image: "/assets/game/wolf6.jpg",
      isCorrect: false,
      failMessage: "不对哦，再想想~"
    }
  ]
}
