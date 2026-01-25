"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

type ProjectCardProps = {
  title: string;
  company: string;
  description: string;
  images: string[];
  technologies: string[];
  link?: string;
  finished?: boolean;
};

export default function ProjectCard({ title, company, description, images, technologies, link, finished = true }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        company={company}
        description={description}
        images={images}
        technologies={technologies}
        finished={finished}
      />
    <div
      className="rounded-lg border overflow-hidden transition-transform hover:scale-105 flex flex-col"
      style={{
        backgroundColor: 'rgba(168, 85, 247, 0.05)',
        borderColor: '#a855f7'
      }}
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-black/20">
        {images && images.length > 0 && (
          <>
            <Image
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              fill
              className={`object-contain transition-opacity duration-500 ${!finished ? 'blur-md' : ''}`}
            />
            {!finished && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="relative px-4 py-3 rounded-xl border-2 border-purple-400/50 bg-gradient-to-br from-purple-500/20 to-purple-400/20 shadow-2xl">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5" fill="none" stroke="#a855f7" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <p className="text-lg font-bold text-purple-400 tracking-wide">
                      Work in Progress
                    </p>
                    <svg className="w-5 h-5" fill="none" stroke="#a855f7" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <p className="text-xs text-purple-100/80 text-center">
                    Coming soon...
                  </p>
                </div>
              </div>
            )}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#a855f7' }}>
          {title}
        </h3>
        <p className="text-base font-medium mb-3" style={{ color: '#EAF2FF' }}>
          {company}
        </p>
        <p className="text-sm mb-6 flex-grow" style={{ color: '#EAF2FF' }}>
          {description}
        </p>

        {/* Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block text-center py-2 px-4 rounded-lg font-medium transition-colors w-full"
          style={{
            backgroundColor: '#a855f7',
            color: '#EAF2FF'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#9333ea';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#a855f7';
          }}
        >
          View Project
        </button>
      </div>
    </div>
    </>
  );
}
