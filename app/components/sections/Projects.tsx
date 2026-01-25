"use client";

import ProjectCard from "@/app/components/ui/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center p-8 pt-16 relative"
      style={{
        background: 'linear-gradient(135deg, #a855f715 0%, transparent 50%), linear-gradient(315deg, #a855f715 0%, transparent 50%), #0d1324b3',
        color: '#EAF2FF'
      }}
    >
      <div className="relative z-10 max-w-7xl w-full">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#EAF2FF' }}>
            My Projects
          </h2>
          <p className="text-xl md:text-2xl" style={{ color: '#a855f7' }}>
            Check out my latest projects
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
