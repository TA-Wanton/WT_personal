interface WorkDetail {
  type: string;
  url: string;
  description: string;
}

interface Work {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  details: WorkDetail[];
  tags: string[];
}

export const ue5Works: Work[] = [
  {
    id: "1",
    title: "UE5作品示例",
    description: "这是一个UE5作品示例描述",
    coverImage: "/images/ue5-sample.jpg",
    details: [
      {
        type: "视频",
        url: "https://example.com/video",
        description: "作品展示视频"
      }
    ],
    tags: ["UE5", "技术美术"]
  }
];

export const houdiniWorks: Work[] = [
  {
    id: "1",
    title: "Houdini作品示例",
    description: "这是一个Houdini作品示例描述",
    coverImage: "/images/houdini-sample.jpg",
    details: [
      {
        type: "视频",
        url: "https://example.com/video",
        description: "作品展示视频"
      }
    ],
    tags: ["Houdini", "PCG"]
  }
]; 