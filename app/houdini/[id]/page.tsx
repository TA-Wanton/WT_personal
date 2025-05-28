'use client';

import { useParams } from 'next/navigation';
import { houdiniWorks, Work, type WorkDetail } from '@/data/works';
import Image from 'next/image';
import { useState } from 'react';

export default function WorkDetail() {
  const params = useParams();
  const work = houdiniWorks.find((w: Work) => w.id === params.id);
  const [activeMedia, setActiveMedia] = useState(0);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{work.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {work.tags.map((tag: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-8 whitespace-pre-line">{work.description}</p>
            
            <div className="space-y-8">
              {work.details.map((detail: WorkDetail, index: number) => (
                <div key={index} className="flex gap-8">
                  <div className="w-2/3">
                    {detail.type === 'video' ? (
                      <video 
                        src={detail.url} 
                        controls 
                        className="w-full rounded-lg shadow-md"
                      />
                    ) : (
                      <Image
                        src={detail.url}
                        alt={`${work.title} - ${index + 1}`}
                        width={800}
                        height={450}
                        className="rounded-lg shadow-md"
                      />
                    )}
                  </div>
                  <div className="w-1/3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 whitespace-pre-line">{detail.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 