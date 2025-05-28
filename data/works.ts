export interface WorkDetail {
  title: string;
  description: string;
  image: string;
  video?: string;
  detail?: string;
  tags: string[];
}

export interface Work extends WorkDetail {
  id: number;
}

export const ue5Works: Work[] = [
  {
    id: 1,
    title: "UE5 项目示例",
    description: "使用 UE5 创建的项目示例",
    image: "/images/ue5/project1.jpg",
    detail: "这是一个使用 UE5 创建的项目示例，展示了最新的游戏开发技术。",
    tags: ["UE5", "Game Development"]
  }
];

export const houdiniWorks: Work[] = [
  {
    id: 1,
    title: "Houdini 项目示例",
    description: "使用 Houdini 创建的项目示例",
    image: "/images/houdini/project1.jpg",
    detail: "这是一个使用 Houdini 创建的项目示例，展示了程序化建模技术。",
    tags: ["Houdini", "PCG"]
  }
];

export const pcgWorks: Work[] = [
  {
    id: 1,
    title: "Procedural City Generation",
    description: "使用 Houdini 和 UE5 创建的程序化城市生成系统",
    image: "/images/pcg/city.jpg",
    video: "/videos/pcg/city.mp4",
    detail: "这是一个基于 Houdini 的程序化城市生成系统，可以快速生成大规模的城市环境。系统支持自定义建筑风格、道路布局、地形特征等参数。",
    tags: ["Houdini", "UE5", "Procedural", "City Generation"]
  }
]; 