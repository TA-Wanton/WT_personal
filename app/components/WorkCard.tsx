import Image from 'next/image';
import { motion } from 'framer-motion';

interface WorkCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags?: string[];
}

export default function WorkCard({ title, description, imageUrl, videoUrl, tags }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        {videoUrl ? (
          <video
            className="w-full h-full object-cover"
            controls
            src={videoUrl}
          />
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">暂无图片</span>
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary rounded-full text-sm text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
} 