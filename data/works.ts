export interface WorkDetail {
  type: string;
  url: string;
  description: string;
}

export interface Work {
  id: string;
  title: string;
  coverImage: string;
  category: string;
  tags: string[];
  description: string;
  details: WorkDetail[];
}

export const ue5Works = [
  {
    id: 'forest-mountain',
    title: '森林山地',
    coverImage: '/images/ue5/森山.png',
    category: 'UE5',
    tags: ['地形', '植被', '河流', 'PCG'],
    description: '使用Houdini制作山体高度图和各部分遮罩导入UE5.5地形，实现复杂地形和植被系统',
    details: [
      {
        type: 'video',
        url: '/videos/ue5/森山1.mp4',
        description: '使用houdini制作山体高度图和各部分遮罩导入ue5.5地形，以遮罩为基础分配地形材质并在pcg中获取材质层布尔值，以此为基本点进行计算出山顶、山中、角度平缓区域、河岸、河底等区域点，并进一步撒点计算渐变距离后分配对应植被、石块模型'
      },
      {
        type: 'video',
        url: '/videos/ue5/森山2.mp4',
        description: '树模型的LOD1材质中增加了以每实例随机数进行颜色偏移节点，让模型在远处呈现出部分随机差异，河流流动有Noise滚动与整体Flowmap两种UV变化，呈现出小波浪和整体流势'
      },
      {
        type: 'image',
        url: '/images/ue5/森山随机山路1.png',
        description: '从山顶随机获取山脚最近点并连接出随机山路，创建样条线添加山路模型，可根据宽容度、种子等其他参数随机变化样条线'
      },
      {
        type: 'image',
        url: '/images/ue5/森山随机山路2.png',
        description: '从山顶随机获取山脚最近点并连接出随机山路，创建样条线添加山路模型，可根据宽容度、种子等其他参数随机变化样条线'
      }
    ]
  },
  {
    id: 'loop-building',
    title: 'Loop建筑',
    coverImage: '/images/ue5/Loop建筑.png',
    category: 'UE5',
    tags: ['建筑', 'PCG', '蓝图'],
    description: '使用样条线和PCG系统生成可自定义的建筑群',
    details: [
      {
        type: 'video',
        url: '/videos/ue5/Loop建筑1.mp4',
        description: '使用样条线自定义建筑生成范围与形状，自定义层数、层高、楼层分布比例、随机墙面种子等参数调整建筑整体外观，自定义顶楼墙面、墙高、地面材质，自定义楼层内房间大小规律并随机分布，楼梯蓝图每层镂空并添加楼梯模型，门蓝图替换门模型'
      },
      {
        type: 'video',
        url: '/videos/ue5/Loop建筑2.mp4',
        description: '镂空蓝图负责将选择的方向上的墙面移除，配合复制建筑蓝图可达到空中走廊效果'
      },
      {
        type: 'video',
        url: '/videos/ue5/Loop建筑3.mp4',
        description: '楼梯蓝图接触到楼层自动移除地面与天花板，添加楼梯模型或天井模型，设置模型朝向'
      },
      {
        type: 'video',
        url: '/videos/ue5/Loop建筑4.mp4',
        description: '门蓝图接触到墙面自动替换门框与门模型'
      },
      {
        type: 'video',
        url: '/videos/ue5/Loop建筑5.mp4',
        description: '整体使用Loop类型图表进行复制，使用数据资产设置模型、位移、房间大小等参数'
      }
    ]
  },
  {
    id: 'forest',
    title: '树林',
    coverImage: '/images/ue5/树林.png',
    category: 'UE5',
    tags: ['植被', '河流', 'PCG'],
    description: '使用PCG系统生成自然森林和溪流场景',
    details: [
      {
        type: 'video',
        url: '/videos/ue5/树林.mp4',
        description: '1，森林样条线内随机撒点并以中心向外过渡模型类型，树模型周统一撒点并使远离树的草逐渐减小缩放与分布\n2，溪流样条线沿线生成随机宽度面片并覆盖水流材质，在溪流两侧生成模型，并排除被溪流覆盖的森林模型'
      }
    ]
  },
  {
    id: 'bookshelf',
    title: '书架',
    coverImage: '/images/ue5/书架.png',
    category: 'UE5',
    tags: ['道具', 'PCG'],
    description: '自定义书架层数、层高以及书架上的模型和木板模型，在书架长度内随机分布模型数量和起始点偏移',
    details: [
      {
        type: 'video',
        url: '/videos/ue5/书架.mp4',
        description: '自定义书架层数、层高以及书架上的模型和木板模型，在书架长度内随机分布模型数量和起始点偏移，并且使模型实例进行随机颜色偏移'
      }
    ]
  },
  {
    id: 'dining-table',
    title: '餐桌',
    coverImage: '/images/ue5/餐桌.png',
    category: 'UE5',
    tags: ['道具', 'PCG'],
    description: '使用方形样条线在餐桌两侧规律分布餐具组合，在中央随机分布食物模型',
    details: [
      {
        type: 'video',
        url: '/videos/ue5/餐桌.mp4',
        description: '使用方形样条线在餐桌两侧规律（一只勺子、一只盘子、一个杯子）分布餐具组合，在中央随机分布食物模型'
      }
    ]
  },
  {
    id: 'object-surface',
    title: '物体表面',
    coverImage: '/images/ue5/物体表面.png',
    category: 'UE5',
    tags: ['道具', 'PCG'],
    description: '识别模型顶部并在范围内随机放置模型',
    details: [
      {
        type: 'video',
        url: '/videos/ue5/物体表面.mp4',
        description: '识别模型顶部并在范围内随机放置模型'
      }
    ]
  },
  {
    id: 'railing',
    title: '栏杆',
    coverImage: '/images/ue5/栏杆.png',
    category: 'UE5',
    tags: ['道具', 'PCG'],
    description: '使用grammar分配样条线模型，并设置使用模型原本高度和自定义高度两种模式',
    details: [
      {
        type: 'video',
        url: '/videos/ue5/栏杆.mp4',
        description: '使用grammar分配样条线模型，并设置使用模型原本高度和自定义高度两种模式'
      }
    ]
  }
];

export const houdiniWorks = [
  {
    id: 'lab-building',
    title: 'Lab建筑',
    coverImage: '/images/houdini/lab建筑.png',
    category: 'Houdini',
    tags: ['建筑', '程序化'],
    description: '使用Houdini的Lab中的建筑类节点和语法来生成点、控制点距和排序',
    details: [
      {
        type: 'video',
        url: '/videos/houdini/lab建筑.mp4',
        description: '使用houdini的lab中的建筑类节点和语法来生成点、控制点距和排序，导出hda资产在ue中设置墙面模型和材质等'
      }
    ]
  },
  {
    id: 'pagoda',
    title: '佛塔',
    coverImage: '/images/houdini/佛塔.png',
    category: 'Houdini',
    tags: ['建筑', '程序化'],
    description: '可高度自定义的佛塔建筑资产',
    details: [
      {
        type: 'video',
        url: '/videos/houdini/佛塔.mp4',
        description: '分为底座、阶梯、复制的楼层、屋顶、塔顶、塔尖部分，可以自定义底座、楼层等长度宽度、层高参数，以及屋顶瓦片列数、屋顶延伸形状、门窗长宽、门钉数量等参数，还有从图片获取的塔刹复制数量、圆环数量等参数，组成可高度自定义建筑资产'
      }
    ]
  },
  {
    id: 'crystal-chandelier',
    title: '水晶吊灯',
    coverImage: '/images/houdini/水晶吊灯.png',
    category: 'Houdini',
    tags: ['程序化', '装饰'],
    description: '可自定义框架形状和细节的水晶吊灯',
    details: [
      {
        type: 'video',
        url: '/videos/houdini/水晶吊灯.mp4',
        description: '可以控制吊灯的框架形状、边数、复制层数、层高、锁链数量、水晶的随机角度、锁链形状等参数'
      }
    ]
  },
  {
    id: 'succulent',
    title: '多肉',
    coverImage: '/images/houdini/多肉.png',
    category: 'Houdini',
    tags: ['植物', '程序化'],
    description: '程序化生成的多肉植物',
    details: [
      {
        type: 'video',
        url: '/videos/houdini/多肉.mp4',
        description: '分为可控制凸起列数、随机木刺、凸起类型等参数的仙人球，和在自定义层数和叶片数量内随机生成的多肉植物，主要通过resample后使用曲线参数或bend等节点来控制样条线形状，使用skin节点来桥接复制的样条线'
      }
    ]
  },
  {
    id: 'mechanical-bird',
    title: '机械鸟',
    coverImage: '/images/houdini/机械鸟.png',
    category: 'Houdini',
    tags: ['机械', '程序化'],
    description: '可自定义的机械鸟模型',
    details: [
      {
        type: 'video',
        url: '/videos/houdini/机械鸟.mp4',
        description: '不同组件之间的互相调用、布尔和复制，实现修改参数时可以联动修改对应其他部分参数的效果，各部件都保留进一步调整或随机化的参数'
      }
    ]
  },
  {
    id: 'coral-reef',
    title: '珊瑚礁',
    coverImage: '/images/houdini/珊瑚礁.png',
    category: 'Houdini',
    tags: ['自然', '程序化'],
    description: '程序化生成的珊瑚礁场景',
    details: [
      {
        type: 'video',
        url: '/videos/houdini/珊瑚礁.mp4',
        description: '珊瑚礁由多种不同机制的珊瑚类型构成，通过绘画密度遮罩的方式在石块上选择生成区域，1是通过复制随机扭曲后首尾进行渐变缩放的样条线的珊瑚，2是通过布尔切割然后remesh后添加Z轴随机偏移扭曲的珊瑚，3是将polywire出来的管子转化成vdb进行融合的珊瑚，4是使用lsystem树形分叉制作形状后复制的珊瑚'
      }
    ]
  }
];

export const sceneEditingWorks: Work[] = [
  {
    id: 'realistic-scene-editing',
    title: '个人-写实场景地编',
    coverImage: '/images/level_art/个人-写实场景地编.png',
    category: '场景编辑',
    tags: [],
    description: '',
    details: [
      {
        type: 'video',
        url: '/videos/level_art/个人-写实场景地编.mp4',
        description: ''
      }
    ]
  },
  {
    id: 'realistic-autumn-scene-editing',
    title: '个人-写实秋景地编',
    coverImage: '/images/level_art/个人-写实秋景地编.png',
    category: '场景编辑',
    tags: [],
    description: '',
    details: [
      {
        type: 'video',
        url: '/videos/level_art/个人-写实秋景地编.mp4',
        description: ''
      }
    ]
  }
];

export const projectWorks: Work[] = [
  {
    id: 'participated-project',
    title: '参与项目',
    coverImage: '/images/projects/参与项目.png',
    category: '项目集',
    tags: [],
    description: '',
    details: [
      {
        type: 'video',
        url: '/videos/projects/参与项目.mp4',
        description: ''
      }
    ]
  }
]; 