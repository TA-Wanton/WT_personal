# 个人作品集网站

这是一个使用 Next.js 和 Tailwind CSS 构建的个人作品集网站。

## 目录结构

```
public/
  ├── images/
  │   ├── pcg/         # PCG作品的图片
  │   └── projects/    # 项目经历的图片
  └── videos/
      ├── pcg/         # PCG作品的视频
      └── projects/    # 项目经历的视频
```

## 如何修改内容

1. 个人信息配置
   - 打开 `config/profile.ts` 文件
   - 修改 `profileConfig` 对象中的个人信息
   - 包括：姓名、职位、描述、社交媒体链接等

2. 添加作品
   - 将图片文件放入对应的 `public/images` 目录
   - 将视频文件放入对应的 `public/videos` 目录
   - 在 `config/profile.ts` 中的 `pcgWorks` 或 `projectWorks` 数组中添加作品信息

3. 作品信息格式
```typescript
{
  title: "作品标题",
  description: "作品描述",
  imageUrl: "/images/pcg/example.jpg",  // 图片路径（相对于public目录）
  videoUrl: "/videos/pcg/demo.mp4",     // 视频路径（相对于public目录）
  tags: ["标签1", "标签2"]              // 相关技术或工具标签
}
```

## 支持的文件格式

- 图片：JPG, PNG, GIF, WebP
- 视频：MP4, WebM

## 开发说明

1. 启动开发服务器：
```bash
npm run dev
```

2. 构建生产版本：
```bash
npm run build
```

3. 启动生产服务器：
```bash
npm run start
```

## 样式修改

- 主题颜色配置在 `tailwind.config.js` 文件中
- 全局样式在 `app/globals.css` 文件中
- 组件样式在各自的组件文件中使用 Tailwind CSS 类名 