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
  { id: "experiences", component: Experiences },
  { id: "projects", component: Projects },
  { id: "contact", component: Contact },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (sectionId: string) => {
    const index = sections.findIndex((s) => s.id === sectionId);
    if (index !== -1) {
      setCurrentIndex(index);
    }
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
        className="h-screen w-full overflow-hidden"
      >
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}vw)`,
            width: `${sections.length * 100}vw`,
          }}
        >
          {sections.map((section, index) => {
            const SectionComponent = section.component;
            return (
              <div
                key={section.id}
                className="w-screen h-full flex items-center justify-center"
                style={{ minWidth: '100vw' }}
              >
                <SectionComponent onMenuClick={handleMenuClick} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
