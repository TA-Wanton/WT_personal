import { pcgWorks } from '@/data/works';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Props {
  params: { id: string };
}

export default function PCGDetail({ params }: Props) {
  const work = pcgWorks.find(w => w.id === Number(params.id));
  if (!work) return notFound();

  return (
    <main className="flex justify-center items-start min-h-screen py-16 bg-primary-light">
      <div className="flex w-full max-w-6xl gap-8 px-4">
        {/* 左侧 3/4 视频或图片 */}
        <div className="flex-1 basis-3/4 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center min-h-[60vh]">
          {work.video ? (
            <video
              className="w-full h-auto rounded-lg"
              controls
              poster={work.image}
              preload="metadata"
            >
              <source src={work.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={work.image}
              alt={work.title}
              width={960}
              height={540}
              className="object-cover w-full h-auto rounded-lg"
            />
          )}
        </div>
        {/* 右侧 1/5 详细介绍 */}
        <aside className="basis-1/4 flex flex-col gap-6 bg-white rounded-xl shadow-lg p-8 min-h-[60vh]">
          <h1 className="text-3xl font-bold text-primary mb-4">{work.title}</h1>
          <p className="text-primary-dark text-lg mb-4">{work.detail || work.description}</p>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-accent-light rounded-full text-sm text-primary-dark">{tag}</span>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
} 