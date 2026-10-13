// ============================================
// 5个核心地标数据
// ============================================
const landmarksData = [
  {
    id: 'landscape-stone',
    name: '育人园景观石',
    short: '甘当路石 · 精神原点',
    image: 'assets/images/landmarks/landscape-stone/main.jpg',
    audio: 'assets/audio/landscape-stone.mp3',
    video: 'https://tv.cctv.com/2024/12/26/VIDEZxJ1Y9hrnHCc1aDn3WzS241226.shtml?spm=C55924871139.PT8hUEEDkoTi.0.0',
    story: `这块石头不一般。它产自川藏公路的起点——四川雅安，是一块重达10吨的天然大理石，高1.9米，长4.7米。当年筑路大军就是从雅安出发，把公路一寸一寸修上了世界屋脊。

石头正面刻着“两路精神育人园”七个大字，由著名青年书法家王劲题写。左上角是园区的标志——两条丝带交织而成，一条代表川藏公路，一条代表青藏公路，象征两条天路如纽带般连接西藏与内地。

石头上还刻着四个字：甘当路石。筑路者在前面开路，养护者在后面守路。一代代交通人就像铺在路上的石头，承受碾压，托起通途。`
  },
  {
    id: 'old-gate',
    name: '50年代老校门',
    short: '因路而生 · 学校渊源',
    image: 'assets/images/landmarks/old-gate/main.jpg',
    audio: 'assets/audio/old-gate.mp3',
    video: 'https://tv.cctv.com/2024/12/27/VIDEfjFDYxbv0batWiFkJd6H241227.shtml',
    story: `1951年，为了给川藏公路培养急需的工程建设人才，西南军政委员会批准创立了西南交通专科学校——这就是重庆交通大学的前身。

复刻的50年代老校门，重现了那段峥嵘岁月。校门左右两侧刻着16个字：“‘两路’精神薪火相传 志图山海交通天下”，由著名青年书法家李松朋题写。

从七公里旧车棚到今天的现代大学，70多年来，一代代重庆交大人接续奋斗、砥砺前行。老校门就是一个起点——路从这里开始，精神也从这里传承。`
  },
  {
    id: 'mushengzhong',
    name: '慕生忠纪念台',
    short: '一个人 · 不怕死',
    image: 'assets/images/landmarks/mushengzhong/main.jpg',
    audio: 'assets/audio/mushengzhong.mp3',
    video: 'https://tv.cctv.com/2023/12/10/VIDEgafzg5w4gCK5fnmekUnh231210.shtml',
    story: `1954年5月，慕生忠带领1200多人的修路队伍，在格尔木河畔拉开了一场向“生命禁区”进军的战役。没有大型机械，全靠钢钎、铁锤、十字镐，一人一镐。

动工前，慕生忠在自己的铁锹柄上刻了五个字：“慕生忠之墓”。他说：“如果我死在路上，这把铁锹就是我的墓碑。路修到哪里，就把我埋在哪里，头冲着拉萨的方向。”

仅用7个月零4天，1283公里的公路从格尔木修到了拉萨。藏族同胞称这条路是“金色的哈达”“幸福的金桥”。`
  },
  {
    id: 'daoban',
    name: '天下第一道班',
    short: '一辈子 · 坚守',
    image: 'assets/images/landmarks/daoban/main.jpg',
    audio: 'assets/audio/daoban.mp3',
    video: 'https://article.xuexi.cn/articles/video/index.html?art_id=11805420145471754467&&',
    story: `在唐古拉山海拔5231米的地方，有一个道班。1954年因青藏公路修建而成立，109养护保通点就在这里。年平均气温零下8℃，最低零下40℃，空气含氧量只有平原的40%。

养路工人战风雪、斗严寒，让40公里国道年年保持畅通。1990年，交通部将109养护保通点命名为“天下第一道班”。2024年，中宣部命名它为第九批“全国学雷锋活动示范点”。

70年来，一代代道班职工接力驻守云端。“养路为业、道班为家，人在路上、路在心上”——这是他们的誓言。`
  },
  {
    id: 'relief-wall',
    name: '通车典礼浮雕墙',
    short: '终点 · 民族团结',
    image: 'assets/images/landmarks/relief-wall/main.jpg',
    audio: 'assets/audio/relief-wall.mp3',
    video: 'https://tv.cctv.cn/2024/10/29/VIDElfOmHk0RGbGfIUsycSNa241029.shtml',
    story: `1954年12月25日。拉萨，布达拉宫前。从川藏公路和青藏公路开来的350多辆汽车缓缓驶入广场。筑路军民、藏族同胞等各界代表三万多人在广场上载歌载舞，欢庆通车。

浮雕宽11米，高3.2米。右侧还原了通车典礼现场——欢呼的人群、鸣笛的车队、挥舞的旗帜。左侧是艺术创作部分，锤钎绳索交织定格，象征筑路的艰辛。

这是“两路”故事的高潮和句号。前面四个地标讲的是“修路的苦”，这个地标讲的是“修通的意义”——民族团结、西藏发展、国家统一。`
  }
];

// ============================================
// 精神丰碑合集卡
// ============================================
const spiritMonument = {
  id: 'spirit-monument',
  name: '精神丰碑',
  short: '纪念碑 · 开路先锋墙',
  image: 'assets/images/landmarks/spirit-monument/monument.jpg',
  isCollection: true,
  intro: '两座丰碑，铭记筑路先辈的不朽功勋。',
  items: [
    {
      title: '川藏青藏公路纪念碑',
      image: 'assets/images/landmarks/spirit-monument/monument.jpg',
      text: '纪念碑矗立在拉萨，碑文记载了11万筑路大军的丰功伟绩。1954年，川藏、青藏公路同时通车，结束了西藏没有现代公路的历史。3000多名英烈长眠高原，用生命铺就了这条“天路”。'
    },
    {
      title: '开路先锋墙',
      image: 'assets/images/landmarks/spirit-monument/wall.jpg',
      text: '墙上铭刻着筑路先辈的名字与事迹。他们中有工程技术人员，有解放军战士，有藏族同胞，也有普通民工。没有他们的开路，就没有今天的“两路”。'
    }
  ]
};

// ============================================
// 园区体验合集卡
// ============================================
const experienceCollection = {
  id: 'experience',
  name: '园区体验',
  short: '触摸 · 寻迹 · 室内展项',
  image: 'assets/images/landmarks/experience/main.jpg',
  isCollection: true,
  intro: '走进育人园室内展馆，用触摸、影像和互动，重新感受“两路”的艰险与伟大。',
  items: [
    {
      title: '触摸川藏线',
      image: 'assets/images/landmarks/experience/touch-chuanzang.jpg',
      text: '触摸屏互动，重现川藏线险峻路段。怒江72道拐、通麦天险、雀儿山……每一段都是筑路者用血肉之躯凿出来的。'
    },
    {
      title: '触摸青藏线',
      image: 'assets/images/landmarks/experience/touch-qingzang.jpg',
      text: '触摸屏互动，了解青藏线建设历程。从格尔木到拉萨，1283公里，翻越昆仑山、唐古拉山，跨过通天河、沱沱河。'
    },
    {
      title: '川藏路线图',
      image: 'assets/images/landmarks/experience/route-map.jpg',
      text: '从雅安到拉萨，海拔变化一目了然。2142公里的川藏线，翻越14座大山，跨过10条大河，是世界上最险峻的公路之一。'
    },
    {
      title: '园区室内部分',
      image: 'assets/images/landmarks/experience/main.jpg',
      text: '220度环幕影厅、AI虚拟讲解员“交小路”，用数字技术重现“两路”建设场景，让历史可感可触。'
    },
    {
      title: '寻迹川藏线',
      image: 'assets/images/landmarks/experience/xunji.jpg',
      text: '影像长廊，跟随筑路者足迹。一张张老照片，一段段口述史，还原那段激情燃烧的岁月。'
    },
    {
      title: '行远·印记鸣谢墙',
      image: 'assets/images/landmarks/experience/mingxie.jpg',
      text: '铭记校友与社会各界的支持。育人园的建设，凝聚着无数交大人的心意与力量。'
    },
    {
      title: '72道拐',
      image: 'assets/images/landmarks/experience/72daoguai.jpg',
      text: '川藏线上的险峻天路缩影。从山脚到山顶，垂直落差近1500米，弯道密集如麻花，是筑路艰险的极致体现。'
    }
  ]
};

// ============================================
// 校训解读数据
// ============================================
const mottoData = [
  {
    title: '明德',
    image: 'assets/images/motto/mingde.jpg',
    text: '明德，是立德树人的根本。学校始终把师德师风放在首位，一代代教师扎根讲台，用言传身教传承“两路”精神。'
  },
  {
    title: '行远',
    image: 'assets/images/motto/xingyuan.jpg',
    text: '行远，是从七公里旧车棚到现代大学的创业历程。70余年来，学校接续奋斗、砥砺前行，每一步都走得踏实而坚定。'
  },
  {
    title: '交通天下',
    image: 'assets/images/motto/jiaotong.jpg',
    text: '交通天下，是“水陆空轨”的学科布局，是服务交通强国的使命担当。从川藏公路到港珠澳大桥，交大人的身影始终在路上。'
  }
];