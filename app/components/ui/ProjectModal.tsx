"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  company: string;
  description: string;
  images: string[];
  technologies: string[];
  finished?: boolean;
};

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  company,
  description,
  images,
  technologies,
  finished = true
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg border shadow-2xl"
        style={{
          backgroundColor: '#0d1324',
          borderColor: '#a855f7'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors"
          style={{
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
            color: '#a855f7'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#a855f7';
            e.currentTarget.style.color = '#EAF2FF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)';
            e.currentTarget.style.color = '#a855f7';
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Slideshow */}
        <div className="relative w-full h-64 md:h-96 bg-black/20">
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
                  <div className="relative px-6 py-4 rounded-xl border-2 border-purple-400/50 bg-gradient-to-br from-purple-500/20 to-purple-400/20 shadow-2xl">
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                    <div className="flex items-center gap-3 mb-1">
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#a855f7" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <p className="text-2xl md:text-3xl font-bold text-purple-400 tracking-wide">
                        Work in Progress
                      </p>
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#a855f7" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base text-purple-100/80 text-center">
                      Coming soon...
                    </p>
                  </div>
                </div>
              )}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-purple-400 w-6' : 'bg-white/50'
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
        <div className="p-6 md:p-8">
          {/* Title and Company */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#a855f7' }}>
            {title}
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: '#EAF2FF' }}>
            {company}
          </p>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#a855f7' }}>
              About this project
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#EAF2FF' }}>
              {description}
            </p>
          </div>

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#a855f7' }}>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{
                      backgroundColor: 'rgba(168, 85, 247, 0.1)',
                      borderColor: '#a855f7',
                      border: '1px solid',
                      color: '#EAF2FF'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
