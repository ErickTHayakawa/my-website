import Image from "next/image";
import ParticleBackground from "../effects/ParticleBackground";
import { useState } from "react";
import Card from "../ui/Card";

type HomeProps = {
  onMenuClick?: (section: string) => void;
};

export default function Home({ onMenuClick }: HomeProps) {
  const [mainImage, setMainImage] = useState("/guy.png");
  const [smallImage, setSmallImage] = useState("/my-photo.jpg");

  const handleImageSwap = () => {
    const temp = mainImage;
    setMainImage(smallImage);
    setSmallImage(temp);
  };

  return (
    <div
      className="w-full h-full flex flex-col pt-16 relative overflow-y-auto overflow-x-hidden"
      style={{
        background: 'linear-gradient(135deg, #6bff6b15 0%, transparent 50%), linear-gradient(315deg, #6bff6b15 0%, transparent 50%), #0d1324b3',
        color: '#EAF2FF'
      }}
    >
      <ParticleBackground />
      {/* Top Section */}
      <div className="w-full md:h-1/2 flex items-center justify-start p-4 md:p-12 lg:p-16 relative z-10">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16">
          {/* Image */}
          <div className="flex-shrink-0 pt-4 md:pt-8 flex items-center justify-center">
            <div className="relative">
              <div className="rounded-full w-48 h-48 md:w-60 md:h-60 lg:w-70 lg:h-70 border-4 border-green-400 overflow-hidden flex items-center justify-center relative" style={{ backgroundColor: '#0d1324' }}>
                <Image
                  src={mainImage}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover absolute" 
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              {/* Small circle overlay */}
              <div 
                onClick={handleImageSwap}
                className="absolute bottom-0 right-0 rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-4 border-green-400 overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110" 
                style={{ backgroundColor: '#0d1324' }}
              >
                <Image
                  src={smallImage}
                  alt="Additional Photo"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 px-4 md:pr-8 pt-4 md:pt-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#EAF2FF' }}>
              Welcome! I'm Erick Hayakawa
            </h1>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6" style={{ color: '#6bff6b' }}>
              Full Stack Developer
            </h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8" style={{ color: '#EAF2FF' }}>
              Nearly <span style={{ color: '#6bff6b' }}>5 years of experience</span> building <span style={{ color: '#6bff6b' }}>clean</span>, <span style={{ color: '#6bff6b' }}>maintainable</span> web applications—from development to delivery and support. 
              <br />
              I focus on delivering <span style={{ color: '#6bff6b' }}>real value</span> through new features, bug fixes, and <span style={{ color: '#6bff6b' }}>reliable solutions</span>. 
              <br />
              Always ready for <span style={{ color: '#6bff6b' }}>new challenges</span> and continuous growth.
            </p>
            <button
              onClick={() => onMenuClick?.("about")}
              className="inline-block px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group text-sm md:text-base"
              style={{ 
                border: '2px solid #6bff6b',
                backgroundColor: 'transparent',
                color: '#6bff6b'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6bff6b';
                e.currentTarget.style.color = '#0d1324';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#6bff6b';
              }}
            >
              Learn More About Me
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full md:h-1/2 flex flex-col md:flex-row relative z-10">
        {/* Bottom Left */}
        <div 
          className="w-full md:w-1/2 h-auto md:h-full flex flex-col p-4 md:p-8 overflow-y-auto"
          style={{
            backgroundImage: 'linear-gradient(to top, #6bff6b, transparent)',
            backgroundSize: '2px 100%',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center" style={{ color: '#6bff6b' }}>Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:pr-4">
            {/* Card 1 */}
            <div 
              className="p-3 rounded-lg border transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(107, 255, 107, 0.05)',
                borderColor: '#6bff6b50'
              }}
            >
              <h3 className="text-sm font-semibold" style={{ color: '#6bff6b' }}>IT Support Internship</h3>
              <p className="text-xs font-medium mt-1" style={{ color: '#EAF2FF' }}>LogSmart</p>
              <p className="text-xs mt-1" style={{ color: '#999' }}>02/2021 - 06/2021</p>
              <p className="text-xs mt-2" style={{ color: '#EAF2FF' }}>
                Working with a logistics WMS (Laravel + PHP), providing customer support, fixing bugs, and implementing small features.
              </p>
            </div>

            {/* Card 2 */}
            <div 
              className="p-3 rounded-lg border transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(107, 255, 107, 0.05)',
                borderColor: '#6bff6b50'
              }}
            >
              <h3 className="text-sm font-semibold" style={{ color: '#6bff6b' }}>Full Stack Developer</h3>
              <p className="text-xs font-medium mt-1" style={{ color: '#EAF2FF' }}>LogSmart</p>
              <p className="text-xs mt-1" style={{ color: '#999' }}>06/2021 - 05/2022</p>
              <p className="text-xs mt-2" style={{ color: '#EAF2FF' }}>
                Built and maintained core logistics WMS system features using PHP + Laravel, supporting customer support and developers, and helping with code reviews and task scope definition.
              </p>
            </div>

            {/* Card 3 */}
            <div 
              className="p-3 rounded-lg border transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(107, 255, 107, 0.05)',
                borderColor: '#6bff6b50'
              }}
            >
              <h3 className="text-sm font-semibold" style={{ color: '#6bff6b' }}>Full Stack Developer</h3>
              <p className="text-xs font-medium mt-1" style={{ color: '#EAF2FF' }}>Exago</p>
              <p className="text-xs mt-1" style={{ color: '#999' }}>05/2022 - 05/2025</p>
              <p className="text-xs mt-2" style={{ color: '#EAF2FF' }}>
                Developed multiple web applications using React, Java, JavaScript, and TypeScript—delivering features, troubleshooting issues, reviewing code, and supporting the team with task distribution.
              </p>
            </div>

            {/* Card 4 */}
            <div 
              className="p-3 rounded-lg border transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(107, 255, 107, 0.05)',
                borderColor: '#6bff6b50'
              }}
            >
              <h3 className="text-sm font-semibold" style={{ color: '#6bff6b' }}>Full Stack Developer</h3>
              <p className="text-xs font-medium mt-1" style={{ color: '#EAF2FF' }}>Tata Consultancy Service</p>
              <p className="text-xs mt-1" style={{ color: '#999' }}>05/2025 - Now</p>
              <p className="text-xs mt-2" style={{ color: '#EAF2FF' }}>
                Consultant in J&J Web Development team, building solutions with Next.js, Python, and AI workflows (Langflow/LangGraph)—focused on new features, bug fixing, testing, and code reviews.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col p-4 md:p-8 overflow-y-auto">
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center" style={{ color: '#6bff6b' }}>Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card 
              title="Robotics Team (FRC)"
              company="Brazilian Storm"
              description="Designed and built competition robots for the FIRST Robotics Competition (FRC). Contributed to programming and marketing, including video editing, uniform design, robot fairing, and software development."
            />
            
            <Card 
              title="Pokemon Card Collector"
              company="Personal Project"
              description="An in-progress web + mobile app to manage a Pokémon card collection anywhere. Main feature: scan a card and identify the correct card and set, even when different sets share the same illustration."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
