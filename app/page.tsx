'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArtstation } from 'react-icons/fa';
import { GiCubes } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';
import { ue5Works, houdiniWorks, sceneEditingWorks, projectWorks, Work, type WorkDetail } from '@/data/works';

export default function Home() {
  const [activeTab, setActiveTab] = useState('ue5');

  return (
    <main className="min-h-screen bg-primary-light">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-primary">陈宛彤</h1>
          <p className="text-xl text-primary-dark max-w-2xl mx-auto leading-relaxed">
            UE技术美术 | PCG学习者
          </p>
          <div className="flex justify-center gap-8 mt-8">
            {/* Social Links Placeholder */}
            <a href="#" className="text-2xl text-primary hover:text-accent-dark transition-colors"><FaGithub /></a>
            <a href="#" className="text-2xl text-primary hover:text-accent-dark transition-colors"><FaLinkedin /></a>
            <a href="#" className="text-2xl text-primary hover:text-accent-dark transition-colors"><FaArtstation /></a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('ue5')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all
              ${activeTab === 'ue5'
                ? 'bg-primary text-primary-light'
                : 'bg-accent text-primary hover:bg-accent-dark'}`}
          >
            <GiCubes className="text-xl mr-2" />
            UE5作品
          </button>
          <button
            onClick={() => setActiveTab('houdini')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all
              ${activeTab === 'houdini'
                ? 'bg-primary text-primary-light'
                : 'bg-accent text-primary hover:bg-accent-dark'}`}
          >
            <GiCubes className="text-xl mr-2" />
            Houdini作品
          </button>
          <button
            onClick={() => setActiveTab('scene-editing')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all
              ${activeTab === 'scene-editing'
                ? 'bg-primary text-primary-light'
                : 'bg-accent text-primary hover:bg-accent-dark'}`}
          >
            <GiCubes className="text-xl mr-2" />
            场景编辑
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all
              ${activeTab === 'projects'
                ? 'bg-primary text-primary-light'
                : 'bg-accent text-primary hover:bg-accent-dark'}`}
          >
            <GiCubes className="text-xl mr-2" />
            项目集
          </button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'ue5' ? (
            ue5Works.map((work: Work) => (
              <Link key={work.id} href={`/ue5/${work.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* 图片部分 */}
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={work.coverImage}
                        alt={work.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{work.title}</h3>
                  <p className="text-primary-dark mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent-light rounded-full text-sm text-primary-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))
          ) : activeTab === 'houdini' ? (
            houdiniWorks.map((work: Work) => (
              <Link key={work.id} href={`/houdini/${work.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* 图片部分 */}
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={work.coverImage}
                        alt={work.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{work.title}</h3>
                  <p className="text-primary-dark mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent-light rounded-full text-sm text-primary-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))
          ) : activeTab === 'scene-editing' ? (
            sceneEditingWorks.map((work: Work) => (
              <Link key={work.id} href={`/scene-editing/${work.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* 图片部分 */}
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={work.coverImage}
                        alt={work.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{work.title}</h3>
                  <p className="text-primary-dark mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent-light rounded-full text-sm text-primary-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))
          ) : activeTab === 'projects' ? (
            projectWorks.map((work: Work) => (
              <Link key={work.id} href={`/projects/${work.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* 图片部分 */}
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={work.coverImage}
                        alt={work.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{work.title}</h3>
                  <p className="text-primary-dark mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent-light rounded-full text-sm text-primary-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))
          ) : null}
        </div>
      </header>
    </main>
  );
}