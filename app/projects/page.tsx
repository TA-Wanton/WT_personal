import Link from 'next/link';
import Image from 'next/image';
import { projectWorks, Work } from '@/data/works';

// 使用项目集作品数组
const projects = projectWorks;

export default function ProjectsOverview() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">项目集作品总览</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: Work) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <Image src={project.coverImage} alt={project.title} width={800} height={450} className="object-cover w-full h-56" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">{project.title}</h2>
              <p className="text-primary-dark mb-2 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
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