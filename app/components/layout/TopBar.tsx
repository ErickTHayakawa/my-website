"use client";

import Image from "next/image";

type TopBarProps = {
  onMenuClick: (section: string) => void;
  activeSection: string;
};

export default function TopBar({ onMenuClick, activeSection }: TopBarProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    onMenuClick(section);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                onClick={(e) => handleClick(e, "home")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "home"
                    ? "text-black dark:text-white bg-zinc-100 dark:bg-zinc-900"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white"
                }`}
              >
                Home
              </a>
              <a
                href="/about"
                onClick={(e) => handleClick(e, "about")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "about"
                    ? "text-black dark:text-white bg-zinc-100 dark:bg-zinc-900"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white"
                }`}
              >
                About
              </a>
              <a
                href="/experiences"
                onClick={(e) => handleClick(e, "experiences")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "experiences"
                    ? "text-black dark:text-white bg-zinc-100 dark:bg-zinc-900"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white"
                }`}
              >
                Experiences
              </a>
              <a
                href="/projects"
                onClick={(e) => handleClick(e, "projects")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "projects"
                    ? "text-black dark:text-white bg-zinc-100 dark:bg-zinc-900"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white"
                }`}
              >
                Projects
              </a>
              <a
                href="/contact"
                onClick={(e) => handleClick(e, "contact")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "contact"
                    ? "text-black dark:text-white bg-zinc-100 dark:bg-zinc-900"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white"
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
              aria-label="Main menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
