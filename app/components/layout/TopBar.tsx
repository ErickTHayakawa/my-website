"use client";

import Image from "next/image";
import { useState } from "react";

type TopBarProps = {
  onMenuClick: (section: string) => void;
  activeSection: string;
};

export default function TopBar({ onMenuClick, activeSection }: TopBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    onMenuClick(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10" style={{ backgroundColor: '#0d1324d9' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" onClick={(e) => handleClick(e, "home")} className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="dark:invert"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center ml-8 h-16">
            <div className="flex items-end justify-evenly w-4/5 h-full">
              <a
                href="/"
                onClick={(e) => handleClick(e, "home")}
                className={`relative pb-4 flex items-center text-sm font-medium transition-all duration-300 ${
                  activeSection === "home"
                    ? "text-white px-40"
                    : "text-zinc-400 px-1 hover:text-white hover:px-8"
                }`}
                style={{
                  backgroundImage: activeSection === "home" 
                    ? 'linear-gradient(to top, #6bff6b33, transparent), linear-gradient(to top, #6bff6b, transparent), linear-gradient(to top, #6bff6b, transparent)'
                    : 'none',
                  backgroundSize: activeSection === "home" ? '100% 100%, 2px 100%, 2px 100%' : '0',
                  backgroundPosition: 'center bottom, left bottom, right bottom',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                Home
              </a>
              <a
                href="/about"
                onClick={(e) => handleClick(e, "about")}
                className={`relative pb-4 flex items-center text-sm font-medium transition-all duration-300 ${
                  activeSection === "about"
                    ? "text-white px-40"
                    : "text-zinc-400 px-1 hover:text-white hover:px-8"
                }`}
                style={{
                  backgroundImage: activeSection === "about" 
                    ? 'linear-gradient(to top, #60a5fa33, transparent), linear-gradient(to top, #60a5fa, transparent), linear-gradient(to top, #60a5fa, transparent)'
                    : 'none',
                  backgroundSize: activeSection === "about" ? '100% 100%, 2px 100%, 2px 100%' : '0',
                  backgroundPosition: 'center bottom, left bottom, right bottom',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                About
              </a>
              <a
                href="/experiences"
                onClick={(e) => handleClick(e, "experiences")}
                className={`relative pb-4 flex items-center text-sm font-medium transition-all duration-300 ${
                  activeSection === "experiences"
                    ? "text-white px-40"
                    : "text-zinc-400 px-1 hover:text-white hover:px-8"
                }`}
                style={{
                  backgroundImage: activeSection === "experiences" 
                    ? 'linear-gradient(to top, #60a5fa33, transparent), linear-gradient(to top, #60a5fa, transparent), linear-gradient(to top, #60a5fa, transparent)'
                    : 'none',
                  backgroundSize: activeSection === "experiences" ? '100% 100%, 2px 100%, 2px 100%' : '0',
                  backgroundPosition: 'center bottom, left bottom, right bottom',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                Experiences
              </a>
              <a
                href="/projects"
                onClick={(e) => handleClick(e, "projects")}
                className={`relative pb-4 flex items-center text-sm font-medium transition-all duration-300 ${
                  activeSection === "projects"
                    ? "text-white px-40"
                    : "text-zinc-400 px-1 hover:text-white hover:px-8"
                }`}
                style={{
                  backgroundImage: activeSection === "projects" 
                    ? 'linear-gradient(to top, #60a5fa33, transparent), linear-gradient(to top, #60a5fa, transparent), linear-gradient(to top, #60a5fa, transparent)'
                    : 'none',
                  backgroundSize: activeSection === "projects" ? '100% 100%, 2px 100%, 2px 100%' : '0',
                  backgroundPosition: 'center bottom, left bottom, right bottom',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                Projects
              </a>
              <a
                href="/contact"
                onClick={(e) => handleClick(e, "contact")}
                className={`relative pb-4 flex items-center text-sm font-medium transition-all duration-300 ${
                  activeSection === "contact"
                    ? "text-white px-40"
                    : "text-zinc-400 px-1 hover:text-white hover:px-8"
                }`}
                style={{
                  backgroundImage: activeSection === "contact" 
                    ? 'linear-gradient(to top, #60a5fa33, transparent), linear-gradient(to top, #60a5fa, transparent), linear-gradient(to top, #60a5fa, transparent)'
                    : 'none',
                  backgroundSize: activeSection === "contact" ? '100% 100%, 2px 100%, 2px 100%' : '0',
                  backgroundPosition: 'center bottom, left bottom, right bottom',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-all duration-300"
              style={{ 
                color: '#EAF2FF',
                backgroundColor: isMobileMenuOpen ? 'rgba(107, 255, 107, 0.1)' : 'transparent'
              }}
              aria-label="Main menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a
                href="/"
                onClick={(e) => handleClick(e, "home")}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                style={{
                  color: activeSection === "home" ? '#6bff6b' : '#EAF2FF',
                  backgroundColor: activeSection === "home" ? 'rgba(107, 255, 107, 0.1)' : 'transparent',
                  borderLeft: activeSection === "home" ? '3px solid #6bff6b' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== "home") {
                    e.currentTarget.style.backgroundColor = 'rgba(107, 255, 107, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== "home") {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Home
              </a>
              <a
                href="/about"
                onClick={(e) => handleClick(e, "about")}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                style={{
                  color: activeSection === "about" ? '#60a5fa' : '#EAF2FF',
                  backgroundColor: activeSection === "about" ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                  borderLeft: activeSection === "about" ? '3px solid #60a5fa' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== "about") {
                    e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== "about") {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                About
              </a>
              <a
                href="/experiences"
                onClick={(e) => handleClick(e, "experiences")}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                style={{
                  color: activeSection === "experiences" ? '#60a5fa' : '#EAF2FF',
                  backgroundColor: activeSection === "experiences" ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                  borderLeft: activeSection === "experiences" ? '3px solid #60a5fa' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== "experiences") {
                    e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== "experiences") {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Experiences
              </a>
              <a
                href="/projects"
                onClick={(e) => handleClick(e, "projects")}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                style={{
                  color: activeSection === "projects" ? '#60a5fa' : '#EAF2FF',
                  backgroundColor: activeSection === "projects" ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                  borderLeft: activeSection === "projects" ? '3px solid #60a5fa' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== "projects") {
                    e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== "projects") {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Projects
              </a>
              <a
                href="/contact"
                onClick={(e) => handleClick(e, "contact")}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                style={{
                  color: activeSection === "contact" ? '#60a5fa' : '#EAF2FF',
                  backgroundColor: activeSection === "contact" ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                  borderLeft: activeSection === "contact" ? '3px solid #60a5fa' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== "contact") {
                    e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== "contact") {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
