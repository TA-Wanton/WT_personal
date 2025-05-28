'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { ue5Works, houdiniWorks, Work, type WorkDetail } from '@/data/works';
import Image from 'next/image';
import { useState } from 'react';

const allWorks = [...ue5Works, ...houdiniWorks];

export default function PCGDetail({ params }: { params: { id: string } }) {
  const work = allWorks.find((w: Work) => w.id === params.id);
  if (!work) return notFound();

  return (
    <main className="flex justify-center items-start min-h-screen py-16 bg-primary-light">
      <div className="flex w-full max-w-6xl gap-8 px-4">
        {/* 左侧 3/4 媒体展示 */}
        <div className="flex-1 basis-3/4 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center min-h-[60vh]">
          {/* 根据 details 数组渲染媒体 */}
          <div className="space-y-4 w-full">
            {work.details.map((detail: WorkDetail, index: number) => (
              <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                {detail.type === 'video' ? (
                  <video 
                    src={detail.url} 
                    controls 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={detail.url}
                    alt={`${work.title} - ${index + 1}`}
                    width={960}
                    height={540}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 右侧 1/5 详细介绍 */}
        <aside className="basis-1/4 flex flex-col gap-6 bg-white rounded-xl shadow-lg p-8 min-h-[60vh]">
          <h1 className="text-3xl font-bold text-primary mb-4">{work.title}</h1>
          {/* 使用 work.description 作为主要描述 */}
          <p className="text-primary-dark text-lg mb-4 whitespace-pre-line">{work.description}</p>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag: string, idx: number) => (
              <span key={idx} className="px-3 py-1 bg-accent-light rounded-full text-sm text-primary-dark">{tag}</span>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
} 