export type Project = {
  id: number;
  title: string;
  company: string;
  description: string;
  images: string[];
  technologies: string[];
  finished?: boolean;
  link?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Robotics Team (FRC)",
    company: "Brazilian Storm",
    description: "Designed and built competition robots for the FIRST Robotics Competition (FRC). Contributed to programming and marketing, including video editing, uniform design, robot fairing, and software development.",
    images: [
      "/Brazilian-Storm.jpg",
      "/Brazilian-Storm-2.jpg",
      "/Brazilian-Storm-3.jpg",
      "/Brazilian-Storm-4.jpg"
    ],
    technologies: ["Java", "Python", "C++", "CAD Design", "Video Editing", "Marketing"],
    finished: true,
    link: "#"
  },
  {
    id: 2,
    title: "Pokemon Card Collector",
    company: "Personal Project",
    description: "An in-progress web + mobile app to manage a Pokémon card collection anywhere. Main feature: scan a card and identify the correct card and set, even when different sets share the same illustration.",
    images: [
      "/pokemon-image.png",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Machine Learning", "Computer Vision"],
    finished: false,
    link: "#"
  }
];
