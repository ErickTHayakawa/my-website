"use client";

import { useState, useRef, useEffect } from "react";
import TopBar from "./components/layout/TopBar";
import HomeSection from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experiences from "./components/sections/Experiences";
import Contact from "./components/sections/Contact";

const sections = [
  { id: "home", component: HomeSection },
  { id: "about", component: About },
  { id: "projects", component: Projects },
  { id: "experiences", component: Experiences },
  { id: "contact", component: Contact },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (sectionId: string) => {
    const index = sections.findIndex((s) => s.id === sectionId);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -threshold && currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setTranslateX(0);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (e.key === "ArrowRight" && currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="h-screen overflow-hidden font-sans" style={{ background: 'linear-gradient(180deg, #070A12 0%, #0D1324 100%)' }}>
      <TopBar onMenuClick={handleMenuClick} activeSection={sections[currentIndex].id} />
      
      <div
        ref={containerRef}
        className="h-screen w-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        style={{ touchAction: 'pan-y' }}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}vw + ${translateX}px))`,
            width: `${sections.length * 100}vw`,
          }}
        >
          {sections.map((section, index) => {
            const SectionComponent = section.component;
            return (
              <div
                key={section.id}
                className="w-screen h-full flex items-center justify-center p-8"
                style={{ minWidth: '100vw' }}
              >
                <SectionComponent />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="fixed left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-opacity-50 hover:bg-opacity-75 transition-all z-40"
          style={{ backgroundColor: 'rgba(56, 189, 248, 0.3)' }}
          aria-label="Previous section"
        >
          <svg className="w-6 h-6" fill="none" stroke="#EAF2FF" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {currentIndex < sections.length - 1 && (
        <button
          onClick={() => setCurrentIndex(currentIndex + 1)}
          className="fixed right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-opacity-50 hover:bg-opacity-75 transition-all z-40"
          style={{ backgroundColor: 'rgba(56, 189, 248, 0.3)' }}
          aria-label="Next section"
        >
          <svg className="w-6 h-6" fill="none" stroke="#EAF2FF" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="w-3 h-3 rounded-full transition-all"
            style={{
              backgroundColor: i === currentIndex ? '#38BDF8' : 'rgba(56, 189, 248, 0.3)',
            }}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
