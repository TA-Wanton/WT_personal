import Link from 'next/link';
import Image from 'next/image';
import { ue5Works, houdiniWorks, Work } from '@/data/works';

// 合并作品数组并过滤出 PCG 相关的作品
const pcgWorks = [...ue5Works, ...houdiniWorks].filter(work => 
  work.category === 'PCG' || work.tags.includes('PCG')
);

export default function PCGOverview() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">PCG作品总览</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pcgWorks.map((work: Work) => (
          <Link key={work.id} href={`/pcg/${work.id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <Image src={work.coverImage} alt={work.title} width={800} height={450} className="object-cover w-full h-56" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">{work.title}</h2>
              <p className="text-primary-dark mb-2 line-clamp-2">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-accent-light rounded-full text-sm text-primary-dark">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 