"use client";

import Image from 'next/image';
import { useState } from 'react';

type ExperienceCardProps = {
  logo: string;
  title: string;
  startDate: string;
  endDate: string;
  address: string;
  activities: string[];
  technologies: string[];
  color: string;
};

export default function ExperienceCard({
  logo,
  title,
  startDate,
  endDate,
  address,
  activities,
  technologies,
  color
}: ExperienceCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="rounded-lg border p-6"
      style={{
        backgroundColor: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.05)`,
        borderColor: color
      }}
    >
      {/* Company Logo */}
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-16 h-16 rounded-lg border flex items-center justify-center overflow-hidden relative"
          style={{ borderColor: color}}
        >
          {!imageError ? (
            <Image
              src={logo}
              alt={`${title} logo`}
              fill
              className="object-contain p-1"
              style={{ backgroundColor: '#FFFFFF' }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold" style={{ color: color }}>
              {title.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold" style={{ color: color }}>
            {title}
          </h3>
          <p className="text-sm mt-1" style={{ color: '#999' }}>
            {startDate} - {endDate}
          </p>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <p className="text-sm" style={{ color: '#EAF2FF' }}>{address}</p>
      </div>

      {/* Activities */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2" style={{ color: color }}>Key Activities:</h4>
        <ul className="space-y-1">
          {activities.map((activity, actIndex) => (
            <li key={actIndex} className="flex items-start gap-2 text-sm" style={{ color: '#EAF2FF' }}>
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" style={{ color: color }}>
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-semibold mb-2" style={{ color: color }}>Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.2)`,
                borderColor: color,
                color: '#EAF2FF'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
