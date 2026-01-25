"use client";

import ProjectCard from "@/app/components/ui/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <div
      className="w-full h-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-28 pb-16 relative overflow-y-auto"
      style={{
        background: 'linear-gradient(135deg, #a855f715 0%, transparent 50%), linear-gradient(315deg, #a855f715 0%, transparent 50%), #0d1324b3',
        color: '#EAF2FF'
      }}
    >
      <div className="relative z-10 max-w-7xl w-full">
        {/* Title and Subtitle */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#EAF2FF' }}>
            My Projects
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl" style={{ color: '#a855f7' }}>
            Check out my latest projects
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              company={project.company}
              description={project.description}
              images={project.images}
              technologies={project.technologies}
              link={project.link}
              finished={project.finished}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
