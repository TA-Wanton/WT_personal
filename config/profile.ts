interface SocialLink {
  platform: 'github' | 'linkedin' | 'artstation';
  url: string;
}

interface WorkItem {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags: string[];
}

interface ProfileConfig {
  name: string;
  title: string;
  description: string;
  socialLinks: SocialLink[];
  pcgWorks: WorkItem[];
  projectWorks: WorkItem[];
}

export const profileConfig: ProfileConfig = {
  name: "陈宛彤",
  title: "UE技术美术",
  description: "我是一名有三年左右游戏开发项目经历的UE技术美术，之前负责的板块主要是蓝图编写、场景优化和材质编写。目前正在学习PCG方向的相关技术，虽然经验尚浅但对PCG方向充满兴趣，并且对游戏开发满怀热情。",
  
  socialLinks: [
    {
      platform: "github",
      url: "#" // 替换为你的GitHub链接
    },
    {
      platform: "linkedin",
      url: "#" // 替换为你的LinkedIn链接
    },
    {
      platform: "artstation",
      url: "#" // 替换为你的ArtStation链接
    }
  ],

  // PCG作品示例
  pcgWorks: [
    {
      title: "程序化地形生成",
      description: "使用Houdini开发的地形生成工具，可以根据参数快速生成不同风格的地形。",
      imageUrl: "/images/pcg/terrain.jpg", // 替换为实际图片
      tags: ["Houdini", "地形生成", "PCG"]
    }
    // 可以继续添加更多PCG作品
  ],

  // 项目经历示例
  projectWorks: [
    {
      title: "场景优化项目",
      description: "负责游戏场景的性能优化，通过优化材质和网格减少了40%的渲染开销。",
      imageUrl: "/images/projects/optimization.jpg", // 替换为实际图片
      tags: ["UE5", "性能优化", "材质优化"]
    }
    // 可以继续添加更多项目经历
  ]
}; 