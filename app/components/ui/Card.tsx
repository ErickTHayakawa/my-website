"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  company: string;
  date?: string;
  description: string;
  color?: string;
  size?: 'small' | 'large';
  images?: string[];
  finished?: boolean;
};

export default function Card({ title, company, date, description, color = '#6bff6b', size = 'small', images, finished = true }: CardProps) {
  const isLarge = size === 'large';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);
  
  return (
    <div 
      className={`rounded-lg border transition-all duration-300 hover:scale-105 ${
        isLarge ? 'p-6 md:p-8' : 'p-3'
      }`}
      style={{
        backgroundColor: 'rgba(107, 255, 107, 0.05)',
        borderColor: '#6bff6b50'
      }}
    >
      <h3 className={isLarge ? "text-lg md:text-xl font-semibold" : "text-sm font-semibold"} style={{ color: color }}>{title}</h3>
      <p className={isLarge ? "text-base md:text-lg font-medium mt-2" : "text-xs font-medium mt-1"} style={{ color: '#EAF2FF' }}>{company}</p>
      {date && <p className={isLarge ? "text-sm md:text-base mt-2" : "text-xs mt-1"} style={{ color: '#999' }}>{date}</p>}
      <p className={isLarge ? "text-sm md:text-base mt-3" : "text-xs mt-2"} style={{ color: '#EAF2FF' }}>
        {description}
      </p>
      {images && images.length > 0 && (
        <div className="relative w-full h-48 md:h-64 mt-4 rounded-lg overflow-hidden bg-black/20">
          <Image
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            fill
            className={`object-contain transition-opacity duration-500 ${!finished ? 'blur-md' : ''}`}
          />
          {!finished && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="relative px-6 py-4 rounded-xl border-2 border-green-400/50 bg-gradient-to-br from-green-500/20 to-green-400/20 shadow-2xl">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="flex items-center gap-3 mb-1">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#6bff6b" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-2xl md:text-3xl font-bold text-green-400 tracking-wide">
                    Work in Progress
                  </p>
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#6bff6b" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-green-100/80 text-center">
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
        </div>
      )}
    </div>
  );
}